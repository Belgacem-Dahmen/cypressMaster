import "cypress-xpath";

class DashboardPage {
  // Selectors
  get submitNewRfqButton() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[1]/div/div[4]/a/button"
    );
  }
  get submitNewRfqButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[4]/a/button'
    );
  }

  get requestCreditButton() {
    return cy.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[1]/button');
  }

  get submitNewRfqButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[4]/a/button'
    );
  }
  verifyNewRfqButtonIsVisible() {
    this.submitNewRfqButton.should("be.visible");
  }

  get requestCreditButton() {
    return cy.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[1]/button');
  }
  verifyRequestCreditButtonIsVisible() {
    this.requestCreditButton.should("be.visible");
  }

  get pageTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[1]/h1'
    );
  }
  verifyPageTitleIsVisible() {
    this.pageTitle.should("be.visible");
  }

  get creditStatsSectionTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[1]/p'
    );
  }
  verifyCreditStatsSectionTitleIsVisible() {
    this.creditStatsSectionTitle.should("be.visible");
  }

  get sabCreditCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[1]/div/div[1]'
    );
  }
  verifySabCreditCardIsVisible() {
    this.sabCreditCard.should("be.visible");
  }

  get watadCreditCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[1]/div/div[2]'
    );
  }
  verifyWatadCreditCardIsVisible() {
    this.watadCreditCard.should("be.visible");
  }

  get waitingForApprovalCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[1]/div/div[3]'
    );
  }
  verifyWaitingForApprovalCardIsVisible() {
    this.waitingForApprovalCard.should("be.visible");
  }

  get creditRequestsOverviewSectionTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[2]/p'
    );
  }
  verifyCreditRequestsOverviewSectionTitleIsVisible() {
    this.creditRequestsOverviewSectionTitle.should("be.visible");
  }

  get creditRequestCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[2]/div/div[1]'
    );
  }
  verifyCreditRequestCardIsVisible() {
    this.creditRequestCard.should("be.visible");
  }

  get requestsPendingCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[2]/div/div[2]'
    );
  }
  verifyRequestsPendingCardIsVisible() {
    this.requestsPendingCard.should("be.visible");
  }

  get amountWaitingForApprovalCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[2]/div/div[3]'
    );
  }
  verifyAmountWaitingForApprovalCardIsVisible() {
    this.amountWaitingForApprovalCard.should("be.visible");
  }

  get requestsOverviewSectionTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/p'
    );
  }
  verifyRequestsOverviewSectionTitleIsVisible() {
    this.requestsOverviewSectionTitle.should("be.visible");
  }

  get totalRfqsCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[1]'
    );
  }
  verifyTotalRfqsCardIsVisible() {
    this.totalRfqsCard.should("be.visible");
  }

  get rfqsAnsweredCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[2]'
    );
  }
  verifyRfqsAnsweredCardIsVisible() {
    this.rfqsAnsweredCard.should("be.visible");
  }

  get rfqsPendingCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[3]'
    );
  }
  verifyRfqsPendingCardIsVisible() {
    this.rfqsPendingCard.should("be.visible");
  }

  get valueAllRfqsCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[4]'
    );
  }
  verifyValueAllRfqsCardIsVisible() {
    this.valueAllRfqsCard.should("be.visible");
  }

  get valueOfAllQuotedRfqsCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[5]'
    );
  }
  verifyValueOfAllQuotedRfqsCardIsVisible() {
    this.valueOfAllQuotedRfqsCard.should("be.visible");
  }

  get numberOfNegotiationCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[3]/div/div[6]'
    );
  }
  verifyNumberOfNegotiationCardIsVisible() {
    this.numberOfNegotiationCard.should("be.visible");
  }

  get orderOverviewSectionTitle() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/p'
    );
  }
  verifyOrderOverviewSectionTitleIsVisible() {
    this.orderOverviewSectionTitle.should("be.visible");
  }

  get totalOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[1]'
    );
  }
  verifyTotalOrdersCardIsVisible() {
    this.totalOrdersCard.should("be.visible");
  }

  get pendingOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[2]'
    );
  }
  verifyPendingOrdersCardIsVisible() {
    this.pendingOrdersCard.should("be.visible");
  }

  get completedOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[3]'
    );
  }
  verifyCompletedOrdersCardIsVisible() {
    this.completedOrdersCard.should("be.visible");
  }

  get valueOfOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[4]'
    );
  }
  verifyValueOfOrdersCardIsVisible() {
    this.valueOfOrdersCard.should("be.visible");
  }

  get valueOfPendingOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[5]'
    );
  }
  verifyValueOfPendingOrdersCardIsVisible() {
    this.valueOfPendingOrdersCard.should("be.visible");
  }

  get valueOfOrdersCompletedCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[6]'
    );
  }
  verifyValueOfOrdersCompletedCardIsVisible() {
    this.valueOfOrdersCompletedCard.should("be.visible");
  }

  get expiredOrdersCard() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div[2]/section[4]/div/div[7]'
    );
  }
  verifyExpiredOrdersCardIsVisible() {
    this.expiredOrdersCard.should("be.visible");
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
}

export default DashboardPage;
