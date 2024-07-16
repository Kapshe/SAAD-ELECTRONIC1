import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Product from "./product"
import Cart from "./cart"
import Contact from './contact'

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
    return (
        <>
        <Routes>
            <Route path='/Home' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path='/Product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </>
    )
}

export default Rout