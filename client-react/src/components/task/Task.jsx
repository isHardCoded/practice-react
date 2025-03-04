import styles from "./Task.module.css";

export const Task = ({ name, desc }) => {
  return (
    <div className={styles.task}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
};
