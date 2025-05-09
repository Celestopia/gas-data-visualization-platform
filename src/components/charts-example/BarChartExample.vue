<template>
  <h2>柱状图示例</h2>
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
  ]
  var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
  var option = {
    title: {
      text: '成绩展示',
      textStyle: {
        color: 'red',
      },
      borderWidth: 5,
      borderColor: 'blue',
      borderRadius: 5,
      left: 50,
      top: 10,
    },
    tooltip: {
      // trigger: 'item'
      trigger: 'axis',
      triggerOn: 'click',
      // formatter: '{b} 的成绩是 {c}'
      formatter: function (arg) {
        return arg[0].name + '的分数是:' + arg[0].data
      },
    },
    toolbox: {
      // 工具箱按钮
      feature: {
        saveAsImage: {}, // 导出图片
        dataView: {}, // 数据视图
        restore: {}, // 重置
        dataZoom: {}, // 区域缩放
        magicType: {
          type: ['bar', 'line'],
        }, // 动态图表类型的切换
      },
    },
    xAxis: {
      type: 'category',
      data: xDataArr,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '语文',
        type: 'bar',
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
