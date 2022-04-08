import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
    return (
        <div>
    
            
            
            
            <div className='logo'>
                <a href="https://www.vrbo.com/" target="_blank"><img src="//csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="Vrbo"></img></a>
            </div>
            <div className='main-footer'>
                <div>
                    <div className='some-links'>
                        <div>
                            <ul>
                                <li><p><b>Explore Vrbo</b></p></li>
                                <li><a href="https://www.vrbo.com/en-us/list" target="_blank">List your Property</a></li>
                                <li><a href="https://www.vrbo.com/l/travel-with-confidence/" target="_blank">Book with Confidence</a></li>
                                <li><a href="https://www.vrbo.com/trust" target="_blank">Trust & Safety</a></li>
                                <li><a href="https://host.expediagroup.com/vrbo/en-us" target="_blank">Partner Resources</a></li>
                                <li><a href="https://www.vrbo.com/vacation-ideas" target="_blank">Vaction Rental guides</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><b>Meet the Vrbo family</b></li>
                                <li><a href="https://www.vrbo.com/" target="_blank">Vrbo</a></li>
                                <li><a href="https://www.abritel.fr/?_ga=2.36485920.1296184151.1649049893-80448834.1648884274" target="_blank">Abritel.fr</a></li>
                                <li><a href="https://www.fewo-direkt.de/?_ga=2.208460818.1296184151.1649049893-80448834.1648884274" target="_blank">FeWo-direkt.de</a></li>
                                <li><a href="https://www.bookabach.co.nz/" target="_blank">Bookabach.co.nz</a></li>
                                <li><a href="https://www.stayz.com.au/?_ga=2.208460818.1296184151.1649049893-80448834.1648884274" target="_blank">Stayz.com.au</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <li><b>Company</b></li>
                            <li><a href="https://www.vrbo.com/about/" target="_blank">About</a></li>
                            <li><a href="https://lifeatexpediagroup.com/brands?utm_source=vrbo&%3Butm_medium=homepage%23brands-vrbo" target="_blank">Careers</a></li>
                            <li><a href="https://affiliates.expediagroup.com/en-us/home" target="_blank">Affiliates</a></li>
                            <li><a href="https://www.vrbo.com/media-center/" target="_blank">Media Center</a></li>
                            <li><a href="https://advertising.expedia.com/getting-started/brands/vrbo/" target="_blank">Advertising</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Get special offers, travel inspiration, and more from Vrbo</h3>
                    <input placeholder="Email Address" type="email" size={50} ></input><button className='btn'>Subscribe</button>

                    <h3>Get the Vrbo mobile app</h3>
                    <input placeholder="Your mobile phone number" type="telephone" size={50}></input><button className='btn'>Send</button>
                    <p>Available for iOS and Android. Messaging rates may apply.</p>
                </div>
            </div>
            <div className='footer-bottom'>
                <div>
                    <span>&#169; 2022 Vrbo, an <strong className='expedia-group'>expedia group</strong> company.All rights reserved</span>
                    

                    <p><a href="" target="_blank"> <strong>Terms and Conditions</strong> </a> · <a href="" target="_blank"> <strong>Privacy Policy </strong> </a> · <a href="" target="_blank"> <strong> Do Not Sell My Personal Information </strong></a></p>
                    
                </div>
                <div>
                    <a href="" target='_blank'><FaFacebook /></a>&nbsp;&nbsp;
                    <a href="" target='_blank'><FaInstagram /></a>&nbsp;&nbsp;
                    <a href="" target='_blank'><FaLinkedinIn /></a>&nbsp;&nbsp;
                    <a href="" target='_blank'><FaTwitter /></a>&nbsp;&nbsp;
                    <a href="" target='_blank'><FaPinterest /></a>&nbsp;&nbsp;
                    <a href="" target='_blank'><FaYoutube /></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer