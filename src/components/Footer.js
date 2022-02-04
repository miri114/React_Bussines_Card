import React from "react";
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


function Footer(){
    return (
        <div className="footer">
            <AiFillTwitterSquare className="footer--elm"/>
            <AiFillFacebook className="footer--elm"/>
            <AiFillLinkedin className="footer--elm"/>
            <AiFillGithub className="footer--elm"/>
        </div>
    )
}

export default Footer;