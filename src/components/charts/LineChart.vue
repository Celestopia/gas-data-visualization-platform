<template>
  <div
    class="chart-container"
    ref="chart"
    :style="{ width: computedWidth, height: computedHeight }"
  ></div>
  <!-- 使用动态样式绑定，动态设置宽度和高度 -->
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, defineProps } from 'vue'

// 定义调用组件时传入的参数
const props = defineProps({
  dataFilePath: {
    // 数据文件路径
    type: String,
    default: '/data/default/line-default-data.json', // 设置默认值
  },
  width: {
    // 容器宽度
    type: String,
    default: '600px', // 设置默认值
  },
  height: {
    // 容器高度
    type: String,
    default: '400px', // 设置默认值
  },
  title: {
    // 图表标题
    type: String,
    default: null, // 设置默认值
  },
  subtitle: {
    // 图表副标题
    type: String,
    default: null, // 设置默认值
  },
})

const computedWidth = ref(props.width) // 计算宽度
const computedHeight = ref(props.height) // 计算高度

const chart = ref(null)

onMounted(async () => {
  // 当组件容器被挂载到页面上后，执行
  var mCharts = echarts.init(chart.value) // 在组件容器上挂载echarts实例

  // 读取并解析 JSON 文件
  const response = await fetch(props.dataFilePath) // 获取数据文件
  const jsonData = await response.json() // 解析为 JSON 数据
  const xDataArr = jsonData.xDataArr // 提取从 JSON 文件中获取的值
  const SeriesData = jsonData.SeriesData // 提取从 JSON 文件中获取的值
  let series = [] // 构建series参数，用于option中
  for (let i = 0; i < SeriesData.length; i++) {
    series.push({
      name: SeriesData[i].name,
      type: 'line',
      data: SeriesData[i].data,
    })
  }

  // 设置图表选项
  var option = {
    title: {
      left: 'center', // 标题水平位置：居中
      top: 'top', // 标题垂直位置：顶部
      text: props.title, // 标题内容
      subtext: props.subtitle, // 副标题内容（默认为空）
    },
    xAxis: {
      type: 'category', // 类目轴 // 注：考虑更换为时间轴（type: 'time'）
      data: xDataArr, // x轴数据（1维数组）
      name: '时间', // 坐标轴名称
    },
    yAxis: {
      type: 'value', // 数值轴
      name: '浓度', // 坐标轴名称
    },
    series: series, // series定义见上文
    toolbox: {
      // 工具栏设置
      feature: {
        dataZoom: {
          // 数据区域缩放
          yAxisIndex: 'none', // 不控制任何y轴
        },
        restore: {}, // 还原
        dataView: {}, // 数据项视图（展示原始数据）
        saveAsImage: {}, // 保存为图片
      },
    },
    tooltip: {
      // 提示框设置
      trigger: 'axis', // 坐标轴触发
      backgroundColor: 'rgba(255,255,255,0.5)', // 提示框浮层的背景颜色
      borderColor: 'rgba(192,192,192,1)', // 提示框浮层的边框颜色
      position: function (point) {
        // 自定义提示框浮层位置
        return {
          left: point[0], // 提示框水平位置：左侧与鼠标位置对齐
          top: '10%', // 提示框垂直位置：到容器顶部距离为容器高度的10%
        }
      },
    },
    dataZoom: [
      // 控制区域缩放
      {
        type: 'inside', // 内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
        xAxisIndex: [0], // 控制x轴缩放
        start: 0, // 数据窗口范围的起始百分比
        end: 100, // 数据窗口范围的结束百分比
        filterMode: 'empty', // 当前数据窗口外的数据被设置为空。即不会影响其他轴的数据范围。
      },
      {
        type: 'inside', // 内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
        yAxisIndex: [0], // 控制y轴缩放
        start: 0, // 数据窗口范围的起始百分比
        end: 100, // 数据窗口范围的结束百分比
        filterMode: 'empty', // 当前数据窗口外的数据被设置为空。即不会影响其他轴的数据范围。
      },
    ],
    /*
    visualMap: {
      top: 50,
      right: 10,
      pieces: [
        {
          gt: 0,
          lte: 50,
          color: '#93CE07',
        },
        {
          gt: 50,
          lte: 100,
          color: '#FBDB0F',
        },
        {
          gt: 100,
          lte: 150,
          color: '#FC7D02',
        },
        {
          gt: 150,
          lte: 200,
          color: '#FD0100',
        },
        {
          gt: 200,
          lte: 300,
          color: '#AA069F',
        },
        {
          gt: 300,
          color: '#AC3B2A',
        },
      ],
      outOfRange: {
        color: '#999',
      },
    },*/
  }

  mCharts.setOption(option) // 设置图表选项
})
</script>

<style scoped>
.chart-container {
  border: 1px solid rgba(216, 216, 216, 1);
}
</style>
