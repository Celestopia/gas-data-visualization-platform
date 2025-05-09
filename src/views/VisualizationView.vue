<script setup>
import LineChart from '@/components/charts/LineChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import DashBoardChart from '@/components/charts/DashBoardChart.vue'
import RadarChart from '@/components/charts/RadarChart.vue'
</script>

<template>
  <h1 style="text-align: center; font-family: '华文中宋'">锅炉数据可视化</h1>
  <main>
    <div class="left-container">
      <div class="left-top-container">
        <PieChart
          title="各锅炉污染物排放占比"
          width="100%"
          height="100%"
          style="margin: 0 auto"
        />
      </div>
      <div class="left-bottom-container">
        <RadarChart width="100%" height="100%" style="margin: 0 auto" />
      </div>
    </div>
    <div class="middle-container">
      <div class="middle-top-container">
        <LineChart
          title="锅炉运行状态"
          width="100%"
          height="100%"
          style="margin: 0 auto"
        />
      </div>
      <div class="middle-bottom-container">
        <button
          style="
            margin-top: 1rem;
            margin-bottom: 1rem;
            width: 50%;
            height: 3rem;
            font-family: '华文中宋';
          "
        >
          选择锅炉
        </button>
        <button
          style="
            margin-top: 1rem;
            margin-bottom: 1rem;
            width: 50%;
            height: 3rem;
            font-family: '华文中宋';
          "
        >
          选择时间段
        </button>
      </div>
    </div>
    <div class="right-container">
      <div class="right-top-container">
        <BarChart
          title="锅炉数据对比"
          width="110%"
          height="90%"
          style="margin: 0 auto"
        />
      </div>
      <div class="right-bottom-container">
        <DashBoardChart width="100%" height="100%" style="margin: 0 auto" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 650px; /* 主区域高度 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.left-container {
  width: 25%;
  height: 100%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}

.middle-container {
  width: 50%;
  height: 100%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}

.right-container {
  width: 25%;
  height: 100%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}

.left-top-container {
  float: left;
  width: 100%;
  height: 50%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 1rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}

.left-bottom-container {
  float: left;
  width: 100%;
  height: 50%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 1rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}

.middle-top-container {
  float: left;
  width: 100%;
  height: 80%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 1rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}

.middle-bottom-container {
  float: left;
  width: 100%;
  height: 20%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 1rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}

.right-top-container {
  float: left;
  width: 100%;
  height: 70%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 0rem 0rem 1rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}

.right-bottom-container {
  float: left;
  width: 100%;
  height: 30%;
  padding: 1rem 1rem 1rem 1rem; /* 上、右、下、左内边距 */
  margin: 1rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  background-color: #fff;
  border-radius: 2rem;
}
</style>
