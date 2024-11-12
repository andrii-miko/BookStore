describe('Book Page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('card-container').first().click();
  });
  it('should display the book details', () => {
    cy.getByDataCy('book-title').should('exist');
    cy.getByDataCy('book-author').should('exist');
    cy.getByDataCy('book-description').should('exist');
    cy.getByDataCy('book-price').should('exist');
  });
  it('should display random books on the page', () => {
    cy.getByDataCy('more-books-container').should('exist');
    cy.getByDataCy('card-container').should('have.length', 5);
  });
});
