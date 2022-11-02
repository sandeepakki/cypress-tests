class HomePage
{

    getHomeText()
    {
        return cy.get('p.chakra-text.css-1flyc9m')
    }
    getMenuDropdown()
    {
        return cy.get('#menu-button-9')
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
    return cy.get('#menu-list-9-menuitem-13')
   }

}
export default HomePage;