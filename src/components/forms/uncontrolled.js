import { useRef, useState } from "react";


const UncontrolledForm = () =>{

    const emailRef = useRef();
    const passwordRef = useRef();
    const optionRef = useRef();
    const [error, setError] = useState("")


    const handleSubmit = (event) =>{
        event.preventDefault()

        const email = emailRef.current.value;
        let password = passwordRef.current.value;
        password = Number(password);
        const gender = optionRef.current.value;
        console.log(gender,"gendergender");

        const textRegex = /code/
        const passwordRegex = /[0-9]/


        if(textRegex.test(email) && passwordRegex.test(password)) {
            // valid email input 
            setError("")

             const userForm = {
            email: email,
            password: password,
        };

        console.log(userForm,"userForm");

        }else{
            // alert("invalid user input")
            setError("invalid user input")
            const userForm = {
                email: email,
                password: password,
            };
        console.log(userForm,"userFormInvalid");

        }

       
        
    }
    return(
        <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={emailRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  <select ref = {optionRef}>
<option option = "Male">Male</option>
<option option = "Female">Female</option>
  </select>
  { error && <span style={{color : "red"}}>Invalid credentials</span> }
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
    )
};

export default UncontrolledForm;