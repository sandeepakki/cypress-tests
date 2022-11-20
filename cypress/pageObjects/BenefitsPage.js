class BenefitsPage
{
getBenefitsText(){

 return cy.get('.css-z2qe91 > .chakra-text.css-0')
}
getCorporateBenefitsText()
{
    return cy.get('.css-xas2hr')
}
getEmployeeBenefitsText()
{
    return cy.get('button.chakra-button.css-1k08tsh')
}
getCategories()
{
    return cy.get('div.css-rwkbdd > div.css-j7qwjs')
}
getBenefitsLink()
{
    return cy.get('a.css-1x1jbbw')
}

}

export default BenefitsPage