import React from "react";
import Task from "./Task";
import styles from "./task.module.css";

const TaskCategory = ({ category, handleAttatchment }) => {
  return (
    <div className={styles.task_category}>
      <div className={styles.heading}>
        <div className={styles.category_name}>
          <span className={styles.colorbox} style={{ background: category?.colorLabel }}></span>
          <p>{category.category}</p>
        </div>
        <p className={styles.count}>0</p>
      </div>
      <div className={styles.task_container}>
        {category?.tasks.map((task) => (
          <Task key={task._id} task={task} handleAttatchment={handleAttatchment} />
        ))}
      </div>
    </div>
  );
};

export default TaskCategory;
