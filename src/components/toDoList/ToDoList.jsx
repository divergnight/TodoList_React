import { useState, useEffect } from 'react'; //
import './ToDoList.css';
import {
	Container,
	Card,
	Button,
	Table,
	InputGroup,
	FormControl,
} from 'react-bootstrap';
import Titre from '../Titre/Titre';

export default function ToDoList(props) {
	const [note, setNote] = useState('');
	const [notes, setNotes] = useState([]);
	const [notesFilter, setNotesFilter] = useState([]);
	const search = props.search;
	const infos = props.infos;
	const id = infos.id;
	const title = infos.title;
	const list = props.list;
	const setList = props.setList;

	useEffect(() => {
		setNotesFilter(notes);
		if (search.length > 0) {
			let lowerSearch = search.toLowerCase();
			let res = notes.filter(item => {
				let lowerItem = item.toLowerCase();
				if (lowerItem.indexOf(lowerSearch) > -1) return item;
			});
			setNotesFilter(res);
		}
	}, [search, notes]); //Il prend un tableau des dépendances (détecte variables qui sont modifées)

	function add() {
		if (note.trim().length === 0) {
			return null;
		}
		let tmp = [...notes];
		tmp.push(note);
		setNotes(tmp);
		setNote('');
	}

	function deleteNote(i) {
		let tmp = [...notes];
		tmp.splice(i, 1);
		setNotes(tmp);
	}

	useEffect(() => {
		let tmpList = [...list];
		for (let i = 0; i < list.length; i++) {
			if (list[i].id === id) {
				let tmpObj = { ...list[i] };
				tmpObj.notes = [...notes];
				tmpList[i] = tmpObj;
				setList(tmpList);
			}
		}
	}, [notes]);

	useEffect(() => {
		setNotes(infos.notes);
	}, []);

	return (
		<Container id="todolist">
			<Card>
				<Card.Header>
					<Titre
						text={title === undefined ? 'Todo List' : title}
						nb={notesFilter.length}
						nbMax={notes.length}
					/>
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
								{notesFilter.map((element, index) => {
									return (
										<tr key={index}>
											<td>
												{element}
												<Button
													className="ToDoList-delete-note-button"
													variant="outline-secondary"
													onClick={() =>
														deleteNote(index)
													}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="bi bi-x-lg"
														viewBox="0 0 16 16"
													>
														<path
															fillRule="evenodd"
															d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
														/>
														<path
															fillRule="evenodd"
															d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
														/>
													</svg>
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>

						<Card.Footer>
							<Button
								variant="danger"
								id="ToDoList-erase-all"
								onClick={() => {
									setNotes([]);
								}}
							>
								Clear all
							</Button>
						</Card.Footer>
					</div>
				)}
			</Card>
		</Container>
	);
}
