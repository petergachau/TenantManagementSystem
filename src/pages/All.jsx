import React, { useState } from 'react'
const All = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
{count}
<button onClick={(e)=> setCount(count+1)}>
  add
</button>
    </div>
  )
}

export default All