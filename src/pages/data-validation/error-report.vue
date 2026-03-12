<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronRight as ChevronRightIcon,
  TriangleAlert as TriangleAlertIcon,
  CheckCircle2 as CheckCircle2Icon,
  AlertCircle as AlertCircleIcon,
  Eye as EyeIcon,
  Wrench as WrenchIcon,
  MoreVertical as MoreVerticalIcon,
  Settings2 as SettingsIcon,
} from 'lucide-vue-next'
import ValidationErrorModal from '@/components/modals/ValidationErrorModal.vue'

const isValidationModalOpen = ref(false)

const tableData = [
  { docket: '07-04-2023-MCB-MC-0005', name: 'Johnathan Miller', errors: '01', rowNum: '142' },
  { docket: '07-04-2023-MCB-MC-0006', name: 'Sarah Williams', errors: '05', rowNum: '218' },
  { docket: '07-04-2023-MCB-MC-0007', name: 'Robert Chen', errors: '02', rowNum: '405' },
  { docket: '07-04-2023-MCB-MC-0008', name: 'Elena Rodriguez', errors: '04', rowNum: '512' },
  { docket: '07-04-2023-MCB-MC-0009', name: 'David Thompson', errors: '04', rowNum: '601' },
]
</script>

<template>
  <main class="flex-1 w-full px-4 md:px-6 2xl:px-10 pt-5 2xl:pt-6 pb-8 mx-auto">
    <!-- Breadcrumb row -->
    <div class="flex items-center w-full mb-6 lg:mb-10 animate-fade-in-up">
      <div
        class="flex items-center gap-1.5 lg:gap-2 bg-white px-3 lg:px-5 py-1 rounded-[57px] border-[0.5px] border-[#d1d5db] shadow-sm h-[32px] lg:h-[36px]">
        <span class="text-[13px] lg:text-[16px] font-light text-[#A7A6A6] whitespace-nowrap">Dashboard</span>
        <ChevronRightIcon class="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-[#808080]" stroke-width="1.5" />
        <span class="text-[13px] lg:text-[16px] font-light text-[#A7A6A6] whitespace-nowrap">Data Cleansing</span>
        <ChevronRightIcon class="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-[#808080]" stroke-width="1.5" />
        <span class="text-[13px] lg:text-[16px] font-light text-[#171A1F] whitespace-nowrap capitalize">Data
          Validation</span>
      </div>
    </div>

    <!-- Vertical Spacer -->
    <div class="h-2 md:h-4 w-full"></div>

    <h2
      class="text-[22px] md:text-[24px] lg:text-[28px] font-Poppins text-[#202224] mb-6 lg:mb-10 leading-tight font-medium tracking-tight">
      Data Validation
    </h2>

    <!-- Vertical Spacer -->
    <div class="h-2 md:h-4 w-full"></div>

    <!-- Layout Container -->
    <div class="w-full flex flex-col animate-fade-in-up">
      <!-- Warning Banner -->
      <div
        class="w-full bg-[#fefdf4] border border-[#f5ead6] rounded-[8px] p-4 flex flex-col lg:flex-row items-center lg:items-start justify-between shadow-sm gap-4">
        <div class="flex items-start gap-3 lg:gap-4">
          <TriangleAlertIcon class="w-4 h-4 lg:w-5 lg:h-5 text-[#b45309] mt-[2px] shrink-0" stroke-width="2" />
          <div class="flex flex-col gap-1 text-center sm:text-left">
            <h4 class="text-[15px] lg:text-[18px] font-normal text-[#74331D]">
              Dataset validation failed
            </h4>
            <p class="text-[13px] lg:text-[16px] text-[#74331D] font-light text-center sm:text-left">
              Some records contain critical errors that must be resolved before the data can
              be finalized for processing.
            </p>
          </div>
        </div>
        <button
          class="bg-[#f3f4f6] text-[#171A1F] text-[13px] lg:text-[16px] font-normal leading-[16px] lg:leading-[20px] px-3 lg:px-4 py-1.5 rounded-6 hover:bg-[#e5e7eb] transition-colors whitespace-nowrap w-full lg:w-auto">
          Action Required
        </button>
      </div>

      <!-- Vertical Spacer -->
      <div class="h-6 md:h-8 w-full"></div>

      <!-- Step Progress Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4 w-full">
        <!-- Card 1 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            CSV File Uploaded
          </h5>
          <div
            class="bg-[#1a5319] text-white text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-5 2xl:px-6 py-1.5 2xl:py-2 rounded-full text-center">
            Completed
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            Data Cleansing
          </h5>
          <div
            class="bg-[#1a5319] text-white text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-5 2xl:px-6 py-1.5 2xl:py-2 rounded-full text-center">
            Completed
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            Data Validation
          </h5>
          <div
            class="bg-[#ef4444] text-white text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-5 2xl:px-6 py-1.5 2xl:py-2 rounded-full text-center">
            Validation Error
          </div>
        </div>
        <!-- Card 4 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            Migration Template
          </h5>
          <div
            class="bg-white text-[#171A1F] text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-6 2xl:px-8 py-1.5 2xl:py-2 rounded-full border border-[#d1d5db] text-center">
            To Do
          </div>
        </div>
        <!-- Card 5 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            Finalize Claimant Data
          </h5>
          <div
            class="bg-white text-[#171A1F] text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-6 2xl:px-8 py-1.5 2xl:py-2 rounded-full border border-[#d1d5db] text-center">
            To Do
          </div>
        </div>
        <!-- Card 6 -->
        <div
          class="min-h-[110px] lg:h-[132px] bg-white rounded-2 border-l-8 border-l-[#FCEFDB] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center gap-2 lg:gap-3 p-3 lg:p-4">
          <h5
            class="text-[15px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#4E090A] mb-0 text-center px-1 lg:px-2 leading-tight">
            Submit to IT Unit
          </h5>
          <div
            class="bg-white text-[#171A1F] text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal leading-[16px] 2xl:leading-[20px] px-4 xl:px-6 2xl:px-8 py-1.5 2xl:py-2 rounded-full border border-[#d1d5db] text-center">
            To Do
          </div>
        </div>
      </div>

      <!-- Vertical Spacer -->
      <div class="h-6 md:h-8 w-full"></div>

      <!-- Metric Cards row -->
      <div class="flex flex-col lg:flex-row w-full gap-4 lg:gap-6">
        <!-- Valid Records -->
        <div
          class="flex-1 bg-white rounded-3 border border-[#f3f4f6] p-4 lg:p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div class="flex justify-between items-start mb-2 lg:mb-3">
            <h4 class="text-[15px] lg:text-[17px] font-semibold text-[#224E22]">
              Valid Records
            </h4>
            <div class="bg-[#224E22] rounded-full p-1">
              <CheckCircle2Icon class="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
            </div>
          </div>
          <p
            class="text-[32px] md:text-[38px] lg:text-[45px] font-semibold text-[#1D4A1D] leading-[1.1] lg:leading-[36px] mb-3 lg:mb-4 tracking-tighter">
            12,452
          </p>
          <div class="flex items-center gap-1.5">
            <CheckCircle2Icon class="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-[#1a5319]" />
            <span class="text-[12px] lg:text-[14px] text-[#1a5319] font-medium">Ready for migration</span>
          </div>
        </div>

        <!-- Invalid Records -->
        <div
          class="flex-1 bg-white rounded-3 border border-[#f3f4f6] p-4 lg:p-6 shadow-sm flex flex-col relative overflow-hidden">
          <div class="flex justify-between items-start mb-2 lg:mb-3">
            <h4 class="text-[15px] lg:text-[17px] font-semibold text-[#dc2626]">
              Invalid Records
            </h4>
            <div class="bg-[#dc2626] rounded-full p-1">
              <AlertCircleIcon class="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
            </div>
          </div>
          <p
            class="text-[32px] md:text-[38px] lg:text-[45px] font-semibold text-[#BF1300] leading-[1.1] lg:leading-[36px] mb-3 lg:mb-4 tracking-tighter">
            38
          </p>
          <div class="flex items-center gap-1.5">
            <AlertCircleIcon class="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-[#dc2626]" />
            <span class="text-[12px] lg:text-[14px] text-[#dc2626] font-medium">Action required to proceed</span>
          </div>
        </div>
      </div>

      <!-- Vertical Spacer -->
      <div class="h-4 md:h-6 w-full"></div>

      <!-- Invalid Records Data Table -->
      <div
        class="w-full bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col pt-8 mb-10 shadow-[0_4px_40px_rgba(0,0,0,0.03)]">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start px-8 mb-8 relative gap-4">
          <div class="absolute left-[-2px] h-8 w-1.5 bg-[#224E22] rounded-r-1.5"></div>
          <div>
            <h3
              class="text-[18px] md:text-[20px] lg:text-[24px] font-Poppins text-[#1F2937] mb-1 ml-[10px] tracking-tight font-semibold">
              Invalid Records
            </h3>
            <p class="text-[12px] lg:text-[14px] text-[#6B7280] ml-[10px] font-normal">
              Showing Critical Validation Failures For Manual Review
            </p>
          </div>
          <div class="flex items-center gap-3 w-full sm:w-auto">
            <button
              class="bg-white border border-[#e5e7eb] rounded-6 px-5 py-2 text-[13px] lg:text-[16px] font-normal leading-[16px] lg:leading-[20px] text-[#171A1F] hover:bg-[#f3f4f6] transition-colors flex-1 sm:flex-none">
              Filter Errors
            </button>
            <button
              class="bg-[#f3f4f6] rounded-6 px-5 py-2 text-[13px] lg:text-[16px] font-normal leading-[16px] lg:leading-[20px] text-[#171A1F] hover:bg-[#e5e7eb] transition-colors flex-1 sm:flex-none">
              Clear Filter
            </button>
          </div>
        </div>

        <!-- Table Columns (Hidden on Mobile) -->
        <div class="hidden lg:flex items-center w-full px-8 py-4 border-y border-[#f3f4f6] bg-[#fafafa]">
          <div class="w-[25%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] uppercase">
            Docket Number
          </div>
          <div class="w-[20%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] uppercase">
            Claimant Name
          </div>
          <div
            class="w-[15%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] text-center uppercase">
            Error Count
          </div>
          <div
            class="w-[15%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] text-center uppercase">
            Status
          </div>
          <div
            class="w-[10%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] text-center uppercase">
            Row #
          </div>
          <div
            class="w-[15%] text-[13px] xl:text-[15px] 2xl:text-[18px] font-normal text-[#202224] text-center uppercase">
            Action
          </div>
        </div>

        <!-- Table Rows -->
        <div class="flex flex-col px-8">
          <template v-for="(row, idx) in tableData" :key="idx">
            <!-- Desktop Row -->
            <div class="hidden lg:flex items-center w-full py-6 border-b border-[#f3f4f6] relative">
              <div
                class="w-[25%] text-[13px] xl:text-[15px] 2xl:text-[18px] text-[#202224] font-normal leading-tight xl:leading-[20px]">
                {{ row.docket }}
              </div>
              <div
                class="w-[20%] text-[13px] xl:text-[15px] 2xl:text-[18px] text-[#202224] font-normal leading-tight xl:leading-[20px]">
                {{ row.name }}
              </div>
              <div
                class="w-[15%] text-[13px] xl:text-[15px] 2xl:text-[18px] text-[#202224] font-normal leading-tight xl:leading-[20px] text-center">
                {{ row.errors }}
              </div>
              <div class="w-[15%] flex justify-center">
                <span
                  class="bg-white border border-[#fca5a5] text-[#1B1F25] text-[12px] xl:text-[14px] 2xl:text-[15px] font-light px-3 xl:px-6 py-0.5 xl:py-1 rounded-6 text-center">Error</span>
              </div>
              <div
                class="w-[10%] text-[13px] xl:text-[15px] 2xl:text-[18px] text-[#202224] font-normal leading-tight xl:leading-[20px] text-center">
                {{ row.rowNum }}
              </div>
              <div class="w-[15%] flex justify-center items-center gap-3">
                <div
                  class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]">
                  <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                </div>
                <div
                  @click="isValidationModalOpen = true"
                  class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]">
                  <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                </div>
                <div class="w-8 h-8 flex items-center justify-center cursor-pointer">
                  <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af]" />
                </div>
              </div>
            </div>

            <!-- Mobile Card View -->
            <div class="flex lg:hidden flex-col w-full py-6 border-b border-[#f3f4f6] gap-4">
              <div class="flex justify-between items-center text-center">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Docket</span>
                <span class="text-[14px] md:text-[16px] text-[#202224] font-normal">
                  {{ row.docket }}
                </span>
              </div>
              <div class="flex justify-between items-center text-center">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Claimant</span>
                <span class="text-[14px] md:text-[16px] text-[#202224] font-normal">
                  {{ row.name }}
                </span>
              </div>
              <div class="flex justify-between items-center text-center">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Errors</span>
                <span class="text-[14px] md:text-[16px] text-[#202224] font-normal">
                  {{ row.errors }}
                </span>
              </div>
              <div class="flex justify-between items-center text-center">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Status</span>
                <span
                  class="bg-white border border-[#fca5a5] text-[#1B1F25] text-[12px] md:text-[14px] font-light px-3 md:px-4 py-0.5 rounded-6 text-center">Error</span>
              </div>
              <div class="flex justify-between items-center text-center">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Row #</span>
                <span class="text-[14px] md:text-[16px] text-[#202224] font-normal">
                  {{ row.rowNum }}
                </span>
              </div>
              <div class="flex justify-between items-center pt-2 border-t border-dashed border-[#f3f4f6]">
                <span class="text-[12px] font-medium text-[#9ca3af] uppercase">Action</span>
                <div class="flex items-center gap-3">
                  <EyeIcon class="w-5 h-5 text-[#6b7280]" />
                  <WrenchIcon
                    class="w-5 h-5 text-[#6b7280] cursor-pointer"
                    @click="isValidationModalOpen = true"
                  />
                  <MoreVerticalIcon class="w-5 h-5 text-[#9ca3af]" />
                </div>
              </div>
            </div>
          </template>

          <!-- Footer Pagination -->
          <div class="flex flex-col sm:flex-row justify-between items-center py-6 gap-4 border-t border-[#f3f4f6]">
            <p class="text-[12px] lg:text-[13px] text-[#9ca3af] font-light">
              Showing 1 to 5 of 5 entries
            </p>
            <div class="flex items-center gap-3">
              <span class="text-[12px] lg:text-[13px] text-[#6b7280]">Page 1 of 12</span>
              <div class="flex items-center gap-1">
                <button
                  class="w-6 h-6 flex items-center justify-center border border-[#e5e7eb] rounded-1 text-[#9ca3af] hover:bg-[#f3f4f6]">
                  <ChevronRightIcon class="w-[14px] h-[14px] rotate-180" />
                </button>
                <button
                  class="w-6 h-6 flex items-center justify-center border border-[#e5e7eb] rounded-1 text-[#6b7280] hover:bg-[#f3f4f6]">
                  <ChevronRightIcon class="w-[14px] h-[14px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Spacer -->
      <div class="h-6 md:h-10 w-full"></div>

      <!-- Generate Migration Template Button -->
      <button
        class="w-full h-[47px] bg-[#89939e] text-white text-[15px] font-medium rounded-1 flex flex-col justify-center items-center hover:bg-[#7a838a] transition-colors shadow-sm tracking-wide mb-8">
        <div class="flex items-center gap-2">
          <SettingsIcon class="w-4 h-4 text-white" />
          <span class="text-white text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-normal capitalize">
            Generate Migration Template
          </span>
        </div>
      </button>
    </div>
  </main>

  <ValidationErrorModal
    :isOpen="isValidationModalOpen"
    @close="isValidationModalOpen = false"
  />
</template>



<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>

