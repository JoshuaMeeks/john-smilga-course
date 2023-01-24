import React from "react";
import ReactDom from 'react-dom';

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>this is a book</article>;
}

ReactDom.render(<BookList />, document.getElementById('root'))