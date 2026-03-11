<template>
  <main
    class="flex-1 w-full max-w-full px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px] flex flex-col gap-[16px] 2xl:gap-[20px]"
  >
    <!-- Breadcrumb -->
    <div class="flex items-center w-full animate-fade-in-up">
      <div
        class="flex items-center gap-[6px] bg-white px-[16px] 2xl:px-[20px] h-[34px] 2xl:h-[38px] rounded-[57px] border-[0.5px] border-[#a6a6a6] shadow-sm"
      >
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6]">Dashboard</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6]">Data Cleansing</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6]">data validation</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6]">migration template</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#171a1f]">Finalize Claimant Data</span>
      </div>
    </div>

    <!-- Title -->
    <h1 class="text-[24px] md:text-[28px] 2xl:text-[32px] font-['Poppins'] font-normal text-[#202224] leading-tight">
      Data Validation
    </h1>

    <!-- Step Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-[10px] 2xl:gap-[12px] w-full animate-fade-in-up">
      <div
        v-for="step in steps"
        :key="step.label"
        class="bg-white rounded-[4px] border-l-[6px] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-[8px] py-[14px] 2xl:py-[18px] px-[10px]"
        :style="{ borderLeftColor: '#FCEFDB' }"
      >
        <span
          class="font-['Poppins'] font-normal text-[13px] 2xl:text-[16px] text-center text-[#4e090a] leading-tight px-1"
        >{{ step.label }}</span>
        <span
          v-if="step.status === 'completed'"
          class="inline-flex items-center justify-center bg-[#1a5319] text-white rounded-full px-[16px] 2xl:px-[20px] py-[4px] text-[11px] 2xl:text-[13px] font-['Poppins'] whitespace-nowrap"
        >Completed</span>
        <span
          v-else
          class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#d1d5db] rounded-full px-[16px] 2xl:px-[20px] py-[4px] text-[11px] 2xl:text-[13px] font-['Poppins'] text-[#171a1f] whitespace-nowrap"
        >To Do</span>
      </div>
    </div>

    <!-- Main White Card -->
    <div
      class="bg-white rounded-[10px] border border-gray-100 pt-[24px] px-[16px] pb-[16px] w-full flex flex-col min-w-0 flex-1"
      style="box-shadow: 8px 8px 72px 0px rgba(0,0,0,0.05)"
    >
      <!-- Card Title -->
      <div class="flex items-center relative pl-[14px] md:pl-[16px] mb-[16px] 2xl:mb-[20px]">
        <div class="absolute left-0 md:left-[-2px] top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]"></div>
        <h2 class="text-[18px] md:text-[22px] 2xl:text-[26px] font-['Poppins'] font-normal text-black">Migration Template</h2>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto custom-scrollbar w-full pb-3">
        <table class="w-full text-left border-collapse" style="min-width: 860px">
          <thead>
            <tr class="bg-[#fafafa] border-b-[0.3px] border-[#b2b2b2]">
              <th
                v-for="col in columns"
                :key="col"
                class="py-[12px] 2xl:py-[14px] px-[16px] text-[12px] 2xl:text-[15px] font-['Poppins'] font-normal text-[#202224] uppercase whitespace-nowrap tracking-wide"
              >{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, idx) in tableData"
              :key="idx"
              class="border-b-[0.3px] border-[#e5e7eb] last:border-b-0"
            >
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.docketNumber }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.names }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.barangay }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.gender }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.age }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.birthdate }}</td>
              <td class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">{{ row.maa }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex flex-col md:flex-row items-center justify-between px-[4px] pt-[14px] gap-3 md:gap-0">
        <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#808080]">Showing 1 to 5 of 5 entries</span>
        <div class="flex items-center gap-[6px]">
          <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#808080] mr-[6px]">Page 1 of 12</span>
          <button type="button" aria-label="Previous page" class="w-[26px] h-[26px] flex items-center justify-center border-[0.5px] border-[#565e6d] rounded-[2px] bg-white hover:bg-gray-50 transition-colors">
            <ChevronLeftIcon class="w-[14px] h-[14px] text-[#565e6d]" :stroke-width="1.5" />
          </button>
          <button type="button" aria-label="Next page" class="w-[26px] h-[26px] flex items-center justify-center border-[0.5px] border-[#565e6d] rounded-[2px] bg-white hover:bg-gray-50 transition-colors">
            <ChevronRightIcon class="w-[14px] h-[14px] text-[#565e6d]" :stroke-width="1.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Submit To IT Unit Button -->
    <button
      type="button"
      @click="showSuccessModal = true"
      class="w-full h-[54px] 2xl:h-[64px] bg-[#1d4a1d] hover:bg-[#163b16] text-white rounded-[6px] flex items-center justify-center gap-[10px] font-['Poppins'] text-[16px] 2xl:text-[18px] font-normal transition-colors shadow-sm shrink-0"
    >
      <SendIcon class="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px] opacity-80" />
      Submit To IT Unit
    </button>

    <!-- Submission Successful Modal -->
    <Teleport to="body">
      <div
        v-if="showSuccessModal"
        class="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center px-4"
        @click.self="showSuccessModal = false"
      >
        <div class="bg-white rounded-[12px] w-full max-w-[500px] 2xl:max-w-[560px] shadow-2xl p-[32px] 2xl:p-[40px] flex flex-col items-center animate-fade-in-up">

          <!-- Success Icon -->
          <div class="w-[72px] h-[72px] 2xl:w-[80px] 2xl:h-[80px] border-[1.5px] border-[#202224] rounded-[8px] flex items-center justify-center mb-[20px] 2xl:mb-[24px]">
            <CheckCircleIcon class="w-[36px] h-[36px] 2xl:w-[40px] 2xl:h-[40px] text-[#202224]" :stroke-width="1.5" />
          </div>

          <!-- Title -->
          <h3 class="text-[20px] 2xl:text-[24px] font-['Poppins'] font-semibold text-[#202224] mb-[8px] text-center">Submission Successful</h3>
          <p class="text-[13px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280] text-center mb-[24px] 2xl:mb-[28px] max-w-[380px]">
            Your migration template has been successfully transmitted to the IT Unit. The data is currently queued for automated validation and import.
          </p>

          <!-- Submission Details -->
          <div class="w-full bg-white border-[0.5px] border-[#e5e7eb] rounded-[8px] overflow-hidden mb-[20px] 2xl:mb-[24px]">
            <div class="flex items-center relative pl-[16px] py-[14px] 2xl:py-[16px] border-b-[0.5px] border-[#e5e7eb] bg-[#fafafa]">
              <div class="absolute left-0 top-[50%] -translate-y-1/2 h-[20px] w-[4px] bg-[#234f23] rounded-r-[4px]"></div>
              <span class="text-[14px] 2xl:text-[16px] font-['Poppins'] font-medium text-[#202224]">Submission Details</span>
            </div>
            <div class="divide-y divide-[#f3f4f6]">
              <div class="flex items-center justify-between px-[16px] py-[12px] 2xl:py-[14px]">
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280]">Batch Reference ID</span>
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#202224]">MIG-2023-10-24-0092</span>
              </div>
              <div class="flex items-center justify-between px-[16px] py-[12px] 2xl:py-[14px]">
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280]">Date & Time of Submission</span>
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#202224]">October 24, 2023 • 14:35 EST</span>
              </div>
              <div class="flex items-center justify-between px-[16px] py-[12px] 2xl:py-[14px]">
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280]">Total Records Processed</span>
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] text-[#202224]">1,452 Employees</span>
              </div>
              <div class="flex items-center justify-between px-[16px] py-[12px] 2xl:py-[14px]">
                <span class="text-[12px] 2xl:text-[14px] font-['Poppins'] font-light text-[#6b7280]">Current Pipeline Status</span>
                <span class="inline-flex items-center justify-center bg-white border-[0.5px] border-[#a6a6a6] rounded-full px-[14px] py-[3px] text-[11px] 2xl:text-[13px] font-['Poppins'] text-[#1b1f25]">Pending IT Review</span>
              </div>
            </div>
          </div>

          <!-- Important Note -->
          <div class="w-full flex items-start gap-[10px] bg-[#f9fafb] border-[0.5px] border-[#e5e7eb] rounded-[8px] px-[14px] py-[12px] 2xl:py-[14px] mb-[24px] 2xl:mb-[28px]">
            <InfoIcon class="w-[16px] h-[16px] text-[#6b7280] shrink-0 mt-[1px]" :stroke-width="1.5" />
            <div>
              <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-medium text-[#202224] mb-[2px]">IMPORTANT NOTE</p>
              <p class="text-[11px] 2xl:text-[12px] font-['Poppins'] font-light text-[#6b7280] leading-relaxed">
                Please allow up to 24–48 business hours for the IT team to complete the full data validation checks. You will receive an automated email notification at submitter@cpis.internal once the records have been finalized in the production database.
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-[12px] w-full">
            <button
              type="button"
              @click="showSuccessModal = false"
              class="flex-1 h-[44px] 2xl:h-[50px] bg-[#1d4a1d] hover:bg-[#163b16] text-white rounded-[6px] flex items-center justify-center gap-[8px] font-['Poppins'] text-[13px] 2xl:text-[15px] font-normal transition-colors"
            >
              <ArrowLeftIcon class="w-[14px] h-[14px]" :stroke-width="1.5" />
              Return to Dashboard
            </button>
            <button
              type="button"
              class="flex-1 h-[44px] 2xl:h-[50px] bg-[#d97706] hover:bg-[#b45309] text-white rounded-[6px] flex items-center justify-center gap-[8px] font-['Poppins'] text-[13px] 2xl:text-[15px] font-normal transition-colors"
            >
              View Submission Details
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  SendIcon,
  CheckCircleIcon,
  InfoIcon,
  ArrowLeftIcon,
} from 'lucide-vue-next'

defineOptions({ name: 'DataValidationFinalizeClaimantData' })

const showSuccessModal = ref(false)

const steps = [
  { label: 'CSV File Uploaded', status: 'completed' },
  { label: 'Data Cleansing', status: 'completed' },
  { label: 'Data Validation', status: 'completed' },
  { label: 'Migration Template', status: 'completed' },
  { label: 'Finalize Claimant Data', status: 'completed' },
  { label: 'Submit to IT Unit', status: 'todo' },
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
