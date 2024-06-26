
import React, { useContext } from 'react'
import NavBar from '../components/navBar/navbar'
import { UserInfo } from '../navigation/navigation-stack'
import { DECREASE_COUNT, INCREASE_COUNT } from '../navigation/jsFunctions'
import Usememo from '../components/useMemo/useMemo'
import ParentComponent from '../components/useCallback/parent'


function AboutScreen() {
  const { increaseCount, count, currentState, dispatch } = useContext(UserInfo)
  console.log(currentState, "currentStatecurrentState");
  return (
    <div>
      <NavBar />
      <h2>Welcome to about screenUsememo</h2>

      {/* <Usememo /> */}

      {/* <ParentComponent /> */}

    <ParentComponent />

    </div>
  )
}

export default AboutScreen