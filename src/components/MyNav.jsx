import { Nav, Navbar, Container, NavLink } from "react-bootstrap";

const MyNav = props => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid="md">
      <Nav className="mx-auto">
        <NavLink href="#Home">Home</NavLink>
        <NavLink href="#Home">About</NavLink>
        <NavLink href="#Home">Browse</NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
