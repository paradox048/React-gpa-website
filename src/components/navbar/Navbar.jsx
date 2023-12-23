import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/chat-gpt.png'

const Menu = () => {
  return (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt4">What is GPT</a></p>
    <p><a href="#features">Open AI</a></p>
    <p><a href="#blog">Blog</a></p>
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
            <a href="#home" onClick={() => setNavOpen(!navOpen)}
            style={{
              top: navOpen ? '0px' : '120px',
              transitionDelay: navOpen ? '0.8s' : '0s',
              opacity: navOpen ? '1' : '0',
            }}>Home</a>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
          <a href="#wgpt4" onClick={() => setNavOpen(!navOpen)} 
            style={{
              top: navOpen ? '0' : '120px',
              transitionDelay: navOpen ? '0.9s' : '0s',
              opacity: navOpen ? '1' : '0',
            }}>What is GPT-4?</a>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
          <a href="#possibility" onClick={() => setNavOpen(!navOpen)}
            style={{
              top: navOpen ? '0' : '120px',
              transitionDelay: navOpen ? '1s' : '0s',
              opacity: navOpen ? '1' : '0',
            }}>OpenAI</a>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
          <li className="gpt3__navbar--menu--links_item">
          <a href="#blog" onClick={() => setNavOpen(!navOpen)}
            style={{
              top: navOpen ? '0' : '120px',
              transitionDelay: navOpen ? '1.2s' : '0s',
              opacity: navOpen ? '1' : '0',
            }}>Blog</a>
            <div className="gpt3__navbar--menu--links_item--wrapper"></div>
          </li>
        </ul>
        <div className="gpt3__navbar--menu--footer">
          <div className="location"
          style={{
            bottom: navOpen ? '0' : '-20px',
            opacity: navOpen ? '1' : '0',
            transitionDelay: navOpen ? '1.2s' : '0s',
          }}>
            <span>Toronto, ON</span>
          </div>
          <div className="gpt3__navbar--menu--socialMedia">
            <ul>
              <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                style={{
                  bottom: navOpen ? '0' : '-20px',
                  opacity: navOpen ? '1' : '0',
                  transitionDelay: navOpen ? '1.3s' : '0s',
                }}>Youtube</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                style={{
                  bottom: navOpen ? '0' : '-20px',
                  opacity: navOpen ? '1' : '0',
                  transitionDelay: navOpen ? '1.4s' : '0s',
                }}>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar