describe('Login with jwt session token',()=>
{
it('is logged in thru local storage',()=>
{
    cy.LoginAPI()
    cy.visit('/')
    cy.visit("https://bs.tartanhq.com/employer/dashboard")
})
})