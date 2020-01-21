/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { G2 } from 'bizcharts';
import { importAll, deepChange } from '../../util';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Header from './component/Header';
import RightContent from './component/RightContent';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import styles from './index.less';

const { Global } = G2;
Global.setTheme('dark');
const ResponsiveGridLayout = WidthProvider(Responsive);
const compContainerObj = importAll(
  require.context('../../component/dashboardCards', false, /\.jsx$/)
);
const compArr = Object.keys(compContainerObj).map(key => compContainerObj[key]);
const tempObj = {};
compArr.forEach(el => {
  if (!el.group) {
    el.group = '其他';
  }
  if (tempObj[el.group]) {
    tempObj[el.group].push(el);
  } else {
    tempObj[el.group] = [el];
  }
})
const staticAll = (data, status) => data.map(i => ({ ...i, static: status }))
const style = { backgroundColor: '#ccc' };
console.log(tempObj);
export default () => {
  const [layouts, setLayouts] = useState({ xs: [] });
  const [dragItem, setDragItem] = useState({});
  const [status, setStatus] = useState('edit');
  useEffect(() => {
    if (status === 'preview') {
      setLayouts({ xs: staticAll(layouts.xs, true) });
    } else {
      setLayouts({ xs: staticAll(layouts.xs, false) });
    }
  }, [status]);
  const onDrop = elemParams => {
    const newItem = {
      ...elemParams,
      i: dragItem.fileName,
      component: dragItem.component
    }
    console.log(newItem);
    const newXs = deepChange(layouts.xs, newItem);
    setLayouts({ xs: [...newXs, newItem] })
  }
  console.log(layouts);
  const onLayoutChange = layout => {
    const newLayout = layout.map(el => ({ ...el, component: el.i === dragItem.title ? dragItem.component : null }))
    setLayouts({ xs: newLayout.filter(e => e.i !== '__dropping-elem__') });
  }
  const onRemoveItem = i => {
    const newLayout = layouts.xs.filter(el => el.i !== i.i);
    setLayouts({ xs: newLayout });
  }
  const handleSave = () => {

  }
  const rowHeight = 100;
  const marginTop = 5;
  const layoutsProps = {
    className: styles.dashboard_left,
    isDroppable: true,
    breakpoints: { xs: 480 },
    cols: { xs: 4 },
    style: { height: 'calc(100vh 64px)' },
    layouts,
    onDrop,
    rowHeight,
    onLayoutChange,
  }
  const HeaderProps = {
    status,
    setStatus,
    handleSave
  }
  return (
    <div className={styles.dashboard_wrap}>
      <div style={{ flex: 1 }}>
        <Header {...HeaderProps} />
        <ResponsiveGridLayout {...layoutsProps} >
          {layouts.xs.map(i => {
            const compKey = i.i;
            const Component = compContainerObj[compKey] && compContainerObj[compKey].component;
            return (
              <div key={compKey} style={style}>
                {Component ? <Component height={rowHeight * i.h + marginTop * (i.h - 1)} /> : compKey}
                {status === 'edit' && <span className={styles.remove} onClick={() => onRemoveItem(i)}>x</span>}
              </div>
            )
          })}
        </ResponsiveGridLayout>
      </div>
      {status === 'edit' && (<RightContent
        tempObj={tempObj}
        layouts={layouts}
        setDragItem={setDragItem}
      />)}
    </div >
  )
}
