class activatedBenefits
{
    getActivatedBenefitsLink()
    {
        return cy.get('[href="/employer/activatedbenefits"]')
    }
    getSearchInput()
    {
        return cy.get('.chakra-input')
    }
    getSearchedBenefit()
        {
            return cy.get('.css-1y41fdh')
        }
    getDeactivatedCTA()
    {
        return cy.get('.css-140irym > .chakra-text')
    }
    getCancelCTA()
    {
        return cy.get('.css-67yvh4')
    }   
    getPopText()
    {
        return cy.get('.css-1xih205')
    }
    getConfirmCTA()
    {
        return cy.get('button.chakra-button.css-1y9wb88')
    }
    getCategorieFilter()
    {
        return cy.get('.chakra-button.css-135828n')
    }
    }
export default activatedBenefits