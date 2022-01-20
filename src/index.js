
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"


// my first component
function App () {

	return (

		<div className="app">

			<header className="app-header">

				<h1>My Amazing To Do List App</h1>

				<p>The most simple and amazing todo-list React app.</p>

			</header>

		</div>	

		);

}

ReactDOM.render(<App></App>, document.getElementById("root"));