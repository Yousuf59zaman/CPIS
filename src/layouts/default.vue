<template>
  <div
    class="flex flex-col min-h-screen w-full bg-[#f4f7f4] font-['Poppins',sans-serif] overflow-x-hidden text-[#171a1f]"
  >
    <div class="flex flex-1 relative items-stretch h-full">
      <!-- Sidebar column -->
      <aside
        class="w-0 lg:w-[260px] xl:w-[280px] 2xl:w-[320px] bg-white lg:border-r lg:border-[#cdcdcd] shrink-0 relative z-40 lg:z-10"
      >
        <div class="sticky top-0 h-screen w-full">
          <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
        </div>
      </aside>

      <!-- Main content column -->
      <div class="flex-1 flex flex-col min-w-0 relative z-20">
        <AppHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'
import AppSidebar from '@/components/Sidebar/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import AppFooter from '@/components/AppFooter/index.vue'

const { isSidebarOpen } = useSidebar()
</script>
