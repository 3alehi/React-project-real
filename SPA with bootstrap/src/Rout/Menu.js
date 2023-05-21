import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Menu.css"
function Menu() {
   
  return (
    <>
    <div className='Menu'>
    <Navbar className='nav' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  className='li'>Slavik</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='li' ><Link className='a' to={"/"}>A bout</Link></Nav.Link>
            <Nav.Link className='li'><Link className='a' to={"/projects"}>Project in Github</Link></Nav.Link>
            <Nav.Link  className='li'><Link className='a' to={"/learning"}>learning</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
 
    

    </>
  );
}

export default Menu;