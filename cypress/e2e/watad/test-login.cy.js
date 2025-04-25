import DashboardPage from "../../support/pages/contractor/Dashboard";

describe("Contractor Navigation", () => {
    before(() => {
        cy.viewportForDevice('alien')
    })
    beforeEach(() => {
         cy.session("userSession", () => cy.loginWithRole("contractor"));

    })

    it("should verify all elements are visible in dashboard", () => {

        const dashboard = new DashboardPage();
        dashboard.visit();
        dashboard.interceptGetRequests();
        dashboard.aliasElements()
        dashboard.verifyElementsAreVisible();
    })
})