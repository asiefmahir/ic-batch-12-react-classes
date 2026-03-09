export const todoReducer = (state, action) => {
	// pure function -> reducer function
	// dispatch({type: "CHANGE_INPUT_VALUE", payload: event.target.value})
	switch (action.type) {
		case "CHANGE_INPUT_VALUE": {
			return {
				...state,
				todoTitle: action.payload,
			};
		}
		case "CREATE_TODO": {
			const newTodo = {
				id: Date.now() + "",
				title: state.todoTitle,
				isCompleted: false,
			};

			return {
				...state,
				todoList: [newTodo, ...state.todoList],
				todoTitle: "",
			};
		}
		case "REMOVE_TODO": {
			// dispatch({type: "REMOVE_TODO", payload: todo.id})
			const newTodoList = state.todoList.filter(
				(item) => item.id !== action.payload,
			);

			return {
				...state,
				todoList: newTodoList,
			};
		}
		case "EDIT_TODO": {
			// dispatch({type: "EDIT_TODO", payload: todo})
			return {
				...state,
				editMode: true,
				editableTodo: action.payload,
				todoTitle: action.payload.title,
			};
		}
		case "UPDATE_TODO_TITLE": {
			// dispatch({type: "UPDATE_TODO_TITLE"})
			const updatedTodoList = state.todoList.map((item) => {
				if (item.id === state.editableTodo.id) {
					// only 1 bar
					return { ...item, title: state.todoTitle };
				}

				return { ...item }; // !== item
			});
			return {
				...state,
				todoList: updatedTodoList,
				editMode: false,
				editableTodo: null,
				todoTitle: "",
			};
		}
		case "UPDATE_TODO_COMPLETE_STATUS": {
			// dispatch({type: "UPDATE_TODO_COMPLETE_STATUS", payload: todo.id})
			const updatedTodoList = state.todoList.map((todo) => {
				if (todo.id === action.payload) {
					// 1 bar e hobe
					// todo.isCompleted = !todo.isCompleted
					return { ...todo, isCompleted: !todo.isCompleted };
				}
				return { ...todo };
			});

			return {
				...state,
				todoList: updatedTodoList,
			};
		}
		case "CHANGE_FILTER_TERM": {
			// dispatch({type: "CHANGE_FILTER_TERM", payload: "uncompleted"})
			return {
				...state,
				filterTerm: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
