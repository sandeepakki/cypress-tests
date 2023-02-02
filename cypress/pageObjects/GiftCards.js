class GiftCardsPage
{

    getNotSharedGifts()
    {
      return cy.get('.css-1n1ga0y')
    }
    getBuyGCCTA()
    {
      return cy.get('.css-cfg1bj > .chakra-button')
    }
    getSendNowCTA()
    {
      return cy.get('button.chakra-button.css-1kdujie')
    }
    getEmpSelModel()
    {
      return cy.get('p.chakra-text.css-1n4q2n0')
    }
    getModelPrefText()
    {
      return cy.get('p.chakra-text.css-1lmfwl')
    }
    getSelectEmp()
    {
      return cy.get('p.chakra-text.css-1g4fb78')
    }
    getSelectEmpBtn()
    {
      return cy.get('div.css-1hvfxzm > svg')
    }
    getContinueBtn()
    {
      return cy.get('button.chakra-button.css-1lc4k6g')
    }
    getCheckBoxSelection()
    {
      return cy.get('div.css-1w821kq > label')
    }
    getContinue()
    {
      return cy.get('button.chakra-button.css-bvv7e3')
    }
    getSearchEmployee()
    {
      return cy.get("input[type='text']")
    }
    getTempContinue()
    {
      return cy.get('button.chakra-button.css-qfhsrb')
    }
    getSendCards()
    {
      return cy.get('button.chakra-button.css-vrr1lw')
    }
    getSuccessMsg()
    {
      return cy.get('p.chakra-text.css-17izftj')
    }
    getDoneCTA()
    {
      return cy.get('button.chakra-button.css-1geapk1')
    }
    getUploadCSVHeader()
    {
      return cy.get('p.chakra-text.css-skc3a0')
    }
    getCSVrdBtn()
    {
      return cy.get('div.css-ukcazh > svg')
    }
    getChooseFile()
    {
      return cy.get("input[type='file']")
    }
    getInvalidEmailText()
    {
      return cy.get('.css-7pd18w > .chakra-text')
    }
    getTrashIcon()
    {
      return cy.get("path[d^='M360']")
    }
    getFileUploadSuccessText()
    {
      return cy.get('.css-7pd18w > .chakra-text')
    }
    getCustomTemp()
    {
      return cy.get('p.chakra-text.css-muv0im')
    }
    getRemoveEmp()
    {
      return cy.get('div.css-f16ru2')
    }
    getAddInput()
    {
      return cy.get("input[type='text']")
    }
    getMyntraBrand()
    {
      return cy.get("div#root > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(4) > img")
    }
    getBuyBtn()
    {
      return cy.get('button.chakra-button.css-jix8hi')
    }
    getCardPrices()
    {
      return cy.get('button.chakra-button.css-1ugvew5')
    }
    getInputPrice()
    {
      return cy.get("input[type='number']")
    }
    getMinPriceText()
    {
      return cy.get('div.css-1tnytw7 > p.chakra-text.css-0')
    }
    getHowManyCardsText()
    {
      return cy.get('p.chakra-text.css-ejo1a3')
    }
    getMaxCardsText()
    {
      return cy.get('p.chakra-text.css-zmeola')
    }
    getBuyNowCTA()
    {
      return cy.get('button.chakra-button.css-cik81r')
    }
    getEaseBuzz()
    {
      return cy.get('p.chakra-text.css-1cu3syb')
    }
}
export default GiftCardsPage

