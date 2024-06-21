import { useState } from "react";
import Counter from "./counter";
import ButtonComponent from "../button/button";

const ProfileComponent = () =>{
    const [name, setName] = useState("mohan");
    const [isEmployed, setIsEmployed] = useState(false);

    const [employee, setEmployee] = useState({
        name:"kiran",
        salary:1000,
        designation:"react developer"
    })

    const incrementPercentage = 50;

    const percentageCal = (value, percentage) => {
        return value + value * (percentage / 100);
    }

    const changeName=()=>{
        // name = "ram";
        setName("ram"); 
    }

    const changeIsEmployed=()=>{
        // name = "ram";
        setIsEmployed(!isEmployed); 
    };

    const changeRole=()=>{
        setEmployee({
            ...employee, 
            designation: "Angular developer", 
            salary: percentageCal(employee.salary, incrementPercentage),
        })

    }

    return (
        <>
        <h4>Profile details</h4>
        <h3>User name : {name}</h3>
        <button  onClick={changeName}>Change name</button>
        <h3>Is Employes {isEmployed ? "YES" : "NO"}</h3>
        <button  onClick={changeIsEmployed}>Change employee status</button>
       {isEmployed && <Counter />}
       <div>
        <h2>Employee details</h2>
        <h4>{employee.name}</h4>
        <h4>{employee.salary}</h4>
        <h4>{employee.designation}</h4>
        <ButtonComponent  text="Change Role" onSmash={changeRole}  />
       </div>

        </>
    )
}

export default ProfileComponent;