import React from 'react'
import { islogin } from './Utils'
import { Outlet , Navigate} from 'react-router-dom'
export default function privateRoute() {
    let login = islogin("Slavik")
  return (
    <div>
        {login ?(
<Outlet/>
        ):(
<Navigate to={"/login"}/>
        )}

    </div>
  )
}
