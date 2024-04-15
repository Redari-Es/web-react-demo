import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

const TaskList=(props)=>{
	const {tasks,deleteTask,toggleTask,enterEditMode}=props
	return(
		<ul className={styles.tasks}>
		{tasks.sort((a,b)=>b.id-a.id).map(task=>(
			<TaskItem
			key={task.id}
			task={task}
			deleteTask={deleteTask}
			toggleTask={toggleTask}
			enterEditMode={enterEditMode}
				/>
		))
		}
		</ul>
	)
}

export default TaskList
