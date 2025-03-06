import styles from './TaskList.module.css'
import { Task } from '../task/Task'
import React from 'react'

export const TaskList = () => {
	const [tasks, setTasks] = React.useState([])

	const fetchTasks = async () => {
		const response = await fetch('http://localhost:5000/tasks')
		const data = await response.json()

		setTasks(data)
	}

	React.useEffect(() => {
		fetchTasks()
	}, [])

	const backLogTasks = tasks.filter(task => task.status == 0)
	const processTasks = tasks.filter(task => task.status == 1)
	const doneTasks = tasks.filter(task => task.status == 2)

	return (
		<div className={styles.list}>
			<div className={styles.backlog}>
				{backLogTasks.map(task => (
					<Task name={task.name} desc={task.desc} />
				))}
			</div>
			<div className={styles.process}>
				{processTasks.map(task => (
					<Task name={task.name} desc={task.desc} />
				))}
			</div>
			<div className={styles.done}>
				{doneTasks.map(task => (
					<Task name={task.name} desc={task.desc} />
				))}
			</div>
		</div>
	)
}
