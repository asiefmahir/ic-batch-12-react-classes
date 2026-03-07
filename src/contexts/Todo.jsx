/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const TodoContext = createContext();

// data layer manage
// data layer access
// useReducer ->

// {

// }
const TodoContextProvider = (props) => {
	const { children } = props;
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);
	const [filterTerm, setFilterTerm] = useState("all");

	const submitHandler = (event) => {
		event.preventDefault();

		if (!todoTitle.trim()) {
			return alert(`Please enter a valid todo Title`);
		}

		editMode === true ? updateTitleHandler() : createHandler();
	};

	const createHandler = () => {
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

	const updateTitleHandler = () => {
		const updatedTodoList = todoList.map((item) => {
			if (item.id === editableTodo.id) {
				// only 1 bar
				return { ...item, title: todoTitle };
			}

			return { ...item };
		});

		setTodoList(updatedTodoList);
		setEditMode(false);
		setEditableTodo(null);
		setTodoTitle("");
		// todoList = updatedTodoList
	};

	const filteredTodoList = todoList.filter((todo) => {
		if (filterTerm === "completed") {
			return todo.isCompleted === true;
		} else if (filterTerm === "uncompleted") {
			return todo.isCompleted === false;
		} else {
			return true;
		}
	});

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

	const editHandler = (todo) => {
		setEditMode(true);
		setEditableTodo(todo);
		setTodoTitle(todo.title);
	};

	return (
		<TodoContext.Provider
			value={{
				todoTitle,
				setTodoTitle,
				todoList,
				setTodoList,
				editMode,
				setEditMode,
				editableTodo,
				setEditableTodo,
				filterTerm,
				setFilterTerm,
				submitHandler,
				editHandler,
				filteredTodoList,
				updateHandler,
				removeHandler,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
