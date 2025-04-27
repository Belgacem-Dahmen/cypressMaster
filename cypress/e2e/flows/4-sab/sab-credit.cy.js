describe("SAB Credit Request Management", () => {
  beforeEach(() => {
    cy.viewportForDevice("alien");
    cy.session("userSession", () => cy.loginWithRole("contractor"));
    cy.visit("en/app/contractor");
  });

  it("should Submit a PO/invoice Finance request", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "PO/Invoice Financing", "SAB", "jeddah");
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an LC request", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an Evolving Guarantee request", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Evolving Guarantee", "SAB", "jeddah");
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit a Watad Credit request", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Watad Credit", "SAB", "NEOM");
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit  a PO/invoice Finance request with one ongoing project ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingProjectDetails();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an LC request with one ongoing project ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingProjectDetails();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an Evolving Guarantee request with one ongoing project ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Evolving Guarantee", "SAB", "jeddah");
    fillOngoingProjectDetails();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit a watad credit request with one ongoing project ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Watad Credit", "SAB", "NEOM");
    fillOngoingProjectDetails();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit  a PO/invoice Finance request with one Credit facility ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an LC request  with one Credit facility", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an Evolving Guarantee request with one Credit facility ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Evolving Guarantee", "SAB", "jeddah");
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit a watad credit request with one Credit facility ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Watad Credit", "SAB", "NEOM");
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit  a PO/invoice Finance request with one project & one Credit facility and ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingProjectDetails();
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an LC request   with one project & one Credit facility", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    fillOngoingProjectDetails();
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit an Evolving Guarantee request  with one project & one Credit facility ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Evolving Guarantee", "SAB", "jeddah");
    fillOngoingProjectDetails();
    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should Submit a watad credit request  with one project & one  Credit facility ", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Watad Credit", "SAB", "NEOM");
    fillOngoingProjectDetails();

    fillOngoingCreditFacility();
    uploadDocuments();
    submitForm();
    verifySubmission();
  });

  it("should add another doc", () => {
    cy.get("button").contains("Request credit").click();

    addAnotherDoc();
  });
  it("should Submit a PO/invoice Finance request with another doc", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "PO/Invoice Financing", "SAB", "jeddah");
    uploadDocuments();
    addAnotherDoc();

    submitForm();
    verifySubmission();
  });

  it("should Submit an LC request with another doc", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "LC", "SAB", "jeddah");
    uploadDocuments();
    addAnotherDoc();

    submitForm();
    verifySubmission();
  });

  it("should Submit an Evolving Guarantee request with another doc", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Evolving Guarantee", "SAB", "jeddah");
    uploadDocuments();
    addAnotherDoc();

    submitForm();
    verifySubmission();
  });

  it("should Submit a Watad Credit request with another doc", () => {
    cy.get("button").contains("Request credit").click();
    fillCreditRequestForm("5000000", "Watad Credit", "SAB", "NEOM");
    uploadDocuments();
    addAnotherDoc();
    submitForm();
    verifySubmission();
  });
});

function fillCreditRequestForm(amount, creditType, bank, location) {
  cy.get("form").within(() => {
    cy.get("input[name='amount']").clear().type(amount);
    cy.get(`input[type="radio"][value="${creditType}"]`).check();

    if (creditType === "Watad Credit") {
      selectOption("Select location", location);
    } else {
      selectOption("Select bank", bank);
      selectOption("Select location", location);
      cy.get('input[type="radio"][value="true"]').check();
    }
    fillProjectFundingDetails();
  });
}

function selectOption(buttonText, optionValue) {
  cy.get("button").contains(buttonText).click();
  cy.get(`input[type="radio"][value="${optionValue}"]`).check();
}

function fillProjectFundingDetails() {
  cy.contains("Project Funding Details").click();
  const fields = [
    { name: "projectDetailsFile.projectName", value: "cypress test" },
    { name: "projectDetailsFile.clientName", value: "cypress test" },
    { name: "projectDetailsFile.projectScope", value: "cypress test" },
    { name: "projectDetailsFile.totalProjectValue", value: "5000000" },
  ];

  fields.forEach(({ name, value }) => {
    cy.get(`input[name='${name}']`).clear().type(value);
  });

  cy.get('input[value="Enter your expected completion date"]').click();
  cy.get("button").contains("30").click();
  cy.get("select").select("Government");
  cy.contains("Project Funding Details").click();
}

function fillOngoingProjectDetails() {
  cy.contains("Ongoing Project Details").click();
  cy.get("button").contains("Add Project").click();
  const fields = [
    {
      name: "onGoingProjectsFile[0].projectNameOnGoingProjects",
      value: "cypress test",
    },
    {
      name: "onGoingProjectsFile[0].clientNameOnGoingProjects",
      value: "cypress test",
    },
    {
      name: "onGoingProjectsFile[0].projectScopeOnGoingProjects",
      value: "cypress test",
    },
    {
      name: "onGoingProjectsFile[0].totalProjectValueOnGoingProjects",
      value: "5000000",
    },
  ];
  fields.forEach(({ name, value }) => {
    cy.get(`input[name='${name}']`).clear().type(value);
  });

  cy.get('input[value="Enter your expected completion date"]').click();
  cy.get("button").contains("30").click();
  cy.get("select").select("Government");
  cy.contains("Ongoing Project Details").click();
}

function fillOngoingCreditFacility() {
  cy.contains("Ongoing Credit Facility Details").click();
  cy.get("button").contains("Add Facility").click();

  const fields = [
    {
      name: "onGoingCreditFacilitiesFile[0].financingInstitutionName",
      value: "cypress test",
    },
    {
      name: "onGoingCreditFacilitiesFile[0].typeOfFinancing",
      value: "Credit",
    },
    {
      name: "onGoingCreditFacilitiesFile[0].totalFinancedValue",
      value: "500000",
    },
    {
      name: "onGoingCreditFacilitiesFile[0].remainingAmountToPayBack",
      value: "5000000",
    },
  ];
  fields.forEach(({ name, value }) => {
    cy.get(`input[name='${name}']`).clear().type(value);
  });
  cy.get('input[value="Enter your payment term deadline"]').click();
  cy.get("button").contains("28").click();
  cy.contains("Ongoing Credit Facility Details").click();
}
function uploadDocuments() {
  const sections = [
    "Business Information",
    "Owner & Legal Representative Information",
    "Financial & Banking Documents",
    "Tax & Compliance Documents",
  ];

  sections.forEach((section) => {
    cy.contains(section).click();
    cy.get('input[type="file"]').each(($input) => {
      cy.wrap($input).selectFile("cypress/fixtures/pdf-test.pdf", {
        force: true,
      });
    });
    cy.contains(section).click();
  });
}
function addAnotherDoc() {
  cy.contains("Other Documents").click();
  cy.get("button").contains("Add Document").click();
  cy.get(`input[name='additionalDocs[0].additionalDocName']`)
    .clear()
    .type("test");
  cy.get('input[type="file"]').each(($input) => {
    cy.wrap($input).selectFile("cypress/fixtures/pdf-test.pdf", {
      force: true,
    });
  });
  cy.contains("Other Documents").click();
}
function submitForm() {
  cy.get('input[name="iAgree"]').check();
  cy.get("form").within(() => {
    cy.get("button").contains("Submit").click();
  });
}

function verifySubmission() {
  cy.contains("🎉 Your credits request is submitted !").should("be.visible");
  cy.contains(
    "Thank you for your submission! A representative will review your request and get in touch with you within the next 24 hours"
  ).should("be.visible");
}
