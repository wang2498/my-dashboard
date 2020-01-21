import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import moment from 'moment';
class Gradientcolorline extends React.Component {
  render() {
    function mathematics(values) {
      let minX = 0;
      let maxX = 0;
      let min = Infinity;
      let max = -Infinity;
      let avg = 0;

      for (const index in values) {
        const item = values[index];
        maxX = item > max ? index : maxX;
        minX = item < min ? index : minX;
        max = item > max ? item : max;
        min = item < min ? item : min;
        avg += item;
      }

      avg /= values.length;
      return {
        min: {
          x: minX,
          value: min
        },
        max: {
          x: maxX,
          value: max
        },
        avg
      };
    }

    function getInterval(values, key, interval) {
      const num = Math.floor(values.length / interval);
      const ticks = [];

      for (let i = 0; i <= interval; i += 1) {
        if (i * num >= values.length) {
          ticks.push(values[values.length - 1][key]);
        } else {
          ticks.push(values[num * i][key]);
        }
      }

      return ticks;
    }

    function normalize(min, max, avg) {
      const percent = (avg - min) / (max - min);
      return percent.toFixed(2);
    }

    const newValues = [];
    const data = [];

    for (let i = 0; i < 50; i += 1) {
      const val = 90 + 10 * Math.random();
      data.push({
        time: 1000 * i + 100,
        sold: val
      });
      newValues.push(val);
    }

    const math = mathematics(newValues);
    const percent = normalize(math.min.value, math.max.value, math.avg);
    const cols = {
      time: {
        // 需要自己计算合理的ticks分隔，不然会出现数据空白的现象
        ticks: getInterval(data, "time", 10)
      }
    };
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <Chart
        forceFit
        height={height}
        data={data}
        scale={cols}
      >
        <Axis name="time" title={null} />
        <Axis
          name="sold"
          title={null}
          label={{
            formatter: val => `${val}%`
          }}
        />
        <Tooltip />
        <Geom
          type="line"
          position="time*sold"
          color={`l (270) 0:rgba(255,0,0,1) ${percent}:rgba(206,241,141,1) 1:rgba(47,194,91,1)`}
          tooltip={[
            "time*sold",
            (time, sold) => ({
              title: moment(time).format("mm:ss"),
              name: "Success Rate",
              value: `${sold.toFixed(2)}%`
            })
          ]}
          select={[
            true,
            {
              mode: "single"
            }
          ]}
        />
      </Chart>
    );
  }
}

export default {
  component: Gradientcolorline,
  img: 'http://d.lanrentuku.com/down/png/1904/fantasy_and_role_play_game/destructive_magic_2913121.png',
  group: '图表库',
  title: '渐变折线图',
  key: '2'
}