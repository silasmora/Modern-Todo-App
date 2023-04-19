import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css'


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkMode() {
    setIsDarkMode(true)
  }

  function handleLightMode() {
    setIsDarkMode(false)
  }

  return (
    <div>
      <Header 
        isDarkMode={isDarkMode} 
        handleDarkMode={handleDarkMode} 
        handleLightMode={handleLightMode}/>
      <TodoList isDarkMode={isDarkMode}/>
    </div>
  )
} 

export default App
