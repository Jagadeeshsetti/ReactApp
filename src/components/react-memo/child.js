


import React from 'react'

function ChildComponent() {
    console.log("child re-rendering.....");
  return (
    <div>ChildComponent</div>
  )
}

export default React.memo(ChildComponent);