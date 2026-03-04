import { useState } from "react";

import FilterSection from "./FilterSection";
import TodoList from "./TodoList";

const TodoSection = (props) => {
	const {
		setTodoTitle,
		todoList,
		setTodoList,
		setEditMode,
		setEditableTodo,
	} = props;
	const [filterTerm, setFilterTerm] = useState("all");
	return (
		<div className="todo-section">
			<FilterSection
				filterTerm={filterTerm}
				setFilterTerm={setFilterTerm}
			/>
			<TodoList
				filterTerm={filterTerm}
				setTodoTitle={setTodoTitle}
				todoList={todoList}
				setTodoList={setTodoList}
				setEditMode={setEditMode}
				setEditableTodo={setEditableTodo}
			/>
		</div>
	);
};

export default TodoSection;
