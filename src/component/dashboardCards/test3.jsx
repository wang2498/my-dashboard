import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";

class Basic extends React.Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: "Design",
        a: 70,
        b: 30
      },
      {
        item: "Development",
        a: 60,
        b: 70
      },
      {
        item: "Marketing",
        a: 50,
        b: 60
      },
      {
        item: "Users",
        a: 40,
        b: 50
      },
      {
        item: "Test",
        a: 60,
        b: 70
      },
      {
        item: "Language",
        a: 70,
        b: 50
      },
      {
        item: "Technology",
        a: 50,
        b: 40
      },
      {
        item: "Support",
        a: 30,
        b: 40
      },
      {
        item: "Sales",
        a: 60,
        b: 40
      },
      {
        item: "UX",
        a: 50,
        b: 60
      }
    ];
    const dv = new DataView().source(data);
    dv.transform({
      type: "fold",
      fields: ["a", "b"],
      // 展开字段集
      key: "user",
      // key字段
      value: "score" // value字段
    });
    const cols = {
      score: {
        min: 0,
        max: 80
      }
    };
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <Chart
        height={height}
        data={dv}
        scale={cols}
        forceFit
      >
        <Coord type="polar" radius={0.8} />
        <Axis
          name="item"
          line={null}
          tickLine={null}
          grid={{
            lineStyle: {
              lineDash: null
            },
            hideFirstLine: false
          }}
        />
        <Tooltip />
        <Axis
          name="score"
          line={null}
          tickLine={null}
          grid={{
            type: "polygon",
            lineStyle: {
              lineDash: null
            },
            alternateColor: "rgba(0, 0, 0, 0.04)"
          }}
        />
        <Legend name="user" marker="circle" offset={30} />
        <Geom type="area" position="item*score" color="user" />
        <Geom type="line" position="item*score" color="user" size={2} />
        <Geom
          type="point"
          position="item*score"
          color="user"
          shape="circle"
          size={4}
          style={{
            stroke: "#fff",
            lineWidth: 1,
            fillOpacity: 1
          }}
        />
      </Chart>
    );
  }
}


export default {
  component: Basic,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/castle_2913096.png',
  group: '图表库',
  title: '雷达图',
  key: '3'
}