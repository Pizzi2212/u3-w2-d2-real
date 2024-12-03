import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { library } from './library'
import MyNav from './components/MyNav'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)
  console.log(library)

  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <BookList setSelectedBook={setSelectedBook} library={library} />
        <CommentArea selectedBook={selectedBook} />
      </main>
      <footer></footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
