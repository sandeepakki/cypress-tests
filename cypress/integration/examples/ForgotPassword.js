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
      cy.visit('/')
      loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
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
        fpPage.getEmailField().type("xxx@tartanhq.com")
        fpPage.getSubmitbutton().click()
        fpPage.getEmailFieldFeedback().should('have.text','Email is not Registered with us')
        fpPage.getEmailField().clear()
        fpPage.getEmailField().type("sandeep+10june@tartanhq.com")
        fpPage.getSubmitbutton().click()
       try{
        fpPage.getAttemptLimitExceededText().then(function(element){
            const actualText = element.text()
        })
            if(expect(actualText.includes("Attempt limit exceeded"))==true){
                cy.pause()
            }
        
       }catch(error){
        console.log(error)
       }
        fpPage.getPinbox0().type("1")
        fpPage.getPinbox1().type("1")
        fpPage.getPinbox2().type("2")
        fpPage.getPinbox3().type("2")
        fpPage.getPinbox4().type("3")
        fpPage.getPinbox5().type("3")
        fpPage.getNewPasswordField().type("admin@123")
        fpPage.getConfirmPasswordField().type("admin@1")
        fpPage.getNewPasswordFieldFeedback().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Must Contain 8 Characters,")).to.be.true
        })
        fpPage.getConfirmPassFieldFeedback().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Passwords must match")).to.be.true
        })
    })
})