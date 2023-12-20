import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='gpt3__header gpt3__header--hero--background' id='home'>
            <div className='gpt3__header-content section__padding'>
                <h1 className='gpt3__header--hero--text'>
                    <span>GPT-4</span>
                    <span className='gpt3__navbar--hero--text_copyright'>©</span>
                </h1>
                <div className='gpt3__navbar--hero--subtext'>
                    <p>Unlock endless possibilities, assisted and inspired through the limitless power of artificial intelligence.</p>
                </div>
                <div className='gpt3__navbar--hero--email__input'>
                        <button type="button">Get Started</button>
                </div>
            </div>
            
        </header>
    )}

export default Header
