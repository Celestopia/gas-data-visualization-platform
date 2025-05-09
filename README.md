# Project Setup

```sh
npm install
npm run dev
```

<ul>
<li><code>npm install</code>：安装项目依赖包。</li>
<li><code>npm run dev</code>：启动项目，项目会在浏览器中打开。</li>
</ul>

# Others

<ul>
  <li>各文件作用：
    <ul>
      <li><code>.vscode</code>：存放VSCode相关配置文件。</li>
      <li><code>dist</code>：存放编译后的代码。</li>
      <li><code>node_modules</code>：存放所有项目依赖包。</li>
      <li><code>public</code>：存放静态资源，如图片、字体等。</li>
      <li><code>data</code>：存放json格式的图表数据文件。</li>
      <li><code>src</code>：主要的开发目录。
        <ul>
          <li><code>assets</code>：存放静态资源，如图片、字体等。</li>
          <li><code>components</code>：存放Vue组件。</li>
          <li><code>router</code>：定义应用程序的路由规则，包括各个路由路径与对应的组件之间的映射关系等。</li>
          <li><code>views</code>：定义各个路由页面的视图组件。</li>
          <li><code>App.vue</code>：项目的根组件。</li>
          <li><code>main.js</code>：项目入口文件的逻辑代码。</li>
        </ul>
      <li><code>.editorconfig</code>：配置编辑器相关规则。</li>
      <li><code>.gitignore</code>：Git配置文件，用于配置Git追踪文件的忽略规则。</li>
      <li><code>prettierrc.json</code>：Prettier配置文件，用于配置Prettier（代码格式化工具）的规则。</li>
      <li><code>index.html</code>：项目首页的入口文件。</li>
      <li><code>eslintrc.config.mjs</code>：ESLint配置文件，用于配置ESLint（JavaScript代码质量检查工具）的规则。</li>
      <li><code>jsconfig.json</code>：配置JavaScript项目，包括指定项目根目录、配置路径别名等。</li>
      <li><code>package-lock.json</code>：记录项目的依赖包的版本信息</li>
      <li><code>package.json</code>：记录项目的基本信息，如名称、版本、描述、测试脚本等</li>
      <li><code>README.md</code>：项目的说明文档，通常包含项目背景、使用方法、注意事项等。</li>
      <li><code>vite.config.js</code>：配置Vite项目，包括指定项目入口文件、指定端口号、指定打包输出路径等。</li>
    </ul>
  </li>
  <li>各命令作用：
    <ul>
      <li><code>npm install</code>：根据<code>package.json</code>的<code>dependencies</code>和<code>devDependencies</code>字段，下载相应的包并将它们安装到项目根目录下的<code>node_modules</code>文件夹中，同时更新<code>package-lock.json</code>文件。</li>
      <li><code>npm run &lt;command&gt;</code>：运行<code>package.json</code>文件中定义的scripts命令。如<code>npm run dev</code>等价于运行package.json文件中定义的dev命令。</li>
<li>请注意需在项目根目录下运行命令。如果报错，可考虑是否是由于权限问题，可使用管理员身份打开命令提示符，在项目根目录下运行指令。</li>
</ul>
</ul>

# 项目架构
（每创建一个新文件，请在这里注明它的作用，以便理清关系）
```
// 项目核心架构
// 确保屏幕宽度足够以便显示完整
src
├── App.vue // 项目根组件
├── main.js // 项目入口文件的逻辑代码
├── views // 定义各个路由页面的视图组件
│   ├── HomeView.vue // 项目主页视图组件
│   ├── VisualizationView.vue // 数据可视化视图组件
│   ├── ComparisonView.vue // 数据对比视图组件
│   └── TestView.vue // 测试组件，编写某个组件时可将代码复制至此观察效果
├── components // 存放可复用的Vue组件
│   ├── GreetItem.vue // 项目主页的欢迎信息组件
│   ├── HelloWorld.vue // 示例组件，留作学习用，暂未删除
│   ├── TheWelcome.vue // 示例组件，留作学习用，暂未删除
│   ├── WelcomeItem.vue // 示例组件，留作学习用，暂未删除
│   ├──charts // 存放图表组件
│   │   ├── BarChart.vue // 柱状图组件
│   │   ├── LineChart.vue // 折线图组件
│   │   ├── PieChart.vue // 饼图组件
│   │   ├── HistogramChart.vue // 折线图组件
│   │   ├──
│   │   ├──
│   │   ├──
│   │   ├──
│   │   ├──
│   │   ├──
│   │   ├──
│   │   └──
│   └── icons // 存放图标组件（示例组件，留作学习用，暂未删除）
│       ├── IconCommunity.vue
│       └── ...
├── router
│   └── index.js // 定义应用程序的路由规则，包括各路由路径与对应组件间的映射关系等
├── assets // 静态资源，如样式表与logo等
│   ├── logo.svg // Vue logo（注：考虑替换为自定义logo）
│   ├── base.css // 基础样式表
│   └── main.css // 主要样式表
```

# 本项目创建过程：

```
>>> npm create vue@latest
Need to install the following packages:
create-vue@3.11.0
Ok to proceed? (y) y
Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... gas-soft-monitoring
√ 是否使用 TypeScript 语法？ ... 否
√ 是否启用 JSX 支持？ ... 否
√ 是否引入 Vue Router 进行单页面应用开发？ ... 是
√ 是否引入 Pinia 用于状态管理？ ... 否
√ 是否引入 Vitest 用于单元测试？ ... 否
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 是
√ 是否引入 Prettier 用于代码格式化？ ... 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 是

正在初始化项目 E:\MyWebPages\gas-soft-monitoring\gas-soft-monitoring...

项目初始化完成，可执行以下命令：

  cd gas-soft-monitoring
  npm install
  npm run format
  npm run dev

>>> cd gas-soft-monitoring
>>> npm install

added 252 packages in 51s

66 packages are looking for funding
  run `npm fund` for details
```