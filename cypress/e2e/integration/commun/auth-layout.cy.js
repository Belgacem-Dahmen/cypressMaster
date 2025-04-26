import AuthLayout from "../../../support/pages/commun/AuthLayout";

describe("Auth Layout Ui Verification", () => {
  let authLayout;
  before(() => {
    cy.viewportForDevice("alien");
    authLayout = new AuthLayout();
  });
  describe("Topbar verifications", () => {
    let authLayout;
    before(() => {
      cy.viewportForDevice("alien");
      authLayout = new AuthLayout();
    });
    beforeEach(() => {
      cy.session("userSession", () => cy.loginWithRole("contractor"));
      authLayout.visit();
    });
    it("should display a top bar ", () => {
      authLayout.topbar.should("be.visible");
    });
    it(" should display a switch language Menu", () => {
      authLayout.switchLanguageButton.should("be.visible");
    });
    it("should display profile icon", () => {
      authLayout.profileIcon.should("be.visible");
    });
    it("should display profile fullName", () => {
      authLayout.profileFullName.should("be.visible");
    });
  });
  describe("Closed Sidebar", () => {
    beforeEach(() => {
      cy.session("userSession", () => cy.loginWithRole("contractor"));
      authLayout.visit();
    });
    it("should display a logo", () => {
      authLayout.miniLogo.should("exist");
    });

    it("should display all contractor navigation links", () => {
      authLayout.dashboardLink.should("exist");
      authLayout.rfqsLink.should("exist");
      authLayout.ordersLink.should("exist");
      authLayout.profileLink.should("exist");
      authLayout.usersLink.should("exist");
      authLayout.rolesPermissionsLink.should("exist");
      authLayout.projectsLink.should("exist");
    });
    it("should display Whatsapp Link", () => {
      authLayout.whatsappLink.should("exist");
    });
    it("should display a logout button", () => {
      authLayout.logoutButton.should("be.visible");
    });
  });

  describe("Opened Sidebar", () => {
    beforeEach(() => {
      cy.session("userSession", () => cy.loginWithRole("contractor"));
      cy.viewportForDevice("alien");
      authLayout = new AuthLayout();
      authLayout.visit();
      authLayout.toogleSidebar.click();
    });
    it("should display an expanded logo ", () => {
      authLayout.expandedLogo.should("be.visible");
    });
    it("should display all contractor navigation links", () => {
      authLayout.dashboardLink.should("exist");
      authLayout.rfqsLink.should("exist");
      authLayout.ordersLink.should("exist");
      authLayout.profileLink.should("exist");
      authLayout.usersLink.should("exist");
      authLayout.rolesPermissionsLink.should("exist");
      authLayout.projectsLink.should("exist");
    });
    it("should display Whatsapp Link", () => {
      authLayout.whatsappLink.should("exist");
    });
    it("should display a logout button", () => {
      authLayout.logoutButton.should("be.visible");
    });
  });
});
