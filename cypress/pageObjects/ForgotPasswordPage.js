class ForgotPage
{

    getForgotPasswordText()
    {
        return cy.get('p.chakra-text.css-1whf2ao')
    }
    getWorkEmailAddressText()
    {
        return cy.get('p.chakra-text.css-1j53zka')
    }
    getEmailField()
    {
        return cy.get('#field-2')
    }
    getNewEmailField()
    {
        return cy.get('#field-6')
    }
    getSubmitbutton(){
        return cy.get('button.chakra-button.css-7top16')
    }
    getFinalSubmitbutton()
    {
        return cy.get('.chakra-button')
    }
    getEmailFieldFeedback()
    {
        return cy.get('.chakra-toast > .chakra-toast__inner > .css-1lik65u')
    }
    getPinbox0()
    {
        return cy.get('#pin-input-3-0')
    }
    getPinbox1()
    {
        return cy.get('#pin-input-3-1')
    }
    getPinbox2()
    {
        return cy.get('#pin-input-3-2')
    }
    getPinbox3()
    {
        return cy.get('#pin-input-3-3')
    }
    getPinbox4()
    {
       return cy.get('#pin-input-3-4')
    }
    getPinbox5()
    {
       return cy.get('#pin-input-3-5')
    }
    getNewPin0()
    {
        return cy.get('#pin-input-7-0')
    }
    getNewPin1()
    {
        return cy.get('#pin-input-7-1')
    }
    getNewPin2()
    {
        return cy.get('#pin-input-7-2')
    }
    getNewPin3()
    {
        return cy.get('#pin-input-7-3')
    }
    getNewPin4()
    {
        return cy.get('#pin-input-7-4')
    }
    getNewPin5()
    {
        return cy.get('#pin-input-7-5')
    }
    getNewPasswordField()
    {
      return cy.get('#field-4')
    }
    getNewPasswordfield()
    {
        return cy.get('#field-8')
    }
    getConfirmPasswordField()
    {
       return cy.get('#field-5')
    }
    getConfirmPasswordfield()
    {
        return cy.get('#field-9')
    }
    getNewPasswordFieldFeedback()
    {
      return cy.get('#field-4-feedback')
    }
    getConfirmPassFieldFeedback()
    {
        return cy.get('#field-5-feedback')
    }
    getAttemptLimitExceededText()
    {
        return cy.get('.chakra-toast > .chakra-toast__inner > .css-1lik65u > .css-zg1vud > .chakra-text')
    }
    getCodeSentText()
    {
        return cy.get('div.chakra-alert__title.css-do6bdz')
    }
    getDidntRecivedText()
    {
        return cy.get('.css-11qbfpj > .chakra-text')
    }
    getReturntoLoginLink()
    {
        return cy.get('.css-19dvwkb > .chakra-text')
    }
    getInvalidVerifyText()
    {
        return cy.get('.chakra-toast > .chakra-toast__inner > .css-1lik65u')
    }
}
export default ForgotPage