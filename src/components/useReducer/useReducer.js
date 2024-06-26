import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";


const reducerFunction=(state, action)=>{

    switch(action.type){
        case "CHANGE_NAME":
            return{...state, name:"ram123"};

        case "INCREMENT_SALARY":
            return{...state, salary: state.salary + 1000};

        case "DECREMENT_SALARY":
            return{...state, salary: state.salary - 1000};

        case "INCREMENT_AGE":
            return{...state, age: state.age + 1};

        case "ADD_NEW_TEAM_MEMBER":
            return{...state, team: [...state.team,{name:"c"}] };

        default :
            return state;
    }
};

const UseReducer = () =>{

    const initialState ={
        name:"ram",
        salary:999,
        age:20,
        team:[{name : "a"},{name: "b"}],
    }

 const [currentState, dispatchFunction] = useReducer(reducerFunction, initialState)

 const changeName=()=>{
    dispatchFunction({
        type: "CHANGE_NAME",
    })
 };


 const increaseSalary=()=>{
    dispatchFunction({
        type:"INCREMENT_SALARY"
    })
 };


 const addTeamMember=()=>{
    dispatchFunction({
        type:"ADD_NEW_TEAM_MEMBER"
    })
 };




    return(
        <>
        <h2>UseReducer Example</h2>
        <button  onClick={changeName}>Change name</button>
        <button  onClick={increaseSalary}>Increase salary</button>
        <button  onClick={addTeamMember}>Add team member </button>
        <h3>{currentState.name}</h3>
        <h3>{currentState.age}</h3>
        <h3>{currentState.salary}</h3>
        <ol>
        {
            currentState.team.map(each=>{

                return <li>{each.name}</li>
                    
                
            })
        }
        </ol>
        </>
    )
}
export default UseReducer;