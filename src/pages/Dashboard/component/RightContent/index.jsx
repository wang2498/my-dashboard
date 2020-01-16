import React from 'react';
import RightComp from '../RightComp';
import FillingComp from '../RightComp/FillingComp';
import styles from './index.less';
export default ({ tempObj, setDragItem, layouts }) => {
  const xsI = layouts.xs.map(i => i.i);
  return (
    <div className={styles.rightWrap}>
      <div className={styles.rightTitle}>Dashboard资产</div>
      {Object.keys(tempObj).map(el => (
        <div key={el} className={styles.cardSectionWrap}>
          <div className={styles.cardSectionTitle}>{el}</div>
          <div className={styles.cardWrapRight}>
            {tempObj[el].map((item, idx) => {
              const defaultProps = {
                setDragItem,
                dragItem: item,
                key: `${el}_${item.title}_${idx.toString()}`
              };
              if (xsI.includes(item.fileName)) {
                return <FillingComp {...defaultProps} />;
              }
              return <RightComp {...defaultProps} />;
            })}
          </div>
        </div>
      ))}
    </div>
  )
}