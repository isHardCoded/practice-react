import styles from './CreateTask.module.css'
import React from 'react'

export const CreateTask = () => {
	const [task, setTask] = React.useState({
		name: '',
		desc: '',
		status: 0,
	})

	const handleChange = e => {
		const { name, value } = e.target
		setTask(prevTask => ({
			...prevTask,
			[name]: value,
		}))
	}

	const handleAddTask = async e => {
		e.preventDefault()

		try {
			const response = await fetch('http://localhost:5000/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(task),
			})

			if (!response.ok) {
				throw new Error('Ошибка при добавлении задачи')
			}

			const newTask = await response.json()
			console.log(newTask)

			setTask({ name: '', desc: '', status: 0 })
		} catch (error) {
			console.error('Ошибка: ', error)
		}
	}

	return (
		<form onSubmit={handleAddTask} className={styles.form}>
			<div>
				<label htmlFor='name'>Название задачи:</label>
				<input
					type='text'
					id='name'
					name='name'
					value={task.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='desc'>Описание задачи</label>
				<input
					type='text'
					id='desc'
					name='desc'
					value={task.desc}
					onChange={handleChange}
					required
				/>
			</div>
			<button type='submit'>Добавить задачу</button>
		</form>
	)
}
