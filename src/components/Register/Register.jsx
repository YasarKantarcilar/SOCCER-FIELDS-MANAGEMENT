import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getFirestore, collection, getDocs, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db, app } from '../../firebase';
import "./Register.css"
function Register() {
    const datab = getFirestore()
    const auth = getAuth()
    const colRef = collection(datab, "users")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState(0)
    function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                const userId = userCred.user.uid;
                setDoc(doc(colRef, userId), {
                    mail: userCred.user.email,
                    uid: userCred.user.uid,
                    isAdmin: false,
                    phone: phone,
                    password: password,
                    createDate: new Date()
                })
                    .then(() => {
                        window.location.pathname = "/"
                    })
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
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name='password' id='password' className='Register-password-input' required placeholder='Şifre' />
                </div>
                <div className="Register-password-container">
                    <label htmlFor="phone" className='Register-phone-label'>Telefon :</label>
                    <PhoneInput
                        country={'tr'}
                        value={phone}
                        onChange={phone => setPhone(phone.toString())}
                    />
                </div>
                <button onClick={e => handleSubmit(e)} className="Register-button">
                    KAYIT OL
                </button>
            </div>

        </div>
    )
}

export default Register