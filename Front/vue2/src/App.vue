<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link>|
      <router-link to="/uploadFiles">文件上传</router-link>|
      <router-link to="/toDoList">我们将会做</router-link>|
      <router-link to="/about">关于</router-link>|
      <router-link to="/log">日志</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px
  height: 100px;
  background-color: #2c3e50;
  color: white;
  position: sticky;
  top: 0;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
