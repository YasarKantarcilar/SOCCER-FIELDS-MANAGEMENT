import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'
//CSS
import "./Navbar.css"

function Navbar() {
    const [logged, setLogged] = useState(false);
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogged(true);
            } else {
                setLogged(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        if (auth.currentUser !== null) {
            const datab = getFirestore()
            const docRef = doc(datab, "users", auth.currentUser.uid)
            getDoc(docRef)
                .then((doc) => setLogged(true))
        }

    }, []);
    return (
        <div className='Navbar'>
            <div className="Navbar-logo">
                <img src="" alt="" />
            </div>
            <ul className="Navbar-links">
                <li className='Navbar-link'><Link to="/" className='Navbar-link'>Ana sayfa</Link></li>
                <li className='Navbar-link'><Link to="/About" className='Navbar-link'>Hakkımızda</Link></li>
                <li className='Navbar-link'><Link to="/Contact" className='Navbar-link'>İletişim</Link></li>
                {logged === true 
                ? "" 
                : <li className='Navbar-link'><Link to="/Login" className='Navbar-link'>Giriş yap</Link></li>}
                {logged === true
                ?<li className='Navbar-link'><Link to="/Profile" className='Navbar-link'>Profile</Link></li> 
                :<li className='Navbar-link'><Link to="/Register" className='Navbar-link'>Kayıt ol</Link></li>}
            </ul>
        </div>
    )
}

export default Navbar