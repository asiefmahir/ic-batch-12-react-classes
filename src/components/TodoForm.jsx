const TodoForm = (props) => {
	// component has 2 layers
	// 1) presentation -> html, css
	// 2) data layer
	//      i) props
	//      ii) state

	const {
		editMode,
		setTodoList,
		todoList,
		editableTodo,
		setEditMode,
		setEditableTodo,
		todoTitle,
		setTodoTitle,
	} = props;
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

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={todoTitle}
				// 2 way data binding
				onChange={(event) => setTodoTitle(event.target.value)}
				// todoTitle = event.target.value
			/>
			<button type="submit">
				{editMode === true ? "Update Todo" : "Create Todo"}
			</button>
		</form>
	);
};

export default TodoForm;
