import React from 'react'
import { Layout, Icon } from 'antd';
import RightContent from './rightCentent';
import BaseMenu from './headerMenu/baseMenu';
import styles from './header.module.css';
const { Header } = Layout;
export default () => {

  return (
    <Header className={styles.head}>
      <div className={styles.left}>
        <Icon type="home" style={{ marginRight: 10 }} />
        <span>my_Dashboard</span>
      </div>
      <div className={styles.headerContent}>
        <BaseMenu />
      </div>
      <div className={styles.right}>
        <RightContent />
      </div>
    </Header>
  )
}