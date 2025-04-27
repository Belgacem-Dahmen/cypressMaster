describe("Admin edit an RFQ", () => {
  beforeEach(() => {
    cy.viewportForDevice("alien");

    cy.session("contractorSession", () => {
      cy.loginWithRole("admin");
    });
  });
  function visitAdminRFQsPage() {
    cy.visit("/en/app/admin/rfqs");
  }
  function searchRFQByName(name) {
    cy.get('input[placeholder="search"]').clear().type(name);
  }

  function verifyProductSummary(name, quantity, unit) {
    cy.contains(name).should("be.visible");
    cy.contains(quantity).should("be.visible");
    cy.contains("Quantity").should("be.visible");
    cy.contains(unit).should("be.visible");
    cy.contains("Unit").should("be.visible");
    cy.contains("Apr 29, 2025 => 100").should("be.visible");
    cy.contains("Delivery date").should("be.visible");
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
        cy.get('input[type="file"]').selectFile(
          "cypress/fixtures/pdf-test.pdf",
          {
            force: true,
          }
        );
        cy.wait(2500);
        cy.get("select").last().select(1);
        cy.contains("Select Brand").click();
        cy.contains(brand).click();
        cy.contains("1 Brands selected").click();
        cy.get(".mt-4 > .text-basic-800").click({ force: true });
      });
  }

  it("should edit the rfq ", () => {
    cy.intercept("GET", "/api/rfq/admin/list*").as("rfqSearch");
    visitAdminRFQsPage();
    searchRFQByName("one product");
    cy.wait("@rfqSearch");
    cy.get("button").contains("Edit").first().click();
    cy.contains("Add more products").click();
    verifyProductSummary("Window Air Condition", 100, "Piece");
    cy.log("Error in the display of the delivery date");
    cy.wait(3500);
    selectProductDetails("Steel Rebar", "Ton", "Sabic Steel");
    cy.wait(3500);
    cy.get("h3").contains("Proceed to RFQ").click();
    cy.wait(6500);
    verifyProductSummary("Window Air Condition", 100, "Piece");
    verifyProductSummary("Steel Rebar", 100, "Ton");
    cy.get("button").contains("Next").click();
    cy.contains("Submit RFQ").click();
  });
});
