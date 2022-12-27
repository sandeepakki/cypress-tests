class EmployeeDirectory
{

    getEmployeeDirectoryPage()
    {
        return cy.get('.css-70qvj9 > .chakra-text')
    }
    getAddEmployeeCTA()
    {
        return cy.get('button.chakra-button.css-w1m8t0')
    }
    getOnboardPopHeader()
    {
        return cy.get('#chakra-modal--header-16')
    }
    getUploadCSVText()
    {
        return cy.get('p.chakra-text.css-1bsgmhw')
    }
    getSampleCSVLink()
    {
        return cy.get('a.chakra-link.css-1b20udn')
    }
    getChooseFile()
    {
        return cy.get("input[type='file']")
    }
    getUploadCTA()
    {
        return cy.get('.chakra-modal__footer > .chakra-button')
    }
    getEmptyCSVToast()
    {
      return cy.get('.chakra-toast > .chakra-toast__inner > .css-1lik65u > .css-zg1vud > .chakra-text')
    }
    getOnboardingReport()
    {
        return cy.get('#chakra-modal--header-12')
    }
    getFileUploadInProgress()
    {
        return cy.get('.css-152crlj')
    }
    getGotITCTA()
    {
        return cy.get('.css-asvefe > .chakra-button')
    }
}
export default EmployeeDirectory