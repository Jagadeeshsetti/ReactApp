const Heading1 = (prop) =>{

    const{title}=prop
    return(
       <h2>{ title }</h2>
    )
}
export default Heading1

export const Heading2 = (prop) =>{
    const{title}=prop
    return(
       
            <h2>{title}</h2>
       
    )
}
export  const Heading3 = () =>{
    return(
        <div>
            <h3>H3 heading....</h3>
        </div>
    )
}
export const Heading4 = () =>{
    return(
        <div>
            <h4>H4 heading....</h4>
        </div>
    )
}
  
export  const Heading5 = () =>{
    return(
        <div>
            <h5>H5 heading....</h5>
        </div>
    )
}

export  const Heading6 = () =>{
    return(
        <div>
            <h6>H6 heading....</h6>
        </div>
    )
}







