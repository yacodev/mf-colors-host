describe('home page', () => {
  it('should visit home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 'Home Page');
  });
});
