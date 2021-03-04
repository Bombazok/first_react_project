import React from "react";
import ReactDOM from "react-dom";
import App from "./script/App";
import AppClass from "./script/AppClass";

ReactDOM.render(
	<React.StrictMode>
		<AppClass />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
