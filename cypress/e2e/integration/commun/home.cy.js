import Home from "../../../support/pages/commun/Home";

describe("Home Page UI Verification", () => {
  let home;

  before(() => {
    home = new Home();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    home.interceptData();
  });

  it("should display Promotional Modal", () => {
    home.promotionalModal.should("exist");
  });

  it("should display Promo Modal Image", () => {
    home.promoModalImg.should("be.visible");
  });

  it("should display Promo Modal Close Button", () => {
    home.promoModalCloseButton.should("exist");
  });

  it("should display Search Input", () => {
    home.searchInput.should("be.visible");
  });

  it("should display Search Submit Button", () => {
    home.searchSubmitButton.should("be.visible");
  });

  it("should display Categories Menu", () => {
    home.categoriesMenu.should("be.visible");
  });

  it("should display Categories Menu Title", () => {
    home.categoriesMenuTitle.should("be.visible");
  });

  it("should display Products Section", () => {
    home.productsSection.should("be.visible");
  });

  it("should display Top Products Section", () => {
    home.topProductsSection.should("be.visible");
  });

  it("should display Top Products Section Title", () => {
    home.topProductsSectionTitle.should("be.visible");
  });

  it("should display Top Products Cards Container", () => {
    home.topProductsCardsContainer.should("be.visible");
  });

  it("should display Categories Section", () => {
    home.categoriesSection.should("be.visible");
  });

  it("should display Categories Section Title", () => {
    home.categoriesSectionTitle.should("be.visible");
  });

  it("should display Categories Cards Section Container", () => {
    home.categoriesCardsSectionContainer.should("be.visible");
  });

  it("should display My Selection Div", () => {
    home.mySelectionDiv.should("be.visible");
  });

  it("should display My Selection Title", () => {
    home.mySelectionTitle.should("be.visible");
  });

  it("should display No Products Message", () => {
    home.noProductsMessage.should("be.visible");
  });

  it("should display No Products Descriptive Text", () => {
    home.noProductsDescriptiveText.should("be.visible");
  });
});
describe("Promotional Modal Ui verifications", () => {
  let home;

  before(() => {
    home = new Home();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    home.interceptData();
  });

  it("should display the main promotional text", () => {
    home.promotionalModal.within(() => {
      cy.contains(
        "Great news! You can request your credit starting from today."
      ).should("be.visible");
    });
  });

  it("should display the exclusive credit offer text", () => {
    home.promotionalModal.within(() => {
      cy.contains(
        "As a valued partner, you're eligible for exclusive credit offers designed to streamline your business operations."
      ).should("be.visible");
    });
  });

  it("should display the tailored credit options text", () => {
    home.promotionalModal.within(() => {
      cy.contains(
        "Our tailored credit options empower you to seize new opportunities and scale your business with ease."
      ).should("be.visible");
    });
  });

  it("should display the Request Credit button", () => {
    home.promotionalModal.within(() => {
      cy.get("button").contains("Request credit").should("be.visible");
    });
  });

  it("should display the promotional image", () => {
    home.promotionalModal.within(() => {
      cy.get("img").should("be.visible");
    });
  });

  it("should display the close button", () => {
    home.promotionalModal.within(() => {
      home.promoModalCloseButton.should("exist");
    });
  });
});

describe("Top Bar Ui Verifications", () => {
  let home;

  before(() => {
    home = new Home();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    home.interceptData();
    home.promoModalCloseButton.click({ force: true });
  });
  it("should display logo", () => {
    home.logo.should("be.visible");
  });
  it("should display Change Language menu", () => {});
  it("should display Request Credit Button", () => {
    home.requestCreditButton.should("be.visible");
  });
  it("should display Login Button", () => {
    home.loginButton.should("be.visible");
  });
  it("should display Register button", () => {
    home.registerButton.should("be.visible");
  });
});
describe.only("Register Modal Ui Verifications", () => {
  let home;

  before(() => {
    home = new Home();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    home.interceptData();
    home.promoModalCloseButton.click({ force: true });
    home.registerButton.click();
  });
  it("should display Modal", () => {
    cy.wait(500);
    home.registerModal.should("exist");
  });
});
describe.only("Login Modal Ui Verifications", () => {
  let home;

  before(() => {
    home = new Home();
  });

  beforeEach(() => {
    cy.viewportForDevice("alien");
    home.interceptData();
    home.promoModalCloseButton.click({ force: true });
    home.loginButton.click();
  });
  it("should display Modal", () => {
    home.loginModal.should("exist");
  });
});
