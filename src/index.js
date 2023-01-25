import React from "react";
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL900_SR900,600_.jpg',
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL900_SR900,600_.jpg',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  }, 
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  }
]

const BookList = () => {
  return (
    <section className="booklist">
     {books.map((book) => {
      return (
        <Book
          book={book} 
        />
      )
     })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return <article className="book">
    <img src={img} width='200px' alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>;
}

ReactDom.render(<BookList />, document.getElementById('root'))