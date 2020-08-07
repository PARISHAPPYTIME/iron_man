<template>
  <div class="con">
    <input :value="value" v-bind="$attrs" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    onInput(e) {
      this.$emit('onInput', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.con {
  input {
    display: inline-block;
    border: none;
    outline: none;
    height: 38px;
    padding: 0 15px;
    border: 1px solid green;
    border-radius: 10px;
  }
}
</style>
