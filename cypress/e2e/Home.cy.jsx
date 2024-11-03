describe('Home Page', () => {
  beforeEach(() => {
    cy.visitApp();
  });

  it('should display the search input and button', () => {
    cy.getByDataCy('search-input').should('exist').and('be.visible');

    cy.getByDataCy('search-button').should('exist').and('be.visible');
  });

  it('should filter books based on the search input', () => {
    const searchQuery = '1984';

    cy.getByDataCy('search-input').type(searchQuery);

    cy.getByDataCy('card-container').should('have.length.greaterThan', 0);
  });

  it('should display all books when search input is cleared', () => {
    cy.getByDataCy('search-input').type('Harry Potter');
    cy.getByDataCy('search-input').clear();

    cy.getByDataCy('card-container').should('have.length.greaterThan', 0);
  });
});
