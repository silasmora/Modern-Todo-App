import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App({handleAddTodo}) {
  
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkMode() {
    setIsDarkMode(true)
  }

  function handleLightMode() {
    setIsDarkMode(false)
  }

  return (
    <div className="main-container">
      <Header 
        isDarkMode={isDarkMode} 
        handleDarkMode={handleDarkMode} 
        handleLightMode={handleLightMode}/>
      <TodoList isDarkMode={isDarkMode}/>
    </div>
  )
} 

export default App
