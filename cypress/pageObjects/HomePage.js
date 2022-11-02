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

}
export default HomePage;