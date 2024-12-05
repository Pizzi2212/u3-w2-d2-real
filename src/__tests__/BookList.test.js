import React from 'react'
import { create } from 'react-test-renderer'
import BookList from './BookList'
import MyBook from './MyBook'

jest.mock('./MyBook', () => ({ book }) => (
  <div className="book">{book.title}</div>
))

describe('BookList Component', () => {
  test('renders the correct number of books', () => {
    const mockLibrary = [
      { asin: '123', title: 'Book 1', author: 'Author 1' },
      { asin: '456', title: 'Book 2', author: 'Author 2' },
      { asin: '789', title: 'Book 3', author: 'Author 3' },
    ]
    const mockSetSelectedBook = jest.fn()

    const component = create(
      <BookList library={mockLibrary} setSelectedBook={mockSetSelectedBook} />
    )
    const root = component.root

    const bookElements = root.findAllByProps({ className: 'book' })

    expect(bookElements.length).toBe(mockLibrary.length)
  })
})
