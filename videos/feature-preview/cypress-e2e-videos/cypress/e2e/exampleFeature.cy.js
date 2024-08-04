describe('exampleFeature', () => {
  it('navigate to feature page', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://aapc-nz.org/')
    cy.get('a').contains('Pollen').click()

    cy.get('button').contains('Date Range').scrollIntoView()
    cy.get('button').contains('Date Range').click()

    cy.get('input[type="date"]').first().focus().type("2024-03-01")
  })
})