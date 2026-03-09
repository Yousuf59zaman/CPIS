<template>
  <div
    class="w-[320px] bg-white border-r border-[#cdcdcd] h-screen flex flex-col pt-8 shrink-0 relative overflow-y-auto"
  >
    <!-- Logo Area -->
    <div class="px-[30px] mb-[80px] flex items-center relative gap-[12px] h-[62px]">
      <img
        src="@/assets/images/CPIS_Logo.png"
        alt="CPIS Logo"
        class="w-[61px] h-[61px] object-contain shrink-0"
      />

      <div class="flex flex-col justify-center mt-[-2px]">
        <p
          class="mb-0 text-[#d9a047] text-[18px] font-['Poppins'] font-semibold leading-[1.1] tracking-tight"
        >
          Claims Processing
        </p>
        <p
          class="text-[#2d632d] text-[11px] font-['Poppins'] font-medium leading-[1.1] tracking-tight mt-[2px]"
        >
          Information System
        </p>
        <p
          class="text-[#767676] text-[7.5px] font-['Poppins'] font-normal tracking-[0.5px] mt-[3px]"
        >
          Marawi Compensation Board
        </p>
      </div>

      <div
        class="absolute right-[10px] top-[30px] opacity-[0.2] -rotate-90 origin-right pointer-events-none"
      >
        <p
          class="font-['Poppins'] font-bold text-[8px] uppercase tracking-[1.5px] text-blue-700 whitespace-nowrap"
        >
          WORKFLOW
        </p>
      </div>

      <!-- Fingerprint background placeholder -->
      <div
        class="absolute flex items-center justify-center left-[190px] w-[90px] h-[90px] top-[-10px] opacity-[0.03] pointer-events-none z-0"
      >
        <div
          class="w-full h-full rounded-full border-[10px] border-dashed border-gray-400 rotate-12"
        ></div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 px-[26px] pt-8 flex flex-col gap-[18px]">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center gap-[22px] rounded-[6px] transition-colors duration-200 relative overflow-hidden h-[54px]"
        :class="[item.active ? 'bg-[#224E22] shadow-sm' : 'bg-[#F4F7F4] hover:bg-[#e8ece8]']"
      >
        <div class="flex items-center justify-center shrink-0 ml-[5px]">
          <img :src="item.icon" alt="icon" class="w-[46px] h-[43px]" />
        </div>
        <span
          class="font-['Poppins'] text-[15px] leading-none"
          :class="item.active ? 'text-white font-medium' : 'text-[#224E22] font-medium'"
          >{{ item.name }}</span
        >
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
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
</script>
