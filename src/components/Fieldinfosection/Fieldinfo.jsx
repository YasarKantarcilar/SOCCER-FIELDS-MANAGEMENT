import React, { useState, useEffect } from 'react'
import "./Fieldinfo.css"
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { db, app } from '../../firebase';

import Reservation from './Reservation';
import Navbar from '../Layout/Navbar';

function Fieldinfo(props) {
    const [item, setItem] = useState({})
    const params = useParams()


    useEffect(() => {
        const datab = getFirestore()
        const docRef = doc(datab, "Fields", params.id)
        getDoc(docRef)
            .then((doc) => {
                setItem(doc.data(), doc.id)
            })
    }, [])

    return (
        <>
        <Navbar/>
            <div className='Fieldinfo'>
                <div className="Fieldinfo-container">
                    <img className='Fieldinfo-img' src={require("../../assets/Fields/RandomFields/1.jpg")} alt="" />
                    <div className="Fieldinfo-info-container">
                        <p className="Fieldinfo-name"><b>Tesis ismi:</b> {item.name}</p>
                        <hr />
                        <p className='Fieldinfo-location'><b>IL/ILCE:</b> {item.city} / {item.district}</p>
                        <hr />
                        <p className='Fieldinfo-phone'><b>Iletisim:</b> {item.phone}</p>
                        <hr />
                        <p className='Fieldinfo-about'><b>Açıklama:</b> {item.about}</p>
                        <hr />
                        <p className="Fieldinfo-name"><b>Kapora:</b> {item.kapora}</p>
                        <hr />
                        <p className="Fieldinfo-price"><b>Toplam Fiyat: </b> {item.price + item.kapora}</p>
                    </div>
                </div>
                <div className="Fieldinfo-reservation">
                    <Reservation />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3011.291101421195!2d28.79250565138156!3d40.99700129353435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3928b3fcb29%3A0x2ec98c1ff8ff929e!2zxLBCQiBTZWZha8O2eSBLYXBhbMSxIFnDvHptZSBIYXZ1enU!5e0!3m2!1str!2str!4v1679509695022!5m2!1str!2str" width="100%" height="450"></iframe>
            </div>
        </>
    )
}

export default Fieldinfo