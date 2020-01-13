import React from 'react';
import styles from '../index.module.css';
export default ({ title, setDragTitle }) => {
  const onDragStart = e => {
    e.dataTransfer.setData("text/plain", "")
    setDragTitle(title);
  }
  return (
    <div
      draggable={true}
      className={styles.droppable_element}
      unselectable="on"
      onDragStart={onDragStart}
    >
      {title}
    </div>
  )
}