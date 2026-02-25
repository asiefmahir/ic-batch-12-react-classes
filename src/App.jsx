import { useState } from "react";
import "./App.css";

function App() {
	// states
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([
		// { id: "1", title: "Demo Todo 1" },
		// { id: "2", title: "Demo Todo 2" },
	]);

	// delete -> non-mutative // no -ai code

	// edit/update

	// state, lifting, context api

	// event -> state

	const submitHandler = (event) => {
		event.preventDefault();

		if (!todoTitle.trim()) {
			return alert(`Please enter a valid todo Title`);
		}

		const newTodo = {
			id: Date.now() + "",
			title: todoTitle,
		};

		// todoList.push(newTodo);
		setTodoList([newTodo, ...todoList]); // non-mutative way
		setTodoTitle("");
	};
	return (
		<div className="app">
			<h2>Todo App</h2>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					onChange={(event) => setTodoTitle(event.target.value)}
				/>
				<button type="submit">Create Todo</button>
			</form>
			<ul>
				{todoList.map((todo) => (
					<li key={todo.id}>
						<span>{todo.title}</span>
						<button>Edit</button>
						<button>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
}

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
