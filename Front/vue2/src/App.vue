<template>
  <div id="app">
    <ul id="nav">
      <router-link to="/" tag="li">主页</router-link>|
      <router-link to="/uploadFiles" tag="li">文件上传</router-link>|
      <router-link to="/toDoList" tag="li">我们将会做</router-link>
      <!-- <router-link to="/about" tag="li">关于</router-link>|
      <router-link to="/log" tag="li">日志</router-link> -->
    </ul>
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      theme: 'dark'
    }
  }
}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  // color: #2c3e50;
  background-color: #151617;
  // background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
}

@col: #42b983;
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  #nav {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 82px;
    justify-content: flex-end;
    text-align: right;
    align-items: center;
    box-sizing: border-box;
    list-style: none;
    background-color: #1d1f20;
    li {
      height: 100%;
      padding: 0 25px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
      text-decoration: none;
      cursor: pointer;
      &.router-link-exact-active {
        color: @col;
      }
    }
  }

  #container {
    width: 100%;
    box-sizing: border-box;
  }

  main {
    width: 1140px;
    margin: 0 auto;
    padding: 15px;
    box-sizing: border-box;
  }
}
</style>
