import React from 'react';
import { Calendar } from 'antd';
import styles from './index.less';
const style = {
  textAlign: 'center',
  verticalAlign: 'middle',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}
const Test13 = props => {
  const { height } = props;
  return (
    <div className={styles.static_wrap} style={{ ...style, height }}>
      <Calendar />
    </div>
  )
}
export default {
  component: Test13,
  img: 'http://d.lanrentuku.com/down/png/1405/tailwaggers_free/pug.png',
  group: '详情库',
  title: '日历',
  key: '13'
}