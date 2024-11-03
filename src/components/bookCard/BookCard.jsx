import { CiBookmark } from 'react-icons/ci';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { StyledSpan } from '../spanBordered/StyledSpan';
import { BookMarkContainer, CardContainer } from './styles';

const BookCard = ({ book }) => {
  return (
    <CardContainer data-cy={'card-container'}>
      <Link key={book.id} to={`/books/${book.id}`}>
        <img src={book.cover} alt={book.title} />
      </Link>
      <div>
        <StyledSpan>${book.price}.00</StyledSpan>
        <BookMarkContainer>
          <CiBookmark size={24} />
        </BookMarkContainer>
      </div>
      <Button primary>
        <PiShoppingCartSimpleLight size={24} />
      </Button>
    </CardContainer>
  );
};

export default BookCard;
