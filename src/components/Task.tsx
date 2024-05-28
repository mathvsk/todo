import styles from './Task.module.css'
import {Trash} from "phosphor-react";

export function Task() {
  return (
    <div className={styles.content}>
        <input type="checkbox" id="1"/>
      <label htmlFor="1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum, odio nec vehicula ultricies, nunc ex malesuada felis, nec
          tincidunt justo metus ac eros. Integer ut nunc eget elit auctor
          molestie. Integer nec purus auctor, ultricies velit eget, lobortis
          mauris. Integer nec purus auctor, ultricies velit eget, lobortis
          mauris.
        </p>
      </label>
      <button>
        <Trash size={18} />
      </button>
    </div>
  )
}