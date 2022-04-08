import React, { useEffect, useState } from 'react';
import './SearchResultPage.css';
import Card from './Common/Card';



function SearchResultPage() {

  const [infos, setInfos] = useState([])
  useEffect(() => {
  getDataFrom() 
  }, [])
  
// const [i, setI] = useState(10)
  async function getDataFrom() {
    const url = `https://test-fake-server-0.herokuapp.com/infos`
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    let tempArr = [];
    tempArr = data.slice( 990, 990 + 10)
    setInfos([...tempArr])
    console.log(tempArr, infos)
  }



  return (
    <>
    <div className='parent'>
      <div className='results'>
      {infos.map((info)=>
      <div>
        <Card bedrooms={info.bedrooms} sleeps ={info.sleeps} rating ={info.rating} price= {info.price} id={info.id} image= {info.image} name = {info.name} distance = {info.distance} beds = {info.beds}  />
      </div>
        )}
        </div>
    
      <div className='map' >
        <div style={{"position":"fixed", "width":"100%"}} >
      <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WJM7+M4 Bengaluru, Karnataka, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">ship tracker</a></iframe>
        </div>
      </div>
    </div>
    </>	
  )
}

export default SearchResultPage