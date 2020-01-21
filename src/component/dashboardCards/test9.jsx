import $ from "jquery";
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import DataSet from "@antv/data-set";

import Brush from "@antv/g2-brush";

let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/g2-brush-interval/0.2.9/mock.json",
  async: false,
  success: (iData) => { data = iData }
});

function getComponent(data) {
  const ds = new DataSet();
  const dv = ds
    .createView("test")
    .source(data)
    .transform({
      as: ["count"],
      groupBy: ["release"],
      operations: ["count"],
      type: "aggregate"
    });
  const scale = {
    count: {
      alias: "top2000 唱片总量"
    },
    release: {
      tickInterval: 5,
      alias: "唱片发行年份"
    }
  };
  let chart;

  class SliderChart extends React.Component {
    componentDidMount() {
      new Brush({
        canvas: chart.get("canvas"),
        chart,
        type: "X",

        onBrushstart() {
          chart.hideTooltip();
        },

        onBrushmove() {
          chart.hideTooltip();
        }
      });
      chart.on("plotdblclick", () => {
        chart.get("options").filters = {};
        chart.repaint();
      });
    }
    render() {
      const { height } = this.props; // 为解决高度自适应问题约束为继承高度
      return (
        <Chart
          height={height}
          data={dv}
          scale={scale}
          onGetG2Instance={g2Chart => {
            chart = g2Chart;
          }}
          forceFit
        >
          <Tooltip />
          <Axis />
          <Geom type="interval" position="release*count" color="#e50000" />
        </Chart>
      );
    }
  }
  return SliderChart;
}

class Brushinterval extends React.Component {
  render() {
    const SliderChart = getComponent(data);
    return (
      <SliderChart {...this.props} />
    );
  }
}



export default {
  component: Brushinterval,
  img: 'http://d.lanrentuku.com/down/png/1712/22xiaodongwu/22xiaodongwu_12.png',
  group: '图表库',
  title: '柱状图',
  key: '9'
}