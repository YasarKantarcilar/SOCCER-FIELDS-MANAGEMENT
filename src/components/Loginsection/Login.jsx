import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { db, app } from '../../firebase';
import "./Login.css"
function Login() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [errMessage, setErrMessage] = useState()
    const auth = getAuth()
    function handleLogin(e){
        signInWithEmailAndPassword(auth, mail, password)
        .then((cred) => window.location.pathname = "/")
        .catch(err => setErrMessage(err.message))
    }

    console.log(auth.currentUser)
    return (
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
                    <a href="/">Kayıt ol</a>
                </div>
                <p>{errMessage}</p>
                {
                    auth.currentUser !== null ? <button onClick={e => signOut(auth).then((e) => console.log("logged out"))}>
                    LOGOUT
                </button> : "NOT LOGGED IN"
                }
            </div>

        </div>
    )
}

export default Login