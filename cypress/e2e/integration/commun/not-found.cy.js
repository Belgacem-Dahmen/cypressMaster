import Notfound from "../../../support/pages/commun/NotFound";

describe("Notfound Page UI Verification", () => {
  let notfound;

  before(() => {
    notfound = new Notfound();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    notfound.visit();
  });

  it("should display Logo", () => {
    notfound.logo.should("be.visible");
  });

  it("should display Menu Button", () => {
    notfound.menuButton.should("be.visible");
  });

  it("should display Error Code (404)", () => {
    notfound.errorCode.should("be.visible");
  });

  it('should display "Oops! Page not found." text', () => {
    notfound.oopsText.should("be.visible");
  });

  it('should display "Sorry we couldn’t find the page you were looking for." text', () => {
    notfound.notFoundDescription.should("be.visible");
  });

  it("should display Go Back Button", () => {
    notfound.goBackButton.should("be.visible");
  });

  it("should get element by his Xpath ", () => {
    notfound.testXpath.should("be.visible");
  });
});
