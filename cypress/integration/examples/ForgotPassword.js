import HomePage from '../../pageObjects/HomePage'
import LoginPage from '../../pageObjects/LoginPage'
import EmployeeDirectory from '../../pageObjects/EmployeeDirectory'
import GiftCardsPage from '../../pageObjects/GiftCards'
import BenefitsPage from '../../pageObjects/BenefitsPage'
import ForgotPasswordPage from '../../pageObjects/ForgotPasswordPage'
import ForgotPage from '../../pageObjects/ForgotPasswordPage'

//constructors
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const employeeDir =  new EmployeeDirectory()
        const giftcards = new GiftCardsPage()
        const benefitsPage = new BenefitsPage()
        const fpPage = new ForgotPage()
//actual code
describe('batik test suite', function() {

    beforeEach(function(){
      //runs before all tests in the block
      cy.fixture('example').then(function(data){
      this.data=data
      })
  })
      it('Resets Forgot Password', function()  { 
        cy.clearCookies()
      cy.visit('/')
      loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
      loginPage.getLoginWithEmailCTA().click()
      loginPage.getDontRememberPasswordText().then(function(element){
       const actualText = element.text()
       expect(actualText.includes("Don’t remember password?")).to.be.true
          })
        loginPage.getClickHereLink().click()
        fpPage.getForgotPasswordText().should('have.text','Forgot Password?')
        fpPage.getWorkEmailAddressText().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Enter your work email address")).to.be.true
           })
        fpPage.getEmailField().type("xyz@tartanhq.com").blur() 
        fpPage.getSubmitbutton().click()
        cy.wait(1000)
        fpPage.getEmailFieldFeedback().should('have.text','Request failed with status code 404')
        fpPage.getEmailField().clear()
        fpPage.getEmailField().type("sandeep@tartanhq.com").blur() 
        fpPage.getSubmitbutton().click()
        fpPage.getCodeSentText().should('have.text','Code sent!')
        fpPage.getPinbox0().type("1")
        fpPage.getPinbox1().type("1")
        fpPage.getPinbox2().type("2")
        fpPage.getPinbox3().type("2")
        fpPage.getPinbox4().type("3")
        fpPage.getPinbox5().type("3")
        fpPage.getNewPasswordField().type("admin@123")
        fpPage.getDidntRecivedText().click()
        fpPage.getNewPasswordFieldFeedback().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Must Contain 8 Characters,")).to.be.true
        })
        fpPage.getConfirmPasswordField().type("admin@1")
        fpPage.getDidntRecivedText().click()
        fpPage.getConfirmPassFieldFeedback().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Passwords must match")).to.be.true
        })
        fpPage.getReturntoLoginLink().click()
        cy.url().should('include','/login')
        loginPage.getLoginWithEmailCTA().click()
        loginPage.getClickHereLink().click()
        fpPage.getNewEmailField().type("sandeep@tartanhq.com").blur() 
        fpPage.getSubmitbutton().click()
        fpPage.getCodeSentText().should('have.text','Code sent!')
        fpPage.getNewPin0().type("1")
        fpPage.getNewPin1().type("1")
        fpPage.getNewPin2().type("2")
        fpPage.getNewPin3().type("2")
        fpPage.getNewPin4().type("3")
        fpPage.getNewPin5().type("3")
        fpPage.getNewPasswordfield().type("Admin@1234")
        fpPage.getConfirmPasswordfield().type("Admin@1234")
        fpPage.getFinalSubmitbutton().click()
        fpPage.getInvalidVerifyText().should('have.text','Code expired')
        })
    })