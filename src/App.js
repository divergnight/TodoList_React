import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/App-Navbar/App-Navbar';
import MultiToDoList from './components/MultiToDoList/MultiToDoList';
import ToDoList from './components/toDoList/ToDoList';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AppNavbar />
			</header>
			<MultiToDoList />
		</div>
	);
}

export default App;
