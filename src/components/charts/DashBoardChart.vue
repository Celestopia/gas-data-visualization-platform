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
    default: '/data/default/dashboard-default-data.json', // 设置默认值
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
  const value = jsonData.value // 提取从 JSON 文件中获取的值

  // 设置图表选项
  var option = {
    title: {
      left: 'center', // 标题水平位置：居中
      top: 'top', // 标题垂直位置：顶部
      text: props.title, // 标题内容
      subtext: props.subtitle, // 副标题内容（默认为空）
    },
    series: [
      {
        name: null,
        type: 'gauge',
        center: [
          // 圆心位置
          '50%', // 水平位置（距离容器左侧，相对于容器宽度）
          '90%', // 竖直位置（距离容器顶部，相对于容器高度）
        ],
        radius: '150%', // 仪表盘半径（相对于容器高宽中较小的一项的一半的百分比）
        min: 0, // 最小的数据值
        max: 100, // 最大的数据值
        startAngle: 180, // 起始角度（角度制，与x轴正向夹角）
        endAngle: 0, // 结束角度（角度制，与x轴正向夹角）
        splitNumber: 8, // 仪表盘刻度的分割段数
        axisLine: {
          // 轴线样式（轴线：外侧圆弧）
          show: true, // 是否显示轴线：是
          width: 10, // 轴线宽度
          lineStyle: {
            color: [
              // 仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示。
              // 该数组的第一项为占轴线的百分比，第二项为颜色值
              [0.25, '#f03b44'], // 0.25处的颜色
              [0.5, '#fbdd5e'], // 0.5处的颜色
              [0.75, '#58d9f9'], // 0.75处的颜色
              [1, '#7afeaf'], // 1处的颜色
            ],
          },
        },
        splitLine: {
          // 分隔线样式（分隔线：相当于较长的刻度线）
          show: true, // 是否显示分隔线：是
          length: 15, // 分隔线长度
          distance: 10, // 分隔线与轴线的距离
          lineStyle: {
            // 分隔线样式
            width: 2, // 分隔线宽度
            color: 'auto', // 分隔线颜色
          },
        },
        axisTick: {
          // 刻度线样式
          show: true, // 是否显示刻度线：是
          length: 10, // 刻度线长度
          distance: 10, // 刻度线与轴线的距离
          lineStyle: {
            // 刻度线样式
            width: 2, // 刻度线宽度
            color: 'auto', // 刻度线颜色
          },
        },
        axisLabel: {
          // 刻度标签样式
          show: false, // 刻度标签：隐藏
        },
        pointer: {
          // 仪表盘指针样式
          show: true, // 是否显示指针：是
          length: '20%', // 指针长度（相对于仪表盘半径的百分比）
          width: '10%', // 指针宽度（相对于仪表盘半径的百分比）
          icon: 'arrow', // 指针图标：箭头
          offsetCenter: [0, '-50%'], // 相对于仪表盘中心的偏移位置。第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
          itemStyle: {
            // 指针样式
            color: 'auto', // 指针颜色
          },
        },
        detail: {
          // 仪表盘详情样式
          show: true, // 是否显示详情：是
          fontSize: '16', // 详情字体大小
          formatter: '{value}分', // 详情格式化字符串
          color: 'auto', // 详情字体颜色
          offsetCenter: ['0', '0%'], // 相对于仪表盘中心的偏移位置。第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
        },
        data: [
          {
            value: value, // 数据值
            name: '环保指数', // 数据项名称
            title: {
              // 数据项标题
              show: true, // 是否显示标题：是
              color: 'rgba(128,128,128,1)', // 标题字体颜色
              fontSize: 16, // 标题字体大小
              offsetCenter: [0, '-25%'], // 相对于仪表盘中心的偏移位置。第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
            },
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
