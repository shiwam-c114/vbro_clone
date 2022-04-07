import React from "react";


function Thirbooknow(){
    return(
        <div>
            <div className="main">
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Amenities</li>
                        <li>Availability</li>
                        <li>Host</li>
                        <li>Rooms&beds</li>
                        <li>Reviews</li>
                        <li>Map</li>
                        <li>Policies</li>
                    </ul>
                </nav>
            </div>
            <div className = 'about'>
                <h1>About this rental</h1>
                <span id = "heading"><b>Apartment  |  3 Bedrooms  |  2 Bathrooms  |  Spaces</b></span><br></br>
                <span>1023 sq.ft&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 beds-6 sleeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 full Baths&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balcony </span>
            </div>
        <div className = "right-section">
            <p><b>$ 111</b>/night</p>
            <p> &#9745; Your dates are available </p>
            <div className="inputBox">
            <label id = "checkIn">Check-In</label>&nbsp;
                <input type="date"  id = "checkIn" aria-label="Check-In"></input>&nbsp;&nbsp;&nbsp;
                <label id = "checkOut">Check-Out</label>&nbsp;
                <input  type="date" id = "checkOut"></input>&nbsp;<br></br><br></br>
                <label id = "guests">Guests</label>&nbsp;<br></br>
                <input type="text" id = "checkOut"></input><br></br><br></br>
                <span><b>Total</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>$1,000.66</span><br></br>
                <span>Total includes fees,not tax</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href = "" target = "_blank">View details</a></span><br></br><br></br><br></br>
                <button>Book Now</button>
                <p>Property # 10957516ha</p>
                <p><a href = '' target = "_blank" >Report this property</a></p>
            </div>
        </div>
        </div>
    );
};

export default Thirbooknow;