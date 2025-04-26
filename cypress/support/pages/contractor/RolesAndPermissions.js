import "cypress-xpath";

class RolesAndPermissions {
  visit() {
    cy.visit("/en/app/contractor/roles-permissions");
    this.interceptData();
  }
  interceptData() {
    cy.intercept("GET", "/api/**");
  }
  get title() {
    return cy.contains("h1", "Roles & Permissions");
  }
  get searchInput() {
    return cy.get('input[placeholder="Search"]');
  }
  get addRoleButton() {
    return cy.contains("button", "Add Role");
  }
  get rolesTable() {
    return cy.get("table");
  }
  get viewRoleButton() {
    return cy.contains("button", "View");
  }
  get editRoleButton() {
    return cy.contains("button", "Edit");
  }
  get deleteRoleButton() {
    return cy.contains("button", "Delete");
  }

  get addModal_backButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main/div[1]/div/button'
    );
  }

  get Modal_title() {
    return cy.get("h1");
  }

  get addModal_dashboardCard() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main/div[2]/form/div[2]/div/div[2]/div/div[1]"
    );
  }

  get addModal_rfqListCard() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main/div[2]/form/div[2]/div/div[2]/div/div[2]"
    );
  }

  get addModal_orderListCard() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main/div[2]/form/div[2]/div/div[2]/div/div[3]"
    );
  }

  get addModal_rolesPermissionsCard() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main/div[2]/form/div[2]/div/div[2]/div/div[4]"
    );
  }

  get addModal_userManagementCard() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main/div[2]/form/div[2]/div/div[2]/div/div[5]"
    );
  }

  get addModal_dashboardViewSelect() {
    return cy.get("#permissions\\.VIEW_DASHBOARD");
  }

  get addModal_rfqListViewSelect() {
    return cy.get("#permissions\\.VIEW_RFQ_LIST");
  }

  get addModal_rfqListEditSelect() {
    return cy.get("#permissions\\.EDIT_RFQ_LIST");
  }

  get addModal_ordersViewSelect() {
    return cy.get("#permissions\\.VIEW_ORDER_LIST");
  }

  get addModal_orderEditSelect() {
    return cy.get("#permissions\\.EDIT_ORDER_LIST");
  }

  get addModal_rolesPermissionsViewSelect() {
    return cy.get("#permissions\\.VIEW_ROLE_PERMISSIONS");
  }

  get addModal_rolesPermissionsEditSelect() {
    return cy.get("#permissions\\.EDIT_ROLE_PERMISSIONS");
  }

  get addModal_userManagementViewSelect() {
    return cy.get("#permissions\\.VIEW_USER_MANAGEMENT");
  }

  get addModal_userManagementEditSelect() {
    return cy.get("#permissions\\.EDIT_USER_MANAGEMENT");
  }

  get addModal_cancelButton() {
    return cy.contains("button", "Cancel");
  }

  get addModal_addButton() {
    return cy.contains("button", "Add");
  }
}

export default RolesAndPermissions;
