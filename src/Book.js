const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log(title)
  }
  
  return <article className="book">
    <img src={img} width='200px' alt=''/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>
      remove book
    </button>
  </article>;
}

export default Book