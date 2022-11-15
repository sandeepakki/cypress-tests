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
    getSubmitbutton(){
        return cy.get('button.chakra-button.css-7top16')
    }
    getEmailFieldFeedback()
    {
        return cy.get('#field-2-feedback')
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
    getNewPasswordField()
    {
      return cy.get('#field-4')
    }
    getConfirmPasswordField()
    {
       return cy.get('#field-5')
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
}
export default ForgotPage