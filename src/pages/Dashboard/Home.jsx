import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Spin } from 'antd';
import { importAll } from '../../util';
import { getLayout } from '../../service/dashboard'
import HomeHeader from './component/Header/HomeHeader'
import styles from './index.less'
const compContainerObj = importAll(require.context('../../component/dashboardCards', false, /\.jsx$/));
const ResponsiveGridLayout = WidthProvider(Responsive);
export default () => {
  const [layouts, setLayouts] = useState({ xs: [] });
  const [loading, setLoading] = useState(false);
  const getDashboardLayout = async () => {
    setLoading(true);
    const res = await getLayout();
    console.log(res);
    setLayouts({ xs: res.xs.map(i => ({ ...i, static: true })) } || { xs: [] });
    setLoading(false);
  }
  useEffect(() => {
    getDashboardLayout()
  }, [])
  const rowHeight = 50;
  const marginTop = 5;
  const layoutsProps = {
    className: styles.dashboard_left,
    isDroppable: true,
    breakpoints: { xs: 480 },
    cols: { xs: 4 },
    style: { height: 'calc(100vh - 64px)' },
    margin: [marginTop, 5],
    containerPadding: [10, 10],
    layouts,
    rowHeight
  }
  return (
    <div className={styles.dashboard_home}>
      <HomeHeader />
      <Spin spinning={loading} >
        <ResponsiveGridLayout {...layoutsProps} >
          {layouts.xs.map(i => {
            const compKey = i.i;
            const Component =
              compContainerObj[compKey] && compContainerObj[compKey].component;
            return (
              <div key={compKey}>
                {Component ? (
                  <Component height={rowHeight * i.h + marginTop * (i.h - 1)} />
                ) : compKey}
              </div>
            )
          })}
        </ResponsiveGridLayout>
      </Spin>
    </div>
  )
}