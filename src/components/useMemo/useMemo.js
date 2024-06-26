const { useState, useMemo } = require("react")



const  Usememo = () =>{
    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(1000);

    const increaseAge = () => {
        setAge(age + 1)
    }

    const increaseSalary = () => {
        setSalary(salary + 1000)
    }


    const isEven = useMemo(() =>{
        console.log("expensive calculation is happening........");
        let even = age % 2 === 0;
        return even ? "EVEN" : "ODD";
    },
    [age, salary]
);

    return(
        <>
        <h2>Age details</h2>
        <h3>My curretn age {age}, age number is {isEven}</h3>
        <button  onClick={increaseAge}>Increase my age </button>


        <h2>Salary details</h2>
        <h3>My current salary {salary}</h3>
        <button  onClick={increaseSalary}>Increase my salary</button>

        </>
    )
}

export default Usememo;