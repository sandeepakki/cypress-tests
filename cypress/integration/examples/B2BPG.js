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
    cy.fixture('example').then(function(data){
      this.data=data
      cy.visit('/')
      cy.percySnapshot();
    })
  })
  it('Buy and distribute corporate benefit with employees', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.ValidUser, this.data.ValidPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
  //  homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('UCare Health Saving Plan')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getBuyNowCTA().click()
    cy.wait(1000)
    benefitsPage.getAddEmployeesCTA().click()
    benefitsPage.getDistributionSearch().type('sandeep{enter}',{force: true})
    cy.wait(1000)
    benefitsPage.getCheckbox().eq(1).click()
    benefitsPage.getClearSelectionCTA().click()
    cy.wait(500)
    benefitsPage.getCheckbox().click()
    benefitsPage.getDoneCTA().click()
    benefitsPage.getViewListCTA().click()
    benefitsPage.getDonebtn().click()
    benefitsPage.getAddMoreCTA().click()
    cy.wait(1000)
    benefitsPage.getDistributionSearch().type('divya', { force: true })
    cy.wait(1000)
    benefitsPage.getCheckbox().click()
    benefitsPage.getDoneCTA().click()
    benefitsPage.getContinuePayCTA().click()
    benefitsPage.getpaytm().click()

  })

  it('Buy Corporate Benefits in Quantity and compare amounts with discount in %', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.ValidUser, this.data.ValidPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
 //   homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('UCare Health Saving Plan ')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getBuyNowCTA().click()
    cy.wait(1000)
    benefitsPage.getQuantityInput().type('2')
    let total=0
    benefitsPage.getAmount().eq(1).then(function(amount){
      const amtText = amount.text()
      let amtRes = amtText.split("₹")
      amtRes=amtRes[1]
      total = Number(total)+Number(amtRes)
    })
    benefitsPage.getDiscount().then(function(disc){
      const discText = disc.text()
      let discRes = discText.split("%")
      discRes = discRes[0]
      total = Number(total)-Number((total*discRes)/100)
    })
    benefitsPage.getTaxes().eq(2).then(function(tax){
      const taxText = tax.text()
      let taxRes = taxText.split("₹")
      taxRes = taxRes[1]
      total = (Number(total)+(Number(taxRes))).toFixed(2)
      cy.log(total)
    })
      benefitsPage.getTotalPayable().then(function(amtPayable){
        const payableText = amtPayable.text()
        let payRes = payableText.split("₹")
        let amountPayable = payRes[1]
        expect(Number(amountPayable)).to.equal(Number(total))
      })
  })
  it('Buy Corporate Benefits in Quantity and compare amounts with discount in Rs', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    cy.Login(this.data.ValidUser, this.data.ValidPassword)
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
//    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('Apollo 247')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getBuyNowCTA().click()
    cy.wait(1000)
    benefitsPage.getQuantityInput().type('2')
    let total=0
    benefitsPage.getAmount().eq(1).then(function(amount){
      const amtText = amount.text()
      let amtRes = amtText.split("₹")
      amtRes=amtRes[1]
      total = Number(total)+Number(amtRes)
    })
    benefitsPage.getDiscount().then(function(disc){
      const discText = disc.text()
      let discRes = discText.split("₹")
      discRes = discRes[1]
      total = Number(total)-Number(discRes)
    })
    benefitsPage.getTaxes().eq(2).then(function(tax){
      const taxText = tax.text()
      let taxRes = taxText.split("₹")
      taxRes = taxRes[1]
      total = (Number(total)+(Number(taxRes))).toFixed(2)
      cy.log(total)
    })
      benefitsPage.getTotalPayable().then(function(amtPayable){
        const payableText = amtPayable.text()
        let payRes = payableText.split("₹")
        let amountPayable = payRes[1]
        expect(Number(amountPayable)).to.equal(Number(total))
      })
  })
})  