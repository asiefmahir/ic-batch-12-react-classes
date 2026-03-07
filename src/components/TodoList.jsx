import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoList = () => {
	const { filteredTodoList, updateHandler, removeHandler, editHandler } =
		useContext(TodoContext);

	return (
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
					<button onClick={() => editHandler(todo)}>Edit</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
