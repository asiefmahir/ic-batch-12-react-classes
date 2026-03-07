export const ourReducer = (state, action) => {
	// action === { type: "increase_counter", payload: 1 }
	console.log(state, "state");
	console.log(action, "action");
	// if (action === "increase_counter") {
	// 	return state + 1;
	// 	// 10 + 1 = 11
	// } else if (action === "decrease_counter") {
	// 	return state - 1;
	// } else if (action === "increase_counter_by_5") {

	// }

	switch (action.type) {
		case "increase_counter": {
			return state + action.payload;
		}
		case "decrease_counter": {
			return state - action.payload;
		}

		case "multiply_counter": {
			return state * action.payload;
		}
		case "divide_counter": {
			return Math.ceil(state / 2);
		}
		default: {
			return state;
		}
	}
};
