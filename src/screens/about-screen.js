
import React, { useContext } from 'react'
import NavBar from '../components/navBar/navbar'
import { UserInfo } from '../navigation/navigation-stack'

function AboutScreen() {
  const { increaseCount, count } = useContext(UserInfo)
  return (
    <div>
      <NavBar />
      <h2>Welcome to about screen {count}</h2>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  )
}

export default AboutScreen