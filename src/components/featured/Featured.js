import React from 'react'

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

const Featured = () => {
    return (
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
                        <p className='price'>$2,677,000</p>
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
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={image12} alt='' />
                <img className='order-3' src={image13} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={image11} alt='' />


                <img className='order-4' src={image14} alt='' />
                <img className='order-5' src={image15} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$2,677,000</p>
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
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        
    )
}

export default Featured