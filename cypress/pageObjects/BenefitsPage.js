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
getViewAll(){
     return cy.get('.css-1ac8m8p')
}
getBuyNowCTA(){
   return cy.get('.css-8atqhb > .chakra-button') 
}
getAddEmployeesCTA()
{
    return cy.get('.css-j7qwjs > .chakra-button')
}
getDistributionSearch()
{
    return cy.get('.chakra-input.css-fhh81b')
}
getCheckbox(){
    return cy.get('.chakra-checkbox__control')
}
getClearSelectionCTA(){
    return cy.get('.css-1pfirsg')
}
getDoneCTA()
{
    return cy.get('.css-bu0ufc')
}
getViewListCTA()
{
    return cy.get('.css-1c1vhch')
}
getDonebtn()
{
    return cy.get('.css-dvxtzn > .chakra-button')
}
getAddMoreCTA()
{
    return cy.get('.css-1qd0soq')
}
getContinuePayCTA()
{
    return cy.get('.css-8maogs > .chakra-button')
}
getpaytm()
{
    return cy.get('div:nth-of-type(2) > div:nth-of-type(2) > div > svg')
}
getUsepaymentCTA()
{
    return cy.get('.css-gu9xnp > .chakra-button')
}
getPaywithPaytm()
{
    return cy.get('.ptm-log-inpheading.ptm-body-color')
}
getPaytmclose()
{
    return cy.get('div.ptm-header-top.ptm-pos-r.xs-header-top > span')
}
getQuantityInput()
{
    return cy.get('.chakra-numberinput__field.css-64fodi')
}
getAmount()
{
    return cy.get(':nth-child(7) > .css-3u2sdd')
}
getDiscount()
{
    return cy.get('.css-1c6sbgk')
}
getTaxes()
{
    return cy.get(':nth-child(9) > .css-3u2sdd')
}
getTaxesWithoutAnyOffer()
{
    return cy.get(':nth-child(8) > .css-3u2sdd')
}
getTotalPayable()
{
    return cy.get('.css-164oxdm')
}
getHealthCare1()
{
    return cy.get('h2').contains('Healthcare Test Scenario 1')
}
getHealthCare6()
{
    return cy.get('h2').contains('Healthcare Test scenario 6')
}
getHealthCare2()
{
    return cy.get('h2').contains('Healthcare Test Scenario2')
}
getHealthCare3()
{
    return cy.get('h2').contains('Healthcare Test Scenario 3')
}
getHealthCare4()
{
    return cy.get('h2').contains('Healthcare Test Scenario 4')
}
getHealthCare5()
{
    return cy.get('h2').contains('Healthcare test scenario 5')
}
getBuyNow()
{
    return cy.get('.chakra-button.css-1izu0at')
}
}
export default BenefitsPage