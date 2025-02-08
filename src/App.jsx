import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'
import Myorder from './pages/Myorder/Myorder'
import About from './components/About/About'
// import Searchle from './components/Searchble/Searchle'
const App = () => {
  const[showlogin,setShowlogin]=useState(false)
  return (

    <div>
      {showlogin?<LoginPopUp setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      {/* <Searchle/> */}
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/order'element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
