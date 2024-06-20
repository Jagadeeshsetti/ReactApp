


const ListComponent = (prop)=>{
    const{list}=prop
    // console.log(prop)
    // console.log(list)
    return(
       <ol>

        {
            list.map((each, i)=>{
                return <li key={i}>{each} </li>;
            })
        }
       </ol>
       
    )
}
export default ListComponent