import React, { useEffect, useState } from 'react'
import "./SearchNav.css"

const initState = {
  where: "",
  checkin: "",
  checkout: "",
  guests: 0
}
function SearchNav() {
  const [defaultData, setDefaultData] = useState({})

  function fetchFromLocalStore() {
    var defaultdata = localStorage.getItem("bookingData");
    defaultdata = JSON.parse(defaultdata)
    console.log(defaultdata);
    setState( { ...defaultdata} )
    setDefaultData({...defaultdata})
  }

  useEffect(() => {
    fetchFromLocalStore()
  }, [])
  

  const [state, setState] = useState(initState)
  function handleChange(e){
    const {name, value} = e.target
    console.log(name, value);
    setState( { ...state, [name]: value} )
  }

  return (
    <div>
        <div className="search-nav">
          <div className="container-nav">
            <input type="text"  placeholder="Where" size="40" name="where" defaultValue={defaultData.where} value={state.where} onChange={handleChange}  />
            <input type="date"  name="checkin" defaultValue={defaultData.checkin} value={state.checkin} onChange={handleChange} />
            <input type="date" name="checkout" defaultValue={defaultData.checkout} value={state.checkout} onChange={handleChange}  />
            <input type="number" placeholder='Guests' name="guests" defaultValue={defaultData.guests} value={state.guests} onChange={handleChange} />
          </div>
        
        </div>
    </div>
  )
}

export default SearchNav