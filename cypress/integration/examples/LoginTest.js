/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import BenefitsPage from '../../pageObjects/BenefitsPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const benefitsPage = new BenefitsPage()

describe('batik test suite', function () {

  beforeEach(function () {
    //runs before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.visit('/')
    })

  })
  //employer login & logout
  it('performs login & Logout test', function () {
    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.ValidUser, this.data.ValidPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
  })
  //employee login & Logout
  it('perform employee login & Logout tests', function () {
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.employeeAccess, this.data.employeePWD)
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employee/dashboard')
    homePage.getPopModelClose().click()
    benefitsPage.getBenefitsText().should('have.text', 'Benefits')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
  })
  //unauthorized login
  it('performs unauthorized logins into batik', function () {
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.unauthUser, this.data.unauthPassword)
    loginPage.getLoginCTA().click()
    loginPage.getUserNotfoundText().then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("User Not Found")).to.be.true
    })
  })
  //employee enter incorrect username / password
  it('if employee enters incorrect Username/Password', function () {
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.correctUser, this.data.incorrectPassword)
    loginPage.getLoginCTA().click()
    homePage.getIncorrectUser().then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Incorrect Username / Password")).to.be.true
    })
  })
  it('if deactivated employee tries to login', function () {
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.deactivatedUser, this.data.correctPassword)
    loginPage.getLoginCTA().click()
    homePage.getIncorrectUser().then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("User Not Found")).to.be.true
    })
  })
})
