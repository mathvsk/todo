import './global.css'
import styles from './App.module.css'

import {PlusCircle} from "phosphor-react";

import {ChangeEvent, FormEvent, useEffect, useState} from "react";

import {Header} from "./components/Header.tsx";
import {Task} from "./components/Task.tsx";
import {Empty} from "./components/Empty.tsx";

interface ITask {
  id: string;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState('')

  const completedCount = tasks.filter(task => task.isChecked).length;
  const totalTasks = tasks.length;

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      updateTasks(JSON.parse(storedTasks));
    }
  }, []);

  function updateTasks(updatedTasks: ITask[]) {
    console.log(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }
  function changeStatusTask(id: string, isChecked: boolean) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isChecked };
      }
      return task;
    });

    updateTasks(updatedTasks);
  }
  function deleteTask(id: string) {
    // if (!confirm('Deseja mesmo apagar essa tarefa?')) {
    //   return
    // }

    const updatedTasks = tasks.filter(task => task.id !== id);
    updateTasks(updatedTasks);
  }
  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    if (!newTask.trim()) {
      return
    }

    const task:ITask = {
      id: new Date().getTime().toString(),
      isChecked: false,
      content: newTask,
    }

    updateTasks([...tasks, task])
    setNewTask('')
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <Header />
      <main>
        <form className={styles.form} onSubmit={handleCreateTask}>
          <input
            value={newTask}
            onChange={handleNewTaskChange}
            type="text" placeholder="Adicione uma nova tarefa"/>
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </form>

        <div className={styles.todoWrapper}>
          <header>
            <div>
              Tarefas criadas <span>{totalTasks}</span>
            </div>
            <div>
              Concluídas
              <span>
                {totalTasks > 0 ? (
                  `${completedCount} de ${totalTasks}`
                ) : (
                  0
                )}
              </span>
            </div>
          </header>

          <div className={styles.todoList}>
            {!totalTasks ? (
              <Empty />
            ) : (
              tasks.map((task) => (
                <Task
                  onChangeStatusTask={changeStatusTask}
                  onDeleteTask={deleteTask}
                  key={task.id}
                  {...task}  />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  )
}
