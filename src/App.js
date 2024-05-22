


import Button from "./components/button/button.js"
import ListComponent from "./components/list/list.js"
import FormComponent from "./components/forms/form.js"
import TableComponent from "./components/tables/table.js"
import  "./style.css"
import ImageComponent from "./components/image/image.js"


function App(){
  return(
    <div>
      <h1>
      <center>  Hello World</center>
      </h1>
      <Button />

      <ListComponent />

    <FormComponent />

    <TableComponent />

    <ImageComponent />
    </div>
  )
}

export default App