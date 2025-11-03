import React from 'react'

function Button({onClick}) {
  return (
    <button onClick={onClick} type='button'>Generate Quote</button>
  )
}

export default Button