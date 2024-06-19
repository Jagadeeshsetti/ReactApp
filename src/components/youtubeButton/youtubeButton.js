import { Component } from "react";
import GreetingComponent from "../greeting/greeting";
import Todos from "../todo/todo";


class YoutubeButton extends Component{

    state={
        subscribeText:"Please subscribe",
        subscribedText:"Thanks for subscribing",
        isSubscribe:false

    };

    changeText=()=>{
        console.log("hello");
        this.setState(
            {
                isSubscribe: !this.state.isSubscribe,
            },
            ()=>{}
        );

    };
    render(){
        return(
            <>
            <button  onClick={this.changeText}>
                {this.state.isSubscribe  
                ? this.state.subscribedText 
                : this.state.subscribeText}
                </button>

                {this.state.isSubscribe && (

                <>

                <GreetingComponent>Wellcome Sai</GreetingComponent>
                <Todos />

                </>

                )}
                
            </>
            
        )
    }
}


export default YoutubeButton;