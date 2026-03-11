import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  name: string
  role: string
  sessionId: string
  auditRef: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  function setUser(userData: User) {
    user.value = userData
  }

  function clearUser() {
    user.value = null
  }

  const isLoggedIn = () => user.value !== null

  return { user, setUser, clearUser, isLoggedIn }
})
