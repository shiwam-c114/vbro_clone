import React, { useEffect, useState } from 'react'
import {Link}  from 'react-router-dom'

import './Featured.css'

import image6 from '../../images/image6.jpg'
import image7 from '../../images/image7.jpg'
import image8 from '../../images/image8.jpg'
import image9 from '../../images/image9.jpg'
import image10 from '../../images/image10.jpg'

import image11 from '../../images/image11.jpg'
import image12 from '../../images/image12.jpg'
import image13 from '../../images/image13.jpg'
import image14 from '../../images/image14.jpg'
import image15 from '../../images/image15.jpg'
import Navbar from '../Navbar'
import Footer from '../Common/Footer'

const Featured = () => {

    useEffect(() => {
      fetchingFromLocalStore()
    }, [])
    
    
    
    const [Data, setData] = useState({})
    const [Price, setPrice] = useState('')

     async function fetchingFromLocalStore() {
        let price =  localStorage.getItem('price')
        let data =  localStorage.getItem("bookingData")
        price = await JSON.parse(price)
        data = await JSON.parse(data)
        console.log(data)
        setData({...data})
        setPrice(price)

    }
    useEffect( async () => {
        setTimeout(() => {
            calc()     
        }, 500);
      }, [])
    
     async function calc() {
        console.log(Data)
        let stayi = Data.checkin
        let stayj = Data.checkout
        stayi= stayi.split('-')
        stayj= stayj.split('-')
        console.log(stayi, stayj, (stayj[1]*30) , +stayj[2],  (stayi[1]*30) + +stayi[2])
        let stay = ((stayj[1]*30) + +stayj[2]) - ((stayi[1]*30) + +stayi[2])
        let expval = Price * stay
        console.log(stay)
        setExtPrice(expval)
        setStayDays(stay)
        localStorage.setItem("days", stay)
        localStorage.setItem("estPrice", expval)
    }

    const [stayDays, setStayDays] = useState(0)
    const [extPrice, setExtPrice] = useState(0)


    return (
        <>
        <Navbar></Navbar>
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>"SALT THERAPY" Come Vacation in the Emerald Waters of Destin Florida</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={image6} alt='img' />
                <img src={image7} alt='img' />
                <img src={image8} alt='img' />
                <img src={image9} alt='img' />
                <img src={image10} alt='img' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>${Price}</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>${extPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <Link to={"/FirstStep"}><button className='btn'>Book Now</button></Link>
                </div>
            </div>

        {/* Section section */}
        
        </div>
        <Footer></Footer>
        </>

        
    )
}

export default Featured