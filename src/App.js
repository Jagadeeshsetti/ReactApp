


import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"
import FormComponent from "./components/forms/form.js"
import TableComponent from "./components/tables/table.js"
import  "./style.css"
import ImageComponent from "./components/image/image.js"
import Heading1, {Heading2,Heading3,Heading4,Heading5,Heading6 as SecendaryHeading} from "./components/headings/headings.js"

function App(){
  // const employee={
  //   name:"Jagadeesh", 
  //   secondName:"vinay"
  // }
  // const {name,secondName}=employee
  // return(
  //   <div>

  //     <h1>Hello World {name}</h1>
  //     <h1>Hello World {secondName}</h1>
      
  //   </div>
  // )


  const isSubscribe=true

  // if(isSubscribe){
  //   return <ListComponent/>
  // }
  // else{
  //   return <ImageComponent/>
  // }

  // return (
  //   <div>
  //     {
  //       isSubscribe
  //       ?
  //       <ListComponent/>
  //       :
  //      <h1>Please subscribe</h1>
  //     }
  //   </div>
  // )


  // return (
  //   <div>
  //     {
  //       isSubscribe  &&  <ListComponent/>
    
  //     }
  //   </div>
  // )

   return(
    <div>
    <Heading1/>
    <Heading2/>
    <Heading3/>
    <Heading4/>
    <Heading5/>
    <SecendaryHeading/>
    </div>
   )

}

export default App