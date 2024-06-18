


const ListComponent = (prop)=>{
    const{list}=prop
    console.log(prop)
    return(
       <ol>

        {
            list.map(each=>{
                return <li>{each} </li>;
            })
        }
       </ol>
       
    )
}
export default ListComponent