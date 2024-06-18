




const GreetingComponent=(prop)=>{
    console.log(prop)
    const {children}=prop
    return(
<>
<h1>hello good morning </h1>
{children} 


</>
    )
}

 export default GreetingComponent;