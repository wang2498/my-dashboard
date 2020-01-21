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
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/viking_2913107.png',
  group: '文案库',
  title: '测试文案',
  key: '1'
}