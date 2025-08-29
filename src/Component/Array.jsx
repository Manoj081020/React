

import React from 'react'

function Array() {
    const names = ["Manoj","kiruba","Aravind","Ragul",];
  return (
    <div>
        <h1>list</h1>
        <ul>
            {names.map((user,i)=>(
                <li key = {i} > {user} </li>
            ))}
        </ul>
    </div>
  )
}

export default Array