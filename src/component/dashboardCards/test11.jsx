import React from 'react';
import { Statistic } from 'antd';
import styles from './index.less';
const style = {
  color: '#fff',
  textAlign: 'center',
  verticalAlign: 'middle',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const Test11 = props => {
  const { height } = props;
  return (
    <div className={styles.static_wrap} style={{ ...style, height}}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
    </div>
  )
}
export default {
  component: Test11,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/knight_2913116.png',
  group: '文案库',
  title: '余额',
  key: '11'
}