import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, getDocs, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db, app } from '../../firebase';
import "./Register.css"
function Register() {
    const datab = getFirestore()
    const auth = getAuth()
    const colRef = collection(datab, "users")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCred) => {
                    const userId = userCred.user.uid;
                    setDoc(doc(colRef, userId), {
                        mail: userCred.user.email,
                        uid: userCred.user.uid,

                        password: password,
                    })
                        .then(() => console.log("Document successfully written!"))
                        .catch((error) => console.error("Error writing document: ", error));
                })
                .catch((error) => console.log(error.message));
    }

    useEffect(() => {
        const datab = getFirestore()
        if (auth.currentUser !== null) {
            const docRef = doc(datab, "users", auth.currentUser.uid)
            getDoc(docRef)
                .then((doc) => {
                    console.log(doc.data())
                })
        }
    }, [])

    console.log(auth.currentUser)
    return (
        <div className='Register'>
            <div className="Register-container">
                <div className="Register-mail-container">
                    <label htmlFor="mail" className='Register-mail-label'>E-mail :</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" name='mail' id='mail' className='Register-mail-input' required placeholder='E-mail' />
                </div>
                <div className="Register-password-container">
                    <label htmlFor="password" className='Register-password-label'>Şifre :</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="text" name='password' id='password' className='Register-password-input' required placeholder='Şifre' />
                </div>
                <button onClick={e => handleSubmit(e)} className="Register-button">
                    KAYIT OL
                </button>
            </div>

        </div>
    )
}

export default Register