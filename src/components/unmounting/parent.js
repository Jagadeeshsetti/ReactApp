import { Component } from "react";
import Child from "./child";

class UnmountingPhase extends Component{
        constructor(){
            super();
            this.state={
                childVisible: true,
            };
        }  
        
        childVisibleMethod=()=>{
            this.setState(
                {
                    childVisible:!this.state.childVisible
                }
            )
        }
   
    render(){
        console.log("Parent rendering...");
        return(
            <>
            
            <h3>UnmountingPhase</h3>
            <button  onClick={this.childVisibleMethod}>Child hide</button>
            <h4>{this.state.childVisible ? "Hai hello child" : null}</h4>
            <Child />
            
            </>
        )
    }
}

export default UnmountingPhase;