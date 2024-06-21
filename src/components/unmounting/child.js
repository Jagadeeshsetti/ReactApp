import { Component, PureComponent } from "react";

class Child extends PureComponent {

    componentWillUnmount(){
        alert("component unmounting");
    }
    render(){
        console.log("Child rendering....")
        return(
            <div>Child</div>
        )
    }
}

export default Child