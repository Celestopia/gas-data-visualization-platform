<template>
  <h2>雷达图示例</h2>
  <div
    class="chart-container"
    ref="chart"
    style="width: 600px; height: 400px"
  ></div>
</template>

<script setup>
// 注意该脚本是在组件挂载之前运行的，要让echarts正确渲染，应当使用钩子函数onMounted，以确保DOM渲染完成后再初始化Echarts图表。
import * as echarts from 'echarts' // 导入 ECharts
import { onMounted, ref } from 'vue'

const chart = ref(null) // 用 null 初始化chart变量，等待 DOM 渲染完成后再初始化 Echarts 图表

onMounted(() => {
  // 在onMounted这一钩子函数中初始化ECharts，确保DOM渲染完成后再初始化Echarts图表
  // Vue 会在组件的 DOM 完成挂载到页面上后，自动调用 onMounted 钩子。此时，所有 DOM 元素都已经被插入到文档中。
  var mCharts = echarts.init(chart.value) // chart.value 对应 ref="chart" 的实际 DOM 元素

  // 各个维度的最大值
  var dataMax = [
    {
      name: '易用性',
      max: 100,
    },
    {
      name: '功能',
      max: 100,
    },
    {
      name: '拍照',
      max: 100,
    },
    {
      name: '跑分',
      max: 100,
    },
    {
      name: '续航',
      max: 100,
    },
  ]
  var option = {
    radar: {
      indicator: dataMax, // 配置各个维度的最大值
      shape: 'polygon', // 配置雷达图最外层的图形 circle polygon
    },
    series: [
      {
        type: 'radar', // radar 此图表时一个雷达图
        label: {
          // 设置标签的样式
          show: true, // 显示数值
        },
        areaStyle: {}, // 将每一个产品的雷达图形成阴影的面积
        data: [
          {
            name: '华为手机1',
            value: [80, 90, 80, 82, 90],
          },
          {
            name: '中兴手机1',
            value: [70, 82, 75, 70, 78],
          },
        ],
      },
    ],
  }
  mCharts.setOption(option)
})
</script>

<style scoped>
.chart-container {
  border: 1px solid #ccc;
}
</style>
