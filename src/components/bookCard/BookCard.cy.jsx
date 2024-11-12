import BookCard from './BookCard';

describe('BookCard Component', () => {
  const book = {
    id: '1',
    title: 'Sample Book',
    price: 20,
    cover: 'cover-book.png',
  };

  beforeEach(() => {
    cy.mountWithProviders(<BookCard book={book} />);
  });
  it('renders correctly', () => {
    cy.getByDataCy('card-container').should('exist');
  });
});
