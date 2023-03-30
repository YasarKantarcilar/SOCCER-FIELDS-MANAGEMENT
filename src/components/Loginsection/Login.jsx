import React, { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Navbar from "../Layout/Navbar"
import { db, app } from '../../firebase';
import "./Login.css"
function Login() {
    const [mail, setMail] = useState("")
    const [isLogged, setIsLogged] = useState(false)
    const [password, setPassword] = useState("")
    const [errMessage, setErrMessage] = useState()
    const auth = getAuth()
    function handleLogin(e) {

        signInWithEmailAndPassword(auth, mail, password)
            .then((cred) => {
                console.log(cred.user)
            }



            )
            .catch(err => setErrMessage(err.message))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                window.location.pathname = "/Profile"
            } else {
                console.log("User is signed out.");
            }
        });
    
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        if (auth.currentUser !== null) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [auth])

    useEffect(() => {
        const datab = getFirestore()
        if (auth.currentUser !== null) {
            const docRef = doc(datab, "users", auth.currentUser.uid)
            getDoc(docRef)
                .then((doc) => {
                    console.log(doc.data())
                })
        }
    }, [auth])

    return (
        <>
            <div className='Login'>
                <div className="Login-container">
                    <div className="Login-mail-container">
                        <label htmlFor="mail" className='Login-mail-label'>E-mail :</label>
                        <input value={mail} onChange={e => setMail(e.target.value)} type="text" name='mail' id='mail' className='Login-mail-input' required placeholder='E-mail' />
                    </div>
                    <div className="Login-password-container">
                        <label htmlFor="password" className='Login-password-label'>Şifre :</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="text" name='password' id='password' className='Login-password-input' required placeholder='Şifre' />
                    </div>
                    <button onClick={e => handleLogin()} className="Login-button">
                        GİRİŞ YAP
                    </button>
                    <div className="Login-links">
                        <a href="/">Şifremi unuttum</a>
                        <Link to="/Register">Kayıt ol</Link>
                    </div>
                    <p>{errMessage}</p>
                </div>

            </div>
        </>
    )
}

export default Login