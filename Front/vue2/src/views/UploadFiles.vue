<template>
  <main>
    <div class="main">
      <ol>
        <li v-for="(item, index) in fileList" :key="index">
          <a :href="item.path" target="_blank" :title="item.fileName">
            <img :src="item.path" alt="img" />
          </a>
        </li>
        <li class="addImg">
          <a href="javascript:;" @click="onFile">
            <img src="../assets/upload.png" alt="upload" />
          </a>
        </li>
      </ol>
      <input ref="uploadInput" multiple="multiple" accept="image/*" style="display: none" type="file" @change="bindUploadFile" />
    </div>
  </main>
</template>
<script>
import { uploadFile, getFiles } from '../api/api'
export default {
  name: 'UploadFiles',
  components: {},
  data () {
    return {
      fileList: []
    }
  },
  created () {
    this.getFiles()
  },
  methods: {
    bindUploadFile (file) {
      const formData = new FormData()
      console.log(file)
      const _name = file.target.files[0].name
      const _fileName = _name.substring(_name.lastIndexOf('.') + 1).toLowerCase()
      if (_fileName !== 'png' && _fileName !== 'jpg') {
        return alert('上传图片格式不正确，请重新上传')
      } else {
        this.fileList.push({
          fileName: '等待上传',
          path: window.URL.createObjectURL(file.target.files[0])
        })
      }
      formData.append('cxyFile', file.target.files[0])
      setTimeout(() => {
        uploadFile(formData).then((res) => {
          console.log(res)
          this.getFiles()
        })
      }, 2000)
    },
    getFiles () {
      getFiles().then((res) => {
        this.fileList = res.data.files
        console.log(res)
      })
    },
    onInput (value) {
      console.log(value)
    },
    onFile () {
      this.$refs.uploadInput.click()
    }
  }
}
</script>
<style lang="less" scoped>
main {
  width: 550px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  .main {
    vertical-align: top;
    display: inline-block;
    width: 550px;
    min-height: 500px;
    box-sizing: border-box;
    ol {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(auto-fill, 160px);
      gap: 10px;
      li {
        width: 100%;
        display: inline-block;
        border-radius: 10px;
        background-color: #eeeeee;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        a {
          display: inline-block;
          width: 100%;
          height: 160px;
          border-radius: 5px;
          list-style: none;
          text-decoration: none;
          color: #2c3e50;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        &.addImg {
          a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            width: 56px;
            height: 56px;
          }
        }
      }
    }
    .area {
      width: 100%;
      height: 100px;
      background-color: #2c3e50;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 25px;
      box-sizing: border-box;
    }
  }
}
</style>
