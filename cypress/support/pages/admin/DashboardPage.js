// cypress/support/pages/dashboardPage.js
require('cypress-xpath');
class DashboardPage {
    // Elements
    getUserProfileIcon() {
      return cy.get('.user-profile-icon');
    }
  
    getLogoutButton() {
      return cy.get('.logout-btn');
    }
  
    getSidebarMenu() {
      return cy.get('.sidebar-menu');
    }
  
    getWelcomeHeader() {
      return cy.get('.dashboard-welcome');
    }
  
    getNotificationBell() {
      return cy.get('.notification-bell');
    }
  
    // Actions
    clickUserProfile() {
      this.getUserProfileIcon().click();
    }
  
    clickLogout() {
      this.getLogoutButton().click();
    }
  
    clickSidebarMenuItem(menuText) {
      this.getSidebarMenu().contains(menuText).click();
    }
  
    // Assertions
    verifyWelcomeMessageContains(text) {
      this.getWelcomeHeader().should('contain', text);
    }
  
    verifyNotificationCount(count) {
      this.getNotificationBell().invoke('text').should('eq', count.toString());
    }

    visit() {
        cy.visit('/dashboard');
      }
  }
  
  export default DashboardPage;
  