
import 'cypress-xpath';
class LoginPage {
    // Selectors
    get emailInput() {
      return cy.get('@emailInput');
    }
  
    get passwordInput() {
      return cy.get('@passwordInput');
    }
  
    get loginButton() {
      return cy.get('@loginButton');
    }
  
    // Action to visit the page and alias the elements
    visitAndAliasElements() {
      cy.visit('https://mmp-backoffice.test.infopro-digital-automotive.com'); // Adjust the URL as per your application
  
      // Alias elements for easier reference in tests
      cy.xpath('//*[@id="loginForm"]/fieldset/div[1]/div/div/div[1]/div[1]/input').as('emailInput');
      cy.xpath('//*[@id="loginForm"]/fieldset/div[2]/div/div/div[1]/div[1]/input').as('passwordInput');
      cy.get('button').contains('Se connecter').as('loginButton');
    }
  
    // Actions
    typeEmail(email) {
      this.emailInput.type(email);
    }
  
    typePassword(password) {
      this.passwordInput.type(password);
    }
  
    clickLoginButton() {
      this.loginButton.click({ force: true });
    }
  
    interceptLoginRequest() {
      cy.intercept('POST', 'https://mmp-backoffice.test.infopro-digital-automotive.com/api/v1/service-authentification/token').as('loginRequest');
    }
  
    // Assertions
    assertErrorMessageForEmptyEmail() {
      cy.contains('E-mail');
      cy.contains('Merci de renseigner selon le format email@domaine.tld');
    }
  
    assertErrorMessageForEmptyPassword() {
      cy.contains('Mot de passe');
      cy.contains('Mot de passe obligatoire.');
    }
  
    assertSubmitButtonIsDisabled() {
      this.loginButton.should('have.attr', 'disabled');
    }
  
    assertErrorMessageForInvalidCredentials() {
      cy.get('.container > :nth-child(2) > .v-snack > .v-snack__wrapper > .v-snack__content > span').should('be.visible');
    }
  
    assertLoginSuccess() {
      cy.url().should('include', 'https://mmp-backoffice.test.infopro-digital-automotive.com/#/selection-reseau');
    }
  
    // Intercept request and validate response
    validateRequestBodyAndResponse(reqBody, statusCode, message) {
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(statusCode);
        if (message) {
          expect(interception.response.body).to.have.property('message', message);
        } else {
          expect(interception.response.body).to.have.property('access_token');
        }
      });
    }
  }
  
  export default new LoginPage();
  