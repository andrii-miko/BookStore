import { PiPlus } from 'react-icons/pi';

import coverBook from '../../assets/cover-book.png';
import Button from '../../components/button/Button';
import { StyledInput, StyledTextArea } from '../book/styles';
import { Container, ContentContainer, FormContainer } from './styles';

const AddBook = () => {
  return (
    <Container>
      <h1>Add Book</h1>
      <ContentContainer>
        <img src={coverBook} alt="book" />
        <FormContainer>
          <StyledInput placeholder="Title" />
          <StyledInput placeholder="Author (a): Name Author" />
          <StyledTextArea placeholder="Description" />
          <StyledInput placeholder="Price" />
          <StyledInput placeholder="Img URL" />
          <Button>
            <PiPlus />
          </Button>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default AddBook;
