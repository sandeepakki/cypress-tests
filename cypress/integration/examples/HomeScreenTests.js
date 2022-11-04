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
      it('performs actions on home page links', function()  { 
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const employeeDir =  new EmployeeDirectory()
        const giftcards = new GiftCardsPage()
        const benefitsPage = new BenefitsPage()
      cy.visit('/')
      loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
      loginPage.getEmployerCTA().click()
      cy.employerLogin(this.data.employerUser,this.data.employerPassword)
      loginPage.getLoginCTA().click()
      homePage.getHomeText().should('have.text','Home') 
      homePage.getstartOnboardingText().should('have.text','Onboard Employees')
      homePage.getBuyGiftText().should('have.text','Buy Gift and Rewards')
      homePage.getCorporatePlansText().should('have.text','Buy Corporate Plans')
      homePage.getEmployerDirText().should('have.text','Employee Directory') 
      homePage.getstartOnboardingLink().click()
      employeeDir.getEmployeeDirectoryPage().should('have.text','Employee Directory')
      cy.go('back')
      homePage.getBuySharelink().click()
      giftcards.getGiftPageText().should('have.text',' Gift Cards')
      cy.go('back')
      homePage.getBuyNowLink().click()
      benefitsPage.getCorporateBenefitsText().should('have.text','Corporate Benefits')
      cy.go('back')
      homePage.getViewAllLink().click()
      cy.go('back')
      homePage.getOnboardedLink().click()
      cy.go('back')
      homePage.getInvitedLink().click()
      cy.go('back')
      homePage.getAddBtn().click()
      cy.go('back')
 
      })
    })