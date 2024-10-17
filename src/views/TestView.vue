<template>
  <div>
    <h2>折线图示例</h2>
    <div
      class="chart-container"
      ref="chart"
      style="width: 600px; height: 400px"
    ></div>
  </div>
</template>

<script setup>
//注意该脚本是在组件挂载之前运行的，要让echarts正确渲染，应当使用钩子函数onMounted
import * as echarts from 'echarts' // 导入 ECharts
import { onMounted, ref } from 'vue' // 引入 Vue 的 onMounted 和 ref API

const chart = ref(null) // 使用 ref 获取 DOM 元素

onMounted(() => {
  // 在onMounted这一钩子函数中初始化ECharts，确保DOM渲染完成后再初始化Echarts图表
  var mCharts = echarts.init(chart.value)

  var xDataArr = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ]
  var yDataArr = [
    3000, 2800, 900, 1000, 800, 700, 1400, 1300, 900, 1000, 800, 600,
  ]

  var option = {
    xAxis: {
      type: 'category',
      data: xDataArr,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '康师傅',
        data: yDataArr,
        type: 'line', // 设置图表类型为 折线图
      },
    ],
  }

  mCharts.setOption(option) // 设置图表选项
})
</script>

<style>
.chart-container {
  border: 1px solid #ccc;
}
</style>
