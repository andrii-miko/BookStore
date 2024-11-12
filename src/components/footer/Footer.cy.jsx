import Footer from './Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Footer />);

    cy.getByDataCy('footer-container').should('exist');
  });
});
