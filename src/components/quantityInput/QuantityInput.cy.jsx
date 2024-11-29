import QuantityInput from './QuantityInput';

describe('QuantityInput Component', () => {
  let quantity = 5;
  const setQuantity = (newQuantity) => {
    quantity = newQuantity;
  };

  beforeEach(() => {
    cy.mount(<QuantityInput quantity={quantity} setQuantity={setQuantity} />);
  });

  it('displays the initial quantity', () => {
    cy.get('input').should('have.value', '5');
  });
});
