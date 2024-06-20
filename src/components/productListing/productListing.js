import React, { Component } from "react";
import ImageComponent from "../image/image";
import ListComponent from "../list/list";
import Heading1, { Heading4 } from "../headings/headings";
import axios from "axios";
import RotatingLineSpinner from "../spinner/rotating-spinner";


class ProductListing extends Component {

    // state={
    //     recipesList : [],
    //     isSucess:false,
    // }


    constructor() {
        console.log("constructor.....")
        super();
        this.state = {
            recipesList: [],
            eachRecipe:{},
            isSucess: false,
            count:1,
            favoritecolor:"red",
        };
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

    // fetchProducts = async() =>{
    //    const response1 = await fetch("https://dummyjson.com/recipes")
    //    const finalResponce = await response1.json();

    //    const { recipes } = finalResponce;

    //            this.setState({
    //                recipesList : recipes,
    //                isSucess:true,
   
   
    //            },()=>{
    //                console.log(this.state.recipesList, "inside setState");
    //            });
    // };

   

    fetchProducts = async () =>{

        try{
       const { data, status } = await axios.get("https://dummyjson.com/recipes")
       const{ recipes } = data;

       if(status === 200){

        this.setState(
            {
            recipesList : recipes,
           isSucess:true,
        },
        () => {
           console.log(this.state.recipesList, "inside setState");
       }
    );

       } else {
        alert("api not success");
       }
    }catch(err){
        console.log(err);
    }

    };

    componentDidMount(){
        console.log("componentDidMount.....")
        // this.fetchProducts () 
        document.title=`React app ${this.state.count}`;
    
        }
        
        static getDerivedStateFromProps(props, state) {
            console.log("getDerivedStateFromProps.....")
            return {favoritecolor: props.favcol };
          }
        

         updateTitle=()=> {
            this.setState({
                count: this.state.count + 1,
            })
        }

        componentDidUpdate() {
            console.log("componentDidUpdate.....")
            document.title=`React app ${this.state.count}`;
            // this.fetchEachRecipe();
        }

        fetchEachRecipe=async()=>{
            const { data, status } = await axios.get(`https://dummyjson.com/recipes/${this.state.count}`)
             
            this.setState({
                eachRecipe: data,
            })
            console.log(data)
        };

        // shouldComponentUpdate(){
        //     return false;
        // } 

        getSnapshotBeforeUpdate(props,state){
            console.log(props,state,"getSnapshotBeforeUpdate..")
            return null;

        }

    render() {
        console.log("render.....")
        return(

            <>
            <h3 style={{color:this.state.favoritecolor}}>{this.state.favoritecolor}</h3>
           <h2>Product Listing</h2> 
           <h3>{this.state.count}</h3>
          <button onClick={this.updateTitle}>Update count</button>

          {/* {
            <h3>{this.state.eachRecipe?.name}</h3>
          } */}
            
            {/* {
                this.state.isSucess
                ?
                this.state.recipesList.map((eachRecipe)=>{
                    return(
                        <React.Fragment key={eachRecipe.id}>
                        <Heading4 title={eachRecipe.name} />
                        <ImageComponent src={eachRecipe.image} />
                        <Heading1  title={"Ingredients"}/>
                        <ListComponent  list={eachRecipe.ingredients} />
                        <Heading1  title={"Instructions"}/>
                        <ListComponent  list={eachRecipe.instructions} />
                        
                        </React.Fragment>
                    )
                }):(
                
                <RotatingLineSpinner 
                 height={"100"} 
                 width={"150"} 
                 strokeColor={"green"}
                 visible={true}
                 />
            )} */}
            </>
        )
    }
}

export default ProductListing;