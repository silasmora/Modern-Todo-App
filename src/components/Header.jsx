import React from 'react'
import moonIcon from '/images/icon-moon.svg'
import sunIcon from '/images/icon-sun.svg'

export default function Header({ isDarkMode, handleDarkMode, handleLightMode}) {

  return (
    <div className={isDarkMode ? 'home-page-container-dark' : 'home-page-container-light'}>
        <img
          className={isDarkMode ? 'hidden' : 'home-page-image'}
          src="/images/bg-desktop-light.jpg" alt="desktop image light"
          
          />
        <img     
          className={!isDarkMode ? 'hidden' : 'home-page-image'}
          src="/images/bg-desktop-dark.jpg" 
          alt="desktop image dark" 
          
          />

        <div className='todo-container'>
          <h1 className='title'>TODO</h1>
          <div>
            <img
              className={isDarkMode ? 'hidden':'theme-icon'}
              src={moonIcon}
              
              onClick={handleDarkMode}
                />
            <img
              className={!isDarkMode ? 'hidden' : 'theme-icon'}
              src={sunIcon}
              onClick={handleLightMode}
              />
          </div>
        </div>
    </div>
  )
}
