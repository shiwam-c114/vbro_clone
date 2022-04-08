import React, { useState } from 'react'
import "./SearchNav.css"

function SearchNav() {
    const [where, setWhere] = useState("")
  return (
    <div>
        <div className="search-nav">
          <div className="container-nav">
            <input type="text"  placeholder="Where" size="40" value={where} />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder='Guests' />
          </div>
        
        </div>
    </div>
  )
}

export default SearchNav