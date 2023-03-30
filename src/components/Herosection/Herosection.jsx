import React, { useState } from 'react'
import Navbar from '../Layout/Navbar.jsx';

//components
import About from './About.jsx';
import Hero from './Hero.jsx';


function Herosection(props) {
    return (
        <>
        <Navbar/>
            <div className='Herosection'>


                <Hero setSearch={props.setSearch} />
                <About />

            </div>
        </>
    )
}

export default Herosection