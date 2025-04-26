import RolesAndPermissions from "../../../support/pages/contractor/RolesAndPermissions";

describe("Roles & Permissions Ui Verification", () => {
  let rolesAndPermissions;
  before(() => {
    rolesAndPermissions = new RolesAndPermissions();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    rolesAndPermissions.visit();
  });
  it("should display a title", () => {
    rolesAndPermissions.title.should("be.visible");
  });
  it("should display search input", () => {
    rolesAndPermissions.searchInput.should("be.visible");
  });
  it("should display Add Role button ", () => {
    rolesAndPermissions.addRoleButton.should("be.visible");
  });
  it("should display roles Table", () => {
    rolesAndPermissions.rolesTable.should("be.visible");
  });
  it("should display roles table header", () => {});
  it("should display ROLE NAME header title", () => {});
  it("should display Users header table", () => {});
  it("should display Actions header title", () => {});
  it("should display View Button", () => {
    rolesAndPermissions.viewRoleButton.should("be.visible");
  });
  it("should display Edit button", () => {
    rolesAndPermissions.editRoleButton.should("be.visible");
  });
  it("should display Delete button", () => {
    rolesAndPermissions.deleteRoleButton.should("be.visible");
  });
  it("should Redirect User to add role Page", () => {
    rolesAndPermissions.addRoleButton.click().then(() => {
      cy.url().should("include", "/add-role");
    });
  });
});

describe.only("Add Role Modal Ui Verification", () => {
  let rolesAndPermissions;
  before(() => {
    rolesAndPermissions = new RolesAndPermissions();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    rolesAndPermissions.visit();
    rolesAndPermissions.addRoleButton.click();
  });

  it("should display Back Button", () => {
    rolesAndPermissions.addModal_backButton.should("be.visible");
  });

  it("should display Title", () => {
    rolesAndPermissions.Modal_title.should("be.visible");
  });

  it("should display Dashboard Card", () => {
    rolesAndPermissions.addModal_dashboardCard.should("be.visible");
  });

  it("should display RFQ List Card", () => {
    rolesAndPermissions.addModal_rfqListCard.should("be.visible");
  });

  it("should display Order List Card", () => {
    rolesAndPermissions.addModal_orderListCard.should("be.visible");
  });

  it("should display Roles Permissions Card", () => {
    rolesAndPermissions.addModal_rolesPermissionsCard.should("be.visible");
  });

  it("should display User Management Card", () => {
    rolesAndPermissions.addModal_userManagementCard.should("be.visible");
  });

  it("should display Dashboard View Select", () => {
    rolesAndPermissions.addModal_dashboardViewSelect.should("be.visible");
  });

  it("should display RFQ List View Select", () => {
    rolesAndPermissions.addModal_rfqListViewSelect.should("be.visible");
  });

  it("should display RFQ List Edit Select", () => {
    rolesAndPermissions.addModal_rfqListEditSelect.should("be.visible");
  });

  it("should display Orders View Select", () => {
    rolesAndPermissions.addModal_ordersViewSelect.should("be.visible");
  });

  it("should display Order Edit Select", () => {
    rolesAndPermissions.addModal_orderEditSelect.should("be.visible");
  });

  it("should display Roles Permissions View Select", () => {
    rolesAndPermissions.addModal_rolesPermissionsViewSelect.should(
      "be.visible"
    );
  });

  it("should display Roles Permissions Edit Select", () => {
    rolesAndPermissions.addModal_rolesPermissionsEditSelect.should(
      "be.visible"
    );
  });

  it("should display User Management View Select", () => {
    rolesAndPermissions.addModal_userManagementViewSelect.should("be.visible");
  });

  it("should display User Management Edit Select", () => {
    rolesAndPermissions.addModal_userManagementEditSelect.should("be.visible");
  });

  it("should display Cancel Button", () => {
    rolesAndPermissions.addModal_cancelButton.should("be.visible");
  });

  it("should display Add Button", () => {
    rolesAndPermissions.addModal_addButton.should("be.visible");
  });
});

describe("Edit Role Modal Ui Verification", () => {
  let rolesAndPermissions;
  before(() => {
    rolesAndPermissions = new RolesAndPermissions();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    rolesAndPermissions.visit();
  });
});

describe("Delete_Role Modal Ui Verification", () => {
  let rolesAndPermissions;
  before(() => {
    rolesAndPermissions = new RolesAndPermissions();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    rolesAndPermissions.visit();
  });
});
