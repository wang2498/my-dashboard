import React, { useState } from 'react'
import { Menu } from 'antd'
import menuItem from './menuItem'
import menuList from './utils/menuList'
export default () => {
  const [menuData, setMenuData] = useState(menuList);
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        {menuData.map(info => (
          menuItem({ info })
        ))}
      </Menu>
    </div>

  )
}