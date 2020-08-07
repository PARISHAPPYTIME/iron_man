<template>
  <main>
    <div class="left">
      <div class="content item-group">
        <div v-for="(item, index) in fileList" :key="index" class="item">
          <a :href="item.path" target="_blank">{{ item.fileName }}</a>
        </div>
      </div>
    </div>
    <div class="right">
      <MyTooltip />
      <h1>选择你需要上传的文件</h1>
      <input type="file" @change="bindUploadFile" />
    </div>
  </main>
</template>
<script>
import MyTooltip from '../components/Tooltip.vue'
import { uploadFile, getFiles } from '../api/api'
export default {
  name: 'UploadFiles',
  components: {
    MyTooltip
  },
  data() {
    return {
      fileList: []
    }
  },
  created() {
    this.getFiles()
  },
  methods: {
    bindUploadFile(file) {
      const formData = new FormData()
      formData.append('cxyFile', file.target.files[0])
      uploadFile(formData).then((res) => {
        console.log(res)
        this.getFiles()
      })
    },
    getFiles() {
      getFiles().then((res) => {
        this.fileList = res.data.files
        console.log(res)
      })
    },
    findFile(path) {
      // window.open(filePath)
      // console.log(path)
      // window.open(path)
      window.open(path)
    }
  }
}
</script>
<style lang="less" scoped>
main {
  width: 1140px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  font-size: 0;
  .left {
    vertical-align: top;
    display: inline-block;
    width: 740px;
    min-height: 500px;
    padding: 15px;
    box-sizing: border-box;
    .content {
      width: 710px;
      min-height: 100px;
      // border-radius: 12px;
      // border: 1px solid #2c3e50;
      overflow: hidden;
      .item {
        height: 42px;
        text-align: left;
        font-size: 16px;
        line-height: 42px;
        padding: 0px 15px;
        position: relative;
        cursor: pointer;
        a {
          font-weight: bold;
          color: #2c3e50;
          text-decoration: none;
        }
        &:hover {
          background-color: #2c3e50;
          a {
            color: white;
          }
        }
        &:not(:last-child) {
          border-bottom: 1px solid #2c3e50;
        }
      }
    }
  }
  .right {
    vertical-align: top;
    display: inline-block;
    width: 370px;
  }
}
</style>
