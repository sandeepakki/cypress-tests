class NavigationSection
{

    getNavBarLinks()
    {
      return cy.get('p.chakra-text.css-b08agr')
    }
    getEmployeeView()
    {
      return cy.get('.css-1fqjqon')
    }
    getNotificationIcon()
    {
      return cy.get('div.css-2ego18')
    }
    getNotificationHeading()
    {
      return cy.get('p.chakra-text.css-1i7fko9')
    }
    getCloseNotification()
    {
      return cy.get('div.css-4uqmd3')
    }
    getNeedAssistanceIcon()
    {
      return cy.get('div.css-18kn2or')
    }
    getNeedAssisText()
    {
      return cy.get('p.chakra-text.css-1ypua0p')
    }
    getWritetoUsCTA()
    {
      return cy.get('p.chakra-text.css-m75dnw')
    }
    getMenuList()
    {
      return cy.get("button[id^='menu']")
    }
    getEditDetailsCTA()
    {
      return cy.get('button.chakra-button.css-354dd')
    }
    getSettingslink()
    {
      return cy.get('p.chakra-text.css-mf14o2')
    }
    getVerifyNowlink()
    {
      return cy.get('p.chakra-text.css-1wh4mwd')
    }
    getGobackLink()
    {
      return cy.get('svg.css-1ria8ez')
    }
    getResetPasswordCTA()
    {
      return cy.get('button.chakra-button.css-pgk6om')
    }
    getResetPassText()
    {
      return cy.get('p.chakra-text.css-lqot5u')
    }
    getPoweredByText()
    {
      return cy.get('div.css-v7kbuh')
    }
}
export default NavigationSection