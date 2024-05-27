import './global.css'
import styles from './App.module.css'

import {Header} from "./components/Header.tsx";
import {PlusCircle} from "phosphor-react";

export function App() {
  return (
    <>
      <Header />
      <main>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </form>
      </main>
    </>
  )
}
