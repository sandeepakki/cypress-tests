import HomePage from '../../pageObjects/HomePage'
import LoginPage from '../../pageObjects/LoginPage'
import EmployeeDirectory from '../../pageObjects/EmployeeDirectory'
import GiftCardsPage from '../../pageObjects/GiftCards'
import BenefitsPage from '../../pageObjects/BenefitsPage'
describe('batik test suite', function() {

    beforeEach(function(){
      //runs before all tests in the block
      cy.fixture('example').then(function(data){
      this.data=data
      })
  })
      it('Onboards Employee in corporate under employee directory', function()  { 
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const employeeDir =  new EmployeeDirectory()
        const giftcards = new GiftCardsPage()
        const benefitsPage = new BenefitsPage()
        cy.clearCookies()
      cy.visit('/')
      loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
      loginPage.getLoginWithEmailCTA().click()
      cy.Login(this.data.ValidUser,this.data.ValidPassword)
      loginPage.getLoginCTA().click()
      cy.url().should('include','/employer/dashboard')
    //  homePage.getPopModelClose().click()
      homePage.getHomeText().should('have.text','Home') 
      homePage.getstartOnboardingText().should('have.text','Onboard Employees')
      homePage.getstartOnboardingLink().click()
      employeeDir.getAddEmployeeCTA().click()
      employeeDir.getUploadCSVText().then(function(element){
        const actualText = element.text()
        expect(actualText.includes("Upload a CSV")).to.be.true
      })
      employeeDir.getSampleCSVLink().click()
      cy .fixture('onboarding-employees-sample.csv').then(fileContent => {
      employeeDir.getChooseFile().attachFile({
      fileContent,
      fileName: 'onboarding-employees-sample.csv',
      mimeType: 'text/csv',
  })
      })
     employeeDir.getUploadCTA().click()
     employeeDir.getEmptyCSVToast().then(function(element){
        const actualText = element.text()
        expect(actualText.includes("Uploaded CSV file is empty")).to.be.true
      })
      cy.wait(2000)
      cy.reload()
      cy.wait(1000)
      employeeDir.getAddEmployeeCTA().click()
      cy.wait(2000)
      cy .fixture('DataSet.csv').then(fileContent => {
        employeeDir.getChooseFile().attachFile({
        fileContent,
        fileName: 'DataSet.csv',
        mimeType: 'text/csv',
    })
        })
        employeeDir.getUploadCTA().click()
        cy.wait(2000)
        employeeDir.getOnboardingReport().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Onboarding Report")).to.be.true
          })
          employeeDir.getFileUploadInProgress().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("in progress...")).to.be.true
          })
          employeeDir.getGotITCTA().click()
    })
})