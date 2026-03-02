import { useState } from "react";
import "./App.css";

function App() {
	// states
	// const [counter, setCounter] = useState(10);
	// counter = 11
	// counter++;
	// counter = 10 + 27
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	console.log(todoList);

	// todoList = [newTodo, ...todoList]
	const [filterTerm, setFilterTerm] = useState("all"); // all / completed/ uncompleted
	// filterTerm = 'uncompleted'
	// js -> reference type, array methods -> push, pop, reduce, filter, sort, map, forEach, find, findIndex, asynchronous js

	const filteredTodoList = todoList.filter((todo) => {
		if (filterTerm === "completed") {
			return todo.isCompleted === true;
		} else if (filterTerm === "uncompleted") {
			return todo.isCompleted === false;
		} else {
			return true;
		}
	});

	// delete -> non-mutative // no -ai code
	// heap memory -> #4564546
	//heap memory -> #78897897894
	// {} === {};

	// new Array()

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
			isCompleted: false,
		};

		// todoList[todoList.length] = newTodo
		// todoList.push()
		setTodoList([newTodo, ...todoList]); // non-mutative way
		// [] -> []
		setTodoTitle("");
	};

	// const increaseHandler = () => {
	// 	setCounter(counter + 1);
	// 	// setCounter(10 + 1)
	// 	// setCounter(11)
	// 	// 11
	// };

	const updateHandler = (item) => {
		// item.isCompleted = !item.isCompleted;
		// const itemIndex = todoList.findIndex((t) => t.id === item.id);
		// todoList[itemIndex].isCompleted = !item.isCompleted;
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === item.id) {
				// 1 bar e hobe
				// todo.isCompleted = !todo.isCompleted
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return { ...todo };
		});
		// non-mutative
		setTodoList(updatedTodoList);
		// todoList = updatedTodoList
	};

	const removeHandler = (todoId) => {
		// todoId === 2
		// 2 !== 2
		// [{ id: 1 }, { id: 2 }, { id: 3 }];
		const updatedList = todoList.filter((todo) => todo.id !== todoId);
		setTodoList(updatedList);
	};
	return (
		<div className="app">
			<h2>Todo App</h2>
			{/* <p>The value of the counter is {counter}</p>
			<button onClick={increaseHandler}>Increase By 1</button> */}
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					// 2 way data binding
					onChange={(event) => setTodoTitle(event.target.value)}
					// todoTitle = event.target.value
				/>
				<button type="submit">Create Todo</button>
			</form>
			<select
				value={filterTerm}
				onChange={(event) => setFilterTerm(event.target.value)}
			>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="uncompleted">UnCompleted</option>
			</select>
			<ul>
				{filteredTodoList.map((todo) => (
					<li key={todo.id}>
						<input
							type="checkbox"
							checked={todo.isCompleted}
							onChange={() => updateHandler(todo)}
						/>
						<span>{todo.title}</span>
						<button onClick={() => removeHandler(todo.id)}>
							Remove
						</button>
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
