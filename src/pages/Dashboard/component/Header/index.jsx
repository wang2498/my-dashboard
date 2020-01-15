import React from 'react';
import { Layout, Icon } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.module.css';

const { Header } = Layout;

export default () => (
  <div className={styles.indexHeadWrap}>
    <Header className={styles.head}>
      <div className={styles.left}>
        <div className={styles.logo} key="logo" id="logo">
          <Link to="/">
            <Icon type="dashboard" />
            <h1 className={styles.headName}>My Dashboard</h1>
          </Link>
        </div>
      </div>
    </Header>
  </div>
)