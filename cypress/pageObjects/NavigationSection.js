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
}
export default NavigationSection