import React from 'react'
import { islogin } from '../utils';
import { Navigate } from 'react-router-dom';

export default function Panel() {
    let login = islogin("Slavik")
  return (
    <div>
        {login ?(
            <h1>is true</h1>
        ):(

<Navigate to={"/login"}/>)}
    </div>
  )
}
