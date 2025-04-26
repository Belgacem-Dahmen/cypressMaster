import "cypress-xpath";

class OrderListPage {
  visit() {
    cy.visit("/en/app/contractor/orders");
  }

  get pageTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div[1]/h1"
    );
  }

  get searchInput() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div[2]/div/input"
    );
  }

  get orderTable() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table'
    );
  }

  get tableHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead'
    );
  }

  get orderIdHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[1]'
    );
  }

  get rfqIdHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[2]'
    );
  }

  get nextDeliveryDateHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[3]'
    );
  }

  get amountHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[4]'
    );
  }

  get skusHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[5]'
    );
  }

  get statusHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[6]'
    );
  }

  get viewRfqHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[7]'
    );
  }

  get viewHeader() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div/div/table/thead/tr/th[8]'
    );
  }

  get paginationSection() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div'
    );
  }

  get paginationInfo() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/p'
    );
  }

  get lastPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/div[1]/button[1]'
    );
  }

  get paginationNumbers() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/div[1]/div/div[2]/button'
    );
  }

  get nextPageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/div[1]/button[2]'
    );
  }

  get paginationItemsPerPageDiv() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/div[2]/p'
    );
  }

  get numberOfPagesSelect() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/div[4]/div/div[2]/select'
    );
  }

  // Visibility check functions
  verifyPageTitleIsVisible() {
    this.pageTitle.should("be.visible");
  }

  verifySearchInputIsVisible() {
    this.searchInput.should("be.visible");
  }

  verifyOrderTableIsVisible() {
    this.orderTable.should("be.visible");
  }

  verifyTableHeaderIsVisible() {
    this.tableHeader.should("be.visible");
  }

  verifyOrderIdHeaderIsVisible() {
    this.orderIdHeader.should("be.visible");
  }

  verifyRfqIdHeaderIsVisible() {
    this.rfqIdHeader.should("be.visible");
  }

  verifyNextDeliveryDateHeaderIsVisible() {
    this.nextDeliveryDateHeader.should("be.visible");
  }

  verifyAmountHeaderIsVisible() {
    this.amountHeader.should("be.visible");
  }

  verifySkusHeaderIsVisible() {
    this.skusHeader.should("be.visible");
  }

  verifyStatusHeaderIsVisible() {
    this.statusHeader.should("be.visible");
  }

  verifyViewRfqHeaderIsVisible() {
    this.viewRfqHeader.should("be.visible");
  }

  verifyViewHeaderIsVisible() {
    this.viewHeader.should("be.visible");
  }

  verifyPaginationSectionIsVisible() {
    this.paginationSection.should("be.visible");
  }

  verifyPaginationInfoIsVisible() {
    this.paginationInfo.should("be.visible");
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
    this.paginationItemsPerPageDiv.should("be.visible");
  }

  verifyNumberOfPagesSelectIsVisible() {
    this.numberOfPagesSelect.should("be.visible");
  }
}

export default OrderListPage;
