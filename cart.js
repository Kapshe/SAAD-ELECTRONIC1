import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import './cart.css'


const Cart = ({cart, setCart}) => {
    

    const incqty = (Product) =>
        {
            const exsit = cart.find((x) =>
            {
                return x.id === Product.id
            })
            setCart(cart.map((curElm) =>
            {
                return curElm.id === Product.id ? {...exsit, qty: exsit.qty - 1} : curElm
            }))
        }
        
        const decqty = (Product) =>
            {
                const exsit = cart.find((x) =>
                {
                    return x.id === Product.id
                })
                setCart(cart.map((curElm) =>
                {
                    return curElm.id === Product.id ? {...exsit, qty: exsit.qty + 1} : curElm
                }))
            }
            const removeproduct = (Product) =>
                {
                    const exsit = cart.find((x) =>
                        {
                            return x.id === Product.id
                        })
                        if(exsit.qty > 0)
                            {
                                setCart(cart.filter((x) =>
                                {
                                    return x.id !== Product.id
                                }))
                            }
                }

                const Totalprice = cart.reduce((Price, item) => Price + item.qty * item.Price, 0)
          return(
            <>
            <div className="Cartcontainer">
                {cart.length === 0 &&
                <div className='emptycart'> 
                <h2 className='empty'>Cart is empty</h2>
                <Link to='/product' className='emptycartbtn'>Shop Now</Link>
                </div>
                }
                <div className="contant">
                    {
                        cart.map((curElm) => 
                        {
                            return(
                                <div className='cart_item' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.images} alt={curElm.Title}></img>
                                    </div>
                                    <div className='detail'>
                                    <div className='info'>
                                        <h4>{curElm.Cart}</h4>
                                        <h3>{curElm.Title}</h3>
                                        <p>Price: ${curElm.Price}</p>
                                        <div className='qty'>
                                            <button className='incqty' onClick={() => incqty(curElm)}>-</button>
                                            <input type='text' value={curElm.qty}></input>
                                            <button className='decqty' onClick={() => decqty(curElm)}>+</button>       
                                        </div>
                                        <h4 className='subtotal'>sub total: ${curElm.Price * curElm.qty}</h4>
                                        </div>
                                        <div className='close'>
                                        <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
               {
                 cart.length > 0 &&
                 <>
                 <h4 className='totalprice'>total: ${Totalprice}</h4>
                 <button className='checkout' onClick={() => alert("WAAD KU MAHADSANTAHAY IIBSASHADAADA")}>checkout</button>
                 </>
               }
            </div>
        </>
    )
}

export default Cart