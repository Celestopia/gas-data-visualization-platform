<template>
  <h2>仪表盘示例</h2>
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

  var option = {
    series: [
      {
        type: 'gauge',
        data: [
          {
            value: 97,
            itemStyle: {
              // 指针的样式
              color: 'pink', // 指针的颜色
            },
          }, // 每一个对象就代表一个指针
          {
            value: 85,
            itemStyle: {
              color: 'green',
            },
          },
        ],
        min: 50, // min max 控制仪表盘数值范围
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
