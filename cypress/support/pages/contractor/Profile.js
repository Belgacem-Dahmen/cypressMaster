import "cypress-xpath";

class ProfilePage {
  visit() {
    cy.visit("/en/app/contractor/me");
  }
  // Getters for the elements
  get pageTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div/div/h1"
    );
  }

  get changePasswordButton() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/div/button"
    );
  }

  get saveChangeButton() {
    return cy.xpath(
      '//*[@id="__next"]/div[3]/div/div[2]/div[2]/div/div/div/form/div[1]/button'
    );
  }

  get personalInformationsDiv() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[1]"
    );
  }

  get personalInformationsTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[1]/div[1]/p"
    );
  }

  get personalInformationsDescription() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[1]/div[1]/h4"
    );
  }

  get bankInformationsDiv() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[2]"
    );
  }

  get bankInformationsTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[2]/div[1]/p"
    );
  }

  get bankInformationsDescription() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/div/div[2]/div[1]/h4"
    );
  }

  get legalPapersDiv() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/section"
    );
  }

  get legalPapersTitle() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/section/div[1]/p"
    );
  }

  get legalPapersDescription() {
    return cy.xpath(
      "/html/body/div[1]/div[3]/div/div[2]/div[2]/div/div/div/form/div[2]/section/div[1]/h4"
    );
  }

  get fullNameInput() {
    return cy.get('input[name="fullName"]');
  }

  get companyNameInput() {
    return cy.get('input[name="companyName"]');
  }

  get phoneInput() {
    return cy.get('input[name="phone"]');
  }

  get emailInput() {
    return cy.get('input[name="email"]');
  }

  get ibanInput() {
    return cy.get('input[name="iban"]');
  }

  // Visibility check functions
  verifyPageTitleIsVisible() {
    this.pageTitle.should("be.visible");
  }

  verifyChangePasswordButtonIsVisible() {
    this.changePasswordButton.should("be.visible");
  }

  verifySaveChangeButtonIsVisible() {
    this.saveChangeButton.should("be.visible");
  }

  verifyPersonalInformationsDivIsVisible() {
    this.personalInformationsDiv.should("be.visible");
  }

  verifyPersonalInformationsTitleIsVisible() {
    this.personalInformationsTitle.should("be.visible");
  }

  verifyPersonalInformationsDescriptionIsVisible() {
    this.personalInformationsDescription.should("be.visible");
  }

  verifyBankInformationsDivIsVisible() {
    this.bankInformationsDiv.should("be.visible");
  }

  verifyBankInformationsTitleIsVisible() {
    this.bankInformationsTitle.should("be.visible");
  }

  verifyBankInformationsDescriptionIsVisible() {
    this.bankInformationsDescription.should("be.visible");
  }

  verifyLegalPapersDivIsVisible() {
    this.legalPapersDiv.should("be.visible");
  }

  verifyLegalPapersTitleIsVisible() {
    this.legalPapersTitle.should("be.visible");
  }

  verifyLegalPapersDescriptionIsVisible() {
    this.legalPapersDescription.should("be.visible");
  }

  verifyFullNameInputIsVisible() {
    this.fullNameInput.should("be.visible");
  }

  verifyCompanyNameInputIsVisible() {
    this.companyNameInput.should("be.visible");
  }

  verifyPhoneInputIsVisible() {
    this.phoneInput.should("be.visible");
  }

  verifyEmailInputIsVisible() {
    this.emailInput.should("be.visible");
  }

  verifyIbanInputIsVisible() {
    this.ibanInput.should("be.visible");
    }
    
    
}

export default ProfilePage;
