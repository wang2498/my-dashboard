import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
} from "bizcharts";

class Helixcoordinate extends React.Component {
  render() {
    const data = [];
    const n = 31;

    for (let i = 0; i < 372; i++) {
      const now = Date();
      data[i] = {};
      data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
      const random = Math.floor(Math.random() * 10);

      if ((i % n > 2 && i % n < 4) || (i % n >= 6 && i % n < 7)) {
        data[i].value = 30 + random * 7;
      } else if (i % n >= 4 && i % n < 6) {
        data[i].value = 60 + random * 8;
      } else {
        data[i].value = 10 + random * 5;
      }
    }

    const cols = {
      time: {
        type: "timeCat",
        mask: "YYYY.MM.DD"
      },
      value: {
        min: 0
      }
    };
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <Chart
        height={height}
        data={data}
        scale={cols}
        forceFit
        padding={[0, 60, 30, 0]}
      >
        <Coord
          type="helix"
          startAngle={0.5 * Math.PI}
          endAngle={12.5 * Math.PI}
        />
        <Axis name="time" line={null} />
        <Tooltip />
        <Geom
          type="interval"
          position="time*value"
          color={["value", "#ffffff-#1890FF"]}
          size={0.45}
        />
      </Chart>
    );
  }
}



export default {
  component: Helixcoordinate,
  img: 'http://d.lanrentuku.com/down/png/1712/10xiaodongwu/10xiaodongwu_09.png',
  group: '图表库',
  title: '螺旋坐标系',
  key: '8'
}