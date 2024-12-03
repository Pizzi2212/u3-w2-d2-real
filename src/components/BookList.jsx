import MyBook from './MyBook'

function BookList({ library, setSelectedBook }) {
  const handleClick = (e) => {
    const book = e.target.closest('.book')
    if (!book) return
    document
      .querySelector('.book--selected')
      ?.classList.remove('book--selected')
    book.classList.add('book--selected')
    setSelectedBook(book.dataset.asin)
  }
  return (
    <section className="books" onClick={handleClick}>
      {library.map((book) => (
        <MyBook key={book.asin} book={book} />
      ))}
    </section>
  )
}

export default BookList
