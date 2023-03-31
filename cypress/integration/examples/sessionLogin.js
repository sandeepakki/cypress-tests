/// <reference types="Cypress" />
import HomePage from '../../pageObjects/HomePage'

const homePage = new HomePage()
describe('Login with jwt session token',function()
{

it('is logged in thru local storage',function()
{
   cy.LoginAPI().then(function()
   {

      cy.visit('/',
      {
         onBeforeLoad : function(window)
         {
            window.localStorage.setItem('token', Cypress.env('batik-user-stg'))
         }
      }
      )
   })
})
})