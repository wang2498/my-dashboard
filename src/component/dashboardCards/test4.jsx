import React from "react";
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

const { DataView } = DataSet;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
const data = [{
  x: 'Oceania',
  low: 1,
  q1: 9,
  median: 16,
  q3: 22,
  high: 24,
}, {
  x: 'East Europe',
  low: 1,
  q1: 5,
  median: 8,
  q3: 12,
  high: 16,
}, {
  x: 'Australia',
  low: 1,
  q1: 8,
  median: 12,
  q3: 19,
  high: 26,
}, {
  x: 'South America',
  low: 2,
  q1: 8,
  median: 12,
  q3: 21,
  high: 28,
}, {
  x: 'North Africa',
  low: 1,
  q1: 8,
  median: 14,
  q3: 18,
  high: 24,
}, {
  x: 'North America',
  low: 3,
  q1: 10,
  median: 17,
  q3: 28,
  high: 30,
}, {
  x: 'West Europe',
  low: 1,
  q1: 7,
  median: 10,
  q3: 17,
  high: 22,
}, {
  x: 'West Africa',
  low: 1,
  q1: 6,
  median: 8,
  q3: 13,
  high: 16,
}];

const dv = new DataView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(obj) {
    obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
    return obj;
  },
});

class BoxRadial extends React.Component {
  render() {
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <Chart height={height} data={dv} forceFit>
        <Axis />
        <Legend />
        <Tooltip
          showTitle={false}
          itemTpl={'<li data-index={index} style="margin-bottom:4px;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px">最大值：{high}</span><br/><span style="padding-left: 16px">上四分位数：{q3}</span><br/><span style="padding-left: 16px">中位数：{median}</span><br/><span style="padding-left: 16px">下四分位数：{q1}</span><br/><span style="padding-left: 16px">最小值：{low}</span><br/></li>'}
        />
        <Coord type="polar" innerRadius={0.5} />
        <Geom
          type="schema"
          position="x*range"
          size={60}
          shape="box"
          active
          color="x"
          tooltip={['x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => ({
            name: x,
            low,
            q1,
            median,
            q3,
            high,
          })]}
        />
      </Chart >
    );
  }
}

export default {
  component: BoxRadial,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/adventure_map_2913095.png',
  group: '图表库',
  title: '箱形图',
  key: '4'
}