
import LoginPage from '../pageObjects/LoginPage'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import 'cypress-file-upload';
const loginPage = new LoginPage
Cypress.Commands.add('Login', (Email,Password) => {
  loginPage.getUsername().type(Email)
  loginPage.getPassword().type(Password)
})
Cypress.Commands.add('LoginAPI', (email, password, poolID) => {
  cy.session([email, password, poolID], () => {
    cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/login',
      body: {loginKey:"legacy@mailinator.com",password:"San@300494",poolId:"ap-south-1_xH9pAN2Zu"}
    }).then(({ body })=> {
      console.log(body.accessToken)
     Cypress.env('batik-user-stg',body.accessToken)
    })
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })