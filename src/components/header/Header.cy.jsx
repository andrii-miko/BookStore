import Header from './Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Header />);

    cy.getByDataCy('header-container').should('exist');
  });
});
