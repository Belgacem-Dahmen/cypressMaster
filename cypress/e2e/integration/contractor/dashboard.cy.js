import DashboardPage from "../../../support/pages/contractor/Dashboard";

describe("Contractor Navigation", () => {
  let dashboard;
  before(() => {
    cy.viewportForDevice("alien");
    dashboard = new DashboardPage();
  });
  beforeEach(() => {
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    dashboard.visit();
  });

  it("should display the Submit New RFQ button", () => {
    dashboard.verifyNewRfqButtonIsVisible();
  });

  it("should display the Request Credit button", () => {
    dashboard.verifyRequestCreditButtonIsVisible();
  });

  it("should display the Page Title", () => {
    dashboard.verifyPageTitleIsVisible();
  });

  it("should display the Credit Stats Section Title", () => {
    dashboard.verifyCreditStatsSectionTitleIsVisible();
  });

  it("should display the SAB Credit Card", () => {
    dashboard.verifySabCreditCardIsVisible();
  });

  it("should display the Watad Credit Card", () => {
    dashboard.verifyWatadCreditCardIsVisible();
  });

  it("should display the Waiting for Approval Card", () => {
    dashboard.verifyWaitingForApprovalCardIsVisible();
  });

  it("should display the Credit Requests Overview Section Title", () => {
    dashboard.verifyCreditRequestsOverviewSectionTitleIsVisible();
  });

  it("should display the Credit Request Card", () => {
    dashboard.verifyCreditRequestCardIsVisible();
  });

  it("should display the Requests Pending Card", () => {
    dashboard.verifyRequestsPendingCardIsVisible();
  });

  it("should display the Amount Waiting for Approval Card", () => {
    dashboard.verifyAmountWaitingForApprovalCardIsVisible();
  });

  it("should display the Requests Overview Section Title", () => {
    dashboard.verifyRequestsOverviewSectionTitleIsVisible();
  });

  it("should display the Total RFQs Card", () => {
    dashboard.verifyTotalRfqsCardIsVisible();
  });

  it("should display the RFQs Answered Card", () => {
    dashboard.verifyRfqsAnsweredCardIsVisible();
  });

  it("should display the RFQs Pending Card", () => {
    dashboard.verifyRfqsPendingCardIsVisible();
  });

  it("should display the Value All RFQs Card", () => {
    dashboard.verifyValueAllRfqsCardIsVisible();
  });

  it("should display the Value of All Quoted RFQs Card", () => {
    dashboard.verifyValueOfAllQuotedRfqsCardIsVisible();
  });

  it("should display the Number of Negotiation Card", () => {
    dashboard.verifyNumberOfNegotiationCardIsVisible();
  });

  it("should display the Order Overview Section Title", () => {
    dashboard.verifyOrderOverviewSectionTitleIsVisible();
  });

  it("should display the Total Orders Card", () => {
    dashboard.verifyTotalOrdersCardIsVisible();
  });

  it("should display the Pending Orders Card", () => {
    dashboard.verifyPendingOrdersCardIsVisible();
  });

  it("should display the Completed Orders Card", () => {
    dashboard.verifyCompletedOrdersCardIsVisible();
  });

  it("should display the Value of Orders Card", () => {
    dashboard.verifyValueOfOrdersCardIsVisible();
  });

  it("should display the Value of Pending Orders Card", () => {
    dashboard.verifyValueOfPendingOrdersCardIsVisible();
  });

  it("should display the Value of Orders Completed Card", () => {
    dashboard.verifyValueOfOrdersCompletedCardIsVisible();
  });

  it("should display the Expired Orders Card", () => {
    dashboard.verifyExpiredOrdersCardIsVisible();
  });
});
