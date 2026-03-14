<script setup lang="ts">
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  AlertTriangleIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  KeyRoundIcon,
  MoreVerticalIcon,
  DatabaseZapIcon,
} from 'lucide-vue-next'

defineOptions({ name: 'DataMigrationErrorLog' })

const steps = [
  { label: 'Migration Template', status: 'completed', active: true },
  { label: 'Migration', status: 'todo', active: false },
  { label: 'Migration Report', status: 'todo', active: false },
  { label: 'Store in Database', status: 'todo', active: false },
]

const columns = ['Docket Number', 'Claimant Name', 'Error Count', 'Status', 'Row #', 'Action']

const tableData = [
  { docketNumber: '07-04-2023-MCB-MC-0005', claimantName: 'Johnathan Miller', errorCount: '01', status: 'Error', rowNumber: '142' },
  { docketNumber: '07-04-2023-MCB-MC-0006', claimantName: 'Sarah Williams', errorCount: '05', status: 'Error', rowNumber: '219' },
  { docketNumber: '07-04-2023-MCB-MC-0007', claimantName: 'Robert Chen', errorCount: '02', status: 'Error', rowNumber: '405' },
  { docketNumber: '07-04-2023-MCB-MC-0008', claimantName: 'Elena Rodriguez', errorCount: '04', status: 'Error', rowNumber: '512' },
  { docketNumber: '07-04-2023-MCB-MC-0008', claimantName: 'David Thompson', errorCount: '04', status: 'Error', rowNumber: '601' },
]
</script>

<template>
  <main
    class="flex-1 w-full max-w-full px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px] flex flex-col gap-[16px] 2xl:gap-[20px]">

    <!-- Breadcrumb -->
    <div class="flex items-center w-full animate-fade-in-up">
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
    </div>

    <!-- Title -->
    <h1 class="text-[24px] md:text-[28px] 2xl:text-[32px] font-['Poppins'] font-normal text-[#202224] leading-tight">
      Migration Error Log
    </h1>

    <!-- Alert Banner -->
    <div
      class="w-full bg-white border-[0.5px] border-[rgba(203,171,88,0.6)] rounded-[8px] px-[18px] 2xl:px-[22px] py-[14px] 2xl:py-[16px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[12px] animate-fade-in-up"
      style="box-shadow: 0px 2px 16px 0px rgba(203,171,88,0.08)">
      <div class="flex items-start gap-[12px]">
        <AlertTriangleIcon class="w-[20px] h-[20px] text-[#d97706] shrink-0 mt-[2px]" :stroke-width="1.5" />
        <div>
          <p class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-medium text-[#d97706] leading-snug">Migration
            Process Incomplete</p>
          <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#6b7280] leading-snug mt-[2px]">The
            recent data migration completed with errors. 5 records failed to transfer and require manual review or
            correction before retrying.</p>
        </div>
      </div>
      <button type="button"
        class="shrink-0 h-[32px] 2xl:h-[36px] px-[14px] 2xl:px-[18px] border-[0.5px] border-[#a6a6a6] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#171a1f] bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">
        Action Required
      </button>
    </div>

    <!-- Step Tabs -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-[12px] 2xl:gap-[16px] w-full animate-fade-in-up">
      <div v-for="step in steps" :key="step.label"
        class="bg-white border-[0.458px] border-[rgba(203,171,88,0.5)] rounded-[6px] py-[14px] 2xl:py-[18px] px-[16px] 2xl:px-[20px] flex flex-col items-center gap-[8px]">
        <span :class="step.active ? 'text-[#b91c1c]' : 'text-[#4e090a]'"
          class="font-['Poppins'] font-light text-[13px] 2xl:text-[16px] text-center">{{ step.label }}</span>
        <span v-if="step.status === 'completed'"
          class="inline-flex items-center justify-center bg-[#224e22] text-white rounded-full px-[18px] 2xl:px-[24px] py-[4px] text-[12px] 2xl:text-[14px] font-['Poppins'] font-medium whitespace-nowrap shadow-sm">Completed</span>
        <span v-else
          class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#a6a6a6] rounded-full px-[18px] 2xl:px-[24px] py-[4px] text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#1b1f25] whitespace-nowrap">To
          Do</span>
      </div>
    </div>

    <!-- Stats Row — single unified card -->
    <div class="bg-white border-[0.5px] border-[#e5e7eb] rounded-[8px] w-full animate-fade-in-up flex overflow-hidden"
      style="box-shadow: 0px 2px 8px rgba(0,0,0,0.04)">
      <!-- Valid Records (left half) -->
      <div class="flex-1 p-[20px] 2xl:p-[24px]">
        <div class="flex items-start justify-between mb-[8px]">
          <p class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#6b7280]">Valid Records</p>
          <CheckCircleIcon class="w-[22px] h-[22px] text-[#9ca3af] shrink-0" :stroke-width="1" />
        </div>
        <p class="text-[30px] 2xl:text-[36px] font-['Poppins'] font-normal text-[#202224] leading-none mb-[8px]">12,452
        </p>
        <p class="flex items-center gap-[5px] text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#6b7280]">
          <CheckCircleIcon class="w-[13px] h-[13px]" :stroke-width="1.5" />
          Ready for migration
        </p>
      </div>

      <!-- Vertical Divider -->
      <div class="w-[1px] bg-[#f0f0f0] my-[16px]"></div>

      <!-- Invalid Records (right half) -->
      <div class="flex-1 p-[20px] 2xl:p-[24px]">
        <div class="flex items-start justify-between mb-[8px]">
          <p class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-medium text-[#d0272a]">Invalid Records</p>
          <AlertCircleIcon class="w-[22px] h-[22px] text-[#d0272a] shrink-0" :stroke-width="1" />
        </div>
        <p class="text-[30px] 2xl:text-[36px] font-['Poppins'] font-normal text-[#d0272a] leading-none mb-[8px]">38</p>
        <p class="flex items-center gap-[5px] text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#d0272a]">
          <AlertCircleIcon class="w-[13px] h-[13px]" :stroke-width="1.5" />
          Action required to proceed
        </p>
      </div>
    </div>

    <!-- Invalid Records Table Card -->
    <div
      class="bg-white rounded-[10px] border border-gray-100 pt-[20px] px-[16px] pb-[16px] w-full flex flex-col min-w-0 flex-1"
      style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)">
      <!-- Card Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-[16px] gap-[12px]">
        <div class="relative pl-[14px] md:pl-[16px]">
          <div
            class="absolute left-0 md:left-[-2px] top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]">
          </div>
          <h2 class="text-[18px] md:text-[22px] 2xl:text-[26px] font-['Poppins'] font-normal text-black">Invalid Records
          </h2>
          <p class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280]">Showing Critical Validation
            Failures For Manual Review</p>
        </div>
        <div class="flex items-center gap-[10px] shrink-0">
          <button type="button"
            class="h-[32px] 2xl:h-[36px] px-[14px] 2xl:px-[18px] border-[0.5px] border-[#a6a6a6] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#171a1f] bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">Filter
            Errors</button>
          <button type="button"
            class="h-[32px] 2xl:h-[36px] px-[14px] 2xl:px-[18px] border-[0.5px] border-[#a6a6a6] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#171a1f] bg-white hover:bg-gray-50 transition-colors whitespace-nowrap">Clear
            Filter</button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto custom-scrollbar w-full pb-3">
        <table class="w-full text-left border-collapse block md:table min-w-full md:min-w-[720px]">
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
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Claimant Name</span>
                <span class="opacity-80">{{ row.claimantName }}</span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Error Count</span>
                <span class="opacity-80">{{ row.errorCount }}</span>
              </td>
              <td class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px]">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Status</span>
                <span
                  class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#a6a6a6] rounded-full px-[14px] py-[2px] text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#1b1f25] whitespace-nowrap leading-none">
                  {{ row.status }}
                </span>
              </td>
              <td
                class="flex md:table-cell justify-between items-center py-[12px] md:py-[14px] 2xl:py-[18px] border-b border-gray-50 md:border-0 last:border-0 md:px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] whitespace-nowrap">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Row #</span>
                <span class="opacity-80">{{ row.rowNumber }}</span>
              </td>
              <td class="flex md:table-cell justify-between items-center pt-[16px] pb-[4px] md:py-[14px] 2xl:py-[18px] md:px-[16px]">
                <span class="md:hidden font-medium text-gray-500 text-[11px] uppercase tracking-wider">Action</span>
                <div class="flex items-center gap-[8px]">
                  <button type="button" aria-label="View"
                    class="w-[28px] h-[28px] flex items-center justify-center text-[#6b7280] hover:text-[#374151] transition-colors">
                    <EyeIcon class="w-[15px] h-[15px]" :stroke-width="1.5" />
                  </button>
                  <button type="button" aria-label="Edit"
                    class="w-[28px] h-[28px] flex items-center justify-center text-[#6b7280] hover:text-[#374151] transition-colors">
                    <KeyRoundIcon class="w-[15px] h-[15px]" :stroke-width="1.5" />
                  </button>
                  <button type="button" aria-label="More"
                    class="w-[28px] h-[28px] flex items-center justify-center text-[#6b7280] hover:text-[#374151] transition-colors">
                    <MoreVerticalIcon class="w-[15px] h-[15px]" :stroke-width="1.5" />
                  </button>
                </div>
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
            1 of 2</span>
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

    <!-- Generate Migration Template Button -->
    <button type="button"
      class="w-full h-[54px] 2xl:h-[64px] bg-[#1d4a1d] hover:bg-[#163b16] text-white rounded-[6px] flex items-center justify-center gap-[10px] font-['Poppins'] text-[16px] 2xl:text-[18px] font-normal transition-colors shadow-sm shrink-0">
      <DatabaseZapIcon class="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px] opacity-80" />
      Generate Migration Template
    </button>
  </main>
</template>


