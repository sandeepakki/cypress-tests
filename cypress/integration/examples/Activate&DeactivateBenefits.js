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
    it('Activate employee benefits', function()  { 
      cy.clearCookies()
    cy.visit('/')
    loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
    loginPage.getEmployerCTA().click()
    cy.employerLogin(this.data.employerUser,this.data.employerPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include','/employer/dashboard')
    homePage.getHomeText().should('have.text','Home')
    benefitsPage.getBenefitsLink().click()
    benefitsPage.getCategories().each(($el, index, $list) => {
        const CatText = $el.find('.chakra-text.css-xxplq9').text()
        if(CatText.includes('Health care')){
            cy.wrap($el).click()
        }
    })
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
    })

})