import { getCurrentInstance, toRaw } from 'vue'
import { useRouter } from 'vue-router'

/**
 * Start analytics - Analytics for the front-end
 */
export const start = () => {
  const app = getCurrentInstance()
  const router = useRouter()
  const analytics = app?.appContext.config.globalProperties.$analytics
  const appConfig = {
    collector: false,
    name: 'Note',
    altname: 'note-app',
    url: 'https://localhost:3000',
    status: false,
    version: '1.0',
    description: 'note-app'
  }

  analytics(app, toRaw(router), appConfig)
}
