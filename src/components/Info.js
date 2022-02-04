import React from "react";
import infoImg from '../images/profile.png';

function Info(){
    return (
        <div className="info">
            <img 
            src={infoImg} 
            alt="Profile Image"
            className="info--img"
            />
            <div className="info--personal" >
                <h1>Delomir Emini</h1>
                <h3>delomiremini@gmail.com</h3>
                <h4>Living in Albania</h4> 
                <button type="submit" className="info--btn_email">Email</button>
                <button type="submit" className="info--btn_linkedin">LinkedIn</button>
            </div>
        </div>
    );
}

export default Info;