import "cypress-xpath";

class Home {
  visit() {
    cy.visit("/en/");
  }
  interceptData() {
    cy.intercept("GET", "/api/**").as("getApiData");
    this.visit();
    cy.wait("@getApiData");
  }
  
  get promotionalModal() {
    return cy.xpath('//*[@id="headlessui-dialog-panel-:r9:"]');
  }

  get promoModalImg() {
    return cy.xpath('//*[@id="headlessui-dialog-panel-:r9:"]/div[2]/img');
  }

  get promoModalCloseButton() {
    return cy.xpath('//*[@id="headlessui-dialog-panel-:r9:"]/div[1]/button');
  }
  get topBar() {
    return cy.get("/html/body/div[1]/div[3]/header/div/div");
  }
  get logo() {
    return cy.get('img[alt="WATAD"]');
  }
  get requestCreditButton() {
    return cy.get("button").contains("Request credit");
  }

  get loginButton() {
    return cy.get("button").contains("Login");
  }

  get registerButton() {
    return cy.get("button").contains("Register");
  }

  get searchInput() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/input"
    );
  }

  get searchSubmitButton() {
    return cy.get('button[type="submit"]').contains("Search");
  }

  get categoriesMenu() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[1]/div");
  }

  get categoriesMenuTitle() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[1]/div/p");
  }

  get productsSection() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div"
    );
  }

  get topProductsSection() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[1]"
    );
  }

  get topProductsSectionTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[1]/h2"
    );
  }

  get topProductsCardsContainer() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[1]/div"
    );
  }

  get categoriesSection() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[2]"
    );
  }

  get categoriesSectionTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div[1]/div/div[3]/div[2]/div/div/div/div/div/div/div/div[2]/h2"
    );
  }

  get categoriesCardsSectionContainer() {
    return cy.get(""); // No selector was given, you can manually add it
  }

  get mySelectionDiv() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[3]");
  }

  get mySelectionTitle() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[3]/p");
  }

  get noProductsMessage() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[3]/div/h1");
  }

  get noProductsDescriptiveText() {
    return cy.xpath("/html/body/div[1]/div[3]/div[1]/div/div[3]/div[3]/div/h4");
  }

  get loginModal() {
    return cy.xpath('//*[@id="headlessui-dialog-panel-:rj:"]');
  }
  get registerModal() {
    return cy.contains("Welcome to Watad").parent().parent();
  }
}

export default Home;
