import './MultiToDoList.css';
import ToDoList from '../toDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {
	Button,
	InputGroup,
	FormControl,
	Container,
	Row,
	Col,
} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

export default function MultiToDoList(props) {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);

	function add() {
		if (name.trim().length === 0) {
			return null;
		}
		let tmp = [...list];
		let obj = { id: uuid(), title: name, notes: [] };
		tmp.push(obj);
		setList(tmp);
		setName('');
	}

	function deleteListItem(i) {
		let tmp = [...list];
		tmp.splice(i, 1);
		setList(tmp);
	}

	useEffect(() => {
		let data = localStorage.getItem('todo-list');
		setList(JSON.parse(data));
	}, []);

	useEffect(() => {
		localStorage.setItem('todo-list', JSON.stringify(list));
	}, [list]);

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
					{list.map((infos, index) => {
						return (
							<Col key={infos.id}>
								<span id="todo-list">
									<Button
										className="delete-button"
										variant="outline-secondary"
										onClick={() => {
											deleteListItem(infos.id);
										}}
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
									<ToDoList
										search={props.search}
										infos={infos}
										list={list}
										setList={setList}
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
