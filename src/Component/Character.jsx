import {useState} from 'react'

function Character() {
    const [text,setText]=useState("")
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <p> typed: {text}</p>
    </div>
  )
}

export default Character