class BenefitsPage
{
getBenefitsText()
{
 return cy.get('.css-ka1lkk > :nth-child(2)')
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
getSubCategories()
{
    return cy.get('div.css-4bzq66')
}
getBenefitsLink()
{
    return cy.get('.css-ka1lkk > :nth-child(2)')
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
getViewAll()
{
     return cy.get('.css-1zfcfp > .chakra-text')
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
    return cy.get('div.css-1nffez8')
}
getTaxes()
{
    return cy.get('div.css-1nffez8')
}
getDiscount()
{
    return cy.get('div.css-1qauprg > p.css-1c6sbgk')
}
getTaxeswithOffer()
{
    return cy.get(':nth-child(10) > .css-3u2sdd')
}
getTaxesWithoutAnyOffer()
{
    return cy.get(':nth-child(9) > .css-3u2sdd')
}
getTotalPayable()
{
    return cy.get('.css-164oxdm')
}
getNoTaxBenefit()
{
    return cy.get('p.css-u8gjsp').contains('No Tax',{ matchCase: false })
}
getNoTaxwithOfferBenefit()
{
    return cy.get('p.css-u8gjsp').contains('No Tax with Offer',{ matchCase: false })
}
getTaxAddedBenefit()
{
    return cy.get(':nth-child(3) > .css-70qvj9 > .chakra-text')
}
getTaxAddedwithOfferBenefit()
{
    return cy.get('p').contains('Taxes Added with offer',{ matchCase: false })
}
getBuyNow()
{
    return cy.get('.chakra-button.css-1izu0at')
}
getTaxViewAll()
{
    return cy.get('div#root > div > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(5) > div:nth-of-type(4) > div > div > p')
}
getGiftPageText()
{
    return cy.get('p.chakra-text.css-t5co4c')
}
getAllTaxesGroupHeading()
{
    return cy.get('h2').contains('All Tax Scenarios')
}
}
export default BenefitsPage