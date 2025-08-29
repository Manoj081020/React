import React, { useState } from "react";

 const Toggle = ()=>{
    const [toog,setToog] = useState("toogle")
    const [show,setShow] = useState(false)

    const changeHandler = ()=>{
        setshow(!show)
    }

    


return(
    
        <div>
            <h1>{toog}</h1>
            <button onClick={changeHandler}>{show? "hide content": "show content"}</button>
            
            <button onClick={chagehandling}>{show}</button>

            


        </div>

)
 }
export default Toggle