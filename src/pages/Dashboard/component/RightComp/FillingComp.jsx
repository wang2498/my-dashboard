import React from 'react';
import styles from './index.less';

export default ({ dragItem }) => (
  <div className={styles.item_wrap}>
    <div className={styles.rightItemTitle}>{dragItem.title}</div>
    <div className={styles.droppable_element}></div>
  </div>
)