import React, { useState, useContext, useEffect } from 'react'
import "./Fields.css"
import cityData from '../../Contexts/CityDataContext'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { db, app } from '../../firebase';



//COMPONENTS
import Field from './Field'
import { SearchContext } from '../../Contexts/SearchContext'
import Navbar from '../Layout/Navbar';

function Fields(props) {
  const [data, setData] = useState([])
  const { search } = useContext(SearchContext);

  if (search == undefined) {
    window.location.pathname = "/"
  }

  //GET DATA FROM FIREBASE
  useEffect(() => {
    const datab = getFirestore()
    const colRef = collection(datab, "Fields")
    onSnapshot(colRef, (snapshot) => {
      let Fields = []
      snapshot.docs.forEach((doc) => {
        Fields.push({ ...doc.data(), id: doc.id })
      })
      setData(Fields)
    })

  }, [])

  return (
    <>
      <Navbar />
      <div className='Fields'>
        <h1 className='Fields-header'>
          {search == undefined ? "ISTANBUL" : cityData[search].il} /  LOKASYONUNDAKI SAHALAR
        </h1>
        <div className="Fields-container">
          <ul className="Fields-list">
            <Field />
            {data.map((e, index) => <li key={index}><Field name={e.name} price={e.price} city={e.city} district={e.district} id={e.id} /></li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Fields