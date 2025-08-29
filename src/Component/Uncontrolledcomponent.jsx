import React, { useRef } from "react";

function Uncontrolledcomponent(){
    const inputRef = useRef();
    function handlesubmit(){   alert(`Name: ${inputRef.current.value}`)
}
    return (
        <div className = "APP">
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handlesubmit}>
            <label>Name:</label>
            <input type="text" name="name" ref= {inputRef} />
            <button type="submit">Submit</button>
            </form>
          
        </div>
    )
}
export default Uncontrolledcomponent