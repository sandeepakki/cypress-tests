class ordersRequests
{
 
    getNoRequestsText()
    {
        return cy.get('p.chakra-text.css-128prl8')
    }
    getBrowseBenefitsCTA()
    {
        return cy.get('.css-b93e9j > .chakra-button')
    }

}
export default ordersRequests