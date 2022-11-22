
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
Cypress.Commands.add('employerLogin', (employerUser, employerPassword) => {
  loginPage.getUsername().type(employerUser)
  loginPage.getPassword().type(employerPassword)
})
Cypress.Commands.add('employeeLogin', (employeeUser, employeePassword) => {
  loginPage.getUsername().type(employeeUser)
  loginPage.getPassword().type(employeePassword)
})
Cypress.Commands.add('loginAsEmployer', (employeeUser, employeePassword) => {
  loginPage.getUsername().type(employeeUser)
  loginPage.getPassword().type(employeePassword)
})
Cypress.Commands.add('unauthLogin', (unauthUser, unauthPassword) => {
  loginPage.getUsername().type(unauthUser)
  loginPage.getPassword().type(unauthPassword)
})
Cypress.Commands.add('IncorrectUnPwd', (correctUser, incorrectPassword) => {
  loginPage.getUsername().type(correctUser)
  loginPage.getPassword().type(incorrectPassword)
})
Cypress.Commands.add('LoginAPI', (email, password, poolID) => {
  cy.session([email, password, poolID], () => {
    cy.request({
      method: 'POST',
      url: 'https://api-stg.tartanhq.com/marvel/api/v1/employer/login',
      body: { email: "sandeep+15june@tartanhq.com", password: "San@300494", poolId: "ap-south-1_xH9pAN2Zu" }
    }).then(({ body })=> {
    // expect(body.status).to.eq(200)
      const token = {
        state: {
          "session": {
            "accessToken": {
              "jwtToken": body.accessToken
            }},
          user: body.user
        },
        version: 0
      }
      window.localStorage.setItem('batik-user-stg', JSON.stringify(token))
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