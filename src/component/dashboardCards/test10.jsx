import React from 'react';
import { Statistic } from 'antd';
import styles from './index.less';
const style = {
  textAlign: 'center',
  verticalAlign: 'middle',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}
const { Countdown } = Statistic;
const Test10 = props => {
  const { height } = props;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return (
    <div className={styles.static_wrap} style={{ ...style, height }}>
      <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
    </div>
  )
}
export default {
  component: Test10,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/bow_arrow_2913123.png',
  group: '文案库',
  title: '倒计时',
  key: '10'
}