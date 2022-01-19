import './App-Navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function AppNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container id="nav-container">
				<Navbar.Brand href="#home">Todo List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
