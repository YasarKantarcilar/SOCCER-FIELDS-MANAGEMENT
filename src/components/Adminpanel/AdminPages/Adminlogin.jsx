import React, { useState } from 'react'
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
import { db, app } from '../../../firebase';

    function Adminlogin() {
        const auth = getAuth()
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        async function handleLogin(e) {
            signInWithEmailAndPassword(auth, email, password)
                .then((cred) => console.log(cred.user))
                .catch((err) => console.log(err.message))

        }
        
        return (
            <div>
                <div className="Admin-form">
                    <input onChange={e => setEmail(e.target.value)} type="text" value={email} placeholder="EPOSTA" />
                    <input onChange={e => setPassword(e.target.value)} type="text" value={password} placeholder="ŞİFRE" />
                    <button onClick={e => handleLogin(e)}>GIRIS YAP</button>
                    <button onClick={e => signOut(auth).then(() => console.log("logged out"))}>CIKIS YAP</button>
                </div>
            </div>
        )
    }

export default Adminlogin