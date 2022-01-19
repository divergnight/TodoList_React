import logo from './logo.svg';
import './App.css';
import ToDoList from './components/toDoListv2/ToDoListv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/App-Navbar/App-Navbar';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AppNavbar />
			</header>
			<ToDoList />
		</div>
	);
}

export default App;
