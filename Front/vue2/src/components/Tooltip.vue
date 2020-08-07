<template>
  <div class="con" data-tip="提示内容在这里">
    <slot>默认内容</slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.con {
  display: inline-block;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  height: 38px;
  padding: 0px 15px;

  &::after {
    content: attr(data-tip);
    display: none;
    position: absolute;
    padding: 6px 15px;
    left: 50%;
    bottom: 100%;
    white-space: nowrap;
    margin-bottom: 12px;
    transform: translateX(-50%);
    font-size: 12px;
    background: #000;
    color: #fff;
    cursor: default;
    border-radius: 4px;
    transition: all 0.25s;
  }

  &::before {
    content: ' ';
    transition: all 0.25s;
    position: absolute;
    display: none;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    margin-bottom: 3px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 9px solid #000;
  }

  &:hover::after,
  &:hover::before {
    display: block;
  }
}
</style>
