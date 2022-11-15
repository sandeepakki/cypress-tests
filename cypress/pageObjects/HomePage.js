class HomePage
{

    getHomeText()
    {
        return cy.get('p.chakra-text.css-1flyc9m')
    }
    getMenuDropdown()
    {
        return cy.get('button.chakra-menu__menu-button.css-1xc86lj')
    }
    getProfileCTA()
    {
        return cy.get('menu-list-9-menuitem-10')
    }
    getSettingsCTA()
    {
        return cy.get('menu-list-9-menuitem-11')
    }
    getMangeRolesCTA()
    {
        return cy.get('menu-list-9-menuitem-12')
    }
   getLogoutCTA()
   {
    return cy.get('button.chakra-menu__menuitem.css-27cqzr')
   }
   getstartOnboardingText()
   {
    return cy.get(':nth-child(1) > .css-1i5u5jl > .css-qid58b')
   }
   getstartOnboardingLink()
   {
    return cy.get('.css-1kegpgl > .css-b5d218 > :nth-child(1) > .css-1ozhe8f > .chakra-text')
   }
   getBuyGiftText()
   {
    return cy.get(':nth-child(2) > .css-1i5u5jl > .css-qid58b')
   }
   getBuySharelink()
   {
    return cy.get('.css-1kegpgl > .css-b5d218 > :nth-child(2) > .css-1ozhe8f > .chakra-text')
   }
   getCorporatePlansText()
   {
    return cy.get(':nth-child(3) > .css-1i5u5jl > .css-qid58b')
   }
   getBuyNowLink()
   {
    return cy.get('.css-1kegpgl > .css-b5d218 > :nth-child(3) > .css-1ozhe8f > .chakra-text')
   }
   getEmployerDirText()
   {
    return cy.get('.css-708ieh')
   }
   getViewAllLink()
   {
    return cy.get('.css-363aur > .chakra-text')
   }
   getOnboardedLink()
   {
    return cy.get(':nth-child(1) > .css-j7qwjs > .css-1nfbnq7')
   }
   getInvitedLink()
   {
    return cy.get(':nth-child(2) > .css-j7qwjs > .css-1nfbnq7')
   }
   getAddBtn()
   {
    return cy.get('.css-1oeb5yi')
   }
   getReadArticleLink()
   {
    return cy.get('.css-15lgwgz > .css-b5d218 > :nth-child(1) > .css-1ozhe8f > .chakra-text')
   }
   getPoweredByText()
   {
    return cy.get('.css-1w9x2f9 > :nth-child(1) > .chakra-text')
   }
   getIncorrectUser()
   {
    return cy.get('.chakra-alert__title')
   }
}
export default HomePage;