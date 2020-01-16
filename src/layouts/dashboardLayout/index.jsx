import React from 'react';
import styles from './index.less';

export default props => {
  const { children } = props;
  return <div className={styles.dashboardLayout}>{children}</div>
}