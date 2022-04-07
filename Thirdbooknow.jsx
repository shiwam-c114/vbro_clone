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
                <hr></hr>
            </div>
            <div className = 'about'>
                <h1>About this rental</h1>
                <span id = "heading"><b>Apartment  |  3 Bedrooms  |  2 Bathrooms  |  Spaces</b></span><br></br>
                <span>1023 sq.ft&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 beds-6 sleeps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 full Baths&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balcony </span>
            <h3>Three bedroom, one bath walking distance to downtown Blue Ridge attraction.</h3>
            <p>Large master bedroom with king bed, large double closet, and writing/sitting area. Second bedroom with full bed and ample<br></br>
             closet. Third bedroom with twin daybed with closet access in adjoining area. Plenty of relaxing options in the living room<br></br>
            with cable tv, in the great room open to the kitchen, also with cable tv, or in the sun room off the great room looking out<br></br>
            onto backyard. Large deck off the living room for grilling and outdoor gathering. Covered carport for one vehicle with<br></br>
            access to great room. Nice front yard with concrete patio with bistro set. Also private backyard. Full size washer and dryer<br></br>
            in the basement accessed from great room.<br></br><br></br><br></br>

**50 lb limit. Only one pet unless special request granted. Pets MUST be leashed at all times when outside, except for<br></br>
fenced backyard.**<br></br><br></br>

***NO SMOKERS!!!! We do not rent to smokers. If you smoke, please choose another property.<br></br><br></br>


<h4>Hosted by</h4>
Cathy Cox-Brakefield<br></br>
Premier Host</p>
</div>
<div className = 'amenities'>
<h1>Amenities</h1>
</div>
          <div className = "right-section">
            <p><b>$ 111</b>/night</p>
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