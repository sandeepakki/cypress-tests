class MyBenefits
{
 
    getNoReceivedGiftsText()
    {
        return cy.get('.css-19934h6')
    }
    getDistributeBenefitsTab()
    {
        return cy.get("button[id$='tab-1']")
    }
    getNoDisBenefitsText()
    {
        return cy.get('p.chakra-text.css-6is2bo')
    }
    getPurchasedBenefitsTab()
    {
        return cy.get("button[id$='tab-2']")
    }

}
export default MyBenefits