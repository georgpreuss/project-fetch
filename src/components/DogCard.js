import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = ({ dog }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={dog.img} alt={`image of ${dog.name}`} />
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/dogs/${dog.id}`}>{dog.name}</Link>
      </div>
    </div>
  </div>
)

export default DogCard