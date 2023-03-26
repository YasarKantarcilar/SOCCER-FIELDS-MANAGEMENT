import React from 'react'
import { Link } from 'react-router-dom'
//CSS
import "./Navbar.css"

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="Navbar-logo">
                <img src="" alt="" />
            </div>
            <ul className="Navbar-links">
                <li className='Navbar-link'><Link to="/" className='Navbar-link'>Ana sayfa</Link></li>
                <li className='Navbar-link'><Link to="/About" className='Navbar-link'>Hakkımızda</Link></li>
                <li className='Navbar-link'><Link to="/Contact" className='Navbar-link'>İletişim</Link></li>
                <li className='Navbar-link'><Link to="/Login" className='Navbar-link'>Giriş yap</Link></li>
                <li className='Navbar-link'><Link to="/Register" className='Navbar-link'>Kayıt ol</Link></li>
            </ul>
        </div>
    )
}

export default Navbar