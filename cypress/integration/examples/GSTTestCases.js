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
  it('amount validation without offer and tax 0', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
    loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('All Tax Scenarios')) {
        cy.wrap($el).click()
      }
    })

    benefitsPage.getNoTaxBenefit().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().eq(1).then(function(amount){
      const amtText = amount.text()
      let amtRes = amtText.split("₹")
      amtRes=amtRes[1]
      total = Number(total)+Number(amtRes)
      cy.log(total)
    })
    benefitsPage.getTaxesWithoutAnyOffer().then(function(tax){
      const taxText = tax.text()
      let taxRes = taxText.split("₹")
      taxRes = taxRes[1]
      total = Number(total)+Number(taxRes)
      cy.log(total)
    })
      benefitsPage.getTotalPayable().then(function(amtPayable){
        const payableText = amtPayable.text()
        let payRes = payableText.split("₹")
        let amountPayable = payRes[1]
        expect(Number(amountPayable)).to.equal(Number(total))
      })
  })
  it('amount validation with 5% offer and tax 0', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
    loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('All Tax Scenarios')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getNoTaxwithOfferBenefit().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
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
      benefitsPage.getTaxeswithOffer().then(function(tax){
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
  it('amount validation without offer and added tax 18%', function () {
    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
    loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('All Tax Scenarios')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getTaxAddedBenefit().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().eq(1).then(function(amount){
      const amtText = amount.text()
      let amtRes = amtText.split("₹")
      amtRes=amtRes[1]
      total = Number(total)+Number(amtRes)
      cy.log(total)
    })
    benefitsPage.getTaxesWithoutAnyOffer().then(function(tax){
      const taxText = tax.text()
      let taxRes = taxText.split("₹")
      taxRes = taxRes[1]
      total = Number(total)+Number(taxRes)
      cy.log(total)
    })
      benefitsPage.getTotalPayable().then(function(amtPayable){
        const payableText = amtPayable.text()
        let payRes = payableText.split("₹")
        let amountPayable = payRes[1]
        expect(Number(amountPayable)).to.equal(Number(total))
      })
  })
  it('amount validation with 5% offer and added tax 18%', function () {

    loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
    loginPage.getLoginWithEmailCTA().click()
    loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
    loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
    loginPage.getLoginCTA().click()
    cy.url().should('include', '/employer/dashboard')
    homePage.getPopModelClose().click()
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getCategories().each(($el, index, $list) => {
      const CatText = $el.find('.chakra-text.css-xxplq9').text()
      if (CatText.includes('Health care')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.selectBenefit().each(($el, index, $list) => {
      const benefitText = $el.find('h2.chakra-heading.css-19pytma').text()
      if (benefitText.includes('All Tax Scenarios')) {
        cy.wrap($el).click()
      }
    })
    benefitsPage.getTaxAddedwithOfferBenefit().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
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
      benefitsPage.getTaxeswithOffer().then(function(tax){
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