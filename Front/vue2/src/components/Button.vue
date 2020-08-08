<template>
  <div class="scoped-my-button" :class="className">
    <slot name="icon"></slot>
    <slot>这是个按钮</slot>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      className: 'style-cirlce'
    }
  },
  componted: {
    className: {
      get () {
        if (this.type === 'circle') {
          return ['style-cirlce']
        }
        return ['default']
      },
      set (value) {

      }
    }
  },
  created () {
    console.log(this.type)
  },
  methods: {
    onClick () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.scoped-my-button {
  height: 38px;
  padding: 0 15px;
  border-radius: 2px;
  transition: all 0.25s;
  font-size: 16px;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  letter-spacing: 1px;
  &.style-cirlce {
    background-color: white;
    // border-radius: 100px;
    &:hover {
      background-color: rgb(212, 0, 0);
      color: #ffffff;
    }
  }
  &.default {
    border: 1px solid #0a3d62;
    color: #0a3d62;
    &:hover {
      background-color: #0a3d62;
      color: white;
    }
  }
}
</style>
