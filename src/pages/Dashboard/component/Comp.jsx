import React from 'react';
import styles from './Comp.module.css';
const defaultImg = '';
export default ({ title, setDragItem, dragItem, img = defaultImg }) => {
  const onDragStart = e => {
    e.dataTransfer.setData("text/plain", "")
    setDragItem(dragItem);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      {title}
      <div
        draggable={true}
        className={styles.droppable_element}
        unselectable="on"
        onDragStart={onDragStart}
      >
        <img src={img} alt={title} width='100%' />
      </div>
    </div>
  )
}