// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { credentials } from "../config/cypress-credentials";

const devices = {
  mobile: {
    viewportWidth: 375, // Mobile size (iPhone X)
    viewportHeight: 667, // Mobile size (iPhone X)
  },
  tablet: {
    viewportWidth: 768, // Tablet size (iPad)
    viewportHeight: 1024, // Tablet size (iPad)
  },
  desktop: {
    viewportWidth: 1280, // Desktop size (Standard)
    viewportHeight: 720, // Desktop height
  },
  alien: {
    viewportWidth: 1920, // Desktop size (Standard)
    viewportHeight: 1024, // Desktop height
  },
};
Cypress.Commands.add("getByXpath", (xpathSelector, options = {}) => {
  const defaultOptions = { timeout: 4000 }; // you can adjust
  options = { ...defaultOptions, ...options };

  const resolveElements = () => {
    return cy.document().then((document) => {
      const iterator = document.evaluate(
        xpathSelector,
        document,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null
      );
      const elements = [];
      let node = iterator.iterateNext();
      while (node) {
        elements.push(node);
        node = iterator.iterateNext();
      }
      if (elements.length > 0) {
        return Cypress.$(elements);
      }
      throw new Error("No elements found"); // force retry
    });
  };

  return cy.wrap(null, { log: false }).then(() => {
    return resolveElements();
  });
});

Cypress.Commands.add("tryXpath", (xpathSelector) => {
  return cy.document({ log: false }).then((document) => {
    const nodes = document.evaluate(
      xpathSelector,
      document,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    let results = [],
      node;
    while ((node = nodes.iterateNext()) !== null) {
      results.push(Cypress.$(node));
    }

    if (results.length > 0) {
      return cy.wrap(Cypress.$.fn.add.call(results[0], ...results.slice(1)));
    } else {
      throw new Error(`No elements found for XPath: ${xpathSelector}`);
    }
  });
});

Cypress.Commands.add("viewportForDevice", (device) => {
  // Check if the device exists in the devices object
  if (devices[device]) {
    cy.viewport(devices[device].viewportWidth, devices[device].viewportHeight);
  } else {
    throw new Error(`Device "${device}" is not defined in the config.`);
  }
});
Cypress.Commands.add("exactMatch", (element, text) => {
  cy.get(element).contains(new RegExp(`^${text}$`, "g"));
});
// Authentication Commands
Cypress.Commands.add("loginWithRole", (role) => {
  if (!credentials[role]) {
    cy.log("Invalid role: " + role, credentials[role]);
    throw new Error(`Invalid role: ${role}`);
  }
  cy.session(`${role}Session`, () => {
    cy.visit("en/");
    cy.get("span").contains("Close").click({ force: true });
    cy.get("button").contains("Login").click();
    cy.get('input[name="email"]').type(credentials[role].username);
    cy.get('input[name="password"]').type(credentials[role].password);
    cy.get("form").submit();
    cy.intercept("POST", "**/login").as("loginRequest");
    cy.get("form").submit();

    // Wait for the login request and check its response
    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response?.statusCode).to.be.oneOf([200, 201]);
      expect(interception.response?.body).to.have.property("token"); // Adjust according to your API response
    });

    cy.url().should("not.include", "login");
  });
});

Cypress.Commands.add("getSuccessMessage", (message) => {
  cy.get('div[role="status"]').contains(message);
});

Cypress.Commands.add("getFailureMessage", (message) => {
  cy.get('div[role="Status"]').should("be.visible").and("contain", message);
});
