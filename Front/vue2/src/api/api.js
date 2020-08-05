import axios from 'axios'
export const uploadFile = (formData) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3010/upload-file', formData).then((res) => {
      const a = 1
      if (a === 1) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export const getFiles = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3010/upload-file-all').then((res) => {
      const a = 1
      if (a === 1) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}
