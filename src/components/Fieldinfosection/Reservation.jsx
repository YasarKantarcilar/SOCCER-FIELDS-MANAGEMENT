import React, { useState, useEffect } from 'react'
import "./Reservation.css"

import { useParams } from 'react-router-dom';


//FIREBASE
import { getFirestore, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { db, app } from '../../firebase';

//PRIMEREACT
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { locale, addLocale } from 'primereact/api';
        

import { Calendar } from 'primereact/calendar';

function Reservation(props) {
    addLocale('tr', {
        firstDayOfWeek: 0,
        dayNames: ['PAZARTESI', 'SALI', 'CARSAMBA', 'PERSEMBE', 'CUMA', 'CUMARTESI', 'PAZAR'],
        dayNamesShort: ['PZT', 'SAL', 'CAR', 'PER', 'CUMA', 'CMT', 'PZR'],
        dayNamesMin: ['PZT', 'S', 'CAR', 'PER', 'CU', 'CMRT', 'PZR'],
        monthNames: ['OCAK', 'SUBAT', 'MART', 'NISAN', 'MAYIS', 'HAZIRAN', 'TEMMUZ', 'AGUSTOS', 'EYLUL', 'EKIM', 'KASIM', 'ARALIK'],
        monthNamesShort: ['OCAK', 'SUB', 'MAR', 'NIS', 'MAY', 'HAZ', 'TEM', 'AGU', 'EYL', 'EKIM', 'KAS', 'ARA'],
        today: 'Hoy',
        clear: 'Limpiar',
        //...
    });
    locale("tr")
    //DATE DATA CONTAINER
    const [dateString, setDateString] = useState(new Date())
    const date = new Date(dateString);
    const [day, setDay] = useState(date.getDate())
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getYear())
    const [time, setTime] = useState(8)
    const [blackList, setBlackList] = useState({reservations: []})

    console.log(`${day}${month}${year}${time}`)

    //RESERVATION ADD
    const params = useParams()
    function handleSubmit(e) {
        if (time != undefined) {
            const datab = getFirestore()
            const docRef = doc(datab, "Fields", params.id)
            updateDoc(docRef, {
                reservations: arrayUnion(`${day}${month}${year}${time}`)
            }).then().catch((err) => console.log("ERROR:"`${err.message}`))
        }
    }

    //GET RESERVATIONS
    useEffect(() => {
        const datab = getFirestore()
        const docRef = doc(datab, "Fields", params.id)
        getDoc(docRef)
            .then((doc) => {
                setBlackList(doc.data(), doc.id)
            })
    }, [])
    
    //HOURS FILTERING
    const arr = []
    for (let i = 8; i < 24; i++) {
        arr.push(`${day}${month}${year}${i}`)
    }
    //ARRAY THAT DOESNT INCLUDE THE ALREADY TAKEN RESERVATION TIMES
    const filteredArr = arr.filter((element) => {
        return !blackList.reservations.includes(element);
    });

    //REFACTORING THE NUMBER
    const digitFilteredArr = filteredArr.map((element) => {
        if (element % 100 > 24) {
            return element % 10
        }
        else {
            return element % 100
        }
    })
    //HANDLEING THE DATE CHANGES
    function handleDateChange(e) {
        setDateString(e.target.value)

    }

    //TO AVOID DOUBLE CLICK TO RERENDER
    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getYear());
    }, [])

    return (
        <div className='Reservation'>
            <h3>LUTFEN TARIH VE SAAT SECINIZ</h3>
            <div className="Reservation-date">
                <div className="Reservation-calendar">
                    <Calendar  inline onChange={e => handleDateChange(e)} type="date" name="date" id="" value={dateString} dateFormat="dd/mm/yy" minDate={new Date()} />
                </div>
                <div className="Reservation-hours-container">
                    <div className="Reservation-hours">
                        {digitFilteredArr.map((h, index) => (<button onClick={e => setTime(e.target.value)} value={h} key={index} className={`Reservation-hour`} >{`${h}:00 - ${h + 1}:00`}</button>))}
                    </div>
                </div>
            </div>
            <button onClick={e => handleSubmit(e)} className="Reservation-submit">ÖDEMEYE GEÇ</button>
        </div>
    )
}

export default Reservation