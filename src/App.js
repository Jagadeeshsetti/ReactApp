


import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"
import FormComponent from "./components/forms/form.js"
import TableComponent from "./components/tables/table.js"
import  "./style.css"
import ImageComponent from "./components/image/image.js"
import Heading1, {Heading2,Heading3,Heading4,Heading5,Heading6 as SecendaryHeading} from "./components/headings/headings.js"
import React from "react"
import NavBar from "./components/navBar/navbar.js"
import AccordionComponent from "./components/accordion/accordion.js"
import ProgressBarComponent from "./components/prograsbar/prograsbar.js"
import SpinnerComponent from "./components/spinners/spinners.js"
import CarouselComponent from "./components/carousels/carousels.js"
import ModalComponent from "./components/modals/modal.js"


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
  <NavBar/>
  <AccordionComponent/>

  <ProgressBarComponent/>
  <SpinnerComponent/>
  <CarouselComponent/>
  <ModalComponent/>

    </>
   )
}

export default App