<template>
  <main>
    <div class="navList">
      <h4 class="item">tooptip</h4>
      <h4 class="item">button</h4>
      <h4 class="item active">input</h4>
    </div>
    <div class="content">
      <div class="title">
        <h4>tooptip</h4>
        <div class="box">
          <MyTooltip />
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import MyTooltip from '../components/Tooltip.vue'
export default {
  name: 'Home',
  components: {
    MyTooltip
  },
  methods: {
    onInput (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
main {
  display: flex;
  justify-content: space-around;
  .navList {
    width: 270px;
    .item {
      position: relative;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0;
      &:hover {
        background-color: #2c3e5093;
        color: white;
      }
      &.active {
        // position: sticky;
        // top: 0;
        background-color: #2c3e50;
        color: white;
      }
    }
  }
  .content {
    width: 840px;
    padding: 0px 15px;
    min-height: 400px;
    .title {
      text-align: left;
      .box {
        border-radius: 3px;
        background-color: #1d1f20;
        // box-shadow: 0px 0px 20px -5px rgba(158, 158, 158, 0.22);
        min-height: 150px;
        padding: 0.675rem 0.75rem;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h4 {
        display: block;
      }
    }
  }
}
</style>
