import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/chat-gpt.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
  )
}

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar--links'>
        <div className = 'gpt3__navbar--links_logo'>
          <img src = {logo} alt="logo"/>
        </div>
        <div className = 'gpt3__navbar--links_container'>
          <Menu />
        </div>
      </div>
      <div className = 'gpt3__navbar--sign'>
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className = 'gpt3__navbar--menu' onClick={() => setNavOpen(!navOpen)}>
       <div className= {navOpen ? "gpt3__navbar--menu__hamBox hamBoxOpen" : 'gpt3__navbar--menu__hamBox'}>
        <span className= {navOpen ? 'gpt3__navbar--menu__hamBox--lineTop spin' : 'gpt3__navbar--menu__hamBox--lineTop'}></span>
        <span className={navOpen ? 'gpt3__navbar--menu__hamBox--lineBottom spin' : 'gpt3__navbar--menu__hamBox--lineBottom'}></span>
       </div>
      </div>
      <div className= "gpt3__navbar--menu--overlay" 
      style={{
        top: navOpen? '0' : '-100%',
        transitionDelay: navOpen ? '0s' : '0s',
      }}>
        <ul className="gpt3__navbar--menu--links">
          <li className="gpt3__navbar--menu--links_item">
            <Link to="/#home">home</Link>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
            <Link to="/#wgpt3">What is GPT-4?</Link>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
            <Link to="/#possibility">OpenAI</Link>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
            <Link to="/#features">Case Studies</Link>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
            <Link to="/#blog">Libary</Link>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar