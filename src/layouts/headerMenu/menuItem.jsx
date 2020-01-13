import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Item } = Menu;
export default ({ info }) => {
  return (
    <Item key={info.key} >
      <Link to={info.path}>{info.title}</Link>
    </Item>
  )
}