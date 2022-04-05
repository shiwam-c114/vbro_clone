import React from 'react';

function Tripboard() {
  return (
    <div>
        <h2>Trip Boards</h2>
        <p><b>Start planning</b> your next trip</p>
        <input placeholder="Name your Trip Board" id="inputName" type="text"></input><br></br><br></br>
        <button>Create Trip Board</button><br></br><br></br>
        <span>Already have Trip Boards?</span> <a href="" target = "_blank">Log in</a> <span>to view them.</span> 
        <p><a href = "" target ="_blank">Learn more</a></p>

        <div className = "image-cards">
            <div className = "image-card-one">
            </div>
            <div className = "image-card-two">
            </div>
        </div>
    </div>
  );
};

export { Tripboard };
