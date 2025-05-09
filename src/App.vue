<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="displayarea">
    <header>
      <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/visualization">Data Visualization</RouterLink>
          <RouterLink to="/comparison">Data Comparison</RouterLink>
          <RouterLink to="/test">Test Page</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView /><!--当用户访问应用的特定路径时（例如 /about），<RouterView /> 会被替换为与该路径关联的组件。-->
    </main>
  </div>
</template>

<style scoped>
.displayarea {
  height: 100vh;
  width: 100vw;
}

header {
  display: block;
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  text-align: center;
}

header .wrapper {
  display: flex; /* 使用flexbox布局 */
  width: 100%;
  flex-direction: row; /* 主轴方向：水平（子元素从左到右水平排列） */
  flex-wrap: wrap; /* 允许子元素在达到容器宽度的限制时换行 */
  justify-content: center; /* 子元素在主轴方向上的对齐方式： items are centered along the line. */
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
  margin: 2rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
}

main {
  display: block;
  width: 100vw;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  /* 设置链接选中时的样式 */
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  /* 设置链接悬停时的样式 */
  background-color: transparent;
}

nav a {
  /* 设置链接默认样式 */
  display: inline-block;
  padding: 0 1rem;
  margin: auto;
  border-left: 0px;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* 屏幕宽度>=1024px时，应用以下样式 */
  header {
    /*display: flex; /* 使用flexbox布局，参考https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
    /*place-items: column; /* 子元素在主轴方向上排列方式：items are centered along the line. */
    /*padding-right: calc(var(--section-gap) / 2); /* 右侧内边距 */
    width: 100%; /* 宽度为100% */
  }

  main {
    /*display: flex; /* 使用flexbox布局，参考https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
    /*flex-direction: column; /* 主轴方向：水平（子元素从左到右水平排列） */
    width: 100%; /* 宽度为100% */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex; /* 使用flexbox布局 */
    flex-direction: row; /* 主轴方向：水平（子元素从左到右水平排列） */
    flex-wrap: wrap; /* 允许子元素在达到容器宽度的限制时换行 */
    justify-content: center; /* 子元素在主轴方向上的对齐方式： items are centered along the line. */
  }

  nav {
    text-align: left; /* 文本对齐方式：左对齐 */
    margin-left: 0rem; /* 左侧外边距 */
    font-size: 1rem; /* 字体大小 */
    padding: 1rem 0rem 1rem 0rem; /* 上、右、下、左内边距 */
    margin: 1rem 0rem 0rem 0rem; /* 上、右、下、左外边距 */
  }
}
</style>
