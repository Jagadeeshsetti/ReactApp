import axios from "axios"
import { useEffect, useState } from "react"
import ImageComponent from "../image/image"


const UseEffectEx2 = () =>{

    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)
    const [eachProduct, setEachProduct] = useState({});

    useEffect(()=>{
        console.log("useEffect....");
        document.title = `React count ${count}`
        fetchProducts();
    }, [count])


    const fetchProducts = async () => {
        try {
            const { data, status } = await axios.get(`https://fakestoreapi.com/products/${count}`);
            console.log(data, "datadata");

            if (status === 200) {
                setEachProduct(data);
               
            } else {
                alert("API request not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return(
        <>
        <h2>{count}</h2>
        <button  onClick={()=> setCount(count + 1)}>Increase count</button>

        <h2>{count2}</h2>
        <button onClick={()=>  setCount2(count2 + 1) }>Increase count2</button>

        {
            <>
            <h2>{eachProduct.title}</h2>
            <ImageComponent  src={eachProduct.image}/>
            </>
        }
        </>
    )
}

export default UseEffectEx2;