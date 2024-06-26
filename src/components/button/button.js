import React from "react";

const ButtonComponent = (prop)=>{
  console.log("ButtonComponent re-rendering......");

  console.log(prop)

  const {text,textColor="yellow", onSmash}=prop
    return(
     <button style={{color: textColor ,backgroundColor: "green" }} 
      onClick={onSmash}>{text}</button> 
    )
}
export default React.memo(ButtonComponent);