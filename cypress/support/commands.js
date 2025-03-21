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
};

Cypress.Commands.add('viewportForDevice', (device) => {
  // Check if the device exists in the devices object
  if (devices[device]) {
    cy.viewport(devices[device].viewportWidth, devices[device].viewportHeight);
  } else {
    throw new Error(`Device "${device}" is not defined in the config.`);
  }
});