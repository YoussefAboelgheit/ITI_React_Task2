import React from 'react'

export default function BookCard({
  name,
  author,
  rating,
  classification,
  coverImage,
  quantity,
  onBuy,
}) {
  const soldOut = quantity === 0
  const lowStock = quantity > 0 && quantity < 3

  let cardClass = 'card h-100 book-card'
  if (soldOut) cardClass += ' book-card--sold-out'
  else if (lowStock) cardClass += ' book-card--low-stock'

  let buttonClass = 'btn mt-2'
  let buttonLabel = 'Buy'

  if (soldOut) {
    buttonClass += ' btn-secondary'
    buttonLabel = 'Sold out'
  } else if (lowStock) {
    buttonClass += ' btn-warning text-dark'
    buttonLabel = 'Almost sold out'
  } else {
    buttonClass += ' btn-primary'
  }

  return (
    <div className={cardClass}>
      <img className="card-img-top" src={coverImage} alt="" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1">
          <strong>Author:</strong> {author}
        </p>
        <p className="card-text mb-1">
          <strong>Rating:</strong> {rating}
        </p>
        <p className="card-text flex-grow-1">
          <strong>Classification:</strong> {classification}
        </p>
        <p className="card-text mb-1">
          <strong>Quantity:</strong> {quantity}
        </p>
        <button
          type="button"
          className={buttonClass}
          onClick={onBuy}
          disabled={soldOut}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}