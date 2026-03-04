const FilterSection = (props) => {
	const { filterTerm, setFilterTerm } = props;
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
