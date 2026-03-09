/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todo";

export const TodoContext = createContext();

const initState = {
	todoTitle: "",
	todoList: [],
	editMode: false,
	editableTodo: null,
	filterTerm: "all",
};

// fetch function
// api call kore kivabe data fetch korben
// asynchronous js
const getAllPost = async () => {
	// network latency
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5",
	);
	const data = await res.json();
	console.log(data);
};

const TodoContextProvider = (props) => {
	const { children } = props;

	// ekmatro state
	const [todoStates, dispatch] = useReducer(todoReducer, initState);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!todoStates.todoTitle.trim()) {
			return alert(`Please enter a valid todo Title`);
		}

		todoStates.editMode === true
			? dispatch({ type: "UPDATE_TODO_TITLE" })
			: dispatch({ type: "CREATE_TODO" });
	};

	const filteredTodoList = todoStates.todoList.filter((todo) => {
		if (todoStates.filterTerm === "completed") {
			return todo.isCompleted === true;
		} else if (todoStates.filterTerm === "uncompleted") {
			return todo.isCompleted === false;
		} else {
			return true;
		}
	});

	return (
		<TodoContext.Provider
			value={{
				todoStates,
				submitHandler,
				filteredTodoList,
				dispatch,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
