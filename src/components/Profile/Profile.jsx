import React, { useEffect, useState } from 'react'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Profile() {
    const [isAdmin, setIsAdmin] = useState();
    const datab = getFirestore()
    const auth = getAuth()
    function handleLogout(e) {
        signOut(auth).then(() => {
            console.log("LOGGED OUT")
            window.location.pathname = "/"
        })


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const docRef = doc(datab, "users", user.uid)
                getDoc(docRef)
                    .then((doc) => {
                        setIsAdmin(doc.data().isAdmin)
                    })
            } else {
                console.log("User is signed out.");
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <div className='Profile'>
            <button onClick={e => handleLogout(e)} className='Profile-button'>LOGOUT</button>
            <li className='Navbar-link'><Link to="/" className='Navbar-link'>Ana Sayfa</Link></li>
            {isAdmin ? <Link to="/Admin">ADMIN</Link> : ""}
        </div>
    )
}

export default Profile