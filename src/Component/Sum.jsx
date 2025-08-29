import { useState } from "react";

function Sum(){
    const [num1,setNum1]=useState("")
    const [num2,setNum2]=useState("")
    const [total,setTotal]=useState("0")
     
    const handleAdd=()=>{
        setTotal(Number(num1)+Number(num2))
        setNum1("")
        setNum2("")
    }
    return (
        <div>
            <h2>Simple Calculator</h2>
            <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder="First num" />
            <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder="second num" />
            <button onClick={handleAdd}>Add</button>
            <h3>Total:{total}</h3>


        </div>
    )
}
export default Sum