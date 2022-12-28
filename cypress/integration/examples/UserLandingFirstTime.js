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
        loginPage.getUsername().type('rs@mailinator.com') //dummy@mailinator.com | dummy1@mailinator.com
        loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
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
        navigation.getNotificationIcon().click()
        navigation.getNotificationHeading().should('have.text','Verify your Phone number')
        navigation.getCloseNotification().click()
        navigation.getNeedAssistanceIcon().click()
        navigation.getNeedAssisText().should('have.text','Need assistance ?')
        navigation.getWritetoUsCTA().should('have.text',' Write to us')
        navigation.getMenuList().eq(0).click({force: true})
        navigation.getMenuList().eq(1).click({force: true})
        navigation.getEditDetailsCTA().should('have.text','Edit Details')
        navigation.getSettingslink().click()
        navigation.getVerifyNowlink().click()
        navigation.getGobackLink().click()
        navigation.getResetPasswordCTA().click()
        navigation.getResetPassText().should('have.text','Reset your Password')
        navigation.getGobackLink().click()
        navigation.getPoweredByText().should('have.text','Powered by')
    })
})