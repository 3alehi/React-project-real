import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRoutes } from 'react-router-dom';
import "./App.css"
import route from './componnets/router';
export default function App() {
  let rout = useRoutes(route)
  return (
    <div>
<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Slavik</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link className='link' to={"/"}>Home</Link></Nav.Link>
            <Nav.Link > <Link  className='link'to={"course"}>Course</Link></Nav.Link>
            <Nav.Link > <Link  className='link'to={"panel"}>panel</Link></Nav.Link>
            <Nav.Link > <Link  className='link'to={"login"}>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

{rout}
    </div>
  )
}
