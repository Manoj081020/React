import { useState } from "react";

const Adding = ()=>{
    const [add,setAdd]=useState(0)
    
    const changeholder=()=>{
        setAdd (add+1)}
        const changeholging=()=>{
            setAdd (add-1)

        }

    
        return(
            <div>
                <h2>{add}</h2>
                <button onClick={changeholder}>add</button>
                <button onClick={changeholging}>sub </button>
            </div>
        )


}
export default Adding