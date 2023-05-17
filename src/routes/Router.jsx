import React from 'react'
import Home from "../pages/Home"
import ProductDetails from '../pages/ProductDetails'
import About from '../pages/About'
import Products from '../pages/Products'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
       <nav>
          <h1>Fouad Company</h1>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Products">Products</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About/*' element={<About />} />
            <Route path='/Products' element={<Products />}/>
            <Route path='/Products/:id' element={<ProductDetails />} />
        </Routes>

    </BrowserRouter> 
  )
}

export default Router