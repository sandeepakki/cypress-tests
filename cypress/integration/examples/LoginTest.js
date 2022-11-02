/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
describe('batik test suite', function() {

  before(function(){
    //runs before all tests in the block
    cy.fixture('example').then(function(data){
    this.data=data
    })
})
    it('performs employer login & Logout tests', function()  { 
      const loginPage = new LoginPage()
      const homePage = new HomePage()
    cy.visit('/')
    loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
    loginPage.getEmployerCTA().click()
    cy.employerLogin(this.data.validUsername,this.data.validPassword)
    loginPage.getLoginCTA().click()
    homePage.getHomeText().should('have.text','Home')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()

    })
    it('performs employee login & Logout tests', function()  { 
      const loginPage = new LoginPage()
      const homePage = new HomePage()
    cy.visit('/')
    loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
    loginPage.getEmployerCTA().click()
    cy.employerLogin(this.data.validUsername,this.data.validPassword)
    loginPage.getLoginCTA().click()
    homePage.getHomeText().should('have.text','Home')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()

    })



  })
