import modal from './bubble'

export default function installGlobalProperties(app: any) {
  // 模态框对象
  app.config.globalProperties.$modal = modal
}