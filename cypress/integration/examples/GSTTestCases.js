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
      cy.LoginAPI()
      cy.visit('/')
    })
  })
  it('amount validation without offer and tax 0', function () {

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare1().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare6().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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
      benefitsPage.getTaxes().then(function(tax){
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

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare2().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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
  it('amount validation without offer and included tax 18% in benefit amount', function () {

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare3().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare4().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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
      benefitsPage.getTaxes().then(function(tax){
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
  it('amount validation with 5% offer and including tax 18% in benefit amount', function () {

    cy.url().should('include', 'employer/dashboard')
    homePage.getHomeText().should('have.text', 'Home')
    benefitsPage.getBenefitsLink().click()
    cy.url().should('include', '/benefits/corporate')
    cy.wait(1000)
    benefitsPage.getTaxViewAll().click()
    benefitsPage.getHealthCare5().click()
    benefitsPage.getBuyNow().click()
    benefitsPage.getQuantityInput().type('1')
    let total=0
    benefitsPage.getAmount().then(function(amount){
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
      benefitsPage.getTaxes().then(function(tax){
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