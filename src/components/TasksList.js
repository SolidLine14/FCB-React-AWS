
import Tasks from "./Tasks"
import { useState } from "react"

function TasksList () {
	const [taskItemList, setTaskItemList] = useState([
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Zuitt Coding Bootcamp on Youtube."
	])
	const [taskValue, setTaskValue] = useState("")
	const inputChangeHandler = (e) => {
		console.log(taskValue)
		setTaskValue(e.target.value)
	}
	const addTaskHandler = (e) => {
			setTaskItemList(e.target.value.trim() != "" ? [e.target.value, ...taskItemList] : taskItemList)
			setTaskValue("")
	}
	return (
		<div>
			<input 
			className="task-input"  
			placeholder="Create new Task" 
			value={taskValue}
			onChange={inputChangeHandler} 
			onBlur={addTaskHandler}
			/>
			<ul>
				{
					taskItemList.map((task, index) => {
						return <Tasks key={index} taskName={task} />
					})
				}
			</ul>
		</div>
	)
}

export default TasksList