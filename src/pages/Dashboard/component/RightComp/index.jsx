import React from 'react';
import styles from './index.less';

export default ({ setDragItem, dragItem, dragItem: { img } }) => {
  if (!img) img = '';
  const onDragStart = e => {
    e.dataTransfer.setData('text/plain', '');
    setDragItem(dragItem);
  }
  const title = dragItem.title || '未命名';
  return (
    <div className={styles.item_wrap}>
      <div className={styles.rightItemTitle}>{title}</div>
      <div
        draggable
        className={styles.droppable_element}
        unselectable="on"
        onDragStart={onDragStart}
      >
        <img src={img} alt={title} width="100%" />
      </div>
    </div>
  )
}