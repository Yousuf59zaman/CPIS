<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DatabaseZapIcon,
  ZapIcon,
  ClockIcon,
  CheckIcon,
  CheckCircleIcon,
  XCircleIcon,
  FileTextIcon,
} from 'lucide-vue-next'

defineOptions({ name: 'DataMigrationTemplate' })

const showProcessing = ref(false)

const steps = [
  { label: 'Migration Template', status: 'completed', active: true },
  { label: 'Migration', status: 'todo', active: false },
  { label: 'Migration Report', status: 'todo', active: false },
  { label: 'Store in Database', status: 'todo', active: false },
]

const processingSteps = [
  { label: 'Upload', done: true, current: false },
  { label: 'Cleanse', done: true, current: false },
  { label: 'Validate', done: true, current: false },
  { label: 'Template', done: true, current: false },
  { label: 'Migration', done: false, current: true },
  { label: 'Report', done: false, current: false },
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
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] font-light text-[#a7a6a6] whitespace-nowrap">Data
          Validation</span>
        <ChevronRightIcon class="w-[12px] h-[12px] text-[#808080]" :stroke-width="1.5" />
        <span class="text-[13px] 2xl:text-[15px] font-['Poppins'] text-[#171a1f] whitespace-nowrap">Migration
          Template</span>
      </div>
    </div>

    <!-- Title -->
    <h1 class="text-[24px] md:text-[28px] 2xl:text-[32px] font-['Poppins'] font-normal text-[#202224] leading-tight">
      Data Validation
    </h1>

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

    <!-- Main White Card -->
    <div
      class="bg-white rounded-[10px] border border-gray-100 pt-[24px] px-[16px] pb-[16px] w-full flex flex-col min-w-0 flex-1"
      style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)">
      <!-- Card Title -->
      <div class="flex items-center relative pl-[14px] md:pl-[16px] mb-[16px] 2xl:mb-[20px]">
        <div
          class="absolute left-0 md:left-[-2px] top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]">
        </div>
        <h2 class="text-[18px] md:text-[22px] 2xl:text-[26px] font-['Poppins'] font-normal text-black">Migration
          Template</h2>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto custom-scrollbar w-full pb-3">
        <table class="w-full text-left border-collapse" style="min-width: 860px">
          <thead>
            <tr class="bg-[#fafafa] border-b-[0.3px] border-[#b2b2b2]">
              <th v-for="col in columns" :key="col"
                class="py-[12px] 2xl:py-[14px] px-[16px] text-[12px] 2xl:text-[16px] font-['Poppins'] font-normal text-[#202224] uppercase whitespace-nowrap tracking-wide">
                {{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in tableData" :key="idx" class="border-b-[0.3px] border-[#e5e7eb] last:border-b-0">
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.docketNumber }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.names }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.barangay }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.gender }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.age }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.birthdate }}</td>
              <td
                class="py-[14px] 2xl:py-[18px] px-[16px] text-[13px] 2xl:text-[16px] font-['Poppins'] text-[#202224] opacity-80 whitespace-nowrap">
                {{ row.maa }}</td>
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

    <!-- Run Migration Button -->
    <button type="button" @click="showProcessing = true"
      class="w-full h-[54px] 2xl:h-[64px] bg-[#1d4a1d] hover:bg-[#163b16] text-white rounded-[6px] flex items-center justify-center gap-[10px] font-['Poppins'] text-[16px] 2xl:text-[18px] font-normal transition-colors shadow-sm shrink-0">
      <DatabaseZapIcon class="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px] opacity-80" />
      Run Migration
    </button>

    <!-- Migration Processing Modal -->
    <Teleport to="body">
      <div v-if="showProcessing" class="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center px-4"
        @click.self="showProcessing = false">
        <div
          class="bg-white rounded-[12px] w-full max-w-[500px] 2xl:max-w-[560px] shadow-2xl p-[28px] 2xl:p-[36px] relative animate-fade-in-up">

          <!-- Modal Title -->
          <div class="flex items-center relative pl-[14px] mb-[20px] 2xl:mb-[24px]">
            <div class="absolute left-0 top-[2px] h-[22px] 2xl:h-[26px] w-[5px] bg-[#234f23] rounded-r-[5px]"></div>
            <h3 class="text-[18px] 2xl:text-[22px] font-['Poppins'] font-medium text-[#202224]">Migration Processing
            </h3>
          </div>

          <!-- Step Indicator -->
          <div class="flex items-start w-full mb-[24px] 2xl:mb-[28px]">
            <template v-for="(step, idx) in processingSteps" :key="idx">
              <div class="flex flex-col items-center gap-[5px] shrink-0">
                <div
                  class="w-[28px] h-[28px] 2xl:w-[32px] 2xl:h-[32px] rounded-full flex items-center justify-center border-[1.5px] text-[12px] font-['Poppins'] font-medium"
                  :class="step.done
                    ? 'bg-[#224e22] border-[#224e22] text-white'
                    : step.current
                      ? 'bg-white border-[#224e22] text-[#224e22]'
                      : 'bg-white border-[#d1d5db] text-[#9ca3af]'">
                  <CheckIcon v-if="step.done" class="w-[13px] h-[13px]" :stroke-width="2.5" />
                  <span v-else>{{ idx + 1 }}</span>
                </div>
                <span class="text-[10px] font-['Poppins'] text-[#6b7280] whitespace-nowrap text-center"
                  style="max-width:44px">{{ step.label }}</span>
              </div>
              <!-- Connector line -->
              <div v-if="idx < processingSteps.length - 1" class="flex-1 h-[1.5px] mt-[13px] 2xl:mt-[15px]"
                :class="step.done ? 'bg-[#224e22]' : 'bg-[#d1d5db]'"></div>
            </template>
          </div>

          <!-- Migration Queue Progress -->
          <div class="bg-[#f9fafb] border-[0.5px] border-[#e5e7eb] rounded-[8px] p-[16px] 2xl:p-[20px] mb-[16px]">
            <div class="flex items-start justify-between mb-[4px]">
              <div>
                <div class="flex items-center gap-[6px] mb-[2px]">
                  <div class="flex items-center relative pl-[10px]">
                    <div class="absolute left-0 top-[3px] h-[14px] w-[3px] bg-[#234f23] rounded-r-[3px]"></div>
                    <span class="text-[14px] 2xl:text-[16px] font-['Poppins'] font-medium text-[#202224]">Migration
                      Queue</span>
                  </div>
                </div>
                <p class="text-[11px] 2xl:text-[12px] font-['Poppins'] font-light text-[#6b7280] pl-[10px]">Confirm All
                  Mandatory
                  Compliance Checks Before Authorization</p>
              </div>
              <span class="text-[22px] 2xl:text-[26px] font-['Poppins'] font-medium text-[#202224]">78%</span>
            </div>

            <!-- Progress Bar -->
            <div class="w-full h-[10px] bg-[#e5e7eb] rounded-full overflow-hidden mt-[10px] mb-[12px]">
              <div class="h-full bg-[#224e22] rounded-full transition-all duration-500" style="width: 78%"></div>
            </div>

            <div
              class="flex flex-wrap items-center gap-x-[20px] gap-y-[6px] text-[11px] 2xl:text-[12px] font-['Poppins'] font-light text-[#6b7280]">
              <span class="flex items-center gap-[5px]">
                <DatabaseZapIcon class="w-[13px] h-[13px] opacity-70" />
                78,000/100,000 Records
              </span>
              <span class="flex items-center gap-[5px]">
                <ZapIcon class="w-[13px] h-[13px] opacity-70" />
                Processing Active
              </span>
              <span class="flex items-center gap-[5px]">
                <ClockIcon class="w-[13px] h-[13px] opacity-70" />
                ETA: ~12 mins
              </span>
            </div>
          </div>

          <!-- Record Stats -->
          <div class="border-[0.5px] border-[#e5e7eb] rounded-[8px] overflow-hidden">
            <div
              class="flex items-center justify-between bg-white px-[16px] 2xl:px-[20px] py-[14px] 2xl:py-[16px] border-b-[0.5px] border-[#e5e7eb]">
              <div>
                <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#6b7280]">Successful Records</p>
                <p class="text-[20px] 2xl:text-[24px] font-['Poppins'] font-medium text-[#202224]">75,420</p>
              </div>
              <CheckCircleIcon class="w-[26px] h-[26px] text-[#9ca3af]" :stroke-width="1.2" />
            </div>
            <div
              class="flex items-center justify-between bg-white px-[16px] 2xl:px-[20px] py-[14px] 2xl:py-[16px] border-b-[0.5px] border-[#e5e7eb]">
              <div>
                <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#d0272a]">Failed Records</p>
                <p class="text-[20px] 2xl:text-[24px] font-['Poppins'] font-medium text-[#d0272a]">2,580</p>
              </div>
              <XCircleIcon class="w-[26px] h-[26px] text-[#d0272a]" :stroke-width="1.2" />
            </div>
            <div class="flex items-center justify-between bg-white px-[16px] 2xl:px-[20px] py-[14px] 2xl:py-[16px]">
              <div>
                <p class="text-[12px] 2xl:text-[13px] font-['Poppins'] font-light text-[#6b7280]">Remaining Records</p>
                <p class="text-[20px] 2xl:text-[24px] font-['Poppins'] font-medium text-[#202224]">22,000</p>
              </div>
              <FileTextIcon class="w-[26px] h-[26px] text-[#9ca3af]" :stroke-width="1.2" />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
