const ButtonComponent = (prop)=>{

  console.log(prop)

  const {text,textColor="yellow", onSmash}=prop
    return(
     <button style={{color: textColor ,backgroundColor: "green" }}  onClick={onSmash}>{text}</button> 
    )
}
export default ButtonComponent