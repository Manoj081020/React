import React, { useState } from 'react'

export const searchFilter = () => {
  const data = [
    "React",
    "Nodejs",
    "Express",
    "MongoDB",
    "Javascript",
    "python",
    "java",
    "spring boot"

  ]
   const [searchterm,setSearchterm]= useState("")
   const filteredData=data.filter((item)=>
    item.toLowerCase().includes(searchterm.toLowerCase())
   )

  return (
    <div>
      <h2 >search filter</h2>

    <input type="text" placeholder='search' value={searchterm} onChange={(e)=>setSearchterm(e.target.value)}/>
    <ul>
      {filteredData.length > 0 ?(
        filteredData.map((item,index)=>(
        <li>key={index
        </li>
        ))
      )}
    </ul>

    </div>
  )
}
