context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234 ')
  })

  it('has the proper heading', () => {
    cy.get('.widget-counter h2')
      .should('have.text', 'CounteR')
  })
})
