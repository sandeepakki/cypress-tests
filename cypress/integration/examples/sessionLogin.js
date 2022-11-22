describe('Login with jwt session token',function()
{
it('is logged in thru local storage',function()
{
   cy.LoginAPI()
   cy.visit('/')
   cy.url().should('include','employer/dashboard')
})
})