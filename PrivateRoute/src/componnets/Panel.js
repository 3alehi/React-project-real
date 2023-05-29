import React from 'react'
import { Outlet , Link} from 'react-router-dom'
export default function Panel() {
  return (
    <div>
        <h4 style={{textAlign:"center" , margin:"10px"}}>hi Welcom to my site</h4>
    <hr />
    <div style={{display:"flex" , justifyContent:"space-evenly"}}>

<Link to={"profile"}>profile</Link>
<Link to={"dashboard"}>dashboard</Link>
    </div>
    <Outlet/>
    </div>
  )
}
