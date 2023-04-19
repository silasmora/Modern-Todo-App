import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import './todoList.css'

export default function TodoList({ isDarkMode }) {

  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if (savedTodos) {
      setTodos(savedTodos)
    }
  }, [])

  function handleAddTodo(todo) {
    setTodos([...todos, todo])
  }

  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  function handleMarkComplete(id) {
    setTodos(prevState => {
      return prevState.map(todo => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }
  
  function filteredTodos() {
    switch(filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  function handleFilterChange(filter) {
    setFilter(filter)
  }

  function handleClearCompleted() {
    if (window.confirm('Are you sure you want to clear all completed items?')) {
      const filtered = todos.filter(todo => !todo.completed)
      setTodos(filtered)
    }
  }

  return (
    <div>
        <TodoInput isDarkMode={isDarkMode} onAddTodo={handleAddTodo}/>
        <div className={isDarkMode ? 'list-container-dark' : 'list-container'}>
          {filteredTodos().map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDeleteTodo={handleDeleteTodo}
              onMarkComplete={handleMarkComplete}
              isDarkMode={isDarkMode}
            />
          ))}
          
          
          <div className='list-footer'>
            <p>{filteredTodos().filter(todo => !todo.completed).length} items left</p>

            <div className='list-types'>
                <p 
                  onClick={() => handleFilterChange('all')}
                  className={`${isDarkMode ? 'action-items-dark' : 'action-items'} 
                  ${filter === 'all' ? 'active' : ''}`}
                  >All</p>
                <p 
                  onClick={() => handleFilterChange('active')}
                  className={`${isDarkMode ? 'action-items-dark center-active' : 'action-items center-active'} 
                  ${filter === 'active' ? 'active' : ''}`}
                  >Active</p>
                <p 
                  onClick={() => handleFilterChange('completed')}
                  className={`${isDarkMode ? 'action-items-dark' : 'action-items'} 
                  ${filter === 'completed' ? 'active' : ''}`}
                  >Completed</p>
            </div>

            <p 
              onClick={handleClearCompleted}
              className={isDarkMode ? 'action-items-dark' : 'action-items'}>Clear Completed</p>
            
          </div>
        </div>
    </div>
  )
}
