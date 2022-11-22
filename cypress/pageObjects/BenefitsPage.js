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
    return cy.get('[href="/employer/benefits/corporate"]')
}
selectBenefit()
{
    return cy.get('div.css-vrey03 > div.css-j7qwjs')
}
activateBenefitCTA()
{
    return cy.get('button.chakra-button.css-o0pqos')
}
getSuccessToast()
{
    return cy.get('.chakra-toast > .chakra-toast__inner > .css-1lik65u > .css-j7qwjs > .css-1przbv1')
           
}
}
export default BenefitsPage