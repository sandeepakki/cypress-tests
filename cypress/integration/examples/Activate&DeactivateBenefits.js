/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import BenefitsPage from '../../pageObjects/BenefitsPage'
import activatedBenefits from '../../pageObjects/ActivatedBenefits'

const loginPage = new LoginPage()
const homePage = new HomePage()
const benefitsPage = new BenefitsPage()
const activatedPage = new activatedBenefits()
describe('batik test suite', function () {

  beforeEach(function () {
    //runs before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.visit('/')
      cy.percySnapshot();
    })
  })
  it('Activate employee benefits', function () {
    loginPage.getWelcomeText().should('have.text', 'Welcome to Perks!')
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.ValidUser, this.data.ValidPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include', 'employer/dashboard')
    cy.percySnapshot();
  // homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    benefitsPage.getEmployeeBenefitsText().click()
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health & Fitness')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getSubCategories().each(($el, index, $list) => {
      const CatText = $el.find('chakra-text.css-xxplq9').text()
      if (CatText.includes('Health & Fitness')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('Apollo 24|7 Circle Membership')) {
        cy.wrap($el).click()
      }
    })
    cy.wait(2000)
    benefitsPage.activateBenefitCTA().click()
    cy.wait(2000)
    benefitsPage.getSuccessToast().should('have.text', 'Successfully activated benefit')
    activatedPage.getActivatedBenefitsLink().click()
    cy.wait(2000)
    activatedPage.getCategorieFilter().each(($el, index, $list) => {
      const catText = $el.text()
      if (catText.includes('Healthcare Plan')) {
        cy.wrap($el).click()
      }
    })
    activatedPage.getSearchInput().type('Circle', { force: true })
    activatedPage.getSearchedBenefit().should('have.text', "Apollo 24|7 Circle Membership")
    activatedPage.getDeactivatedCTA().click()
    activatedPage.getCancelCTA().click()
    activatedPage.getDeactivatedCTA().click()
    activatedPage.getConfirmCTA().click()
    benefitsPage.getSuccessToast().should('have.text', 'Plan Deactivated Successfully')
    homePage.getMenuDropdown().click()
    homePage.getLogoutCTA().click()
  })

})