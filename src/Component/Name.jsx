import { useState } from "react";

const Name = ()=>{
    // const [Name,setName]= useState("MANO")
    const [firstname,setFirstName]=useState("")
    const [display,setDisplay]=useState("")
    
const handleChange=(event)=>{
setFirstName(event.target.value)
}
const handleSubmit=()=>{
    setDisplay(firstname)
}
    return(
        <div>
            {/* <h1>{Name}</h1> */}
            
       <input type="text" name="firstname" id="" onChange={handleChange} value={firstname} />
       <button onClick={handleSubmit}>Submit</button>
       
      { display && <p>Your Name is {display}</p>}
    {/* <button onClick={()=>setName("facius")}>names</button> */}



        </div>
    )
}
export default Name


    
