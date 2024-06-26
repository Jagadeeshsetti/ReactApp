
import React from 'react'
import NavBar from '../components/navBar/navbar'
import AutoFocusInput from '../components/autoFocus/autoFocus'
import UseReducer from '../components/useReducer/useReducer'

function ContactScreen() {
  return (
    <div>
      <NavBar />
      <h2>Welcome to contact screen</h2>
      {/* <AutoFocusInput /> */}
      <UseReducer />
    </div>
  )
}

export default ContactScreen