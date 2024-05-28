import styles from './Task.module.css'

import {Trash} from "phosphor-react";

import {ChangeEvent} from "react";

interface TaskProps {
  id: string;
  content: string;
  isChecked: boolean;
  onChangeStatusTask: (id: string, finished: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({id, content, isChecked, onChangeStatusTask, onDeleteTask}: TaskProps) {

  function handleChangeStatusTask(event: ChangeEvent<HTMLInputElement>) {
      onChangeStatusTask(id, event.target.checked)
  }
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.content}>
      <label htmlFor={id}>
        <input
          id={id}
          checked={isChecked}
          onChange={handleChangeStatusTask}
          type="checkbox"
        />
        <p>{content}</p>
      </label>
      <button
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}