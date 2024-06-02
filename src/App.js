


import Button from "./components/button/button.js"
import List from "./components/list/list.js"
import Form from "./components/forms/form.js"
import Table from "./components/tables/table.js"
import Image from "./components/image/image.js"
import Heading1, {Heading2,Heading3,Heading4,Heading5,Heading6,Heading6 as SecendaryHeading} from "./components/headings/headings.js"
import React from "react"


function App(){
  
    
        const employees=[
          {
            name:"Srikanth",
            role:"Full stack developer",
            salary:200000
          },
          {
            name:"sai naik",
            role:"React developer",
            salary:100000
          },
          {
            name:"pavan",
            role:"Angular developer",
            salary:150000
          },
          {
            name:"pavan",
            role:"Angular developer",
            salary:150000
          }
      ]

      return(
        <>
    
        {
          employees.map((eachEmployee,index)=>{
            return(
              <div>
                <h2>{index+1}</h2>
                <h3>{eachEmployee.name}</h3>
                <h3>{eachEmployee.salary}</h3>
              </div>
            )
          })
        }
        
         
    
        </>
      )
    
}

export default App
