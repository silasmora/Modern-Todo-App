import React, { useState } from 'react'
import crossIcon from '/images/icon-cross.svg'
import checkIcon from '/images/icon-check.svg'

export default function TodoItem( { todo, onDeleteTodo, onMarkComplete }) {

  const [isHovered, setIsHovered] = useState(false)
  const [isChecked, setIsChecked] = useState(todo.completed)
 
  return (
    <div 
      className='todo-item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          onClick={() => {
            setIsChecked(!isChecked)
            onMarkComplete(todo.id)
          }}
          className={isChecked ? 'todo-circle-checked' : 'todo-circle'}>
          {isChecked ? <img src={checkIcon}/> : null}  
          </div>
        
        <p className={isChecked ? 'item-complete' : ''}>{todo.text}</p>
        
        {isHovered && <img className='cross-icon' src={crossIcon} onClick={() => onDeleteTodo(todo.id)}/>}
    </div>
  )
}
