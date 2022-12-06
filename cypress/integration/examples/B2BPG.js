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
      cy.LoginAPI()
     cy.visit('/')
      })
  })
      it('Buy and distribute corporate benefit with employees', function()  { 
      
        cy.url().should('include','employer/dashboard')
      homePage.getHomeText().should('have.text','Home')
      benefitsPage.getBenefitsLink().click()
      cy.url().should('include','/benefits/corporate')
      benefitsPage.getCategories().each(($el, index, $list) => {
        const CatText = $el.find('.chakra-text.css-xxplq9').text()
        if(CatText.includes('Health care')){
            cy.wrap($el).click()
        }
    })
    benefitsPage.getViewAll().click()
    benefitsPage.selectBenefit().each(($el, index, $list) => {
        const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
        if(benefitText.includes('UCare Health Saving Plan ')){
            cy.wrap($el).click()
        }
    })
    benefitsPage.getBuyNowCTA().click()
    cy.wait(1000)
    benefitsPage.getAddEmployeesCTA().click()
    benefitsPage.getDistributionSearch().type('sandeep kumar')
    cy.wait(1000)
    benefitsPage.getCheckbox().click()
    benefitsPage.getClearSelectionCTA().click()
    cy.wait(500)
    benefitsPage.getCheckbox().click()
    benefitsPage.getDoneCTA().click()
    benefitsPage.getViewListCTA().click()
    benefitsPage.getDonebtn().click()
    benefitsPage.getAddMoreCTA().click()
    cy.wait(1000)
    benefitsPage.getDistributionSearch().type('Mani',{force:true})
    cy.wait(1000)
    benefitsPage.getCheckbox().click()
    benefitsPage.getDoneCTA().click()
    benefitsPage.getContinuePayCTA().click()
    benefitsPage.getpaytm().click()
    benefitsPage.getUsepaymentCTA().click()
    benefitsPage.getPaywithPaytm().should('have.text',"Pay with Paytm")
    benefitsPage.getPaytmclose().click()
      })

    })  