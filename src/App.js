import React from 'react'
import './App.css'

import { Footer, Blog, Features, WhatGPT3, Header} from './containers' // import the containers we just created
import {CTA, Brand, Navbar} from './components' // import the components we just created


const App = () => { // define the App component
    return (
        <div className = "App">
            <div className = "gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App // export the App component as the default export