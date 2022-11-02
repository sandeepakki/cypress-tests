class LoginPage
{

    getWelcomeText()
    {
        return cy.get('.chakra-text.css-1i845vn')
    }
    getEmployerCTA()
    {
        return cy.get('.chakra-button.css-15cvtmh')
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


}
export default LoginPage;