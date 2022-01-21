
import Tasks from "./Tasks"

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
						return <Tasks key={index} taskName={task} />
					})
				}
			</ul>
		</div>
	)
}

export default TasksList