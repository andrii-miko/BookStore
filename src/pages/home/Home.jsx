import { CiSearch } from 'react-icons/ci';

import BannerImg from '../../assets/Banner-img.jpg';
import BookCard from '../../components/bookCard/BookCard';
import { books } from '../../constants';
import { BooksGrid, ContentContainer, FlexContainer, SearchContainer } from './styles';

const Home = () => {
  return (
    <ContentContainer>
      <FlexContainer>
        <SearchContainer>
          <h1>What book you looking for?</h1>
          <p>Explore our catalog and find your next read.</p>
          <div>
            <input type="text" placeholder="Type the name of book or author..." />
            <button type="button">
              <CiSearch size={20} />
            </button>
          </div>
        </SearchContainer>
        <img src={BannerImg} alt="Home" />
      </FlexContainer>
      <h2>Books</h2>
      <BooksGrid>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BooksGrid>
    </ContentContainer>
  );
};

export default Home;
