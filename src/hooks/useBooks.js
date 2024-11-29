import { mockedBooks } from '../constants';
import useLocalStorage from './useLocalStorage';

const useBooks = () => {
  const { value: books, setLocalStorage: setBooks } = useLocalStorage('books', mockedBooks);
  const addBook = (book) => {
    setBooks([...books, book]);
  };
  return { books, addBook };
};

export default useBooks;
