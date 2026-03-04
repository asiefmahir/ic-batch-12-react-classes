const TodoList = (props) => {
	const {
		filterTerm,
		setTodoTitle,
		todoList,
		setTodoList,
		setEditMode,
		setEditableTodo,
	} = props;

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
