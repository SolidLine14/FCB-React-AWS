
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Task (props) {
	return (
		<li className="tasks-item">{props.taskName}</li>
	)
}


function TasksList () {

	const taskItemList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Zuitt Coding Bootcamp on Youtube."
	]
	return (
		<div>
			<input className="task-input" />
			<ul>
				{
					taskItemList.map((task, index) => {
						return <Task key={index} taskName={task} />
					})
				}
			</ul>
		</div>
	)
}


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