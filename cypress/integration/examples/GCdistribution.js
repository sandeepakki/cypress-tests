import HomePage from '../../pageObjects/HomePage'
import LoginPage from '../../pageObjects/LoginPage'
import GiftCardsPage from '../../pageObjects/GiftCards'
import NavigationSection from '../../pageObjects/NavigationSection'

//constructors
const loginPage = new LoginPage()
const homePage = new HomePage()
const giftcards = new GiftCardsPage()
const navigation = new NavigationSection()
//actual code
describe('batik test suite', function () {

    beforeEach(function () {
        //runs before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.visit('/')
        })
    })
    it('Distribute Purchased Gift Cards to onboarded employee without csv', function () {

        loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
        loginPage.getEmployerCTA().click()
        loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
        loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
        loginPage.getLoginCTA().click()
        cy.url().should('include', '/employer/dashboard')
        homePage.getHomeText().should('have.text', 'Home')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if (NavLink.includes('Gift & Reward')) {
                cy.wrap($el).click()
            }
        })
        giftcards.getSendNowCTA().eq(1).click()
        giftcards.getEmpSelModel().should('have.text', 'Employee Selection')
        giftcards.getModelPrefText().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Choose a preference")).to.be.true
            cy.wait(1000)
        })
        giftcards.getSelectEmp().should('have.text', 'Select Employees')
        giftcards.getSelectEmpBtn().click()
        giftcards.getContinueBtn().click()
        giftcards.getCheckBoxSelection().click()
        giftcards.getContinue().click()
        giftcards.getTempContinue().click()
        giftcards.getSendCards().click()
        giftcards.getSuccessMsg().should('have.text', 'Gift cards shared successfully')
        giftcards.getDoneCTA().click()
    })
    it('Distribute Purchased Gift Cards to Outsider', function () {

        loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
        loginPage.getEmployerCTA().click()
        loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
        loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
        loginPage.getLoginCTA().click()
        cy.url().should('include', '/employer/dashboard')
        homePage.getHomeText().should('have.text', 'Home')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if (NavLink.includes('Gift & Reward')) {
                cy.wrap($el).click()
            }
        })
        giftcards.getSendNowCTA().eq(1).click()
        giftcards.getEmpSelModel().should('have.text', 'Employee Selection')
        giftcards.getModelPrefText().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Choose a preference")).to.be.true
            cy.wait(1000)
        })
        giftcards.getSelectEmp().should('have.text', 'Select Employees')
        giftcards.getSelectEmpBtn().click()
        giftcards.getContinueBtn().click()
        giftcards.getAddInput().type('xyz@mailinator.com{enter}',{force: true})
        giftcards.getContinue().click()
        giftcards.getTempContinue().click()
        giftcards.getSendCards().click()
        giftcards.getSuccessMsg().should('have.text', 'Gift cards shared successfully')
        giftcards.getDoneCTA().click()
    })
    it('Distribute Purchased Gift Cards to onboarded employees with csv and custom template', function () {

        loginPage.getWelcomeText().should('have.text', 'Welcome to Batik!')
        loginPage.getEmployerCTA().click()
        loginPage.getUsername().type('sandeep@tartanhq.com') //dummy@mailinator.com | dummy1@mailinator.com
        loginPage.getPassword().type('San@3004')   // /hSe7WSP | *Ds9&Qw8
        loginPage.getLoginCTA().click()
        cy.url().should('include', '/employer/dashboard')
        homePage.getHomeText().should('have.text', 'Home')
        navigation.getNavBarLinks().each(($el, index, $list) => {
            const NavLink = $el.text()
            if (NavLink.includes('Gift & Reward')) {
                cy.wrap($el).click()
            }
        })
        giftcards.getSendNowCTA().eq(1).click()
        giftcards.getUploadCSVHeader().should('have.text', 'Upload CSV Document')
        giftcards.getCSVrdBtn().click()
        cy.fixture('DataSet.csv').then(fileContent => {
            giftcards.getChooseFile().attachFile({
                fileContent,
                fileName: 'DataSet.csv',
                mimeType: 'text/csv',
            })
        })
        giftcards.getInvalidEmailText().should('have.text', "*Invalid email/Missing details")
        giftcards.getTrashIcon().click({ force: true })
        cy.fixture('gcDistributeFile.csv').then(fileContent => {
            giftcards.getChooseFile().attachFile({
                fileContent,
                fileName: 'gcDistributeFile.csv',
                mimeType: 'text/csv',
            })
        })
        giftcards.getFileUploadSuccessText().should('have.text', 'File uploaded successfully')
        giftcards.getContinueBtn().click()
        giftcards.getCustomTemp().click()
        giftcards.getTempContinue().click()
        giftcards.getRemoveEmp().eq(1).click()
        giftcards.getSendCards().click()
        giftcards.getSuccessMsg().should('have.text', 'Gift cards shared successfully')
        giftcards.getDoneCTA().click()
    })
})