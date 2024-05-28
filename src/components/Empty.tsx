import styles from './Empty.module.css'
import {ClipboardText} from "phosphor-react";

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={60} />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}