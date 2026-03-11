<script setup lang="ts">
import { PlusIcon, SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

defineOptions({ name: 'DataMigrationQueue' })

const stats = [
  { label: 'Total Batches', value: '124' },
  { label: 'In Progress', value: '24' },
  { label: 'Completed', value: '892' },
  { label: 'Failed Batches', value: '3' },
]

const columns = ['Batch ID', 'Upload Date', 'Records', 'Status', 'Action']

const tableData = [
  { batchId: 'BCH-2023-10-001', uploadDate: 'Oct 24, 2023 10:30 AM', records: '15,420', status: 'Validated' },
  { batchId: 'BCH-2023-10-001', uploadDate: 'Oct 24, 2023 10:30 AM', records: '850', status: 'Migration Error' },
  { batchId: 'BCH-2023-10-001', uploadDate: 'Oct 24, 2023 10:30 AM', records: '4,200', status: 'Migrated' },
  { batchId: 'BCH-2023-10-001', uploadDate: 'Oct 24, 2023 10:30 AM', records: '125', status: 'Validated' },
  { batchId: 'BCH-2023-10-001', uploadDate: 'Oct 24, 2023 10:30 AM', records: '9,800', status: 'Validated' },
]
</script>

<template>
  <main
    class="flex-1 w-full max-w-full px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px] flex flex-col gap-[16px] 2xl:gap-[20px]">
    <!-- Breadcrumb & Action Button Row -->
    <div class="flex flex-col md:flex-row items-center justify-between w-full mb-0 animate-fade-in-up gap-4 md:gap-0">
      <div
        class="flex items-center gap-[10px] bg-white px-[20px] 2xl:px-[24px] py-[6px] 2xl:py-[8px] rounded-[57px] border-[0.5px] border-[#a6a6a6] shadow-sm h-[34px] 2xl:h-[38px] w-full md:w-[140px] justify-center md:justify-start">
        <span
          class="text-[14px] 2xl:text-[16px] font-['Poppins'] text-[#171a1f] whitespace-nowrap leading-[20px]">Dashboard</span>
      </div>

      <button type="button"
        class="w-full md:w-auto h-[34px] 2xl:h-[38px] px-[20px] 2xl:px-[24px] rounded-[57px] flex items-center justify-center gap-2 text-[#171a1f] font-['Poppins'] text-[14px] 2xl:text-[16px] shadow-sm hover:bg-[#e0ece5] transition-colors"
        style="
          background-image:
            linear-gradient(90deg, rgb(238, 243, 240) 0%, rgb(238, 243, 240) 100%),
            linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
        ">
        <PlusIcon class="w-3.5 h-3.5 2xl:w-4 2xl:h-4 ml-[-6px]" />
        <span class="whitespace-nowrap">Start New Data Cleansing</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-[12px] 2xl:gap-[16px] w-full animate-fade-in-up">
      <div v-for="stat in stats" :key="stat.label"
        class="bg-white border-[0.458px] border-[rgba(203,171,88,0.5)] rounded-[6px] h-[85px] 2xl:h-[105px] flex items-center relative overflow-hidden">
        <div
          class="absolute left-0 top-[10%] bottom-[10%] w-[8px] 2xl:w-[10px] bg-[rgba(255,187,90,0.23)] rounded-r-[6px]">
        </div>
        <div class="flex flex-col pl-[22px] 2xl:pl-[28px]">
          <span class="font-['Poppins'] font-light text-[#4e090a] text-[13px] 2xl:text-[18px] leading-tight">{{
            stat.label }}</span>
          <span class="font-['Poppins'] font-normal text-black text-[16px] 2xl:text-[20px] leading-normal mt-[4px]">{{
            stat.value }}</span>
        </div>
      </div>
    </div>

    <!-- The Main White Card -->
    <div
      class="bg-white rounded-[10px] shadow-sm border border-gray-100 pt-[24px] px-[16px] pb-[16px] w-full max-w-full animate-fade-in-up flex flex-col min-w-0"
      style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)">
      <!-- Card Header -->
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center relative px-0 md:px-[16px] pb-[16px] gap-6 lg:gap-4">
        <div class="flex flex-col relative w-full lg:w-auto pl-[16px] md:pl-0">
          <!-- Green left accent marker -->
          <div
            class="absolute left-0 md:left-[-32px] top-[6px] h-[24px] 2xl:h-[30px] w-[5px] bg-[#1a4a1a] rounded-r-[5px]">
          </div>

          <h2
            class="text-[20px] md:text-[24px] xl:text-[26px] 2xl:text-[30px] font-['Poppins'] text-black mb-1 capitalize leading-tight md:leading-[41px]">
            Migration Queue
          </h2>
          <p
            class="text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] font-['Poppins'] font-light text-black capitalize leading-normal w-full">
            Confirm All Mandatory Compliance Checks Before Authorization
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-[15px] w-full lg:w-auto lg:mr-[3%]">
          <div
            class="relative w-full md:w-[240px] 2xl:w-[285px] h-[34px] 2xl:h-[38px] rounded-[57px] border-[0.5px] border-[#a4a4a4] shrink-0"
            style="
              background-image:
                linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
                linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
            ">
            <input type="text" placeholder="Search files..."
              class="w-full h-full pl-[20px] 2xl:pl-[24px] pr-10 bg-transparent rounded-[57px] text-[14px] 2xl:text-[16px] font-['Poppins'] font-light text-[#171a1f] focus:outline-none" />
            <SearchIcon
              class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] 2xl:w-[18px] 2xl:h-[18px] text-[#202224] opacity-50"
              :stroke-width="1.5" />
          </div>
          <button type="button"
            class="w-full md:w-auto h-[34px] 2xl:h-[38px] px-[20px] 2xl:px-[24px] rounded-[57px] flex items-center justify-center font-['Poppins'] text-[14px] 2xl:text-[16px] text-[#171a1f] shrink-0"
            style="
              background-image:
                linear-gradient(90deg, rgb(238, 243, 240) 0%, rgb(238, 243, 240) 100%),
                linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
            ">
            Filter
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto custom-scrollbar w-full mt-0 pb-4 px-[16px]">
        <table class="w-full text-left border-collapse block md:table min-w-full md:min-w-[860px]">
          <thead class="hidden md:table-header-group">
            <tr class="bg-[#fafafa] border-b-[0.3px] border-[#b2b2b2]">
              <th v-for="col in columns" :key="col"
                class="py-[12px] 2xl:py-[14px] px-[16px] text-[13px] 2xl:text-[18px] font-['Poppins'] font-normal text-[#202224] uppercase whitespace-nowrap tracking-wide">
                {{ col }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in tableData" :key="idx"
              class="border-b border-[#e5e7eb] last:border-b-0 block md:table-row py-3 md:py-0">
              <td
                class="py-[16px] 2xl:py-[20px] px-[16px] text-[14px] 2xl:text-[18px] font-['Poppins'] font-normal text-[#202224] opacity-80 whitespace-nowrap block md:table-cell">
                <span class="md:hidden font-semibold opacity-100 mr-2">Batch ID:</span>
                {{ row.batchId }}
              </td>
              <td
                class="py-[16px] 2xl:py-[20px] px-[16px] text-[14px] 2xl:text-[18px] font-['Poppins'] font-normal text-[#202224] opacity-80 whitespace-nowrap block md:table-cell">
                <span class="md:hidden font-semibold opacity-100 mr-2">Upload Date:</span>
                {{ row.uploadDate }}
              </td>
              <td
                class="py-[16px] 2xl:py-[20px] px-[16px] text-[14px] 2xl:text-[18px] font-['Poppins'] font-normal text-[#202224] opacity-80 whitespace-nowrap block md:table-cell">
                <span class="md:hidden font-semibold opacity-100 mr-2">Records:</span>
                {{ row.records }}
              </td>
              <td class="py-[16px] 2xl:py-[20px] px-[16px] block md:table-cell">
                <span class="md:hidden font-semibold text-[14px] font-['Poppins'] text-[#202224] mr-2">Status:</span>
                <span
                  class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#a6a6a6] rounded-full px-[16px] 2xl:px-[20px] py-[3px] text-[12px] 2xl:text-[15px] font-['Poppins'] font-light text-[#1b1f25] whitespace-nowrap">
                  {{ row.status }}
                </span>
              </td>
              <td class="py-[16px] 2xl:py-[20px] px-[16px] block md:table-cell">
                <button type="button"
                  class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#a6a6a6] rounded-full px-[16px] 2xl:px-[20px] py-[3px] text-[12px] 2xl:text-[15px] font-['Poppins'] font-light text-[#1b1f25] whitespace-nowrap hover:bg-[#f5f5f5] transition-colors">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex flex-col md:flex-row items-center justify-between px-[16px] pt-[14px] gap-3 md:gap-0">
        <span class="text-[13px] 2xl:text-[16px] font-['Poppins'] font-light text-[#808080] leading-[20px]">Showing 1 to
          5 of 5 entries</span>
        <div class="flex items-center gap-[6px]">
          <span
            class="text-[13px] 2xl:text-[16px] font-['Poppins'] font-light text-[#808080] leading-[20px] mr-[6px]">Page
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


