/// <reference types="Cypress" />
import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'
import NavigationSection from '../../pageObjects/NavigationSection'
import GiftCardsPage from '../../pageObjects/GiftCards'
import activatedBenefits from '../../pageObjects/ActivatedBenefits'
import ordersRequests from '../../pageObjects/OrdersRequestsPg'
import MyBenefits from '../../pageObjects/MyBenefitsPg'

const loginPage = new LoginPage()
const homePage = new HomePage()
const navigation = new NavigationSection()
const giftcards = new GiftCardsPage()
const actBenefits = new activatedBenefits()
const ordReq = new ordersRequests()
const myBene = new MyBenefits()

describe('Test all pages when user lands first time', ()=> {

    beforeEach(function(){
        //runs before all tests in the block
        cy.fixture('example').then(function(data){
        this.data=data
        cy.visit('/')
        })
    })

    it('Login with new user creds and verify all the pages', ()=> {
        loginPage.getWelcomeText().should('have.text','Welcome to Batik!')
        loginPage.getEmployerCTA().click()
        loginPage.getUsername().type('dummy1@mailinator.com') //dummy@mailinator.com
        loginPage.getPassword().type('*Ds9&Qw8')   // /hSe7WSP
        loginPage.getLoginCTA().click()
        cy.url().should('include','/employer/dashboard')
        homePage.getHomeText().should('have.text','Home')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if(NavLink.includes('Gift & Reward')){
                cy.wrap($el).click()
            }
        })
        giftcards.getNotSharedGifts().should('have.text','You have not shared Gift card')
        giftcards.getBuyGCCTA().click()
        cy.url().should('include','/employer/benefits/corporate/subcategory/giftcards')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if(NavLink.includes('Activated Benefits')){
                cy.wrap($el).click()
            }
        })
        actBenefits.getNoactivatedText().should('have.text','No activated benefits')
        actBenefits.getBrowseBenefitsCTA().click()
        cy.url().should('include','/employer/benefits')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if(NavLink.includes('Order/Request')){
                cy.wrap($el).click()
            }
        })
        ordReq.getNoRequestsText().should('have.text','No Requests yet')
        ordReq.getBrowseBenefitsCTA().click()
        cy.url().should('include','/employer/benefits')
        navigation.getEmployeeView().click()
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if(NavLink.includes('My Benefits')){
                cy.wrap($el).click()
            }
        })
        myBene.getNoReceivedGiftsText().should('have.text','Your Gifts & Rewards will appear here')
        myBene.getDistributeBenefitsTab().click()
        myBene.getNoDisBenefitsText().eq(1).should('have.text','No Benefits are available right now')
        myBene.getPurchasedBenefitsTab().click()
        myBene.getNoDisBenefitsText().eq(1).should('have.text','No Benefits are available right now')
    })
})