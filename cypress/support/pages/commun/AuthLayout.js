import "cypress-xpath";

class AuthLayout {
  // Selectors

  get topbar() {
    return cy.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[1]/div');
  }
  get profileIcon() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[4]/div[4]/div/div'
    );
  }
  get profileFullName() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[4]/div[4]/p'
    );
  }
  get expandedLogo() {
    return cy.xpath('//*[@id="__next"]/div[3]/div/div[1]/div/div[1]/img[1]');
  }
  get miniLogo() {
    return cy.xpath('//*[@id="__next"]/div[3]/div/div[1]/div/div[1]/img[2]');
  }
  get toogleSidebar() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[3]/button'
    );
  }
  get switchLanguageButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[1]/div/div[4]/div[2]/button'
    );
  }

  get dashboardLink() {
    return cy.get('a[href="/en/app/contractor"]');
  }

  get rfqsLink() {
    return cy.get('a[href="/en/app/contractor/rfqs"]');
  }

  get ordersLink() {
    return cy.get('a[href="/en/app/contractor/orders"]');
  }

  get profileLink() {
    return cy.get('a[href="/en/app/contractor/me"]');
  }

  get usersLink() {
    return cy.get('a[href="/en/app/contractor/users"]');
  }

  get rolesPermissionsLink() {
    return cy.get('a[href="/en/app/contractor/roles-permissions"]');
  }

  get projectsLink() {
    return cy.get('a[href="/en/app/contractor/projects"]');
  }

  get whatsappLink() {
    return cy.get('a[href="https://wa.me/+923060481461"]');
  }

  get logoutButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[1]/div/div[2]/div[2]/div/div/div/div/button'
    );
  }
  visit() {
    cy.visit("/en/app/contractor");
  }
}

export default AuthLayout;
