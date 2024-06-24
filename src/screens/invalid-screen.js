

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function InvalidScreen() {
    const navigate = useNavigate()

    const handleRedirect = () =>{
        const isNavigate = false
        if(isNavigate){
        navigate("/")
        }else{
             
        }
    }
  return (
    <div>
        <h3>Invalid screen, 404 error, Page not found</h3>
        {/* <Link to={"/"}>Back To Home</Link> */}

        <button onClick={handleRedirect}>Click to home screen</button>


    </div>
  )
}

export default InvalidScreen 