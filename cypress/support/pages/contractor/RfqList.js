import "cypress-xpath";

class RfqListPage {
  // Selectors

  visit() {
    cy.visit("/en/app/contractor/rfqs");
  }

  interceptRfqListRequest() {
    cy.intercept("GET", "/api/rfq/contractor/list*").as("getRfqList");
  }
  waitForRfqListRequest() {
    cy.wait("@getRfqList");
  }

  get pageTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[1]/h1'
    );
  }

  get projectInput() {
    return cy.xpath('//*[@id="react-select-2-input"]');
  }

  get rfqStatusSelect() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[2]/div/div/select'
    );
  }

  get rfqCreationDateRange() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[3]/button'
    );
  }

  get fromInput() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[3]/div/div/div[1]/input'
    );
  }

  get toInput() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[3]/div/div/div[2]/input'
    );
  }

  get applyDateButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[3]/div/div/div[3]/button[1]'
    );
  }

  get clearDateButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/div[3]/div/div/div[3]/button[2]'
    );
  }

  get clearFiltersButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/form/button'
    );
  }

  get searchInput() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/input'
    );
  }

  get rfqListTable() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table'
    );
  }

  get rfqListTableHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead'
    );
  }

  get rfqIdHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[1]'
    );
  }

  get createdAtHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[2]'
    );
  }

  get quotesDeadlineHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[3]'
    );
  }

  get statusHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[4]'
    );
  }

  get offersHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[5]'
    );
  }

  get skusHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[6]'
    );
  }

  get lowestPriceTotalHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[7]'
    );
  }

  get actionHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/div/div/div/table/thead/tr/th[8]'
    );
  }

  get paginationInfo() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/p'
    );
  }

  get lastPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/div[1]/button[1]'
    );
  }

  get paginationNumbers() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/div[1]'
    );
  }

  get nextPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/div[1]/button[2]'
    );
  }

  get paginationItemsPerPageDiv() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/div[2]'
    );
  }

  get numberOfPagesSelect() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[3]/div/div[2]/select'
    );
  }

  verifyPageTitleIsVisible() {
    this.pageTitle.should("be.visible");
  }

  verifyProjectInputIsVisible() {
    this.projectInput.should("be.visible");
  }

  verifyRfqStatusSelectIsVisible() {
    this.rfqStatusSelect.should("be.visible");
  }

  verifyRfqCreationDateRangeIsVisible() {
    this.rfqCreationDateRange.should("be.visible");
  }

  verifyFromInputIsVisible() {
    this.fromInput.should("be.visible");
  }

  verifyToInputIsVisible() {
    this.toInput.should("be.visible");
  }

  verifyApplyDateButtonIsVisible() {
    this.applyDateButton.should("be.visible");
  }

  verifyClearDateButtonIsVisible() {
    this.clearDateButton.should("be.visible");
  }

  verifyClearFiltersButtonIsVisible() {
    this.clearFiltersButton.should("be.visible");
  }

  verifySearchInputIsVisible() {
    this.searchInput.should("be.visible");
  }

  verifyRfqListTableIsVisible() {
    this.rfqListTable.should("be.visible");
  }

  verifyRfqListTableHeaderIsVisible() {
    this.rfqListTableHeader.should("be.visible");
  }

  verifyRfqIdHeaderIsVisible() {
    this.rfqIdHeader.should("be.visible");
  }

  verifyCreatedAtHeaderIsVisible() {
    this.createdAtHeader.should("be.visible");
  }

  verifyQuotesDeadlineHeaderIsVisible() {
    this.quotesDeadlineHeader.should("be.visible");
  }

  verifyStatusHeaderIsVisible() {
    this.statusHeader.should("be.visible");
  }

  verifyOffersHeaderIsVisible() {
    this.offersHeader.should("be.visible");
  }

  verifySkusHeaderIsVisible() {
    this.skusHeader.should("be.visible");
  }

  verifyLowestPriceTotalHeaderIsVisible() {
    this.lowestPriceTotalHeader.should("be.visible");
  }

  verifyActionHeaderIsVisible() {
    this.actionHeader.should("be.visible");
  }

  verifyPaginationInfoIsVisible() {
    this.paginationInfo.should("exist");
  }

  verifyLastPageButtonIsVisible() {
    this.lastPageButton.should("exist");
  }

  verifyPaginationNumbersIsVisible() {
    this.paginationNumbers.should("exist");
  }

  verifyNextPageButtonIsVisible() {
    this.nextPageButton.should("exist");
  }

  verifyPaginationItemsPerPageDivIsVisible() {
    this.paginationItemsPerPageDiv.should("exist");
  }

  verifyNumberOfPagesSelectIsVisible() {
    this.numberOfPagesSelect.should("exist");
  }

  //Search Functions

  searchByText(text) {
    this.searchInput.type(text);
  }
  searchByProject(project) {
    this.projectInput.type(project).press("Tab");
  }
  clearFilters() {
    this.clearFiltersButton.click();
  }
  searchByDate(from, to) {
    // Ensure the RFQ date range dropdown is visible and clickable
    this.interceptRfqListRequest();
    this.rfqCreationDateRange.should("be.visible").click();

    // Ensure 'from' input is visible and interactable before typing
    this.fromInput.should("be.visible").click().clear().type(from);

    // Ensure 'to' input is visible and interactable before typing
    this.toInput.should("be.visible").click().clear().type(to);
    this.applyDateButton
      .should("be.visible")
      .click()
      .then(() => {
        cy.wait("@getRfqList").then((interception) => {
          console.log("Intercepted RFQ request:", interception.response);
        });
      });

  }
}

export default RfqListPage;
//
