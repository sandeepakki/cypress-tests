/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import BenefitsPage from '../../pageObjects/BenefitsPage'
import activatedBenefits from '../../pageObjects/ActivatedBenefits'

const loginPage = new LoginPage()
const homePage = new HomePage()
const benefitsPage = new BenefitsPage()
const activatedPage = new activatedBenefits()
describe('batik test suite', function() {

  beforeEach(function(){
    //runs before all tests in the block
    cy.fixture('example').then(function(data){
    this.data=data
    cy.LoginAPI()
   cy.visit('/')
    })
})
    it('Activate employee benefits', function()  { 
    
      cy.url().should('include','employer/dashboard')
    homePage.getHomeText().should('have.text','Home')
    benefitsPage.getBenefitsLink().click()
    benefitsPage.getEmployeeBenefitsText().click()
    benefitsPage.getCategories().each(($el, index, $list) => {
        const CatText = $el.find('.chakra-text.css-xxplq9').text()
        if(CatText.includes('Health care')){
            cy.wrap($el).click()
        }
    })
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if(CatText.includes('Healthcare Plan')){
          cy.wrap($el).click()
      }
  })
  benefitsPage.selectBenefit().each(($el, index, $list) => {
    const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
    if(benefitText.includes('Lorem Ipsum is a dummy text..!')){
        cy.wrap($el).click()
    }
})
benefitsPage.activateBenefitCTA().click()
cy.wait(1000)
benefitsPage.getSuccessToast().should('have.text','Successfully activated benefit')
activatedPage.getActivatedBenefitsLink().click()
cy.wait(1000)
activatedPage.getCategorieFilter().each(($el, index, $list) => {
  const catText = $el.text()
  if(catText.includes('Healthcare Plan')){
      cy.wrap($el).click()
  }
})
activatedPage.getSearchInput().type('Lorem', {force: true})
activatedPage.getSearchedBenefit().should('have.text',"Lorem Ipsum is a dummy text..!")
activatedPage.getDeactivatedCTA().click()
activatedPage.getCancelCTA().click()
activatedPage.getDeactivatedCTA().click()
activatedPage.getConfirmCTA().click()
benefitsPage.getSuccessToast().should('have.text','Plan Deactivated Successfully')
    // homePage.getMenuDropdown().click()
    // homePage.getLogoutCTA().click()
    })

})