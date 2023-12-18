import React from 'react'
import './Header.css'
import {copyright} from '../../assets/copyright.png'

// TODO: Add a copyright logo to the header

const Header = () => {
    return (
        <header className='gpt3__header gpt3__header--hero--background' id='home'>
            <div className='gpt3__header-content section__padding'>
                <h1 className='gpt3__header--hero--text'>GPT-4</h1>
            </div>
            <div className = 'gpt3__navbar--links_logo'>
                <img src = {copyright} alt="copyright"/>
            </div>
        </header>
    )}
