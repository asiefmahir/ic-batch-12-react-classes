import { useReducer, useState } from "react";

// import { ourReducer } from "./reducers/ourReducer";
//
const ourReducer = (state, action) => {
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

const App2 = () => {
	console.log("App2 is being re-rendered");

	// const [counter, setCounter] = useState(10)
	const [counter, dispatch] = useReducer(ourReducer, 10);
	// useReducer, useState -> interchangeable
	// dispatch("argument") -> ourReducer(state, action) // action === "argument"
	// counter = 11
	// reduce ->
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 1 })
				}
			>
				Increase By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 5 })
				}
			>
				Increase By 5
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 50 })
				}
			>
				Increase By 50
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 3 })
				}
			>
				Increase By 3
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 7 })
				}
			>
				Increase By 7
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 88 })
				}
			>
				Increase By 88
			</button>
			<button
				onClick={() =>
					dispatch({ type: "increase_counter", payload: 100 })
				}
			>
				Increase By 100
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 1 })
				}
			>
				Decrease By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "decrease_counter", payload: 6 })
				}
			>
				Decrease By 6
			</button>
			<button
				onClick={() =>
					dispatch({ type: "multiply_counter", payload: 5 })
				}
			>
				Multiply by 5
			</button>
			<button onClick={() => dispatch({ type: "divide_counter" })}>
				Divide Counter
			</button>
		</div>
	);
};

export default App2;
