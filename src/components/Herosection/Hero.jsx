import React from 'react'
import "./Hero.css"
import { useState, useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { SearchContext } from '../../Contexts/SearchContext'
import cityData from "../../Contexts/CityDataContext.jsx"

function Hero(props) {
  const { setSearch } = useContext(SearchContext);

  const [city, setCity] = useState(0)
  const [district, setDistrict] = useState(0)

  function handleCityChange(e) {
    setCity(e.target.value)
    setSearch(city)
  }
  
  function handleDistrictChange(e){
    setDistrict(e.target.value)
  }

  useEffect(() => {
    props.setSearch(city)
  }, [city])
  
  return (
    <div className='Hero'>
      <div className="Hero-input-search-container">
        <div className="Hero-search-container">
          <form action="/" method="get" className='Hero-form'>
            <p>EN UYGUN HALISAHAYI HEMEN BUL</p>
            <div className="input-container">
              <div className="Hero-input">
                <label htmlFor="il">İL</label>
                <select onChange={e =>handleCityChange(e)} value={city} name="il" id="il">
                  {cityData.map((city) =>
                    <option key={city.plaka} value={city.plaka - 1}>{city.il}</option>
                  )}
                </select>
              </div>
              <div className="Hero-input">
                <label htmlFor="ilce">İLÇE</label>
                {<select value={district} onChange={e => handleDistrictChange(e)} name="ilce" id="ilce">
                  {cityData[city].ilceleri.map((district) =>
                    <option key={district} value={cityData[city].ilceleri.indexOf(district)}>{district}</option>
                  )}
                </select>}
              </div>
              
              <Link className='Hero-form-submit' to={`/Fields`}><img className='Hero-form-submit-icon' src={require("../../assets/icons/search-icon.png")} alt="search-icon" /></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero