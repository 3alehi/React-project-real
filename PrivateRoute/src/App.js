import React from 'react'
import {rout} from "./componnets/router"
import { useRoutes , Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { islogin } from './componnets/Utils';
import "./App.css"
export default function App() {
  let login = islogin("Slavik")
  let routt = useRoutes(rout)
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Slavik</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link className='link' to={"/"}>Home</Link></Nav.Link>
            <Nav.Link ><Link className='link' to={"/course"}>course</Link></Nav.Link>
            <Nav.Link ><Link className='link' to={"/panel"}>panel</Link></Nav.Link>
{!login ?(
<Nav.Link ><Link className='link' to={"/login"}>login</Link></Nav.Link>

): (
 true
)}
          </Nav>
        </Container>
      </Navbar>
      {routt}
    </div>
  )
}
