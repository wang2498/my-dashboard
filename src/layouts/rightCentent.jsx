import React from 'react'
import { Avatar, Icon, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.module.css';
const { Item } = Menu;
export default () => {
  const menu = (
    <Menu>
      <Item><Link to='/menuConfigration'>菜单配置</Link></Item>

    </Menu>
  )
  return (
    <div className={styles.rightContent}>
      <Dropdown overlay={menu}>
        <Icon type="setting" theme="filled" />
      </Dropdown>,
    <span style={{ color: '#fff', marginRight: 10 }}>
        demo创作者
      </span>
      <Avatar size={40} icon="user" />
    </div>
  )
}

