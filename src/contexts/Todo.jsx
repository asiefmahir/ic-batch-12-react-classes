/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
	const { children } = props;
	const [todoTitle, setTodoTitle] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableTodo, setEditableTodo] = useState(null);
	const [filterTerm, setFilterTerm] = useState("all");

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
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
