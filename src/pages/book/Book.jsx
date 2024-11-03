import { useState } from 'react';
import { PiPath, PiShoppingCartSimpleLight } from 'react-icons/pi';
import { useParams } from 'react-router-dom';

import BookCard from '../../components/bookCard/BookCard';
import Button from '../../components/button/Button';
import QuantityInput from '../../components/quantityInput/QuantityInput';
import useBooks from '../../hooks/useBooks';
import {
  BookContainer,
  BookInfoContainer,
  ButtonContainer,
  ContantContainer,
  IconContainer,
  MoreBooksContainer,
  PriceContainer,
  StyledInput,
  StyledTextArea,
} from './styles';

const Book = () => {
  const { books } = useBooks();

  const [quantity, setQuantity] = useState(1);

  const { bookId } = useParams();

  const book = books.find((book) => book.id === Number(bookId));

  if (!book) {
    return <p>Book not found</p>;
  }

  const truncateText = (text) => {
    const maxLength = 370;
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const getRandomBooks = (books, count) => {
    const shuffled = books.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <ContantContainer>
      <BookContainer>
        <img src={book.cover} alt={book.title} />
        <BookInfoContainer>
          <h1 data-cy="book-title">{book.title}</h1>
          <StyledInput value={book.author} disabled data-cy="book-author" />
          <StyledTextArea value={truncateText(book.description)} disabled rows={7} data-cy="book-description" />
          <PriceContainer>
            <h2 data-cy="book-price">${book.price * quantity}.00</h2>
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          </PriceContainer>
          <ButtonContainer>
            <Button>
              <PiShoppingCartSimpleLight size={20} />
            </Button>
            <Button primary={false}>Buy Now</Button>
          </ButtonContainer>
        </BookInfoContainer>
      </BookContainer>
      <IconContainer>
        <PiPath />
        <h2>VIEW MORE</h2>
      </IconContainer>
      <MoreBooksContainer data-cy="more-books-container">
        {getRandomBooks(books, 5).map((book) => (
          <BookCard key={book.id} book={book} data-cy="book-card" />
        ))}
      </MoreBooksContainer>
    </ContantContainer>
  );
};

export default Book;
