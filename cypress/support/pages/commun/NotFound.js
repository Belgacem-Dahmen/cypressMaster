import "cypress-xpath";

class Notfound {
  visit() {
    cy.visit("en/app/contractor/123", { failOnStatusCode: false });
  }

  get logo() {
    return cy.get('img[alt="WATAD"]');
  }

  get menuButton() {
    return cy.xpath('//*[@id="__next"]/div[3]/div[1]/nav/div/div/button');
  }

  get errorCode() {
    return cy.get("p.text-9xl.text-custom.font-semibold");
  }

  get oopsText() {
    return cy.contains("Oops! Page not found.");
  }

  get notFoundDescription() {
    return cy.contains("Sorry we couldn’t find the page you were looking for.");
  }

  get goBackButton() {
    return cy.contains("Go back");
  }
}

export default Notfound;
