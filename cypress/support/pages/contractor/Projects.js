/// <reference types="cypress" />
import "cypress-xpath";

class Projects {
  visit() {
    cy.visit("/en/app/contractor/projects");
    this.interceptData();
  }

  get h1Title() {
    return cy.get("h1");
  }

  get inputSearch() {
    return cy.get('input[placeholder="Search"]');
  }

  get addProjectButton() {
    return cy.contains("button", "Add Project");
  }

  interceptData() {
    cy.intercept("GET", "**/api/projects").as("getProjects");
    cy.wait("@getProjects").then((interception) => {
      if (interception?.response?.body) {
        const projects = interception.response.body;
        const projectCount = Array.isArray(projects) ? projects.length : 0;
        cy.log(`Number of projects fetched: ${projectCount}`);
        return projectCount;
      } else {
        cy.log("No projects data received.");
        return 0;
      }
    });
  }
}

export default Projects;
