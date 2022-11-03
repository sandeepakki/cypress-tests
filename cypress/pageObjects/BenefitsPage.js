class BenefitsPage
{
getBenefitsText(){

 return cy.get('.css-z2qe91 > .chakra-text.css-0')
}
getCorporateBenefitsText()
{
    return cy.get('.css-xas2hr')
}
}

export default BenefitsPage