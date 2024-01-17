class LoginPage
{
    getWelcomeText()
    {
        return cy.get('.chakra-text.css-1i845vn')
    }
    getLoginWithEmailCTA()
    {
        return cy.get('.css-ea6of5')
    }
    getEmployeeCTA()
    {
        return cy.get('.css-15cvtmh')
    }
    getUsername()
    {
        return cy.get("input[name='email']")
    }
    getPassword()
    {
        return cy.get("input[name='password']")
    }
    getLoginCTA()
    {
       return cy.get('.css-1n52f34 > .chakra-button')
    }
    getUserNotfoundText()
    {
        return cy.get('div.chakra-alert__title.css-fj8teq')
    }
    getDontRememberPasswordText()
    {
        return cy.get('div.css-1rp10yp')
    }
    getClickHereLink()
    {
        return cy.get('p.chakra-text.css-hattwm')
    }
}
export default LoginPage;