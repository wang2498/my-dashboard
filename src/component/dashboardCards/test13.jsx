import React from 'react';
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
      <img src="http://img.lanrentuku.com/img/allimg/1908/15669530805307.jpg" alt="图片" width='100%' height='100%' />
    </div>
  )
}
export default {
  component: Test13,
  img: 'http://d.lanrentuku.com/down/png/1405/tailwaggers_free/pug.png',
  group: '详情库',
  title: '卡片',
  key: '133'
}