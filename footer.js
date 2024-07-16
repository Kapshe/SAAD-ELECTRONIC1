import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import './footer.css'

const footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="images">
                        <img src="" alt="logo"></img>
                    </div>
                    <div className="detail">
                        <p>SAAD ELECTRONIC ONLINE MARKET 2024</p>
                        <div className="icon">
                            <li><RiFacebookFill /></li>
                            <li><AiOutlineInstagram /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><BsYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                    <li>Account</li>
                    <li>order</li>
                    <li>Cart</li>
                    <li>shipping</li>
                    <li>return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>pages</h3>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>Terma & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default footer