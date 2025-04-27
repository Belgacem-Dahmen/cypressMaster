describe("Product Flow", () => {
  const createCategory = () => {
    cy.visit("/en/app/admin/users/categories");
    cy.get("button").contains("Add a new category").click();
    cy.get('input[name="nameAr"]').type("cypress category");
    cy.get('input[name="nameEn"]').type("cypress category");
    cy.get('input[role="combobox"]').type("TON{enter}");
    cy.get("input[type='file']").selectFile(
      "cypress/fixtures/cypress-img.png",
      {
        force: true,
      }
    );
    cy.get('button[type="submit"]').click();
    cy.getSuccessMessage("Category added successfully");
  };
  const searchCategory = () => {
    cy.intercept(
      "GET",
      /\/api\/category\/paginated-parent\?skip=0&take=10&nameLike=.*/
    ).as("search");
    cy.visit("/en/app/admin/users/categories");
    cy.get("input[placeholder='Search']").clear().type("cy");
    cy.wait("@search");
    cy.contains("Showing 1 to 1 of 1 results");
  };
  const addBrand = () => {
    cy.visit("/en/app/admin/brands");
    cy.get("button", { timeout: 10000 }).contains("Add Brand").click();

    cy.get('div[data-headlessui-state="open"]')
      .first()
      .within(() => {
        cy.get('input[name="name.ar"]').clear().type("brand-cypress");
        cy.get('input[name="name.en"]').clear().type("brand-cypress");
        cy.get("button").contains("Add").click();
      });
    cy.wait(2000);
  };
  const assignBrand = () => {
    cy.contains("Assign Brand").click();
    cy.contains("Riyadh Cement").click();
    cy.contains("Add Brand").click();
    cy.getSuccessMessage("Brand assigned successfully");
  };

  const assignSpecs = () => {
    cy.contains("Assign Specs").click();
    cy.contains("Gauge").click();
    cy.contains("22 Gauge")
      .parent()
      .within(() => {
        cy.get("button").click();
      });
    cy.contains("Add spec").click();
    //Select spec option
  };

  describe("Admin ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });

    it("Should create a new category", () => {
      createCategory();
    });
    it("should add new Brand", () => {
      addBrand();
    });

    it("should assign the added brand to the Category", () => {
      searchCategory();
      assignBrand();
    });
    it("should assign the added spec to the category", () => {
      searchCategory();
      assignSpecs();
    });
  });
  const supplierAddCategory = () => {
    cy.visit("/en/app/supplier/categories");
    cy.contains("Add new categories").click();
    cy.contains("cypress category").parent().contains("Select").click();
    cy.get(".go3958317564");
  };

  describe("Supplier", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("supplierSession", () => {
        cy.loginWithRole("supplier");
      });
    });
    it("should add the new categorie ", () => {
      supplierAddCategory();
    });
  });

  function selectProductDetails(name, unit, brand) {
    cy.wait(2500);
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
  function verifyProductSummary() {
    cy.contains("cypress category");
    cy.contains("100").should("be.visible");
    cy.contains("Quantity").should("be.visible");
    cy.contains("Ton").should("be.visible");
    cy.contains("Unit").should("be.visible");
    cy.contains("Apr 30, 2025 => 100").should("be.visible");
    cy.contains("Delivery date").should("be.visible");
    cy.get("button").contains("Next").click();
  }

  function fillProjectAndLocationInfo(projectName) {
    cy.get('input[placeholder="Write your project name here"]').type(
      projectName
    );
    cy.get('input[placeholder="Select a date"]').click();
    cy.contains("30").click({ force: true });

    cy.contains("Choose your delivery coverage").click();
    cy.contains("City of Riyadh").click();

    cy.get('select[name="neighborhoods"]').select("Al Malaz");
    cy.get('input[name="address.addressLabel"]').type("Al Manar");
    cy.wait(10000);
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
  const verifyRfqData = () => {
    cy.contains("Project:").should("be.visible");
    cy.contains("Full product flow").should("be.visible");
    cy.contains("Product").should("be.visible");
    cy.contains("Quotations deadline").should("be.visible");
    cy.contains("days remaining").should("be.visible");
    cy.contains("Lowest total").should("be.visible");
    cy.contains("0.00 SAR").should("be.visible");
    cy.contains("Highest total").should("be.visible");
    cy.contains("Subquotations expired").should("be.visible");
    cy.contains("0").should("be.visible");
    cy.contains("Products with offers").should("be.visible");
    cy.contains("0/1").should("be.visible");
    cy.contains("Quotation with confirmed offer").should("be.visible");
    cy.contains("0/1").should("be.visible");
  };
  const verifyRfqProductDetails = () => {
    cy.contains("cypress category").should("be.visible");
    cy.contains("Details").should("be.visible");
    cy.contains("Quantity").should("be.visible");
    cy.contains("100").should("be.visible");
    cy.contains("Units").should("be.visible");
    cy.contains("Ton").should("be.visible");
    cy.contains("Specs").should("be.visible");
    cy.contains("Gauge:").should("be.visible");
    cy.contains("22 Gauge").should("be.visible");
    cy.contains("Dates information").should("be.visible");
    cy.contains("Delivery date").should("be.visible");
    cy.contains("04/30/25").should("be.visible");
    cy.contains("Delivery location").should("be.visible");
    cy.contains("Riyadh").should("be.visible");
    cy.contains("City of Riyadh").should("be.visible");
    cy.contains("Comment").should("be.visible");
    cy.contains("This is a test comment.").should("be.visible");
    cy.contains("Attached files").should("be.visible");
    cy.contains("pdf-test.pdf").should("be.visible");
    cy.contains("24 Apr, 2025 at 12:06 PM");
    cy.contains("Brands").should("be.visible");
    cy.contains("Riyadh Cement").should("be.visible");
  };
  const adminVerifyProductDetails = () => {
    cy.contains("cypress category").should("be.visible");
    cy.contains("Details").should("be.visible");
    cy.contains("Quantity").should("be.visible");
    cy.contains("100").should("be.visible");
    cy.contains("Units").should("be.visible");
    cy.contains("Ton").should("be.visible");
    cy.contains("Specs").should("be.visible");
    cy.contains("Gauge:").should("be.visible");
    cy.contains("22 Gauge").should("be.visible");
    cy.contains("Dates information").should("be.visible");
    cy.contains("Delivery date").should("be.visible");
    cy.contains("04/30/25").should("be.visible");
    cy.contains("Delivery location").should("be.visible");
    cy.contains("Riyadh").should("be.visible");
    cy.contains("City of Riyadh").should("be.visible");
    cy.contains("Comment").should("be.visible");
    cy.contains("This is a test comment.").should("be.visible");
    cy.contains("Attachment").should("be.visible");
    cy.contains("pdf-test.pdf").should("be.visible");
    cy.contains("24 Apr, 2025 at 12:06 PM");
    cy.contains("Brands").should("be.visible");
    cy.contains("Riyadh Cement").should("be.visible");
  };
  describe("Contractor ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("contractorSession", () => {
        cy.loginWithRole("contractor");
      });
    });
    it("should create an RFQ with the recent category", () => {
      cy.intercept("GET", "https://sandbox.watad.vip/api/category/listAll*").as(
        "getCategories"
      );
      cy.visit("/en/app/contractor");
      cy.contains("Submit a new RFQ").should("be.visible").click();
      cy.get("input").type("cy");
      cy.wait("@getCategories");

      cy.contains("cypress category").click();
      cy.get(":nth-child(2) > .overflow-hidden").click();
      selectProductDetails("cypress category", "Ton", "Riyadh Cement");
      cy.wait(6500);
      cy.get("h3").contains("Proceed to RFQ").click();
      verifyProductSummary();
      fillProjectAndLocationInfo("Full product flow");
      submitRFQ();
      verifySubmissionSuccess();
    });
    it("should validate RFQ data", () => {
      cy.visit("/en/app/contractor/rfqs");
      cy.get("input").type("Full product flow");
      cy.get(".px-6 > .border").click();
      cy.wait(5000);
      verifyRfqData();
    });
    it("should validate Product Data , unit , specs , brand...", () => {
      cy.visit("/en/app/contractor/rfqs");
      cy.intercept("GET", "/api/rfq/contractor/list*").as("rfqSearch");
      cy.intercept("GET", "/api/rfq/**").as("rfqData");
      cy.get('input[placeholder="search"]').clear().type("Full product flow");
      cy.wait("@rfqSearch");
      cy.get(".px-6 > .border").click();
      cy.wait("@rfqData");
      cy.wait(5000);
      cy.get("button").contains("View details").click();
      verifyRfqProductDetails();
    });
  });
  describe("Admin ", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });
    it("should review rfq data", () => {
      cy.visit("/en/app/admin/rfqs");
      cy.get('input[placeholder="search"]').clear().type("Full product flow");
      cy.get("button").contains("View").click();
      cy.wait(5000);
      verifyRfqData();
    });
    it("should validate the product details", () => {
      cy.visit("/en/app/admin/rfqs");
      cy.intercept("GET", "/api/rfq/admin/list*").as("rfqSearch");
      cy.intercept("GET", "/api/rfq/**").as("rfqData");
      cy.get('input[placeholder="search"]').clear().type("Full product flow");
      cy.wait("@rfqSearch");
      cy.get("button").contains("View").click();
      cy.wait("@rfqData");
      cy.wait(5000);
      cy.get("button").contains("View details").click();
      adminVerifyProductDetails();
    });
  });
  describe("Supplier", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("supplierSession", () => {
        cy.loginWithRole("supplier");
      });
    });
    it("should not find the RFQ", () => {
      cy.visit("/en/app/supplier/rfqs");
      cy.get('input[placeholder="Search"]').clear().type("Full product flow");
      cy.contains("No data available");
    });
  });

  describe("Admin", () => {
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
      cy.get('input[placeholder="search"]').clear().type("Full product flow");
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

  const supplierVerifyProductDetails = () => {
    cy.contains("Details").should("be.visible");
    cy.contains("Quantity").should("be.visible");
    cy.contains("100").should("be.visible");
    cy.contains("Units").should("be.visible");
    cy.contains("Ton").should("be.visible");

    // Dates info
    cy.contains("Dates information").should("be.visible");
    cy.contains("Delivery date").should("be.visible");
    cy.contains("04/30/25").should("be.visible");

    // Location info
    cy.contains("Delivery location").should("be.visible");
    cy.contains("Riyadh").should("be.visible");
    cy.contains("City of Riyadh").should("be.visible");

    // Specs info
    cy.contains("Specs").should("be.visible");
    cy.contains("Gauge:").should("be.visible");
    cy.contains("22 Gauge").should("be.visible");

    // Comment
    cy.contains("Comment").should("be.visible");
    cy.contains("This is a test comment.").should("be.visible");

    // Brands
    cy.contains("Brands").should("be.visible");
    cy.contains("Riyadh Cement").should("be.visible");
  };
  describe("Supplier", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("supplierSession", () => {
        cy.loginWithRole("supplier");
      });
    });
    it("should find the RFQ", () => {
      cy.visit("/en/app/supplier/rfqs");
      cy.get('input[placeholder="Search"]').clear().type("Full product flow");
      cy.contains("Full product flow");
      cy.contains("Showing 1 to 1 of 1 results");
      cy.get("button").contains("View").click();
      cy.contains("View details").click();
      supplierVerifyProductDetails();
    });
  });
  describe("Cleaning data", () => {
    beforeEach(() => {
      cy.viewportForDevice("alien");

      cy.session("adminSession", () => {
        cy.loginWithRole("admin");
      });
    });

    it("should delete the category", () => {
      cy.visit("/en/app/admin/users/categories");

      cy.get("input[placeholder='Search']", { timeout: 10000 }).as(
        "searchInput"
      );
      cy.get("@searchInput").type("Cypress", { delay: 100 });

      cy.contains("cypress")
        .parent()
        .parent()
        .within(() => {
          cy.get("button").eq(6).click(); // Adjust index if needed
        });

      cy.contains('Are you sure you want the category "cypress category"')
        .parent()
        .parent()
        .within(() => {
          cy.get("button").contains("Delete").click();
        });

      cy.getSuccessMessage("Category removed successfully");
    });
    it("should delete_the Brand", () => {
      cy.visit("/en/app/admin/brands");
      cy.get("input[placeholder='Search']", { timeout: 10000 }).as(
        "searchInput"
      );
      cy.get("@searchInput").type("brand-cypress");
      cy.get("tbody").within(() => {
        cy.get("button").contains("Delete").click();
        cy.wait(1000);
      });
      cy.contains("Are you sure you want to delete this brand").should("exist");
      cy.get('button[type="submit"]').click();
      cy.intercept("DELETE", "/api/brands/**").as("deleteBrand");
      cy.wait("@deleteBrand").its("response.statusCode").should("eq", 200);
      // cy.getSuccessMessage("Brand deleted successfully");
      cy.get("@searchInput").type("brand-cypress");
      cy.contains("No data available");
    });

    const visitAdminRFQsPage = () => {
      cy.visit("/en/app/admin/rfqs");
    };
    const searchRFQByName = (name) => {
      cy.get('input[placeholder="search"]').clear().type(name);
    };
    it("Should search for the Created RFQ & delete it ", () => {
      cy.intercept("GET", "/api/rfq/admin/list*").as("rfqSearch");
      cy.intercept("DELETE", "/api/rfq/admin/**/delete").as("deleteRFQ");
      visitAdminRFQsPage();
      searchRFQByName("product full flow");
      cy.wait("@rfqSearch");
      cy.wait(10000);
      cy.get("button")
        .contains("Delete")
        .first()
        .click()
        .then(() => {
          cy.get(".max-w-\\[398px\\]").within(() => {
            cy.get("button").contains("Delete").click();
          });
          cy.wait("@deleteRFQ").its("response.statusCode").should("eq", 200);
        });
    });
  });
});
