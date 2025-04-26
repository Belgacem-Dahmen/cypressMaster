import ProfilePage from "../../../support/pages/contractor/Profile";
describe("Profile page Ui Verification", () => {
  let profilePage;
  before(() => {
    profilePage = new ProfilePage();
  });
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    profilePage.visit();
  });
  it("should verify the page title is visible", () => {
    profilePage.verifyPageTitleIsVisible();
  });

  it("should verify the change password button is visible", () => {
    profilePage.verifyChangePasswordButtonIsVisible();
  });

  it("should verify the save change button is visible", () => {
    profilePage.verifySaveChangeButtonIsVisible();
  });

  it("should verify the personal informations div is visible", () => {
    profilePage.verifyPersonalInformationsDivIsVisible();
  });

  it("should verify the personal informations title is visible", () => {
    profilePage.verifyPersonalInformationsTitleIsVisible();
  });

  it("should verify the personal informations description is visible", () => {
    profilePage.verifyPersonalInformationsDescriptionIsVisible();
  });

  it("should verify the bank informations div is visible", () => {
    profilePage.verifyBankInformationsDivIsVisible();
  });

  it("should verify the bank informations title is visible", () => {
    profilePage.verifyBankInformationsTitleIsVisible();
  });

  it("should verify the bank informations description is visible", () => {
    profilePage.verifyBankInformationsDescriptionIsVisible();
  });

  it("should verify the legal papers div is visible", () => {
    profilePage.verifyLegalPapersDivIsVisible();
  });

  it("should verify the legal papers title is visible", () => {
    profilePage.verifyLegalPapersTitleIsVisible();
  });

  it("should verify the legal papers description is visible", () => {
    profilePage.verifyLegalPapersDescriptionIsVisible();
  });

  it("should verify the full name input is visible", () => {
     profilePage.verifyFullNameInputIsVisible();
  });

  it("should verify the company name input is visible", () => {
     profilePage.verifyCompanyNameInputIsVisible();
  });

  it("should verify the phone input is visible", () => {
     profilePage.verifyPhoneInputIsVisible();
  });

  it("should verify the email input is visible", () => {
     profilePage.verifyEmailInputIsVisible();
  });

  it("should verify the IBAN input is visible", () => {
     profilePage.verifyIbanInputIsVisible();
  });
});
