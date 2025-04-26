import UsersListPage from "../../../support/pages/contractor/Users";
describe("Users page Ui Verification", () => {
  let usersListPage;
  before(() => {
    usersListPage = new UsersListPage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    usersListPage.visit();
  });

  it("should display the page title", () => {
    usersListPage.pageTitle.should("be.visible");
  });

  it("should display the search input", () => {
    usersListPage.searchInput.should("be.visible");
  });

  it("should display the Add User button", () => {
    usersListPage.addUserButton.should("be.visible");
  });

  it("should display the users table", () => {
    usersListPage.usersTable.should("be.visible");
  });

  it("should display the table header", () => {
    usersListPage.usersTableHeader.should("be.visible");
  });

  it("should display the Full Name header", () => {
    usersListPage.fullNameHeader.should("be.visible");
  });

  it("should display the Role header", () => {
    usersListPage.roleHeader.should("be.visible");
  });

  it("should display the Email Address header", () => {
    usersListPage.emailAddressHeader.should("be.visible");
  });

  it("should display the Phone Number header", () => {
    usersListPage.phoneNumberHeader.should("be.visible");
  });

  it("should display the Created At header", () => {
    usersListPage.createdAtHeader.should("be.visible");
  });

  it("should display the Status header", () => {
    usersListPage.statusHeader.should("be.visible");
  });

  it("should display the Action header", () => {
    usersListPage.actionHeader.should("be.visible");
  });

  it("should display the pagination section", () => {
    usersListPage.paginationSection.should("be.visible");
  });

  it("should display the pagination info text", () => {
    usersListPage.paginationInfo.should("be.visible");
  });

  it("should display the last page button", () => {
    usersListPage.lastPageButton.should("exist");
  });

  it("should display the pagination numbers", () => {
    usersListPage.paginationNumbers.should("exist");
  });

  it("should display the next page button", () => {
    usersListPage.nextPageButton.should("exist");
  });

  it("should display the pagination items-per-page section", () => {
    usersListPage.paginationItemsPerPageDiv.should("be.visible");
  });

  it("should display the number of pages select", () => {
    usersListPage.numberOfPagesSelect.should("be.visible");
  });
  it("should display a toogle for each user ", () => {
    usersListPage.ToogleStatusButton.should("be.visible");
  });

  it("should display an edit button", () => {
    usersListPage.editButton.should("be.visible");
  });
  it("should display a delete button", () => {
    usersListPage.deleteButton.should("be.visible");
  });

  it("should search for user by text", () => {
    usersListPage.interceptData();
    usersListPage.searchByText("hello");
    // usersListPage.waitForData();
    cy.contains("No data available");
    usersListPage.noDataMessage.should("be.visible");
  });
});

describe("Add User Modal ui Verifications ", () => {
  let usersListPage;
  before(() => {
    usersListPage = new UsersListPage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    usersListPage.visit();
    usersListPage.interceptData();
    usersListPage.addUserButton.click();
  });

  it("should display  add Modal if add user clicked", () => {
    usersListPage.addModal.should("be.visible");
  });
  it("should display the Add modal title ", () => {
    usersListPage.addModal.contains("Add User");
  });
  it("should display the full name input", () => {
    usersListPage.fullNameInput.should("be.visible");
  });

  it("should display the email input", () => {
    usersListPage.emailInput.should("be.visible");
  });

  it("should display the phone input", () => {
    usersListPage.phoneInput.should("be.visible");
  });

  it("should display the Custom role input", () => {
    usersListPage.roleInput.should("be.visible");
  });

  it("should display a cancel button", () => {
    usersListPage.cancelButton.should("be.visible");
  });
  it("should display an submit add user button", () => {
    usersListPage.submitAdd.should("be.visible");
  });
});

describe("Edit User Modal ui Verifications ", () => {
  let usersListPage;
  before(() => {
    usersListPage = new UsersListPage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    usersListPage.visit();
    usersListPage.interceptData();
    usersListPage.editButton.click();
  });
  it("should display  edit Modal if edit user clicked", () => {
    usersListPage.editModal.should("be.visible");
  });

  it("should display the full name input", () => {
    usersListPage.fullNameInput.should("be.visible");
  });

  it("should display the email input", () => {
    usersListPage.emailInput.should("be.visible");
  });

  it("should display the phone input", () => {
    usersListPage.phoneInput.should("be.visible");
  });

  it("should display the Custom role input", () => {
    usersListPage.roleInput.should("be.visible");
  });

  it("should display a cancel button", () => {
    usersListPage.cancelButton.should("be.visible");
  });
  it("should display an submit add user button", () => {
    usersListPage.submitEditButton.should("be.visible");
  });
});
