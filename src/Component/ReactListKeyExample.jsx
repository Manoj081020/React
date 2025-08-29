import React from "react";

const ReactListKeyExample = ()=>{
   //array of object 
   const tasks = [
    { id: "1", text: "Buy Fruits", status:"todo"},
    { id: "2",text:"Go to the Bank", status:"done"},
    { id: "3", text: "pay bills", status:"todo"}  
];
return(
    <div>
        {tasks.map((task)=>{
            return (
                <ul key={task.id}>

                    <li style={{ padding: "25px"}} key={task.id}>
                        {task.text} - {task.status}
                    </li>
                </ul>
            )
        })

        }
    </div>
)
}
export default ReactListKeyExample