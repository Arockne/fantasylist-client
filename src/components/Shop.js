import React from 'react'
import { Link } from 'react-router-dom'

function Shop({ shop }) {
  const {name, id} = shop
  return (
    <div>
      <Link to={`/shops/${id}`}>{name}</Link>
    </div>
  )
}

export default Shop