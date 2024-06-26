

import React, { useCallback, useState } from 'react'
import ButtonComponent from '../button/button';

function ParentComponent() {
    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(1000);

    const increaseAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const increaseSalary =  useCallback(() => {
        setSalary(salary + 1000)
    },[salary])



  return (
    <div>
        <h2>Current age{age}</h2>
        <ButtonComponent  text={"increase age"} onSmash={increaseAge}/>


        <h2>current salary{salary}</h2>
        <ButtonComponent  text={"increase salary"} onSmash={increaseSalary}/>
    </div>
  )
}

export default ParentComponent