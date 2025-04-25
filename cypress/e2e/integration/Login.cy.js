import LoginPage from "../../support/pages/client/loginPage";


describe('Should verify the login functionality', () => {
  beforeEach(() => {
    LoginPage.visitAndAliasElements();
  });

  it('should display an error message if email input is empty', () => {
    LoginPage.emailInput.click();
    LoginPage.loginButton.click();
    LoginPage.assertErrorMessageForEmptyEmail();
  });

  it('should display an error message if password input is empty', () => {
    LoginPage.passwordInput.click();
    LoginPage.loginButton.click();
    LoginPage.assertErrorMessageForEmptyPassword();
  });

  it('should display a disabled submit button & error message if fields are empty', () => {
    LoginPage.assertSubmitButtonIsDisabled();
  });

  it('should display an error message on submit with wrong email', () => {
    LoginPage.interceptLoginRequest();
    
    LoginPage.typeEmail('admin@admin.com');
    LoginPage.typePassword('Test1234');
    
    LoginPage.clickLoginButton();
    
    LoginPage.validateRequestBodyAndResponse({
      username: 'admin@admin.com',
      password: 'Test1234'
    }, 400, 'The user credentials were incorrect.');
    
    LoginPage.assertErrorMessageForInvalidCredentials();
  });

  it('should display an error message on submit with wrong password', () => {
    LoginPage.interceptLoginRequest();
    
    LoginPage.typeEmail('admin@admin.com');
    LoginPage.typePassword('Test1234');
    
    LoginPage.clickLoginButton();
    
    LoginPage.validateRequestBodyAndResponse({
      username: 'admin@admin.com',
      password: 'Test1234'
    }, 400, 'The user credentials were incorrect.');
    
    LoginPage.assertErrorMessageForInvalidCredentials();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.interceptLoginRequest();
    
    LoginPage.typeEmail('admin@admin.com');
    LoginPage.typePassword('Test123*');
    
    LoginPage.clickLoginButton();
    
    LoginPage.validateRequestBodyAndResponse({
      username: 'admin@admin.com',
      password: 'Test123*'
    }, 200);
    
    LoginPage.assertLoginSuccess();
  });
});
