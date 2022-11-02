/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import BenefitsPage from '../../pageObjects/BenefitsPage'
describe('batik test suite', function() {

  beforeEach(function(){
    //runs before all tests in the block
    cy.fixture('example').then(function(data){
    this.data=data
    })
})
    it('performs employer login & Logout test', function()  { 
      const loginPage = new LoginPage()
      const homePage = new HomePage()
    cy.visit('/')
    loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
    loginPage.getEmployerCTA().click()
    cy.employerLogin(this.data.employerUser,this.data.employerPassword)
    loginPage.getLoginCTA().click()
    homePage.getHomeText().should('have.text','Home')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
    })
    it('perform employee login & Logout tests', function()  { 
      const loginPage = new LoginPage()
      const homePage = new HomePage()
      const benefitsPage = new BenefitsPage()
    loginPage.getEmployeeCTA().click()
    cy.employeeLogin(this.data.employeeUser,this.data.employeePassword)
    loginPage.getLoginCTA().click()
    benefitsPage.getBenefitsText().should('have.text','Benefits')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
    })
    it('performs unauthorized logins into batik',function(){
      const loginPage = new LoginPage()
      const homePage = new HomePage()
      const benefitsPage = new BenefitsPage()
      loginPage.getEmployerCTA().click()
      cy.unauthLogin(this.data.unauthUser,this.data.unauthPassword)
      loginPage.getLoginCTA().click()
      loginPage.getUserNotfoundText().then(function(element){
        const actualText = element.text()
      expect(actualText.includes("User Not Found")).to.be.true
      })
    })
    it('if employee tries to login as employer',function(){

      const loginPage = new LoginPage()
      const homePage = new HomePage()
      const benefitsPage = new BenefitsPage()
      cy.reload()
    cy.loginAsEmployer(this.data.employeeUser,this.data.employeePassword)
    loginPage.getLoginCTA().click()
    loginPage.getUserNotfoundText().then(function(element){
      const actualText = element.text()
      expect(actualText.includes("Please use the")).to.be.true
    })
  })
  })
