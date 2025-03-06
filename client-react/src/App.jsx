import { CreateTask } from './components/create-task/CreateTask'
import { Header } from './components/header/Header'
import { TaskList } from './components/task-list/TaskList'

export const App = () => {
	return (
		<>
			<Header />
			<TaskList />
			<CreateTask />
		</>
	)
}
