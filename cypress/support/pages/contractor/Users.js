import "cypress-xpath";

class UsersListPage {
  visit() {
    cy.visit("/en/app/contractor/users");
  }

  get pageTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[1]/div/h1"
    );
  }

  get searchInput() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div/input"
    );
  }

  get addUserButton() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/button"
    );
  }

  get usersTable() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table'
    );
  }

  get usersTableHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead'
    );
  }

  get fullNameHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[1]"
    );
  }

  get roleHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[2]"
    );
  }

  get emailAddressHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[3]"
    );
  }

  get phoneNumberHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[4]"
    );
  }

  get createdAtHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[5]"
    );
  }

  get statusHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[6]"
    );
  }

  get actionHeader() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/thead/tr/th[7]"
    );
  }

  get paginationSection() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div"
    );
  }

  get paginationInfo() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/p"
    );
  }

  get lastPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/div[1]/button[1]'
    );
  }

  get paginationNumbers() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/div[1]/div/div[1]'
    );
  }

  get nextPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/div[1]/button[2]'
    );
  }

  get paginationItemsPerPageDiv() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/div[2]/p'
    );
  }

  get numberOfPagesSelect() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/div/div/div[2]/select'
    );
  }
  get ToogleStatusButton() {
    return cy.xpath('//*[@id="headlessui-control-:r0:"]');
  }

  get editButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/button[1]'
    );
  }
  get deleteButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/tbody/tr[1]/td[7]/div/button[2]'
    );
  }
  get noDataMessage() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/main[2]/div/div/div/div/div/table/tbody/tr/td'
    );
  }

  get addModal() {
    return cy.get('[data-headlessui-state="open"]');
  }
  get addModalTitle() {
    return cy.xpath('//*[@id="headlessui-dialog-panel-:r1j:"]/div/p');
  }
  get fullNameInput() {
    return cy.get('input[name="fullName"]');
  }

  get emailInput() {
    return cy.get('input[name="email"]');
  }

  get phoneInput() {
    return cy.get('input[name="phone"]');
  }

  get roleInput() {
    return cy.get('input[role="combobox"]');
  }

  get cancelButton() {
    return cy.get("button").contains("Cancel");
  }
  get submitAdd() {
    return cy.exactMatch("button", "Add");
  }

  get editModal() {
    return cy.get('[data-headlessui-state="open"]');
  }

  get submitEditButton() {
    return cy.exactMatch("button", "Save");
  }

  searchByText(text) {
    this.searchInput.clear().type(text);
  }

  addUser() {
    this.addUserButton.click();
  }

  interceptData() {
    cy.intercept("GET", "/api/**");
  }
}

export default UsersListPage;
