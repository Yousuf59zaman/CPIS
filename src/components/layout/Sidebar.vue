<template>
  <div class="contents">
    <!-- Mobile Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
      @click="$emit('close')"
    ></div>

    <!-- Sidebar Content -->
    <div
      class="fixed lg:static inset-y-0 left-0 w-[280px] sm:w-[300px] lg:w-full bg-white lg:bg-transparent flex flex-col pt-2 2xl:pt-3 pb-10 z-[70] lg:z-auto shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out lg:transition-none transform overflow-y-auto"
      :class="[isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0']"
    >
      <!-- Logo Area -->
      <div class="px-[20px] lg:px-[24px] 2xl:px-[30px] mb-[60px] 2xl:mb-[80px] w-full">
        <img
          src="@/assets/icons/sidebar/Logo Workflow.svg"
          alt="CPIS Logo"
          class="w-full h-auto object-contain"
        />
      </div>

      <!-- Navigation Menu -->
      <nav
        class="flex-1 px-[20px] 2xl:px-[26px] pt-6 2xl:pt-8 flex flex-col gap-[12px] 2xl:gap-[18px]"
      >
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="$emit('close')"
          class="flex items-center gap-[16px] 2xl:gap-[22px] rounded-[6px] transition-colors duration-200 relative overflow-hidden h-[46px] 2xl:h-[54px]"
          :class="[item.active ? 'bg-[#224E22] shadow-sm' : 'bg-[#F4F7F4] hover:bg-[#e8ece8]']"
        >
          <div class="flex items-center justify-center shrink-0 ml-[5px]">
            <img :src="item.icon" alt="icon" class="w-[38px] h-[35px] 2xl:w-[46px] 2xl:h-[43px]" />
          </div>
          <span
            class="font-['Poppins']"
            :class="
              item.active
                ? 'text-white font-medium text-[18px] leading-[20px] [text-shadow:0_2px_2px_rgba(0,0,0,0.10)]'
                : 'text-[#0A1F0A] font-normal text-[18px] leading-normal [text-shadow:0_2px_2px_rgba(0,0,0,0.10)]'
            "
            >{{ item.name }}</span
          >
        </router-link>
      </nav>
    </div>

    <!-- Mobile Close Button (Moved here to prevent parental clipping) -->
    <button
      v-if="isOpen"
      @click="$emit('close')"
      class="lg:hidden fixed left-[290px] sm:left-[310px] top-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30 transition-all duration-200 z-[80]"
    >
      <XIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { X as XIcon } from 'lucide-vue-next'
import DashboardIcon from '@/assets/icons/sidebar/Dashboard.svg'
import TaskInboxIcon from '@/assets/icons/sidebar/Task_Inbox.svg'
import ClaimsListIcon from '@/assets/icons/sidebar/Claims_List.svg'
import ReportsIcon from '@/assets/icons/sidebar/Reports.svg'
import DataValidationIcon from '@/assets/icons/sidebar/Data_Validation.svg'
import DataMigrationIcon from '@/assets/icons/sidebar/Data_Migration.svg'
import AdministrationIcon from '@/assets/icons/sidebar/Administration.svg'

const navItems = [
  { name: 'Dashboard', path: '#', icon: DashboardIcon, active: false },
  { name: 'Task Inbox', path: '#', icon: TaskInboxIcon, active: false },
  { name: 'Claims List', path: '#', icon: ClaimsListIcon, active: false },
  { name: 'Reports', path: '#', icon: ReportsIcon, active: false },
  { name: 'Data Validation', path: '/', icon: DataValidationIcon, active: true },
  { name: 'Data Migration', path: '#', icon: DataMigrationIcon, active: false },
  { name: 'Administration', path: '#', icon: AdministrationIcon, active: false },
]

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])
</script>
