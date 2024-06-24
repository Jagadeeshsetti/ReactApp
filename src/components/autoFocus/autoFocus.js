import { useEffect, useRef } from "react";


const AutoFocusInput = () =>{

    const reference = useRef();
    useEffect(()=>{
        autoFocusFn();

    },[])

    const autoFocusFn = () =>{
        reference.current.focus();
        console.log(reference.current.value, "input value");
    }

    return <input ref={reference} type="text"/>

}

export default AutoFocusInput;