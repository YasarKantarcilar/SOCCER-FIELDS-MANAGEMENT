import React, { useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import "./Admin.css"
import Adminlogin from './AdminPages/Adminlogin';

function Admin() {
  const auth = getAuth()
  const datab = getFirestore()

  const [pageNumber, setPageNumber] = useState(0)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(datab, "users", user.uid)
        getDoc(docRef)
          .then((doc) => {
            setPageNumber(1)
          })
      } else {
        setPageNumber(0)
      }
    });

    return () => unsubscribe();
  }, [auth]);

  function getData(id) {
    const datab = getFirestore()
    if (auth.currentUser !== null) {
      const docRef = doc(datab, "users", id)
      getDoc(docRef)
        .then((doc) => {
          console.log(doc.data().isAdmin)
        })
    }
  }

  return (
    <div className='Admin'>
      {pageNumber === 0 && <Adminlogin />}
    </div>
  )
}

export default Admin