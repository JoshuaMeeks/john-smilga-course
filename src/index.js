import React from "react";
import ReactDom from 'react-dom';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className="book">
    <img src='https://images-na.ssl-images-amazon.com/images/I/51-UG7rgajL._AC_SX368_.jpg' width='150' alt=''/>
    <h1>A Random Walk Down Wall Street</h1>
    <h4>Burton G. Malkiel</h4>
  </article>;
}

ReactDom.render(<BookList />, document.getElementById('root'))