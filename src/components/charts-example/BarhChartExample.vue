<template>
  <h2>水平柱状图示例</h2>
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

  var xDataArr = [
    '张三',
    '李四',
    '王五',
    '闰土',
    '小明',
    '茅台',
    '二妞',
    '大强',
  ] // 准备x轴数据
  var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86] // 为x轴每一个元素指明数据
  var option = {
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: xDataArr,
    },
    series: [
      {
        name: '语文',
        type: 'bar',
        markPoint: {
          // 标记点
          data: [
            {
              type: 'max',
              name: '最大值',
            },
            {
              type: 'min',
              name: '最小值',
            },
          ],
        },
        markLine: {
          // 标记线
          data: [
            {
              type: 'average',
              name: '平均值',
            },
          ],
        },
        label: {
          // 柱状图上的文字设置
          show: true, // 是否显示
          rotate: 60, // 旋转角度
          position: 'top', // 显示位置
        },
        barWidth: '30%', // 柱的宽度
        data: yDataArr,
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
