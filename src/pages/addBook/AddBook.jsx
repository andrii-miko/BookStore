import React, { useState } from 'react';
import { PiPlus } from 'react-icons/pi';

import coverBook from '../../assets/cover-book.png';
import Button from '../../components/button/Button';
import useBooks from '../../hooks/useBooks';
import { StyledInput, StyledTextArea } from '../book/styles';
import { Container, ContentContainer, FormContainer } from './styles';

const AddBook = () => {
  const { addBook } = useBooks();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleAddBook = () => {
    const newBook = {
      id: Math.floor(Math.random() * 1000),
      title,
      author,
      cover: imgUrl || coverBook,
      price: parseFloat(price),
      description,
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setDescription('');
    setPrice('');
    setImgUrl('');
  };

  return (
    <Container>
      <h1>Add Book</h1>
      <ContentContainer>
        <img src={coverBook} alt="book" />
        <FormContainer>
          <StyledInput placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <StyledInput
            placeholder="Author (a): Name Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <StyledTextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <StyledInput placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <StyledInput placeholder="Img URL" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          <Button onClick={handleAddBook}>
            <PiPlus />
          </Button>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default AddBook;
