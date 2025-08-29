// import { useState } from "react"; 

// const  Count = ()=>{
//     const [Counter,setCounter]=useState(0)
         
//     function handleClick (){
//         setCounter(count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleClick}>Click{count} </button>
//             {/* <button onClick={Decrement}>-1</button> */}
//         </div> 
//     )
// }
// export default Count


import { useState } from 'react';
 function Counter() {
    const [count, setCount] = useState(0);

    function handleClick1() {
        setCount(count+1);
        
    }
    function handleClick2() {
        setCount(count-1);
    }
    return (
        <div>
        <button onClick={handleClick1}>Click+ {count} </button>
        <button onClick={handleClick2}> Click-{count}</button>
        </div>
    );
}
export default Counter