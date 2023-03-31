//inheriting 
/// <reference types="Cypress" />
import HomePage from '../../pageObjects/HomePage'
import LoginPage from '../../pageObjects/LoginPage'
import EmployeeDirectory from '../../pageObjects/EmployeeDirectory'
import BenefitsPage from '../../pageObjects/BenefitsPage'
//constructors
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const employeeDir =  new EmployeeDirectory()
        const benefitsPage = new BenefitsPage()
//actual code
describe('batik test suite', function() {

    beforeEach(function(){
      //runs before all tests in the block
      cy.fixture('example').then(function(data){
      this.data=data
      })
  })
      it('performs actions on home page links', function()  { 
        cy.clearCookies()
      cy.visit('/')
      loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
      loginPage.getLoginWithEmailCTA().click()
      cy.Login(this.data.ValidUser, this.data.ValidPassword)
      loginPage.getLoginCTA().click()
      homePage.getPopModelClose().click()
      homePage.getHomeText().should('have.text','Home') 
      homePage.getstartOnboardingText().should('have.text','Onboard Employees')
      homePage.getBuyGiftText().should('have.text','Buy Gift and Rewards')
      homePage.getCorporatePlansText().should('have.text','Buy Corporate Plans')
      homePage.getEmployerDirText().should('have.text','Employee Directory') 
      homePage.getstartOnboardingLink().click()
      employeeDir.getEmployeeDirectoryPage().should('have.text','Employee Directory')
      cy.go('back')
      homePage.getBuySharelink().click()
      benefitsPage.getGiftPageText().should('have.text',' Gift Cards')
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