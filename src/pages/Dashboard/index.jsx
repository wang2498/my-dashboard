import React, { useState } from 'react'
import { Card } from 'antd';
// import _ from 'lodash';
import Comp from './component/Comp'
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import styles from './index.module.css';
const ResponsiveGridLayout = WidthProvider(Responsive);

const style = { border: '1px solid', backgroundColor: '#ccc' }
export default () => {
  const [layouts, setLayouts] = useState([
    { i: '1', x: 0, y: 0, w: 3, h: 2, static: true },
    { i: '2', x: 3, y: 4, w: 3, h: 4, },
    { i: '3', x: 6, y: 5, w: 3, h: 2 },
    { i: '4', x: 9, y: 5, w: 3, h: 2 }
  ])
  const [dragTitle, setDragTitle] = useState('');
  const onDrop = (elemParams, a, b) => {
    const newItem = { ...elemParams, i: dragTitle };
    console.log(newItem);
    setLayouts([...layouts, newItem])
  };
  return (
    <div style={{
      height: '100%', overflow: 'hidden', display: 'flex'
    }}>

      <ResponsiveGridLayout
        className={styles.dashboard_left}
        layouts={layouts}
        isDroppable={true}
        onDrop={onDrop}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {layouts.map(i => (
          <div key={i.i} style={style}>
            {i.i}
          </div>
        ))}
        {/* <div style={style} key="1">1</div>
        <div style={style} key="2">2</div>
        <div style={style} key="3">3</div> */}
      </ResponsiveGridLayout>

      <div style={{ border: '1px solid', width: 300, float: "right", overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden' }}><span style={{ float: 'right' }}>保存</span></div>
        <Card title='星图'>
          <div style={{ display: 'flex' }}>
            <Comp setDragTitle={setDragTitle} title='资金大盘' />
            <Comp setDragTitle={setDragTitle} title='资金流动' />
          </div>
        </Card>
        <Card title='资产负债'>
          <div style={{ display: 'flex' }}>
            <Comp setDragTitle={setDragTitle} title='贷款支付' />
            <Comp setDragTitle={setDragTitle} title='流动性资金' />
          </div>
        </Card>
        <Card title='网上冲浪'>
          <div style={{ display: 'flex' }}>
            <Comp setDragTitle={setDragTitle} title='微博' />
            <Comp setDragTitle={setDragTitle} title='微信' />
          </div>
        </Card>
      </div>
    </div >
  )
}