import './App-Navbar.css';
import {
	Container,
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

export default function AppNavbar(props) {
	const setSearch = props.setSearch;
	return (
		<Navbar bg="light" expand="lg">
			<Container id="nav-container">
				<Navbar.Brand href="#home">Todo List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							value={props.search}
							onChange={e => setSearch(e.target.value)}
						/>
						<Button variant="secondary">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
