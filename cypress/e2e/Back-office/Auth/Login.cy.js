describe('Login tests on preprod', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewportForDevice('tablet')
    cy.get('input[name="email"]').as('emailInput')
    cy.get('input[name="password"]').as('passwordInput')
    cy.get('button[type="button"]').as('loginButton')
  })
  describe('should verify that all elements are displayed and visible', () => {

    it('should display the login form', () => {
      cy.get('form').should('be.visible').and('have.attr', 'id', 'loginForm')
    })

    it('should display the logo', () => {
      cy.get('.heading > img').should('be.visible')

    })
    it('should display the email input', () => {
      cy.get('@emailInput').should('be.visible')

    })
    it('should display the password input', () => {
      cy.get('@passwordInput').should('be.visible')

    })
    it('should display a submit button ', () => {
      cy.get('button').contains('Se connecter').should('be.visible')
    })
    it('should display a link to forget password', () => {
      cy.get('a').contains('Mot de passe oublié').should('be.visible')
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
  describe('shoud verify the login functionnality', () => {
    it('should display an error message if email input is empty', () => {
      cy.get('@emailInput').click()
      cy.get('@loginButton').click({ force: true })
      cy.contains('E-mail')
      cy.contains('Merci de renseigner selon le format email@domaine.tld')
    })
    it('should display an error message if password input is empty', () => {
      cy.get('@passwordInput').click()
      cy.get('@loginButton').click({ force: true })
      cy.contains('Mot de passe')
      cy.contains('Mot de passe obligatoire.')
    })
    it('should display a disabled submit button & error message if fields are empty', () =>
      cy.get('@loginButton').should('have.attr', 'disabled'))
    it('should display an error message on submit with wrong email', () => {
      
      cy.intercept('POST', 'https://mmp-backoffice.test.infopro-digital-automotive.com/api/v1/service-authentification/token', (req) => {
        
        expect(req.body).to.include({
          username: 'admin@admin.com',
          password: 'Test1234',
        });
      }).as('loginRequest');
    
      
      cy.get('@emailInput').type('admin@admin.com');
      cy.get('@passwordInput').type('Test1234');
    
      
      cy.get('@loginButton').click({force: true});
    
      
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.body).to.have.property('message', "The user credentials were incorrect.");

      }) ;
    
      
      cy.get('.container > :nth-child(2) > .v-snack > .v-snack__wrapper > .v-snack__content > span').should('be.visible')
    });
    it('should display an error message on submit with wrong password', () => {
      
      cy.intercept('POST', 'https://mmp-backoffice.test.infopro-digital-automotive.com/api/v1/service-authentification/token', (req) => {
        
        expect(req.body).to.include({
          username: 'admin@admin.com',
          password: 'Test1234',
        });
      }).as('loginRequest');
    
      
      cy.get('@emailInput').type('admin@admin.com');
      cy.get('@passwordInput').type('Test1234');
    
      
      cy.get('@loginButton').click({force: true});
    
      
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(400);
        expect(interception.response.body).to.have.property('message', "The user credentials were incorrect.");

      }) ;
    
      
      cy.get('.container > :nth-child(2) > .v-snack > .v-snack__wrapper > .v-snack__content > span').should('be.visible')
    });
    it('should login successfully with valid credentials', () => {
      
      cy.intercept('POST', 'https://mmp-backoffice.test.infopro-digital-automotive.com/api/v1/service-authentification/token', (req) => {
        
        expect(req.body).to.include({
          username: 'admin@admin.com',
          password: 'Test123*',
        });
      }).as('loginRequest');
    
      
      cy.get('@emailInput').type('admin@admin.com');
      cy.get('@passwordInput').type('Test123*');
    
      
      cy.get('@loginButton').click({force: true});
    
      
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body).to.have.property("access_token");

      }) ;
    
      
      cy.url().should('include', 'https://mmp-backoffice.test.infopro-digital-automotive.com/#/selection-reseau');
    });
  })
  
})