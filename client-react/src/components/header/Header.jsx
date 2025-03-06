import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Logo</h1>
			<nav>
				<ul className={styles.list}>
					<li>
						<a href='#' className={styles.link}>
							Главная
						</a>
					</li>
					<li>
						<a href='#' className={styles.link}>
							Задачи
						</a>
					</li>
				</ul>
			</nav>
			<button className={styles.button}>Создать задачу</button>
		</header>
	)
}
