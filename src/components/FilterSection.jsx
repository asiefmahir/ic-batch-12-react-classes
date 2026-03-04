import { useContext } from "react";

import { TodoContext } from "../contexts/Todo";

const FilterSection = () => {
	const { filterTerm, setFilterTerm } = useContext(TodoContext);
	return (
		<select
			value={filterTerm}
			onChange={(event) => setFilterTerm(event.target.value)}
		>
			<option value="all">All</option>
			<option value="completed">Completed</option>
			<option value="uncompleted">UnCompleted</option>
		</select>
	);
};
export default FilterSection;

// ->  reduce method
