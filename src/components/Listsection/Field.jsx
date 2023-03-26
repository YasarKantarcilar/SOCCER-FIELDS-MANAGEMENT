import React, { useContext } from 'react'
import "./Field.css"

import { Link } from 'react-router-dom'

function Field(props) {

    return (
        <div className='Field'>
            <img className='Field-img' src={require("../../assets/Fields/RandomFields/1.jpg")} alt="" />
            <div className='Field-info'>
                <h3 className="Field-name">{props.name}</h3>
                <p className='Field-price'>{props.price}TL</p>
                <p className="Field-location">{props.city} / {props.district}</p>
                <Link to={`/Fields/${props.id}`} className='Field-button'>INCELE</Link>
            </div>
        </div>
    )
}

export default Field