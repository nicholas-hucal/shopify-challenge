import React from 'react'
import { SiOpenai } from 'react-icons/si';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__heading'><SiOpenai/> Fun with AI</h1>
    </header>
  )
}

export default Header