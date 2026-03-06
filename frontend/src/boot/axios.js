import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

// ใช้ backend ของคุณโดยตรง
const api = axios.create({
  baseURL: 'https://anupong-mabunrueang-6604101396-06-04-2026.onrender.com/api'
})

export default defineBoot(({ app }) => {
  // ใช้ axios ใน Vue component ได้ผ่าน this.$axios
  app.config.globalProperties.$axios = axios

  // ใช้ API ของ backend ผ่าน this.$api
  app.config.globalProperties.$api = api
})

export { api }
