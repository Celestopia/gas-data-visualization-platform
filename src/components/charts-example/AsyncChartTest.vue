<template>
  <h2>仪表盘示例</h2>
  <div
    class="chart-container"
    ref="chart"
    style="width: 600px; height: 400px"
  ></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chart = ref(null)

onMounted(async () => {
  var mCharts = echarts.init(chart.value)

  // 读取 JSON 文件
  const response = await fetch('./data.json') // 替换为你的数据文件路径
  const jsonData = await response.json() // 解析为 JSON 数据
  // window.alert(jsonData.values[0])
  // 提取从 JSON 文件中获取的值
  const values = jsonData.values

  // 设置 ECharts 的选项
  var option = {
    series: [
      {
        type: 'gauge',
        data: [
          {
            value: values[0], // 使用 JSON 数据中的第一个值
            itemStyle: {
              color: 'pink',
            },
          },
          {
            value: values[1], // 使用 JSON 数据中的第二个值
            itemStyle: {
              color: 'green',
            },
          },
        ],
        min: 50,
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
