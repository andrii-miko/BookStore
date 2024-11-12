describe('addBook Page', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('login').click();
    cy.getByDataCy('create-account').click();
    cy.getByDataCy('email-input').type('test@gmail.com');
    cy.getByDataCy('password-input').type('password');
    cy.getByDataCy('sign-up-button').click();
    cy.getByDataCy('add-book').click();
  });
  it('should add a new book', () => {
    cy.getByDataCy('title-input').type('New Book');
    cy.getByDataCy('author-input').type('New Author');
    cy.getByDataCy('description-input').type('New Description');
    cy.getByDataCy('price-input').type('10');
    cy.getByDataCy('add-book-button').click();
  });
});
