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
    default: '/data/default/radar-default-data.json', // 设置默认值
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
  const Data = jsonData // 提取从 JSON 文件中获取的值

  var option = {
    title: {
      left: 'center', // 标题水平位置：居中
      top: 'top', // 标题垂直位置：顶部
      text: props.title, // 标题内容（默认为空）
      subtext: props.subtitle, // 副标题内容（默认为空）
    },
    backgroundColor: 'rgba(32,32,128,0.1)', // 背景颜色
    tooltip: {
      // 提示框设置
      backgroundColor: 'rgba(255,255,255,0.8)', // 提示框背景颜色
      position: function (point) {
        // 自定义提示框浮层位置
        return {
          left: point[0], // 提示框水平位置：左侧与鼠标位置对齐
          top: '10%', // 提示框垂直位置：到容器顶部距离为容器高度的10%
        }
      },
    },
    radar: {
      // 雷达图坐标系设置
      name: {
        textStyle: {
          color: 'rgba(32,32,32,1)',
          fontSize: 14,
        },
      },
      shape: 'polygon', // 雷达图形状：多边形
      center: [
        // 圆心位置
        '50%', // 水平位置（距离容器左侧，相对于容器宽度）
        '50%', // 竖直位置（距离容器顶部，相对于容器高度）
      ],
      radius: '80%', // 雷达图半径（相对于容器高宽中较小的一项的一半的百分比）
      startAngle: 120, // 起始角度（角度制，与x轴正向夹角）
      scale: true,
      axisLine: {
        // 坐标轴轴线设置
        show: true, // 是否显示轴线：是
        lineStyle: {
          color: 'rgba(32, 32, 128, 0.8)',
        },
      },
      splitLine: {
        // 坐标轴分隔线设置
        show: true, // 是否显示分隔线：是
        lineStyle: {
          width: 1,
          color: 'rgba(32, 32, 128, 0.8)', // 设置网格颜色
        },
      },
      indicator: [
        // 雷达图指示器设置，用于指定雷达图的变量（维度）
        {
          name: '氮氧化物', // 指示器名称
          max: 100, // 指示器最大值
        },
        {
          name: '硫化物', // 指示器名称
          max: 100, // 指示器最大值
        },
        {
          name: '二氧化碳', // 指示器名称
          max: 100, // 指示器最大值
        },
        {
          name: '一氧化碳', // 指示器名称
          max: 100, // 指示器最大值
        },
        {
          name: '颗粒物', // 指示器名称
          max: 100, // 指示器最大值
        },
      ],
    },
    series: [
      {
        name: '排放数据',
        type: 'radar',
        symbol: 'circle', // 拐点形状
        symbolSize: 10, // 拐点大小
        itemStyle: {
          // 拐点样式
          color: 'rgba(32,216,216,1)', // 拐点颜色
        },
        areaStyle: {
          // 区域填充样式
          color: 'rgba(32,216,216,0.5)', // 区域填充颜色
        },
        lineStyle: {
          // 区域边框线条样式
          width: 2, // 区域边框线条宽度
          color: 'rgba(32,216,216,1)', // 区域边框线条颜色
        },
        data: [
          {
            name: null, // 本数据系列名称
            value: Data, // 雷达图具体数据值
          },
        ],
      },
    ],
  }

  mCharts.setOption(option) // 设置图表选项
})
</script>

<style scoped>
.chart-container {
  border: 1px solid rgba(216, 216, 216, 1);
}
</style>
