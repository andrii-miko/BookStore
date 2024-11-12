import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

import { QuantityInputContainer } from './styles';

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    if (quantity < 99) setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <QuantityInputContainer>
      <button onClick={handleDecrease} data-cy="quantity-input-decrease">
        <CiCircleMinus size={25} />
      </button>
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} disabled />
      <button onClick={handleIncrease} data-cy="quantity-input-increase">
        <CiCirclePlus size={25} />
      </button>
    </QuantityInputContainer>
  );
};

export default QuantityInput;
