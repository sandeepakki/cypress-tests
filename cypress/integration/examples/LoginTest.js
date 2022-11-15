/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import BenefitsPage from '../../pageObjects/BenefitsPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const benefitsPage = new BenefitsPage()

describe('batik test suite', function() {

  beforeEach(function(){
    //runs before all tests in the block
    cy.fixture('example').then(function(data){
    this.data=data
    })
})
    it('performs employer login & Logout test', function()  { 
    cy.visit('/')
    loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
    loginPage.getEmployerCTA().click()
    cy.employerLogin(this.data.employerUser,this.data.employerPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include','/employer/dashboard')
    homePage.getHomeText().should('have.text','Home')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
    })
    //employee login & Logout
    it('perform employee login & Logout tests', function()  { 
    loginPage.getEmployeeCTA().click()
    cy.employeeLogin(this.data.employeeUser,this.data.employeePassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include','/employee/dashboard')
    benefitsPage.getBenefitsText().should('have.text','Benefits')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
    })
    //unauthorized login
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
    //employee tries to login as employer
    it('if employee tries to login as employer',function(){
      cy.reload()
    cy.loginAsEmployer(this.data.employeeUser,this.data.employeePassword)
    loginPage.getLoginCTA().click()
    loginPage.getUserNotfoundText().then(function(element){
      const actualText = element.text()
      expect(actualText.includes("Please use the")).to.be.true
      cy.wait(1000)
    })
  })
  //employee enter incorrect username / password
  it('if employee enters incorrect Username/Password',function(){
    cy.reload()
    loginPage.getEmployeeCTA().click()
    cy.IncorrectUnPwd(this.data.correctUser,this.data.incorrectPassword)
    loginPage.getLoginCTA().click()
    homePage.getIncorrectUser().then(function(element){
      const actualText = element.text()
      expect(actualText.includes("Incorrect Username / Password")).to.be.true
    })
  })
  })
