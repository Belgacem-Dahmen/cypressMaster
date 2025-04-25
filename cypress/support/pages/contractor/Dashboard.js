import "cypress-xpath";

class DashboardPage {
  // Selectors
  get submitNewRfqButton() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[1]/div/div[4]/a/button"
    );
  }

  get requestCreditButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div[1]/a/button'
    );
  }

  get pageTitle() {
    return cy.xpath('//h1[text()="Dashboard"]');
  }

  get creditStatsSectionTitle() {
    return cy.xpath('//h2[text()="Credit Stats"]');
  }

  get sabCreditCard() {
    return cy.xpath('//*[@id="sab-credit-card"]');
  }

  get watadCreditCard() {
    return cy.xpath('//*[@id="watad-credit-card"]');
  }

  get waitingForApprovalCard() {
    return cy.xpath('//*[@id="waiting-for-approval-card"]');
  }

  get creditRequestsOverviewSectionTitle() {
    return cy.xpath('//h2[text()="Credit Requests Overview"]');
  }

  get creditRequestCard() {
    return cy.xpath('//*[@id="credit-request-card"]');
  }

  get requestsPendingCard() {
    return cy.xpath('//*[@id="requests-pending-card"]');
  }

  get amountWaitingForApprovalCard() {
    return cy.xpath('//*[@id="amount-waiting-for-approval-card"]');
  }

  get requestsOverviewSectionTitle() {
    return cy.xpath('//h2[text()="Requests Overview"]');
  }

  get totalRfqsCard() {
    return cy.xpath('//*[@id="total-rfqs-card"]');
  }

  get rfqsAnsweredCard() {
    return cy.xpath('//*[@id="rfqs-answered-card"]');
  }

  get rfqsPendingCard() {
    return cy.xpath('//*[@id="rfqs-pending-card"]');
  }

  get valueAllRfqsCard() {
    return cy.xpath('//*[@id="value-all-rfqs-card"]');
  }

  get valueOfAllQuotedRfqsCard() {
    return cy.xpath('//*[@id="value-of-all-quoted-rfqs-card"]');
  }

  get numberOfNegotiationCard() {
    return cy.xpath('//*[@id="number-of-negotiation-card"]');
  }

  get orderOverviewSectionTitle() {
    return cy.xpath('//h2[text()="Order Overview"]');
  }

  get totalOrdersCard() {
    return cy.xpath('//*[@id="total-orders-card"]');
  }

  get pendingOrdersCard() {
    return cy.xpath('//*[@id="pending-orders-card"]');
  }

  get completedOrdersCard() {
    return cy.xpath('//*[@id="completed-orders-card"]');
  }

  get valueOfOrdersCard() {
    return cy.xpath('//*[@id="value-of-orders-card"]');
  }

  get valueOfPendingOrdersCard() {
    return cy.xpath('//*[@id="value-of-pending-orders-card"]');
  }

  get valueOfOrdersCompletedCard() {
    return cy.xpath('//*[@id="value-of-orders-completed-card"]');
  }

  get expiredOrdersCard() {
    return cy.xpath('//*[@id="expired-orders-card"]');
  }
  visit() {
    cy.visit("/en/app");
  }
  // Action to visit the dashboard page and alias the elements

  // Intercept all GET requests
  interceptGetRequests() {
    cy.intercept("GET", "/api/**").as("getRequests"); // Intercepts all GET requests
    cy.wait("@getRequests").then((interception) => {
      cy.log("Intercepted GET request:", interception);
      expect(interception.response.statusCode).to.eq(200);
    });
  }

  // Verify that elements are visible
  verifyElementsAreVisible() {
    this.submitNewRfqButton.should("be.visible");
    this.amountWaitingForApprovalCard.should("be.visible");
  }
}

export default DashboardPage;
