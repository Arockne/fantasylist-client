import React from 'react'
import Items from './Items'

function Shop({ shop }) {
  const {name} = shop
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

export default Shop