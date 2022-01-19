import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/App-Navbar/App-Navbar';
import MultiToDoList from './components/MultiToDoList/MultiToDoList';
import ToDoList from './components/toDoList/ToDoList';
import { useState } from 'react';

function App() {
	const [search, setSearch] = useState('');

	return (
		<div className="App">
			<header className="App-header">
				<AppNavbar search={search} setSearch={setSearch} />
			</header>
			<MultiToDoList search={search} />
		</div>
	);
}

export default App;
