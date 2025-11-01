import React from 'react'

function Button({btnName,taskHandler}) {
  return (
    <button onClick={taskHandler}>{btnName}</button>
  )
}

export default Button