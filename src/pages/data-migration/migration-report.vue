<script setup lang="ts">
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DownloadIcon,
  ShieldCheckIcon,
} from 'lucide-vue-next'

defineOptions({ name: 'DataMigrationReport' })

const stats = [
  { label: 'Total Records', value: '145,200' },
  { label: 'Successfully Migrated', value: '145,185' },
  { label: 'Failed Records', value: '15' },
  { label: 'Completion Time', value: '02h 15m' },
]

const columns = ['Docket Number', 'Names Based on VCAF', 'Barangay(s)', 'Gender', 'Age', 'Birthdate', 'Number of MAA']

const tableData = Array.from({ length: 11 }, () => ({
  docketNumber: '07-04-2023-MCB-MC-0001',
  names: 'JUNALYN ABDULLAH GUNTING',
  barangay: 'SABALA MANAO',
  gender: 'F',
  age: '30',
  birthdate: '3/27/1993',
  maa: '1 MAA',
}))
</script>

<template>
  <main
    class="flex-1 w-full max-w-full px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px] flex flex-col gap-[16px] 2xl:gap-[20px]">

    <!-- Breadcrumb + Download Button Row -->
    <div
      class="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-[12px] animate-fade-in-up">
      <div
        class="flex items-center gap-[6px] bg-white px-[16px] 2xl:px-[20px] h-[34px] 2xl:h-[38px] rounded-[57px] border-[0.5px] border-[#a6a6a6] shadow-sm">
        <span
          class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6] whitespace-nowrap">Dashboard</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6] whitespace-nowrap">Data
          Cleansing</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#171a1f] whitespace-nowrap">Data
          Validation</span>
      </div>
      <button type="button"
        class="flex items-center gap-[8px] h-[36px] 2xl:h-[40px] px-[18px] 2xl:px-[22px] bg-[#1d4a1d] hover:bg-[#163b16] text-white rounded-[57px] text-[13px] 2xl:text-[15px] font-['Poppins'] font-normal transition-colors shadow-sm shrink-0">
        <DownloadIcon class="w-[14px] h-[14px] 2xl:w-[16px] 2xl:h-[16px]" :stroke-width="1.8" />
        Download Migration Report
      </button>
    </div>

    <!-- Title -->
    <h1 class="text-[24px] md:text-[28px] 2xl:text-[32px] font-['Poppins'] font-normal text-[#202224] leading-tight">
      Data Validation
    </h1>

    <!-- Success Alert Banner -->
    <div
      class="w-full bg-white border-[0.5px] border-[rgba(34,78,34,0.3)] rounded-[8px] px-[18px] 2xl:px-[22px] py-[14px] 2xl:py-[16px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[12px] animate-fade-in-up"
      style="box-shadow: 0px 2px 16px 0px rgba(34,78,34,0.06)">
      <div class="flex items-start gap-[12px]">
        <ShieldCheckIcon class="w-[20px] h-[20px] text-[#224e22] shrink-0 mt-[2px]" :stroke-width="1.5" />
        <div>
          <p class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-medium text-[#224e22] leading-snug">Migration
            Successfully Completed</p>
          <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#6b7280] leading-snug mt-[2px]">The
            scheduled data migration process has concluded. All critical systems are online and data integrity checks
            have passed with a 99.99% success rate.</p>
        </div>
      </div>
      <button type="button"
        class="shrink-0 h-[32px] 2xl:h-[36px] px-[14px] 2xl:px-[18px] border-[0.5px] border-[#a6a6a6] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#171a1f] bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
        Action Required
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-[12px] 2xl:gap-[16px] w-full animate-fade-in-up">
      <div v-for="stat in stats" :key="stat.label"
        class="bg-white border-[0.458px] border-[rgba(203,171,88,0.5)] rounded-[6px] py-[14px] 2xl:py-[18px] px-[16px] 2xl:px-[20px] flex flex-col relative overflow-hidden h-[85px] 2xl:h-[105px] justify-center">
        <div class="absolute left-0 top-[10%] bottom-[10%] w-[6px] bg-[rgba(255,187,90,0.23)] rounded-r-[4px]"></div>
        <span class="font-['Poppins'] font-light text-[#4e090a] text-[12px] 2xl:text-[15px] mb-[4px] leading-tight">{{ stat.label
          }}</span>
        <span class="font-['Poppins'] font-normal text-black text-[18px] 2xl:text-[22px] leading-tight mt-[2px]">{{ stat.value
          }}</span>
      </div>
    </div>

    <!-- Execution Summary -->
    <div class="bg-white rounded-[10px] border border-gray-100 p-[20px] 2xl:p-[24px] w-full animate-fade-in-up"
      style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)">
      <div class="flex items-center relative pl-[14px] md:pl-[16px] mb-[12px] 2xl:mb-[14px]">
        <div
          class="absolute left-0 md:left-[-2px] top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]">
        </div>
        <h2 class="text-[16px] md:text-[18px] 2xl:text-[22px] font-['Poppins'] font-normal text-black">Execution Summary
        </h2>
      </div>
      <p class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#4b5563] leading-relaxed">
        Transformation scripts successfully formatted 99.99% of the payload for the new system schema. The 15 records
        that failed to migrate were flagged due to schema validation errors, specifically missing mandatory 'Contact
        Email' fields which are now strictly enforced.
      </p>
    </div>

    <!-- Migration Template Table Card -->
    <div
      class="bg-white rounded-[10px] border border-gray-100 pt-[20px] px-[16px] pb-[16px] w-full flex flex-col min-w-0 flex-1"
      style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)">
      <div class="flex items-center relative pl-[14px] md:pl-[16px] mb-[16px]">
        <div
          class="absolute left-0 md:left-[-2px] top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]">
        </div>
        <h2 class="text-[18px] md:text-[22px] 2xl:text-[26px] font-['Poppins'] font-normal text-black">Migration
          Template</h2>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto custom-scrollbar w-full pb-3">
        <table class="w-full text-left border-collapse block md:table min-w-full md:min-w-[860px]">
          <thead class="hidden md:table-header-group">
            <tr class="bg-[#fafafa] border-b-[0.3px] border-[#b2b2b2]">
              <th v-for="col in columns" :key="col"
                class="py-[12px] 2xl:py-[14px] px-[16px] text-[12px] 2xl:text-[16px] font-['Poppins'] font-normal text-[#202224] uppercase whitespace-nowrap tracking-wide">
                {{ col }}</th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            <tr v-for="(row, idx) in tableData" :key="idx" 
              class="block md:table-row bg-white border border-gray-100 md:border-b-[0.3px] md:border-[#e5e7eb] last:border-b-0 rounded-[10px] md:rounded-none mb-4 md:mb-0 p-4 md:p-0 shadow-sm md:shadow-none">
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Docket Number</span>
                <span class="opacity-80">{{ row.docketNumber }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Names Based on VCAF</span>
                <span class="opacity-80">{{ row.names }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Barangay(s)</span>
                <span class="opacity-80">{{ row.barangay }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Gender</span>
                <span class="opacity-80">{{ row.gender }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Age</span>
                <span class="opacity-80">{{ row.age }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Birthdate</span>
                <span class="opacity-80">{{ row.birthdate }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Number of MAA</span>
                <span class="opacity-80">{{ row.maa }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex flex-col md:flex-row items-center justify-between px-[4px] pt-[14px] gap-3 md:gap-0">
        <span class="text-[12px] 2xl:text-[16px] font-['Poppins'] font-light text-[#808080] leading-[20px]">Showing 1 to
          5 of 5 entries</span>
        <div class="flex items-center gap-[6px]">
          <span
            class="text-[12px] 2xl:text-[16px] font-['Poppins'] font-light text-[#808080] leading-[20px] mr-[6px]">Page
            1 of 12</span>
          <button type="button" aria-label="Previous page"
            class="w-[26px] h-[26px] flex items-center justify-center border-[0.5px] border-[#565e6d] rounded-[2px] bg-white hover:bg-gray-50 transition-colors">
            <ChevronLeftIcon class="w-[14px] h-[14px] text-[#565e6d]" :stroke-width="1.5" />
          </button>
          <button type="button" aria-label="Next page"
            class="w-[26px] h-[26px] flex items-center justify-center border-[0.5px] border-[#565e6d] rounded-[2px] bg-white hover:bg-gray-50 transition-colors">
            <ChevronRightIcon class="w-[14px] h-[14px] text-[#565e6d]" :stroke-width="1.5" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
