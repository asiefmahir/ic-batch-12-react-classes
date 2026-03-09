import { useContext } from "react";

import { TodoContext } from "../contexts/Todo";

const FilterSection = () => {
	const { todoStates, dispatch } = useContext(TodoContext);
	return (
		<select
			value={todoStates.filterTerm}
			onChange={(event) =>
				dispatch({
					type: "CHANGE_FILTER_TERM",
					payload: event.target.value,
				})
			}
		>
			<option value="all">All</option>
			<option value="completed">Completed</option>
			<option value="uncompleted">UnCompleted</option>
		</select>
	);
};
export default FilterSection;

// ->  reduce method
