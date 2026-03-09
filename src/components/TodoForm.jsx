import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const TodoForm = () => {
	// component has 2 layers
	// 1) presentation -> html, css
	// 2) data layer
	//      i) props
	//      ii) state

	const { todoStates, submitHandler, dispatch } = useContext(TodoContext);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={todoStates.todoTitle}
				// 2 way data binding
				onChange={(event) =>
					dispatch({
						type: "CHANGE_INPUT_VALUE",
						payload: event.target.value,
					})
				}
				// todoTitle = event.target.value
			/>
			{/* {props.children} */}
			<button type="submit">
				{todoStates.editMode === true ? "Update Todo" : "Create Todo"}
			</button>
		</form>
	);
};

export default TodoForm;
