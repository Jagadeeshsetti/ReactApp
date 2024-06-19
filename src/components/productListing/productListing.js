import { Component } from "react";
import ImageComponent from "../image/image";
import ListComponent from "../list/list";
import Heading1, { Heading4 } from "../headings/headings";



class ProductListing extends Component {

    state={
        recipesList : [],
        isSucess:false,
    }


    //  uesing .then to collect promises for async js

    // fetchProducts = () =>{

    //     fetch("https://dummyjson.com/recipes")
    //     .then(res => res.json())
    //     .then((response) => {
    //         const { recipes } = response;

    //         this.setState({
    //             recipesList : recipes,
    //             isSucess:true,


    //         },()=>{
    //             console.log(this.state.recipesList, "inside setState");
    //         });

    //     } );
    // };


       //  uesing async and await to collect promises for async js

    fetchProducts = async() =>{
       const response1 = await fetch("https://dummyjson.com/recipes")
       const finalResponce = await response1.json();

       const { recipes } = finalResponce;

               this.setState({
                   recipesList : recipes,
                   isSucess:true,
   
   
               },()=>{
                   console.log(this.state.recipesList, "inside setState");
               });

      
    }

    render() {
        return(

            <>
           <h2>Product Listing</h2> 
           <button  onClick={this.fetchProducts}>
            Click to retrive the products
            </button>
            
            {
                this.state.isSucess
                ?
                this.state.recipesList.map((eachRecipe)=>{
                    return(
                        <>
                        <Heading4 title={eachRecipe.name} />
                        <ImageComponent src={eachRecipe.image} />
                        <Heading1  title={"Ingredients"}/>
                        <ListComponent  list={eachRecipe.ingredients} />
                        <Heading1  title={"Instructions"}/>
                        <ListComponent  list={eachRecipe.instructions} />
                        
                        </>
                    )
                })
                :
                <h3>Loading....</h3>
            }
            </>
        )
    }
}

export default ProductListing;