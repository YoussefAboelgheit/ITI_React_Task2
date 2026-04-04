import React, { useState } from 'react'
import BookCard from './BookCard'
import completeEndgame from '../assets/Complete EndGame.jpg'
import reassessChess from '../assets/How to reassess your chess.jpg'
import pumpRating from '../assets/Pump Up Your Rating.jpg'
import woodpecker from '../assets/The Woodpecker Method.jpg'

const initialBooks = [
  {
    id: 1,
    name: "Silman's Complete Endgame Course",
    author: 'Jeremy Silman',
    rating: '4.8 / 5',
    classification: 'Endgame',
    coverImage: completeEndgame,
    quantity: 3,
  },
  {
    id: 2,
    name: 'How to Reassess Your Chess',
    author: 'Jeremy Silman',
    rating: '4.7 / 5',
    classification: 'Strategy / Middlegame',
    coverImage: reassessChess,
    quantity: 5,
  },
  {
    id: 3,
    name: 'Pump Up Your Rating',
    author: 'Axel Smith',
    rating: '4.6 / 5',
    classification: 'Training / Improvement',
    coverImage: pumpRating,
    quantity: 7,
  },
  {
    id: 4,
    name: 'The Woodpecker Method',
    author: 'Axel Smith & Hans Tikkanen',
    rating: '4.8 / 5',
    classification: 'Tactics / Calculation',
    coverImage: woodpecker,
    quantity: 10,
  },
]

export default function BookInformation() {
  const [books, setBooks] = useState(initialBooks)

  function handleBuy(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id && book.quantity > 0
          ? { ...book, quantity: book.quantity - 1 }
          : book
      )
    )
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {books.map((book) => (
            <div key={book.id} className="col">
              <BookCard
                name={book.name}
                author={book.author}
                rating={book.rating}
                classification={book.classification}
                coverImage={book.coverImage}
                quantity={book.quantity}
                onBuy={() => handleBuy(book.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
