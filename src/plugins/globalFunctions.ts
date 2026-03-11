import type { App } from 'vue'

/**
 * Global helpers plugin — mirrors heyhomex_frontend globalFunction.ts pattern.
 * Register application-wide utility methods here.
 */
const globalFunctions = {
  install(app: App) {
    app.config.globalProperties.$formatDate = (dateStr: string): string => {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    app.config.globalProperties.$truncateText = (text: string, maxLength = 100): string => {
      return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text
    }
  },
}

export default globalFunctions
