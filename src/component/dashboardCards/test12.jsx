import React from 'react';
import { Descriptions } from 'antd';
import styles from './index.less';
const style = {
  textAlign: 'center',
  verticalAlign: 'middle',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}
const Test12 = props => {
  const { height } = props;
  return (
    <div className={styles.static_wrap} style={{ ...style, height }}>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
export default {
  component: Test12,
  img: 'http://d.lanrentuku.com/down/png/1405/tailwaggers_free/russel.png',
  group: '详情库',
  title: '用户详情',
  key: '12'
}