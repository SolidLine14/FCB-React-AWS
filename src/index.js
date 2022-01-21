
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function TasksList() {
  return (
    <ul>
      <li className="tasks-item">Follow Edukasyon.ph on Facebook.</li>
      <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook.</li>
      <li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook.</li>
    </ul>
  );
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