import OrderListPage from "../../../support/pages/contractor/OrderList";
describe("Contractor RFQ List Ui Verification", () => {
  let orderListPage;
  before(() => {
    orderListPage = new OrderListPage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    orderListPage.visit();
  });

  it("should verify the page title is visible", () => {
    orderListPage.verifyPageTitleIsVisible();
  });

  it("should verify the search input is visible", () => {
    orderListPage.verifySearchInputIsVisible();
  });

  it("should verify the order table is visible", () => {
    orderListPage.verifyOrderTableIsVisible();
  });

  it("should verify the table header is visible", () => {
    orderListPage.verifyTableHeaderIsVisible();
  });

  it("should verify the order ID header is visible", () => {
    orderListPage.verifyOrderIdHeaderIsVisible();
  });

  it("should verify the RFQ ID header is visible", () => {
    orderListPage.verifyRfqIdHeaderIsVisible();
  });

  it("should verify the next delivery date header is visible", () => {
    orderListPage.verifyNextDeliveryDateHeaderIsVisible();
  });

  it("should verify the amount header is visible", () => {
    orderListPage.verifyAmountHeaderIsVisible();
  });

  it("should verify the SKUs header is visible", () => {
    orderListPage.verifySkusHeaderIsVisible();
  });

  it("should verify the status header is visible", () => {
    orderListPage.verifyStatusHeaderIsVisible();
  });

  it("should verify the view RFQ header is visible", () => {
    orderListPage.verifyViewRfqHeaderIsVisible();
  });

  it("should verify the view header is visible", () => {
    orderListPage.verifyViewHeaderIsVisible();
  });

  it("should verify the pagination section is visible", () => {
    orderListPage.verifyPaginationSectionIsVisible();
  });

  it("should verify the pagination info is visible", () => {
    orderListPage.verifyPaginationInfoIsVisible();
  });

  it("should verify the last page button is visible", () => {
    orderListPage.verifyLastPageButtonIsVisible();
  });

  it("should verify the pagination numbers are visible", () => {
    orderListPage.verifyPaginationNumbersIsVisible();
  });

  it("should verify the next page button is visible", () => {
    orderListPage.verifyNextPageButtonIsVisible();
  });

  it("should verify the pagination items per page div is visible", () => {
    orderListPage.verifyPaginationItemsPerPageDivIsVisible();
  });

  it("should verify the number of pages select is visible", () => {
    orderListPage.verifyNumberOfPagesSelectIsVisible();
  });
});
