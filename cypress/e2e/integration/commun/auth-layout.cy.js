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
      authLayout.logoutButton.should("exist");
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

  describe("Navigation link redirections", () => {
    let authLayout;
    before(() => {
      authLayout = new AuthLayout();
    });
    beforeEach(() => {
      cy.viewportForDevice("alien");
      cy.session("userSession", () => cy.loginWithRole("contractor"));
      authLayout.visit();
    });
    it("should redirect to dashboard", () => {
      authLayout.sidebar.within(() => {
        authLayout.rfqsLink.click();
        cy.url().should("include", "/en/app/contractor");
      });
    });

    it("should redirect to RFQs", () => {
      authLayout.sidebar.within(() => {
        authLayout.rfqsLink.click();
        cy.url().should("include", "/rfqs");
      });
    });

    it("should redirect to orders", () => {
      authLayout.sidebar.within(() => {
        authLayout.ordersLink.click();
        cy.url().should("include", "/orders");
      });
    });

    it("should redirect to profile", () => {
      authLayout.sidebar.within(() => {
        authLayout.profileLink.click();
        cy.url().should("include", "/me");
      });
    });

    it("should redirect to users", () => {
      authLayout.sidebar.within(() => {
        authLayout.usersLink.click();
        cy.url().should("include", "/users");
      });
    });

    it("should redirect to roles and permissions", () => {
      authLayout.sidebar.within(() => {
        authLayout.rolesPermissionsLink.click();
        cy.url().should("include", "/roles-permissions");
      });
    });

    it("should redirect to projects", () => {
      authLayout.sidebar.within(() => {
        authLayout.projectsLink.click();
        cy.url().should("include", "/projects");
      });
    });
  });
});
