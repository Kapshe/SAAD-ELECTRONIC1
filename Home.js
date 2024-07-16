import React from "react"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import Homeproduct from "./homeproduct";
import './Home.css'




const Home = ({detail, view,close, setClose, addtocart}) => {

const { loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        <>
        {
       close ? 
       <div className="product_detail">
       <div className="container">
         <button onClick={() => setClose(false)} className="closebtn"><AiOutlineCloseCircle /></button>
         {
             detail.map((curElm) =>
             {
                 return(
                     <div className="productbox">
                         <div className="images">
                             <img src={curElm.images} alt={curElm.Title}></img>
                         </div>
                         <div className="detail">
                             <h4>{curElm.Cat}</h4>
                             <h2>{curElm.Title}</h2>
                             <p>A screan Everyone will Love: whethere your family streaming or video chatting with friends Tablet A8.... </p>
                             <h3>{curElm.Price}</h3>
                             <button>Add To Cart</button>
                         </div>
                     </div>
                 )
             })
         }
       <div className="productbox"></div>
       </div>
       </div> : null
      }
        <div className="top_banner">
            <div className="container">
            <div className="detail">
                <h2>SAAD ELECTRONIC ONLINE MARKET 2024</h2>
                <Link to='/product' className="link">shop now <BsArrowRight /></Link>
            </div>
            <div className="images">
                <img src='./images/google-pixel-6a.jpg' alt="logo"></img>
            </div>
            </div>
        </div>
        <div className="product_type">
        <div className="container">
        <div className="box">
        <div className="images">
        <img src='./images/google-pixel-6a.jpg' alt=""></img>
        </div>
        <div className="detail">
            <p>23 products</p>
        </div>
        </div> 
        <div className="box">
        <div className="images">
        <img src='./images/watch.jpg' alt=""></img>
        </div>
        <div className="detail">
            <p>52 products</p>
        </div>
        </div>
        <div className="box">
        <div className="images">
        <img src='./images/heradphone.jpg' alt=""></img>
        </div>
        <div className="detail">
            <p>63 products</p>
        </div>
        </div>
        <div className="box">
        <div className="images">
        <img src='./images/google-pixel-fold.jpg' alt="Flash"></img>
        </div>
        <div className="detail">
            <p>45 products</p>
        </div>
        </div>
        </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                    <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>free shipping</h3>
                        <p>order Above $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return && Refund</h3>
                        <p>money Back Gaurenty</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <CiPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discout</h3>
                        <p>On every Oder</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">
        <h2>Top Products</h2>
            <div className="container"> 
                {
                    Homeproduct.map((curElm) =>
                    {
                        return(
                        <div className="box" key={curElm.id}>
                            <div className="img">
                                <img src={curElm.images} alt={curElm.Title}></img>
                                <div className="icon">
                                {
                                        isAuthenticated ?
                                        <li onClick={() => addtocart (curElm)}> <AiOutlineShoppingCart /></li>
                                        :
                                        <li onClick={() => loginWithRedirect (curElm)}> <AiOutlineShoppingCart /></li>
                                    }
                                    <li onClick={() => view (curElm)}> <BsEye /></li>
                                    <li> <AiOutlineHeart /></li>                            
                                </div>
                                </div>
                                <div className="detail">
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>{curElm.Price}</h4>
                                </div>
                                </div>
                        )
                    }
                )}              
                </div>
  
                </div>
        </>
    )
}

export default Home