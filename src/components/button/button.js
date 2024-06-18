const ButtonComponent = (prop)=>{

  console.log(prop)

  const {text,textColor="yellow"}=prop
    return(
     <button style={{color: textColor ,backgroundColor: "green" }}>{text}</button> 
    )
}
export default ButtonComponent