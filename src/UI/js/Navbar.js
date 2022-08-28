import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { signOut } from 'firebase/auth' 
import { auth } from '../../Back/firebase'

function NavbarCollapsed() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bienvenido ...
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#MisMonas">Mis monas</Nav.Link>
                  <Nav.Link href="#MonasSobrantes">Monas sobrantes</Nav.Link>
                  <Nav.Link href="#MonasRestantes">Monas restantes</Nav.Link>
                  <Nav.Link href="#Amigos">Amigos</Nav.Link>
                  <Nav.Link className='SignOut' onClick={() => signOut(auth)}>Cerrar sesion</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarCollapsed;
