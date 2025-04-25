export const credentials = {
    admin: {
      username: Cypress.env("CYPRESS_EMAIL_ADMIN"),
      password: Cypress.env("CYPRESS_PASSWORD_ADMIN"),
    },
    contractor: {
      username: Cypress.env("CYPRESS_EMAIL_CONTRACTOR"),
      password: Cypress.env("CYPRESS_PASSWORD_CONTRACTOR"),
    },
    supplier: {
      username: Cypress.env("CYPRESS_EMAIL_SUPPLIER"),
      password: Cypress.env("CYPRESS_PASSWORD_SUPPLIER"),
    },
  };