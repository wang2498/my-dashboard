import React from 'react';
import { Rate } from 'antd';
import styles from './index.less';
const style = {
  textAlign: 'center',
  verticalAlign: 'middle',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}
const Test14 = props => {
  const { height } = props;
  return (
    <div className={styles.static_wrap} style={{ ...style, height }}>
      <Rate allowHalf defaultValue={1.5} />
    </div>
  )
}
export default {
  component: Test14,
  img: 'http://d.lanrentuku.com/down/png/1312/christmas-flat-color-icons/star-512.png',
  group: '文案库',
  title: '星级评分',
  key: '14'
}