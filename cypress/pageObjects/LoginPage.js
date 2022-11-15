class LoginPage
{

    getWelcomeText()
    {
        return cy.get('.chakra-text.css-1i845vn')
    }
    getEmployerCTA()
    {
        return cy.get('a.chakra-button.css-15cvtmh')
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
       return cy.get('button.chakra-button.css-myw8ga')
    }
    getUserNotfoundText()
    {
        return cy.get('div.chakra-alert__title.css-fj8teq')
    }

}
export default LoginPage;