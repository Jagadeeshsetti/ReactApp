


import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"
import FormComponent from "./components/forms/form.js"
import TableComponent from "./components/tables/table.js"
import  "./style.css"
import ImageComponent from "./components/image/image.js"
import Heading1, {Heading2,Heading3,Heading4,Heading5,Heading6 as SecendaryHeading} from "./components/headings/headings.js"
import React from "react"

function App(){
   const isSubscibed = false
  
   const employees=[
    {
      teamName:"SRH",
      players:["a","b"],
      trophy:[2016]
    },
    {
      teamName:"Mumbai",
      players:["a","b"],
      trophy:[2016]
    },
   
  ]


   return(
    <>
   
    {
      employees.map((eachEmployee,index)=>{
        const{teamName,players,trophy} =eachEmployee
                return(
          <React.Fragment >
            <h2>{index+1}</h2>
            <h3>{teamName}</h3>
            <h3>{players}</h3>
            <h3>{trophy}</h3>
          </React.Fragment>
        )
      })
    }

    </>
   )
}

export default App