import './MultiToDoList.css';
import ToDoList from '../toDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
	Button,
	InputGroup,
	FormControl,
	Container,
	Row,
	Col,
} from 'react-bootstrap';

export default function MultiToDoList(props) {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);

	function add() {
		if (name.trim().length === 0) {
			return null;
		}
		let tmp = [...list];
		tmp.push(name);
		setList(tmp);
		setName('');
	}

	function deleteListItem(i) {
		let tmp = [...list];
		tmp.splice(i, 1);
		setList(tmp);
	}

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					add();
				}}
			>
				<InputGroup className="multiToDoList-inputgroup">
					<FormControl
						type="text"
						placeholder="Name"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					></FormControl>
					<Button variant="secondary" onClick={add}>
						Add Todo List
					</Button>
				</InputGroup>
			</form>
			<Container>
				<Row>
					{list.map((title, index) => {
						return (
							<Col key={index}>
								<span id="todo-list">
									<Button
										className="delete-button"
										variant="outline-secondary"
										onClick={() => {
											deleteListItem(index);
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-x-lg"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
											/>
											<path
												fill-rule="evenodd"
												d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
											/>
										</svg>
									</Button>
									<ToDoList
										title={title}
										search={props.search}
									/>
								</span>
							</Col>
						);
					})}
				</Row>
			</Container>
			{list.length > 0 && (
				<Button
					variant="danger"
					id="multiToDoList-clearall"
					onClick={() => setList([])}
				>
					Remove All
				</Button>
			)}
		</div>
	);
}
