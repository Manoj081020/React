import {useState} from 'react'

 function Submit() {
    const [text,setText]=useState("")
  return (
    <div>
        
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Name' />
        <button disabled={text.length===0}>Submit</button>
    </div>
  )
}
export default Submit
