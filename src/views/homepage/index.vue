<template>
  <div class="content">
    <el-container>
      <el-aside width="200px">数据库-数据表的列表区域</el-aside>
      <el-container>
        <el-header height="100px">搜索区域</el-header>
        <el-main>
          <div id="container"></div>
        </el-main>
        <el-footer height="100px">SQL展示区域</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";
const data = {
  // 节点
  nodes: [
    {
      id: "node1", // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: "hello", // String，节点标签
    },
    {
      id: "node2", // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: "world", // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: "node1", // String，必须，起始节点 id
      target: "node2", // String，必须，目标节点 id
    },
  ],
};
export default {
  name: "HomePage",
  data() {
    return {
      message: "HomePage",
    };
  },
  created() {},
  methods: {
    init() {
      const graph = new Graph({
        container: document.getElementById("container"),
        width: 600,
        height: 600,
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      }).fromJSON(data);
      graph.zoom(-0.5);
      graph.translate(80, 40);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 840px;
}
.el-aside {
  height: 840px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>