function openSubmitRFQPage() {
  cy.contains("Submit a new RFQ").should("be.visible").click();
  cy.wait("@getCategories");
}

function selectProductDetails(name, unit, brand) {
  cy.contains(name).click();
  cy.contains("Please select the details of the item to add")
    .parent()
    .parent()
    .within(() => {
      cy.get('input[role="combobox"]').click();
      cy.contains(unit);
      cy.get('input[name="product.quantity"]').click().type("100");
      cy.get('input[placeholder="Select a date"]').click();
      cy.contains("30").click({ force: true });
      cy.get('textarea[name="product.comment"]')
        .should("be.visible")
        .type("This is a test comment.");
      cy.get('input[type="file"]').selectFile("cypress/fixtures/pdf-test.pdf", {
        force: true,
      });
      cy.wait(2500);
      cy.get("select").last().select(1);
      cy.contains("Select Brand").click();
      cy.contains(brand).click();
      cy.contains("1 Brands selected").click();
      cy.get(".mt-4 > .text-basic-800").click({ force: true });
    });
}

function verifyProductSummary() {
  cy.contains("100").should("be.visible");
  cy.contains("Quantity").should("be.visible");
  cy.contains("Piece").should("be.visible");
  cy.contains("Unit").should("be.visible");
  cy.contains("Apr 30, 2025 => 100").should("be.visible");
  cy.contains("Delivery date").should("be.visible");
  cy.get("button").contains("Next").click();
}

function fillProjectAndLocationInfo(projectName) {
  cy.get('input[placeholder="Write your project name here"]').type(projectName);
  cy.get('input[placeholder="Select a date"]').click();
  cy.contains("30").click({ force: true });

  cy.contains("Choose your delivery coverage").click();
  cy.contains("City of Riyadh").click();

  cy.get('select[name="neighborhoods"]').select("Al Malaz");
  cy.get('input[name="address.addressLabel"]').type("Al Manar");
  cy.wait(5000);
  cy.get('div[role="region"]').click({ force: true });
}

function submitRFQ() {
  cy.contains("Submit RFQ").click();
}

function verifySubmissionSuccess() {
  cy.contains("🎉 Congratulations").should("be.visible");
  cy.contains("Your RFQ has been successfully submitted!").should("be.visible");
  cy.contains(
    "You can now return to your dashboard to view the details of your submitted RFQ."
  ).should("be.visible");
}
describe("Contractor create an RFQ", () => {
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("contractorSession", () => {
      cy.loginWithRole("contractor");
    });
  });

  it("should create an RFQ with one product", () => {
    cy.visit("/en/app/contractor");
    cy.intercept("GET", "https://sandbox.watad.vip/api/category/listAll*").as(
      "getCategories"
    );

    openSubmitRFQPage();
    selectProductDetails("Window Air Condition", "Piece", "Samsung");
    cy.wait(6500);
    cy.get("h3").contains("Proceed to RFQ").click();
    cy.wait(6500);
    verifyProductSummary();
    fillProjectAndLocationInfo("RFQ One product");
    submitRFQ();
    verifySubmissionSuccess();
  });
  it("should create an RFQ with two products", () => {
    cy.visit("/en/app/contractor");
    cy.intercept("GET", "https://sandbox.watad.vip/api/category/listAll*").as(
      "getCategories"
    );

    openSubmitRFQPage();
    selectProductDetails("Window Air Condition", "Piece", "Samsung");
    selectProductDetails("Steel Rebar", "Ton", "Sabic");
    cy.wait(6500);
    cy.get("h3").contains("Proceed to RFQ").click();
    cy.wait(6500);
    verifyProductSummary();
    fillProjectAndLocationInfo("RFQ two products");
    submitRFQ();
    verifySubmissionSuccess();
  });
});
