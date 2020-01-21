import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.less';
import menuMock from './menuMock.js';

const { Item } = Menu;

const getMenu = arr => arr.map(i => (
  <Item key={i.key}><Link to={i.path}><Icon type='smile' />{i.title}</Link></Item>
))
const HeaderMenu = () => {
  return (
    <div className={styles.headMenu}>
      <Menu
        theme='dark'
        mode='horizontal'
      >
        {getMenu(menuMock)}
      </Menu>
    </div>
  )
}
export default HeaderMenu;