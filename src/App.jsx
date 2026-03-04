import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoSection from "./components/TodoSection";

function App() {
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);

	return (
		<div className="app">
			<h2>Todo App</h2>

			<TodoForm
				editMode={editMode}
				setTodoList={setTodoList}
				todoList={todoList}
				editableTodo={editableTodo}
				setEditMode={setEditMode}
				setEditableTodo={setEditableTodo}
				todoTitle={todoTitle}
				setTodoTitle={setTodoTitle}
			/>
			<TodoSection
				setTodoTitle={setTodoTitle}
				todoList={todoList}
				setTodoList={setTodoList}
				setEditMode={setEditMode}
				setEditableTodo={setEditableTodo}
			/>
		</div>
	);
}

// let b = 10;

// function random() {
// 	console.log(b);
// }

// function sum(a, b) {
// 	return a + b;
// }

// sum(10, 20); //

// document.getElementById("btn").addEventListener("click", () => {})

// BioData()

// react component
// 3 rule
// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" must be some html-ish code (jsx)
// react component
export default App;
