describe('Forget Password tests on preprod', () => {
    beforeEach(() => {
      cy.visit('/#/oubli-mot-de-passe');
      cy.get('input[aria-label="E-mail"]').as('emailInput')
      cy.get('button[type="button"]').as('submitButton')
      cy.get('.forgottenPassword').as('linktoLogin')
    })
    describe('should verify that all elements are displayed and visible', () => {
  
      it('should display the login form', () => {
        cy.get('form').should('be.visible').and('have.attr', 'id', 'loginForm')
      })
      it('should display the logo' , () => {
        cy.get('.heading > img').should('be.visible')
      })
      it('should display the Form title',() => {
        cy.get('.heading').should('be.visible').contains('Réinitialiser le mot de passe')
      })
      it('should display descriptive text', ()=> {
        cy.get('p').contains('Saisissez votre adresse e-mail et vérifiez votre boite mail. Un lien pour réinitialiser votre mot de passe vous sera envoyé.')
      })
      it('should display Email input' , () => {
        cy.get('@emailInput').should('be.visible')
      })
      it('should display Submit button' , () => {
        cy.get('@submitButton').should('be.visible')
      })
      it('should display a link to login page',() => {
        cy.get('@linktoLogin').should('be.visible').contains('Retour à la page de connexion')
      })

      it('should redirect user correctly to login page ' , () => {
        cy.get('@linktoLogin').click()
        cy.url().should('include', 'https://mmp-backoffice.test.infopro-digital-automotive.com/#/auth');
      })
      it('should display the copyright icon', () => {
        cy.get('i').should('have.class', 'far fa-copyright copyrightIcon').should('be.visible')
      })
  
      it('should display the group name ', () => {
        cy.contains('Infopro Digital Automotive').should('be.visible')
      })
      it('should display the group logo', () => {
        cy.get('.IPDAutoLogo').should('be.visible')
      })
    })
})