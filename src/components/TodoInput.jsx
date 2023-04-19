import React, { useState } from 'react'
import './input.css'


export default function TodoInput({ isDarkMode, onAddTodo}) {

  const [text, setText] = useState("")

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAddTodo({
      id: Date.now(),
      text,
      completed: false
    })
    setText("")
  }

  return (
    <div className={isDarkMode ? 'input-container-dark' : 'input-container'}>
      <div className={isDarkMode ? 'input-circle-dark' : 'input-circle'}></div>
      <form onSubmit={handleSubmit}>
        <input 
          className={isDarkMode ? 'input-dark' : 'input'}
          type="text"
          placeholder='Create a new todo'
          size={40}
          onChange={handleChange}
          value={text}
          />
        <button type='submit' hidden></button>
      </form> 
    </div>

    
  )
}
