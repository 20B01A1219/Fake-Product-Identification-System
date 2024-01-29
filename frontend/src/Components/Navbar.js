import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import {Link} from 'react-router-dom';
function NavBar() {
  const user = JSON.parse(localStorage.getItem('currentuser'));

  function logout(){
    localStorage.removeItem('currentuser');
    window.location.href = '/login'
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to ="/" >Fake Product Detection System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link as = {Link} to="/validateproduct">Product validation</Nav.Link>
            <Nav.Link as={Link} to = "/instructions">Instructions</Nav.Link>
            {
              (user) ? (
                <>
                <NavDropdown title = {user.name}  id="basic-nav-dropdown" >
              <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={logout}>
                logout
              </NavDropdown.Item>
            </NavDropdown>
                </>
              ): (
                <NavDropdown title="Sign up/Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">
                Sign up
              </NavDropdown.Item>
            </NavDropdown>
                
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

