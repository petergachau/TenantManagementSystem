import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{margin:'20rem'}}>
        <h1>UnAuthorized</h1>
        <div></div>
        Return 
        <Link to='/main'>
            Home
        </Link>
        </div>
  )
}

export default Error