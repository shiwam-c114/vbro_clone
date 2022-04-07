import React from "react";
import {Signup} from "./Signup"

function Signupredirect(){
    return(
        <div>
        <div className = "upperPortion">
            <a href="Signup.jsx" class="previous">&#8249;</a>
            <a href="https://www.vrbo.com/" target="_blank" id = "logo"><img src="//csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg" alt="Vrbo"></img></a>
            <hr></hr>        
        </div>
        <div className = "welcomeMessage">
         <h2>Welcome,{document.getElementById("firstname").value} </h2>
         <p>With your new Vrbo account, the world is within your<br></br> reach.</p><br></br>
         <a href = "" target = '_blank'>Continue</a>
        </div>
        </div>
        );
};
export {Signupredirect}