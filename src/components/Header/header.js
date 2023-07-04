import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div onClick={() => window.scroll(0,0)}
    className="App">
      <span className='header'>🍿Movie HUB🍿</span>
    </div>
  )
}

export default Header