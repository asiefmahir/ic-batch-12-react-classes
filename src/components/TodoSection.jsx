import FilterSection from "./FilterSection";
import TodoList from "./TodoList";

const TodoSection = () => {
	return (
		<div className="todo-section">
			<FilterSection />
			<TodoList />
		</div>
	);
};

export default TodoSection;
