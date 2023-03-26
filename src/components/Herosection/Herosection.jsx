import React,{useState} from 'react'

//components
import About from './About.jsx';
import Hero from './Hero.jsx';


function Herosection(props) {
    return (
        <div className='Herosection'>

            <Hero setSearch={props.setSearch} />
            <About />

        </div>
    )
}

export default Herosection