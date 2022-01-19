import { useState } from 'react'; //
import './ToDoListv2.css';
import {
	Container,
	Card,
	Button,
	Table,
	InputGroup,
	FormControl,
} from 'react-bootstrap';

export default function ToDoList() {
	const [note, setNote] = useState('');
	const [notes, setNotes] = useState([]);
	function add() {
		if (note.trim().length === 0) {
			return null;
		}
		notes.push(note);
		setNote('');
		var res = notes.map(element => {
			return (
				<tr>
					<td>{element}</td>
				</tr>
			);
		});
		setNotes(notes);
	}
	return (
		<Container id="todolist">
			<Card>
				<Card.Header>
					<h3>My Todo List ({notes.length})</h3>
				</Card.Header>
				<Card.Body>
					<form
						onSubmit={e => {
							e.preventDefault();
							add();
						}}
					>
						<InputGroup>
							<FormControl
								type="text"
								placeholder="Notes"
								value={note}
								onChange={e => setNote(e.target.value)}
								required
							></FormControl>
							<Button variant="secondary" onClick={add}>
								Add
							</Button>
						</InputGroup>
					</form>
				</Card.Body>
				{notes.length > 0 && (
					<div>
						<Table striped hover>
							<thead>
								<tr>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{notes.map((element, index) => {
									return (
										<tr key={index}>
											<td>{element}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>

						<Card.Footer>
							<Button
								variant="danger"
								id="erase-all"
								onClick={() => {
									setNotes([]);
								}}
							>
								All erase
							</Button>
						</Card.Footer>
					</div>
				)}
			</Card>
		</Container>
	);
}
