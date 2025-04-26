import RfqListPage from "../../../support/pages/contractor/RfqList";

describe("Contractor RFQ List Ui Verification", () => {
  let rfqListPage;
  before(() => {
    rfqListPage = new RfqListPage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    rfqListPage.visit();
    rfqListPage.interceptRfqListRequest();
  });

  it("should display the Page Title", () => {
    rfqListPage.verifyPageTitleIsVisible();
  });

  it("should display the Project Input", () => {
    rfqListPage.verifyProjectInputIsVisible();
  });

  it("should display the RFQ Status Select", () => {
    rfqListPage.verifyRfqStatusSelectIsVisible();
  });

  it("should display the RFQ Creation Date Range", () => {
    rfqListPage.verifyRfqCreationDateRangeIsVisible();
  });

  it("should display the Clear Filters Button", () => {
    rfqListPage.verifyClearFiltersButtonIsVisible();
  });

  it("should display the Search Input", () => {
    rfqListPage.verifySearchInputIsVisible();
  });

  it("should display the RFQ List Table", () => {
    rfqListPage.verifyRfqListTableIsVisible();
  });

  it("should display the RFQ List Table Header", () => {
    rfqListPage.verifyRfqListTableHeaderIsVisible();
  });

  it("should display the RFQ ID Header", () => {
    rfqListPage.verifyRfqIdHeaderIsVisible();
  });

  it("should display the Created At Header", () => {
    rfqListPage.verifyCreatedAtHeaderIsVisible();
  });

  it("should display the Quotes Deadline Header", () => {
    rfqListPage.verifyQuotesDeadlineHeaderIsVisible();
  });

  it("should display the Status Header", () => {
    rfqListPage.verifyStatusHeaderIsVisible();
  });

  it("should display the Offers Header", () => {
    rfqListPage.verifyOffersHeaderIsVisible();
  });

  it("should display the SKUs Header", () => {
    rfqListPage.verifySkusHeaderIsVisible();
  });

  it("should display the Lowest Price Total Header", () => {
    rfqListPage.verifyLowestPriceTotalHeaderIsVisible();
  });

  it("should display the Action Header", () => {
    rfqListPage.verifyActionHeaderIsVisible();
  });

  it("should display the Pagination Info", () => {
    rfqListPage.verifyPaginationInfoIsVisible();
  });

  it("should display the Last Page Button", () => {
    rfqListPage.verifyLastPageButtonIsVisible();
  });

  it("should display the Pagination Numbers", () => {
    rfqListPage.verifyPaginationNumbersIsVisible();
  });

  it("should display the Next Page Button", () => {
    rfqListPage.verifyNextPageButtonIsVisible();
  });

  it("should display the Pagination Items Per Page Div", () => {
    rfqListPage.verifyPaginationItemsPerPageDivIsVisible();
  });

  it("should display the Number of Pages Select", () => {
    rfqListPage.verifyNumberOfPagesSelectIsVisible();
  });
  it.only("should search for RFq by text", () => {
    rfqListPage.searchByText("flow");
  });
  it("should search by project", () => {
    rfqListPage.searchByProject("test dev-3011");
  });
  it("should clear Filters", () => {
    rfqListPage.clearFilters();
  });
  it("search by date", () => {
    rfqListPage.searchByDate("2025-04-01", "2025-04-04");
  });
});
