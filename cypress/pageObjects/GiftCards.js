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
}
export default GiftCardsPage

