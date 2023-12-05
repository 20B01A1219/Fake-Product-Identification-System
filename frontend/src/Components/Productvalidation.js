import React from 'react';
import "./Productvalidation.css";
import qualitycheck from "./qualitycheck.jpg";
function Productvalidation(props) {
    return (
        <div className='validationpage'>
            <div className="validationoptions">
                <h4>Hi there!</h4>
                <h4>Start the camera and scan the QR code..</h4>
                <button>Start the camera</button>
            </div>
            <div className="validationimg">
                <img src={qualitycheck} alt="" />
            </div>
        </div>
    );
}

export default Productvalidation;