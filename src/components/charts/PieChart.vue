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
    default: '/data/default/pie-default-data.json', // 设置默认值
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
  const data = jsonData // 提取从 JSON 文件中获取的值

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
        type: 'pie',
        radius: ['30%', '50%'], // 内、外半径占可视区尺寸（容器高宽中较小一项）的比例
        labelLine: {
          // 配置标签指示线（视觉引导线）
          length: 20, // 从饼图边缘到标签的直线长度
          length2: 30, // 从标签到指示线末端的长度
        },
        label: {
          // 配置文本标签
          formatter: '{name|{b}}\n{percentage|{d}%}', // {a}：系列名；{b}：当前扇形名称；{c}：当前扇形数值；{d}：当前扇形所占百分比
          rich: {
            // 富文本样式配置
            name: {
              // 系列名文本设置
              fontSize: 12, // 字体大小
              lineHeight: 16, // 行高
              align: 'center', // 对齐方式：居中
            },
            percentage: {
              // 百分比文本设置
              fontSize: 12, // 字体大小
              lineHeight: 16, // 行高
              align: 'center', // 对齐方式：居中
            },
          },
        },
        data: data,
      },
    ],
    tooltip: {
      // 提示框设置
      trigger: 'item', // 数据项图形触发
      formatter: '{b} : {c} ({d}%)', // {a}：系列名；{b}：当前扇形名称；{c}：当前扇形数值；{d}：当前扇形所占百分比
    },
  }
  mCharts.setOption(option) // 设置图表选项
})
</script>

<style scoped>
.chart-container {
  border: 1px solid rgba(216, 216, 216, 1);
}
</style>
