<template>
  <div class="con">
    <h2>我们接下来将会做 ……</h2>
    <h3>属于我们自己的ui框架</h3>
    <ol>
      <li>
        <h4>
          <span>日历</span>
          <span>2020 年 08 月 07 日</span>
        </h4>
      </li>
      <li>
        <h4>
          <span>用户实现登录注册</span>
          <span>2020 年 08 月 07 日</span>
        </h4>
      </li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.con {
  ol {
    padding: 0;
    margin: 0;
    display: inline-block;
    li {
      width: 550px;
      h4 {
        text-align: left;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
