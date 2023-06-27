import React from 'react'
import { BsHandbagFill } from 'react-icons/bs';
import "../Navbars.css"
import { Button, NavLink } from 'react-bootstrap';
import login from "./ruls"
import { Link } from 'react-router-dom';
export default function Navbars() {
  let login1 = login("admin")
  console.log(login1)
  return (
    <div>
 <ul className="menu">
        <div className="rtl">
          <li>
            <NavLink>
              <BsHandbagFill />
            </NavLink>
          </li>
          {login1 &&(
            <Button className="btn" variant="primary">
            ورود / عضویت
          </Button>
          )&& login1 == "admin" &&(
            <Button className="btn" variant="primary">
            صفحه مدریت
          </Button>         
          )}
        </div>
        <div className="ltr">
          <li>
            <Link style={{color:"white",textDecoration:"none"}} to={"/Showcourse"}>دوره ها</Link>
          </li>
          <li>
            <Link style={{color:"white", textDecoration:"none"}} to={"/free"}>دوره های رایگان</Link >
          </li>
          <li>
            <Link style={{color:"white" , textDecoration:"none"}} to={"/courseoff"}>دوره های تخفیف دار</Link>
          </li>
        </div>
       
      </ul>



    </div>
  )
}
