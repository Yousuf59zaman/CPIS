import { ref } from 'vue'

const isSidebarOpen = ref(false)

export function useSidebar() {
  return { isSidebarOpen }
}
