import React from "react";
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL900_SR900,600_.jpg',
  title: 'The 48 Laws of Power',
  author: 'Robert Greene',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL900_SR900,600_.jpg',
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque molestiae 
          quibusdam exercitationem aliquid eveniet est sunt reprehenderit unde ratione.</p>
      </ Book>
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = ({ img, title, author, children}) => {
  return <article className="book">
    <img src={img} width='200px' alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>;
}

ReactDom.render(<BookList />, document.getElementById('root'))