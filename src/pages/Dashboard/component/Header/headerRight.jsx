import React from 'react';
import { Avatar, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import styles from './index.less';

const { Item } = Menu;
const IconStyle = {
  fontSize: 16,
  marginRight: 15,
  position: 'relative',
  color: "#fff",
  top: 2
}
const arr = [
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-blond-long-hair-business-lady.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-blond-curly-hair-business-lady.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-man-in-white-shirt.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-indian-lady.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-brown-long-hair-lady-with-red-glasses.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-man-in-striped-shirt.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-man-with-beard-in-suit.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-man-in-yellow-striped-sweater.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-man-in-green-sweater.png',
  'http://d.lanrentuku.com/down/png/2001/people_in_bubbles/icons8-red-short-hair-lady-in-yellow-shirt.png'
]
const menu = (
  <Menu>
    <Item><Link to='/dashboardEdit'>配置首页</Link></Item>
  </Menu>
)
const HeaderRight = () => {
  return (
    <div className={styles.right}>
      <Dropdown
        placement='bottomLeft'
        overlay={menu}
      >
        <Icon type='setting' theme='filled' style={IconStyle} />
      </Dropdown>
      <Avatar size='small' src={arr[Math.floor(Math.random() * 10)]} alt='avatar' />
    </div>
  )
}
export default HeaderRight;