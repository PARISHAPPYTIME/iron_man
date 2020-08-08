<template>
  <div class="scoped-my-tooptip" :class="[theme]" data-tip="提示内容在这里">
    <slot>默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'MyTooptip',
  inject: ['theme'],
  created () {
    console.log(this.theme, 'theme')
  }
}
</script>

<style lang="less" scoped>
.scoped-my-tooptip {
  display: inline-flex;
  position: relative;
  font-size: 16px;
  line-height: 38px;
  height: 38px;
  cursor: pointer;
  padding: 0px 15px;
  &.dark {
    &::after {
      background-color: white;
      color: black;
    }
    &::before {
      border-top: 9px solid #fff;
    }
  }

  &::after {
    content: attr(data-tip);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    padding: 2px 15px;
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
    // display: none;
    opacity: 0;
    pointer-events: none;
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
    opacity: 1;
  }
}
</style>
