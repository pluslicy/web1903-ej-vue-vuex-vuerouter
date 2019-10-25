<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
html {
  font: normal 12px 'Microsoft Yahei,微软雅黑'
}
body {
  overflow-x: hidden;
}
body,ul,ol,h1,h2,h3 {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>