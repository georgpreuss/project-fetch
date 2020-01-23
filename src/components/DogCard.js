import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = ({ dog }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link className="subtitle" to={`/dogs/${dog.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={dog.img} alt={`image of ${dog.name}`} />
          </figure>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">
            <span className="subtitle is-6">{dog.name}</span>
          </p>
        </div>
      </div>
    </Link>
  </div>
)

export default DogCard