import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import BannerImg from '../../assets/Banner-img.jpg';
import BookCard from '../../components/bookCard/BookCard';
import useBooks from '../../hooks/useBooks';
import { BooksGrid, ContentContainer, FlexContainer, SearchContainer } from './styles';

const Home = () => {
  const [query, setQuery] = useState('');
  const { books } = useBooks();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <ContentContainer>
      <FlexContainer>
        <SearchContainer>
          <h1>What book you looking for?</h1>
          <p>Explore our catalog and find your next read.</p>
          <div>
            <input type="text" placeholder="Type the name of book or author..." onChange={handleSearch} value={query} />
            <button type="button">
              <CiSearch size={20} />
            </button>
          </div>
        </SearchContainer>
        <img src={BannerImg} alt="Home" />
      </FlexContainer>
      <BooksGrid>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BooksGrid>
    </ContentContainer>
  );
};

export default Home;
