describe("RFQ Flow with markup", () => {
  // -------- Functions --------

  function openSubmitRFQPage() {
    cy.contains("Submit a new RFQ").should("be.visible").click();
    cy.wait("@getCategories");
    cy.contains("Window Air Condition").click();
  }

  function selectProductDetails() {
    cy.contains("Please select the details of the item to add")
      .parent()
      .parent()
      .within(() => {
        cy.get('input[role="combobox"]').click();
        cy.contains("Piece");
        cy.get('input[name="product.quantity"]').click().type("100");
        cy.get('input[placeholder="Select a date"]').click();
        cy.contains("30").click({ force: true });
        cy.get('textarea[name="product.comment"]')
          .should("be.visible")
          .type("This is a test comment.");
        cy.get('input[type="file"]').selectFile(
          "cypress/fixtures/pdf-test.pdf",
          { force: true }
        );
        cy.wait(2500);
        cy.get("select").last().select(1);
        cy.contains("Select Brand").click();
        cy.contains("Samsung").click();
        cy.contains("1 Brands selected").click();
        cy.get(".mt-4 > .text-basic-800").click({ force: true });
      });
    cy.wait(6500);
    cy.get("h3").contains("Proceed to RFQ").click();
    cy.wait(6500);
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

  function fillProjectAndLocationInfo() {
    cy.get('input[placeholder="Write your project name here"]').type(
      "cypress Markup Flow"
    );
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
    cy.contains("Your RFQ has been successfully submitted!").should(
      "be.visible"
    );
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

    it("should create an RFQ", () => {
      cy.visit("/en/app/contractor");
      cy.intercept("GET", "https://sandbox.watad.vip/api/category/listAll*").as(
        "getCategories"
      );

      openSubmitRFQPage();
      selectProductDetails();
      verifyProductSummary();
      fillProjectAndLocationInfo();
      submitRFQ();
      verifySubmissionSuccess();
    });
  });
  describe("Admin validate RFQ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });
    it("should validate RFQ", () => {
      cy.visit("/en/app/admin/rfqs");
      cy.intercept("PATCH", "**/api/rfq/admin/**/update-validation").as(
        "updateValidation"
      );
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.get('button[role="switch"]')
        .first()
        .should("have.attr", "data-headlessui-state", "");
      cy.get("tbody.relative > :nth-child(1) > :nth-child(5)").click();

      cy.wait("@updateValidation").its("response.statusCode").should("eq", 200);
      cy.get('button[role="switch"]')
        .first()
        .should("have.attr", "data-headlessui-state", "checked");
    });
  });

  describe("Supplier Submit an offer", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("supplierSession", () => {
        cy.loginWithRole("supplier");
      });
    });
    it("Supplier Submit offer", () => {
      cy.visit("/en/app/supplier/rfqs");
      cy.get('input[placeholder="Search"]').clear().type("cypress Markup Flow");
      cy.wait(10000);
      cy.contains("View").click();
      cy.contains("Products number");
      cy.contains("1 Product");
      cy.contains("Quotations deadline");
      cy.contains("Lowest total");
      cy.contains("0.00 SAR");
      cy.contains("Highest total");
      cy.contains("Window Air Condition");
      cy.contains("Split Air Conditioners & Window Air Conditioners");
      cy.contains("Brands:");
      cy.contains("Samsung");

      cy.get(".justify-between > .group").click();
      cy.contains("Details");
      cy.contains("Quantity");
      cy.contains("100");
      cy.contains("Units");
      cy.contains("Piece");
      cy.contains("Dates information");
      cy.contains("Delivery date");
      cy.contains("04/30/25");
      cy.contains("Delivery location");
      cy.contains("Riyadh");
      cy.contains("City of Riyadh");
      cy.contains("Specs");
      cy.contains("Cooling Capacity:");
      cy.contains("18,000 BTU");
      cy.contains("Comment");
      cy.contains("This is a test comment.");
      cy.contains("Brands");
      cy.contains("Samsung");

      cy.get("#headlessui-disclosure-button-\\:r0\\:").click();
      cy.get(".mb-2 > .group").click();
      cy.get('input[name="priceUnit"]').type("10");
      cy.get('input[placeholder="Select date"]').first().click();
      cy.get(".overflow-hidden > .grid").within(() => {
        cy.contains("30").click();
      });
      cy.get('input[placeholder="Select date"]').last().click();
      cy.get(".overflow-hidden > .grid").within(() => {
        cy.contains("30").click();
      });

      cy.get("textarea").clear().type("Supplier Comment");

      cy.get(".justify-end > .group").click();
      cy.intercept("POST", "**/api/offer/quotation/**").as("postOffer");

      cy.get("#headlessui-dialog-panel-\\:r1d\\:")
        .should("exist")
        .within(() => {
          cy.get("button").contains("Confirm").click();
        });
      cy.wait("@postOffer");
      cy.contains("successfully");
    });
  });
  describe("Admin apply 20% markup on the recieved offer ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });
    it("should apply 20% markup", () => {
      cy.intercept("GET", "/api/rfq/admin/list*").as("getRfqList");
      cy.intercept("GET", "**/en/app/admin/rfqs/**").as("getRfqDetails");
      cy.intercept("PATCH", "/api/offer/admin/*/update-validation").as(
        "validateoffer"
      );
      cy.intercept("GET", "/api/offer/quotation/**").as("getQuotationDetails");
      cy.intercept("PATCH", " /api/quotation/**").as("updateGlobalMarkup");
      cy.intercept("PATCH", "/api/offer/admin/margin/**").as(
        "updateOfferMargin"
      );

      cy.visit("/en/app/admin/rfqs");
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait(5000);
      cy.get("button").contains("View").click();
      cy.get("button");
      cy.wait("@getRfqDetails");
      cy.wait(5000);
      cy.get("button").last().click();
      cy.wait("@getQuotationDetails");
      //   cy.get('input[type="number"]').eq(1).type('20', { force: true });
      cy.get('input[type="number"]').first().type("20");
      cy.contains("Update markup").click({ force: true });

      cy.get('h3[data-headlessui-state="open"]')
        .should("be.visible")
        .parent()
        .within(() => {
          cy.get("button").contains("Confirm").click();
        });
      cy.wait("@updateGlobalMarkup");
    });
  });
  describe("Admin validate offer submitted", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });
    it("should validate RFQ data", () => {
      cy.intercept("GET", "/api/rfq/admin/list*").as("getRfqList");
      cy.intercept("GET", "**/api/rfq/admin/list**").as("getSupplierRFQs");
      cy.intercept("GET", "**/en/app/admin/rfqs/**").as("getRfqDetails");
      cy.visit("/en/app/admin/rfqs");
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait("@getSupplierRFQs");
      cy.wait(5000);
      cy.get("button").contains("View").click();
      cy.get("button");
      cy.wait("@getRfqDetails");
      cy.wait(5000);

      cy.contains("Product").should("be.visible");
      cy.contains("1").should("be.visible");

      cy.contains("Quotations deadline").should("be.visible");
      cy.contains("days remaining").should("be.visible");

      cy.contains("Lowest total").should("be.visible");
      cy.contains("1,200.00 SAR").should("be.visible");

      cy.contains("Highest total").should("be.visible");

      cy.contains("Subquotations expired").should("be.visible");
      cy.contains("0").should("be.visible");

      cy.contains("Products with offers").should("be.visible");
      cy.contains("1/1").should("be.visible");

      cy.contains("Quotation with confirmed offer").should("be.visible");
      cy.contains("0/1").should("be.visible");
      cy.get('button[type="button"]').eq(12).click();
      cy.contains("12.00 SAR").should("be.visible");
      cy.contains("1,200.00 SAR").should("be.visible");

      cy.contains("Installation Not Included").should("be.visible");
      cy.contains("Delivery included").should("be.visible");
      cy.contains("Exact match").should("be.visible");

      cy.contains("Apr 30, 2025").should("be.visible");
      cy.contains("days remaining").should("be.visible");
    });
    it("should validate the offer", () => {
      cy.intercept("GET", "/api/rfq/admin/list*").as("getRfqList");
      cy.intercept("GET", "**/api/rfq/admin/list**").as("getSupplierRFQs");
      cy.intercept("GET", "**/en/app/admin/rfqs/**").as("getRfqDetails");
      cy.intercept("GET", "api/rfq/admin/stats/pending-offers/1458").as(
        "getPendingOffers"
      );
      cy.intercept("PATCH", "/api/offer/admin/*/update-validation").as(
        "validateoffer"
      );
      cy.visit("/en/app/admin/rfqs");
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait("@getSupplierRFQs");
      cy.wait(5000);
      cy.get("button").contains("View").click();
      cy.wait("@getRfqDetails");
      cy.wait(5000);
      cy.get("button").last().click();

      cy.get('button[role="switch"]').click();
      cy.wait("@validateoffer").its("response.statusCode").should("eq", 200);
    });
  });

  describe("Contractor Accept offer ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("contractorSession", () => {
        cy.loginWithRole("contractor");
      });
    });
    it("should verify rfq data ", () => {
      cy.visit("/en/app/contractor/rfqs");
      cy.intercept("GET", "**/api/rfq/contractor/list**").as(
        "getContractorRfqs"
      );
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait("@getContractorRfqs");
      cy.get(":nth-child(1) > :nth-child(8) > .px-6 > .border").click();
      cy.wait(3000);
      cy.contains("Project:").should("be.visible");
      cy.contains("cypress Markup Flow").should("be.visible");

      cy.contains("Product").should("be.visible");
      cy.contains("1").should("be.visible");

      cy.contains("Quotations deadline").should("be.visible");
      cy.contains("days remaining").should("be.visible");

      cy.contains("Lowest total").should("be.visible");
      cy.contains("1,200.00 SAR").should("be.visible");

      cy.contains("Highest total").should("be.visible");

      cy.contains("Window Air Condition").should("be.visible");

      cy.contains("Waiting For Offer Selection").should("be.visible");

      cy.contains("Lowest price").should("be.visible");
      cy.contains("Highest price").should("be.visible");

      cy.contains("Brands:").should("be.visible");
      cy.contains("Samsung").should("be.visible");

      cy.contains("Offers").should("be.visible");
      cy.contains("Suppliers").should("be.visible");

      cy.contains("Offers expired").should("be.visible");
      cy.contains("Negotiations sent").should("be.visible");
    });
    it("should verify offer data", () => {
      cy.intercept("GET", "**/api/rfq/contractor/list**").as(
        "getContractorRfqs"
      );
      cy.visit("/en/app/contractor/rfqs");
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait("@getContractorRfqs");
      cy.get(":nth-child(1) > :nth-child(8) > .px-6 > .border").click();
      cy.wait(3000);
      cy.get("button").last().click();
      cy.get("table tr ")
        .eq(1)
        .within(() => {
          cy.contains("Supplier A").should("be.visible");
          cy.contains("12.00 SAR").should("be.visible");
          cy.contains("1200.00 SAR").should("be.visible");

          cy.contains("Installation Not Included").should("be.visible");
          cy.contains("Delivery included").should("be.visible");
          cy.contains("Exact match").should("be.visible");

          cy.contains("Apr 30, 2025").should("be.visible");
          cy.contains("days remaining").should("be.visible");
          cy.contains("Samsung").should("be.visible");
        });
    });
    it("should accept the offer recieved", () => {
      cy.intercept("GET", "**/api/rfq/contractor/list**").as(
        "getContractorRfqs"
      );
      cy.intercept("PATCH", "**/api/rfq/offer/select/**").as("selectOffer");
      cy.visit("/en/app/contractor/rfqs");
      cy.get('input[placeholder="search"]').clear().type("cypress Markup Flow");
      cy.wait("@getContractorRfqs");
      cy.get(":nth-child(1) > :nth-child(8) > .px-6 > .border").click();
      cy.wait(3000);
      cy.get("button").last().click();
      cy.get("table tr ")
        .eq(1)
        .within(() => {
          cy.get("button").contains("Confirm order").click();
        });

      cy.contains("Select Offer")
        .parent()
        .parent()
        .within(() => {
          cy.get("button").contains("Confirm").click();
        });
      cy.wait("@selectOffer");
    });

    it("should generate an order with correct data ", () => {
      cy.visit("/en/app/contractor/orders");
      cy.get('input[placeholder="Search"]').clear().type("cypress Markup Flow");
      cy.contains("View").first().click();
      cy.wait(1000);
      cy.contains("Window Air Condition").should("be.visible");
      cy.contains("1,200.00 SAR").should("be.visible");
      cy.contains("Price does not include VAT%").should("be.visible");
      cy.contains("04/30/25").should("be.visible");
      cy.contains("Delivery date").should("be.visible");
      cy.contains("Sage Wooten edit").should("be.visible");
      cy.contains("Supplier Name").should("be.visible");
    });
  });
});
