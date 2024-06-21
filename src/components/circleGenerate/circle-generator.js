import { Component } from "react";
import { Circles } from "react-loader-spinner";


class CircleGenerator extends Component{

    state={
        circles:[0,1],
        numberedCircles:0
    }    

    addCircles = () =>{
        this.setState({
            circles:[...this.state.circles,false],
        }, ()=>{
            this.setState({
            numberedCircles:this.state.circles.length,
        });
            
        });
        
    };

     circleClicked =(index)=>{
        console.log("clicked", index, this.state.circles);

    }
    render(){
        return(
            <>
            <h3>Circle count{this.state.numberedCircles }</h3>
            <button onClick={this.addCircles}>Add circles</button>
            {this.state.circles.map((eachCircle, index)=>{
                    return(
                        <div style={{border:"2px solid black",
                            width:100,
                             height:100, 
                             borderRadius:"50%",
                             backgroundColor: eachCircle? "red" : "green",
                              }}
                              onClick={() => this.circleClicked(index)}>
                              </div>
                    )
                })
            }
           
            
            </>
        )
    }
}

export default CircleGenerator;