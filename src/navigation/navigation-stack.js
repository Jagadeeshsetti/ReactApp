

import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from '../screens/home-screen'
import AboutScreen from '../screens/about-screen'
import ContactScreen from '../screens/contact-screnn'
import SettingScreen from '../screens/setting-screen'
import InvalidScreen from '../screens/invalid-screen'
import ProductDetailComponent from '../components/products/productDetails'

function NavigationStack() {
  return (
    <BrowserRouter>
    
    <Routes>
        {/* Static Routes */}

        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/contact" Component={ContactScreen} />
        <Route path="/setting" Component={SettingScreen} />

        {/* Invalid Routes */}

        <Route path="*" Component={InvalidScreen} />

        {/* Dynamic Routing */}

        <Route path={":category/:productId"} Component={ProductDetailComponent} />

    </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default NavigationStack