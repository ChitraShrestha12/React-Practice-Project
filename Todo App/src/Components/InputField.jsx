import React from 'react'

function InputField({inputHandler,userInput}) {
  return (
    <input type="text" placeholder='Add Today Task'
    onChange={inputHandler} value={userInput}/>
  )
}

export default InputField