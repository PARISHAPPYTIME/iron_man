<template>
  <main>
    <div class="left">
      <div class="content item-group">
        <div v-for="(item, index) in fileList" :key="index" class="item">{{ item }}</div>
      </div>
    </div>
    <div class="right">
      <h1>选择你需要上传的文件</h1>
      <input type="file" @change="bindUploadFile" />
    </div>
  </main>
</template>
<script>
import { uploadFile, getFiles } from '../api/api'
export default {
  name: 'UploadFiles',
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
      border-radius: 12px;
      border: 2px solid #a1a1a1;
      padding: 15px 0;
      .item {
        height: 42px;
        text-align: left;
        font-size: 16px;
        line-height: 42px;
        padding: 0px 15px;
        position: relative;
        cursor: pointer;
        &:hover {
          background-color: #eeeeee;
        }
        &:not(:last-child) {
          border-bottom: 2px solid rgba(255, 255, 255, 0);
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -2px;
            width: calc(100% - 30px);
            height: 2px;
            background-color: #a1a1a1;
          }
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
