import $ from "jquery";
import React from "react";
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
} from "bizcharts";
import DataSet from "@antv/data-set";

let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/relation-sunburst/0.2.8/mock.json",
  async: false,
  success: (iData) => { data = iData }
});

class Sunburst extends React.Component {
  render() {
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data, {
      type: "hierarchy"
    }).transform({
      type: "hierarchy.partition",
      // 根据树形数据生成相邻层次图 Adjacency Diagram 布局
      field: "sum",
      as: ["x", "y"]
    });
    const source = [];
    const nodes = dv.getAllNodes();
    nodes.map(node => {
      if (node.depth === 0) {
        // 父节点不展示
        // eslint-disable-next-line array-callback-return
        return;
      }

      const obj = {};
      obj.label = node.data.label;
      obj.sum = node.data.sum;
      obj.uv = node.data.uv;
      obj.value = node.value;
      obj.x = node.x;
      obj.y = node.y;
      source.push(obj);
      return node;
    });
    const { height } = this.props; // 为解决高度自适应问题约束为继承高度
    return (
      <Chart data={source} forceFit={true} height={height}>
        <Coord type="polar" innerRadius={0.3} />
        <Tooltip showTitle={false} />
        <Geom
          type="polygon"
          position="x*y"
          active={false}
          color={["value", "#BAE7FF-#1890FF-#0050B3"]}
          style={{
            stroke: "#FFF",
            lineWidth: 1
          }}
          tooltip="label*sum"
        />
      </Chart>
    );
  }
}


export default {
  component: Sunburst,
  img: 'http://d.lanrentuku.com/down/png/1712/14meiweishiwu/14meiweishiwu_12.png',
  group: '图表库',
  title: '旭日图',
  key: '7'
}