import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContextProvider from "./contexts/Todo.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</StrictMode>,
);

{
	/* <App /> */
}

// react dom (virtual dom)-> React Code (App) -> DOM

// TREE DATA Structures

// root -> entry point ->
// 'use strict'
