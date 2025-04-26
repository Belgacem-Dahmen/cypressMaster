/// <reference types="cypress" />
import Projects from "../../../support/pages/contractor/Projects";

describe.only("Projects Page UI Verification", () => {
  let projectsPage;

  before(() => {
    projectsPage = new Projects();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    projectsPage.visit();
    // If there was any setup action needed, you'd put it here
  });

  it("should display H1 Title", () => {
    projectsPage.h1Title.should("be.visible");
  });

  it("should display Search Input", () => {
    projectsPage.inputSearch.should("be.visible");
  });

  it("should display Add Project Button", () => {
    projectsPage.addProjectButton.should("be.visible");
  });
});
