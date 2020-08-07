<template>
  <div class="con">
    <slot name="icon"></slot>
    <slot>这是个按钮</slot>3
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.con {
  height: 38px;
  padding: 0 15px;
  border: 1px solid green;
  border-radius: 5px;
  color: green;
  transition:  all .25s;
  font-size: 16px;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
      background-color: green;
      color: white;
  }
}
</style>
