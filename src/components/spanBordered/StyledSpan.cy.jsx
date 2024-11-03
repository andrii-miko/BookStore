import { StyledSpan } from './StyledSpan';

describe('StyledSpan Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<StyledSpan>test</StyledSpan>);

    cy.get('span').should('contain', 'test');
  });
});
