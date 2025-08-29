import {useState} from 'react'
import Child from './Child'


export default  function Parent(){
      const [text,setText]=useState("Update child")
      return(
        <div>
          <h1>{text}</h1>
          <Child updateParentText={setText}/>
        </div>
      )
    }