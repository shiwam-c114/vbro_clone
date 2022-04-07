import React from 'react'
import './getfamily.css'

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'

function Getfamily() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Get inspired for a family trip</h1>
                <p>Book homes with space, convenience and amenities</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={image1} alt="/"/>
                    <img src={image2} alt="/"/>
                    <img src={image3} alt="/"/>
                    <img src={image4} alt="/"/>
                    <img src={image5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Getfamily;