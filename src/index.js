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
  return <article><Image /></article>;
}
const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/51-UG7rgajL._AC_SX368_.jpg' width='150' alt=''/>

ReactDom.render(<BookList />, document.getElementById('root'))