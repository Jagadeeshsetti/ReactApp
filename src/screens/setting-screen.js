

import React, { useContext } from 'react'
import NavBar from '../components/navBar/navbar'
import { UserInfo } from '../navigation/navigation-stack'

function SettingScreen() {
  const { increaseCount, count } = useContext(UserInfo)
  return (
    <div>
      <NavBar />
      <h2>Welcome to setting screen {count}</h2>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  )
}

export default SettingScreen