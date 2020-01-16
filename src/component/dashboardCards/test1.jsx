import React from 'react'
const style = {
  color: '#fff',
  fontSize: 30,
  textAlign: 'center',
  verticalAlign: 'middle'

}
const Test1 = props => {
  const { height } = props;
  return (
    <div style={{ ...style, height, lineHeight: `${height}px` }}>文本卡片</div>
  )
}
export default {
  component: Test1,
  img: 'https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg',
  group: '第一组',
  title: '测试1',
  key: '1'
}