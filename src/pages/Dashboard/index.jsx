import React, { useState } from 'react'
// import { Card } from 'antd';
import Comp from './component/Comp';
import { importAll } from '../../util';
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import styles from './index.module.css';

const compContainerObj = importAll(
  require.context('../../component/dashboardCards', false, /\.jsx$/)
);
const compArr = Object.keys(compContainerObj).map(key => compContainerObj[key]);
const tempObj = {};
compArr.forEach(el => {
  if (tempObj[el.group]) {
    tempObj[el.group].push(el);
  } else {
    tempObj[el.group] = [el];
  }
})
console.log(compContainerObj, tempObj);
const ResponsiveGridLayout = WidthProvider(Responsive);

const deepChange = (arr = [], target) => {
  const { x, y, h, w } = target;
  let t;
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i].x === x || arr[i].x === x + w) && arr[i].y === y) {
      // eslint-disable-next-line no-param-reassign
      arr[i].y += h;
      t = arr[i];
      break;
    }
  }
  if (t) {
    deepChange(
      arr.filter(i => i.i !== t.i),
      t
    );
  }
  return arr;
};
const style = { border: '1px solid', backgroundColor: '#ccc' };

export default () => {
  const [layouts, setLayouts] = useState({
    xs: [
      { i: 'a', x: 0, y: 0, w: 2, y: 2 }
    ]
  });
  const [dragItem, setDragItem] = useState({});
  const onDrop = elemParams => {
    const newItem = {
      ...elemParams,
      i: DragEvent.fileName,
      component: dragItem.component
    }
    const newXs = deepChange(layouts.xs, newItem);
    setLayouts({ xs: [...newXs, newItem] })
  }
  const onLayoutChange = layout => {
    const newLayout = layout.map(el => ({ ...el, component: el.i === dragItem.title ? dragItem.component : null }))
    setLayouts({ xs: newLayout.filter(e => e.i !== '__dropping-elem__') });
  }
  const onRemoveItem = i => {
    const newLayout = layouts.xs.filter(el => el.i !== i.i);
    setLayouts({ xs: newLayout });
  }
  const rowHeight = 100;
  const layoutsProps = {
    className: styles.dashboard_left,
    isDroppable: true,
    breakpoints: { xs: 480 },
    cols: { xs: 4 },
    layouts,
    onDrop,
    rowHeight,
    onLayoutChange,
    style: { height: 100 }
  }
  return (
    <div
      style={{
        height: '100%',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <ResponsiveGridLayout {...layoutsProps} >
        {
          layouts.xs.map(i => {
            const compKey = i.i;
            const Component = compContainerObj[compKey] && compContainerObj[compKey].component;
            return (
              <div key={compKey} style={style}>
                {Component ? <Component height={rowHeight * i.h} /> : compKey}
                <span className={style.remove} onClick={() => onRemoveItem(i)}>x</span>
              </div>
            )
          })
        }
      </ResponsiveGridLayout>
      <div className={styles.rightWrap}>
        <div style={{ overflow: 'hidden' }}>
          {Object.keys(tempObj).map(el => (
            <div key={el} className={styles.cardSectionWrap}>
              <p className={styles.cardSectionTitle}>{el}</p>
              <div className={styles.cardWrapRight}>
                {
                  tempObj[el].filter(e => !layouts.xs.map(i => i.i)
                    // .includes(e.fileName)
                    .map((item, idx) => (
                      <Comp
                        setDragItem={setDragItem}
                        title={item.title}
                        dragItem={item}
                        img={item.img}
                        key={`${el}_${item.title}_${idx.toString()}`}
                      />
                    )))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
