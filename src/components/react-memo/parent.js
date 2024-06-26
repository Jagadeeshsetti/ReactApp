


import React, { useState } from 'react'
import ChildComponent from './child'

function ParentComponent() {

    const [isVisible, setIsVisible] = useState(false);

    const visibleHandler = () =>{
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <h3>{isVisible ? "Welcome user" : "No result fount"}</h3>
        <button  onClick={visibleHandler}>Click to alter visible state</button>
        <ChildComponent />
    </div>
  )
}

export default ParentComponent