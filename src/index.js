
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import TasksList from  "./components/TasksList"


// my first component
function App () {

	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing To Do List App</h1>
				<p>The most simple and amazing todo-list React app.</p>
		  		<TasksList/>
			</header>
		</div>	
		);

}

ReactDOM.render(<App></App>, document.getElementById("root"));