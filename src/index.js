import React from "react";
import ReactDom from 'react-dom';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>;
}
const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/51-UG7rgajL._AC_SX368_.jpg' width='150' alt=''/>

const Title = () => <h1>A Random Walk Down Wall Street</h1>

const Author = () => <h4>Burton G. Malkiel</h4>
ReactDom.render(<BookList />, document.getElementById('root'))