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

class Stacked extends React.Component {
  render() {
    const data = [
      {
        State: "WY",
        小于5岁: 25635,
        "5至13岁": 1890,
        "14至17岁": 9314
      },
      {
        State: "DC",
        小于5岁: 30352,
        "5至13岁": 20439,
        "14至17岁": 10225
      },
      {
        State: "VT",
        小于5岁: 38253,
        "5至13岁": 42538,
        "14至17岁": 15757
      },
      {
        State: "ND",
        小于5岁: 51896,
        "5至13岁": 67358,
        "14至17岁": 18794
      },
      {
        State: "AK",
        小于5岁: 72083,
        "5至13岁": 85640,
        "14至17岁": 22153
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["小于5岁", "5至13岁", "14至17岁"],
      // 展开字段集
      key: "年龄段",
      // key字段
      value: "人口数量",
      // value字段
      retains: ["State"] // 保留字段集，默认为除fields以外的所有字段
    });
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <div>
        <Chart height={height} data={dv} forceFit>
          <Legend />
          <Coord transpose />
          <Axis
            name="State"
            label={{
              offset: 12
            }}
          />
          <Axis name="人口数量" />
          <Tooltip />
          <Geom
            type="intervalStack"
            position="State*人口数量"
            color={"年龄段"}
          />
        </Chart>
      </div>
    );
  }
}

export default {
  component: Stacked,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/monster_2913115.png',
  group: '图表库',
  title: '堆叠条形图',
  key: '5'
}