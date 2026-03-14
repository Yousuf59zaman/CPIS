<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    @click.self="$emit('close')"
  >
    <!-- Outer Modal Container (1597px from Figma) -->
    <div
      class="w-[1597px] max-w-[95vw] max-h-[92vh] bg-white rounded-[12px] shadow-2xl flex flex-col relative overflow-hidden font-['Poppins',sans-serif] text-[#171a1f] animate-modal-in"
    >
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-6 right-8 text-[#9ca3af] hover:text-[#171A1F] transition-colors z-20"
      >
        <XIcon class="w-8 h-8" />
      </button>

      <!-- Main Two Panel Layout -->
      <div class="flex h-full overflow-hidden">
        
        <!-- Left Panel: Browser Preview & Violations (450px width) -->
        <div 
          class="hidden lg:flex w-[480px] flex-col p-12 shrink-0 border-r border-gray-100 h-full"
          style="background: linear-gradient(180deg, rgba(34, 78, 34, 0.05) 0%, rgba(34, 78, 34, 0.02) 100%)"
        >
          <!-- Browser Mockup Window -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12 border border-gray-100">
            <!-- Browser Chrome -->
            <div class="bg-[#F3F3F3] px-4 py-4 border-b flex items-center justify-between">
              <div class="flex space-x-1.5">
                <div class="w-2.5 h-2.5 bg-[#FF5F57] rounded-full"></div>
                <div class="w-2.5 h-2.5 bg-[#FEB12F] rounded-full"></div>
                <div class="w-2.5 h-2.5 bg-[#28C840] rounded-full"></div>
              </div>
              <div class="flex items-center gap-2 text-[#9ca3af] ml-4">
                <ChevronLeftIcon class="w-3.5 h-3.5" />
                <ChevronRightIcon class="w-3.5 h-3.5" />
              </div>
              <div class="flex-1 mx-4 bg-white rounded-md px-3 py-1 flex items-center gap-2 border border-gray-100 shadow-inner">
                <LockIcon class="w-3 h-3 text-[#224E22]" />
                <span class="text-[12px] text-gray-500 font-light truncate">cpis.ph</span>
              </div>
              <RefreshCwIcon class="w-3.5 h-3.5 text-[#9ca3af]" />
            </div>
            
            <!-- Browser Content: CPIS Logo -->
            <div class="aspect-video bg-white flex items-center justify-center p-12">
              <div class="relative w-40 h-40 flex items-center justify-center">
                <!-- Decorative concentric circles -->
                <div class="absolute inset-0 rounded-full border-2 border-dashed border-[#224E22]/20 animate-spin-very-slow"></div>
                <div class="absolute inset-2 rounded-full border border-[#224E22]/10"></div>
                <div class="w-32 h-32 rounded-full bg-white shadow-[0_0_20px_rgba(34,78,34,0.1)] flex items-center justify-center border border-[#224E22]/10 z-10 overflow-hidden">
                  <img src="@/assets/images/CPIS_Logo.png" alt="CPIS Logo" class="w-20 h-20 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <!-- Section Heading -->
          <h3 class="text-[26px] font-bold text-[#224E22] leading-[1.3] mb-12">
            You've got violations! Tackle them with automation.
          </h3>

          <!-- Checklist -->
          <ul class="space-y-6">
            <li v-for="(item, i) in checklistItems" :key="i" class="flex items-center gap-4 animate-check-in" :style="{ animationDelay: `${i * 0.15}s` }">
              <div class="shrink-0">
                <template v-if="item.status === 'done'">
                  <div class="w-5 h-5 bg-[#224E22] rounded-full flex items-center justify-center shadow-sm">
                    <CheckIcon class="w-3 h-3 text-white" :stroke-width="3" />
                  </div>
                </template>
                <template v-else-if="item.status === 'active'">
                  <div class="w-5 h-5 flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full border-2 border-[#224E22] border-t-transparent animate-spin"></div>
                  </div>
                </template>
                <template v-else>
                  <div class="w-5 h-5 rounded-full border border-gray-200"></div>
                </template>
              </div>
              <span class="text-[15px] transition-colors duration-300" :class="item.status === 'done' ? 'text-[#171a1f] font-medium' : 'text-gray-400 font-light'">{{ item.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Right Panel: Error List & Tables (Scrollable) -->
        <div class="flex-1 flex flex-col pt-10 pb-6 px-10 overflow-y-auto custom-scrollbar bg-white">
          <!-- Header -->
          <div class="flex items-center gap-4 mb-8">
            <div class="h-10 w-1.5 bg-[#224E22] rounded-r-md"></div>
            <h2 class="text-[34px] font-semibold text-[#202224] tracking-tight">Validation Error</h2>
          </div>

          <!-- Upper Table Section -->
          <div class="mb-8 w-full">
            <div class="w-full bg-white border border-gray-100 rounded-[8px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <!-- Table Header -->
              <div class="flex items-center bg-[#fafafa] border-b border-gray-100 px-6 py-6 w-full">
                <div class="w-[40%] text-[16px] font-bold text-[#202224] uppercase tracking-wider">File Name</div>
                <div class="w-[20%] text-[16px] font-bold text-[#202224] uppercase tracking-wider text-center">Error Count</div>
                <div class="w-[20%] text-[16px] font-bold text-[#202224] uppercase tracking-wider text-center">Status</div>
                <div class="w-[20%] text-[16px] font-bold text-[#202224] uppercase tracking-wider text-center">Action</div>
              </div>

              <!-- Expanded Row (VCAF) -->
              <div class="flex flex-col border-b border-gray-50 bg-white w-full">
                <div class="flex items-center px-6 py-8 group hover:bg-gray-50/50 transition-colors w-full cursor-pointer">
                  <div class="w-[40%] flex items-center gap-4">
                    <ChevronDownIcon class="w-6 h-6 text-[#224E22]" />
                    <span class="text-[20px] font-semibold text-[#202224]">VCAF</span>
                  </div>
                  <div class="w-[20%] text-[20px] text-[#224E22] text-center font-bold">01</div>
                  <div class="w-[20%] flex justify-center">
                    <span class="bg-red-50 border border-red-200 text-[#D12B00] text-[14px] px-6 py-1.5 rounded-full font-medium">Error</span>
                  </div>
                  <div class="w-[20%] flex justify-center">
                    <button class="bg-[#224E22] text-white text-[16px] px-10 py-2.5 rounded-[6px] hover:bg-[#1a3d1a] transition-all shadow-sm">Open</button>
                  </div>
                </div>

                <!-- Nested Sub-table (Expanded content) -->
                <div class="bg-[#fafafa] py-12 px-8 border-t border-gray-100 flex flex-col items-center w-full shadow-inner">
                  <h4 class="text-[22px] font-bold text-[#171A1F] mb-10 uppercase tracking-widest text-[#224E22]">VCAF (3 ERROR)</h4>

                  <!-- Sub-table Container -->
                  <div class="w-full bg-white border border-gray-200 rounded-[10px] shadow-xl flex flex-col overflow-hidden">
                    <!-- Sub-table Header -->
                    <div class="flex items-center border-b border-gray-100 bg-[#fafafa] px-6 py-6 w-full opacity-70">
                      <div class="w-[18%] text-[13px] font-bold text-[#202224] uppercase">Docket Number</div>
                      <div class="w-[22%] text-[13px] font-bold text-[#202224] uppercase">Names Based on VCAF</div>
                      <div class="w-[15%] text-[13px] font-bold text-[#202224] uppercase">Barangay(s)</div>
                      <div class="w-[8%] text-[13px] font-bold text-[#202224] uppercase text-center">Gender</div>
                      <div class="w-[8%] text-[13px] font-bold text-[#202224] uppercase text-center">Age</div>
                      <div class="w-[15%] text-[13px] font-bold text-[#202224] uppercase text-center">Birthdate</div>
                      <div class="w-[14%] text-[13px] font-bold text-[#202224] uppercase text-right">Number of MAA</div>
                    </div>

                    <!-- Sub-table Row -->
                    <div class="py-12 relative bg-white w-full border-b border-gray-50 last:border-0">
                      <div class="flex items-center px-6 w-full">
                        <div class="w-[18%] text-[17px] text-[#202224] font-medium">07-04-2023-MCB-MC-0001</div>
                        <div class="w-[22%] relative group">
                          <!-- Tooltip (matching Figma) -->
                          <div class="absolute top-[-50px] left-1/2 -translate-x-1/2 bg-[#D12B00] text-white text-[11px] font-bold px-4 py-2 rounded-[4px] shadow-lg z-30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            INVALID DATA
                            <div class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#D12B00]"></div>
                          </div>
                          <div class="bg-white border border-[#FCA5A5] rounded-full px-7 py-3 text-[17px] text-[#202224] inline-block shadow-sm ring-2 ring-red-50">
                            JUNALYN ABDULLAH GUNTING
                          </div>
                        </div>
                        <div class="w-[15%] text-[17px] text-[#202224]">SABALA MANAO</div>
                        <div class="w-[8%] text-[17px] text-[#202224] text-center">F</div>
                        <div class="w-[8%] text-[17px] text-[#202224] text-center">30</div>
                        <div class="w-[15%] text-[17px] text-[#D12B00] text-center font-bold">3/27/1993</div>
                        <div class="w-[14%] text-[17px] text-[#202224] text-right font-bold">1 MAA</div>
                      </div>
                    </div>
                  </div>

                  <!-- Save Button -->
                  <div class="w-full flex justify-end mt-12">
                    <button class="bg-[#224E22] text-white text-[20px] font-bold px-16 py-4 rounded-[6px] hover:bg-[#1a3d1a] transition-all shadow-xl hover:-translate-y-0.5 transform active:translate-y-0">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Lower Table Section -->
          <div class="w-full">
            <div class="w-full bg-white border border-gray-100 rounded-[8px] overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <!-- Table Body -->
              <div class="flex flex-col w-full">
                <template v-for="(file, i) in lowerFiles" :key="i">
                  <div class="flex items-center px-6 py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors w-full cursor-pointer">
                    <div class="w-[40%] flex items-center gap-4">
                      <ChevronRightIcon class="w-5 h-5 text-gray-400" />
                      <span class="text-[18px] text-[#202224] font-medium">{{ file.name }}</span>
                    </div>
                    <div class="w-[20%] text-[18px] text-gray-500 text-center font-medium">{{ file.errors }}</div>
                    <div class="w-[20%] flex justify-center">
                      <span class="bg-white border border-red-200 text-[#D12B00] text-[13px] px-6 py-1 rounded-full opacity-60">Error</span>
                    </div>
                    <div class="w-[20%] flex justify-center">
                      <button class="bg-[#F2F4F2] text-[#171A1F] text-[15px] px-8 py-2 rounded-[6px] hover:bg-gray-100 transition-colors font-medium">Open</button>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Pagination -->
              <div class="flex justify-between items-center px-8 py-8 border-t border-gray-50 bg-[#fafafa] w-full">
                <p class="text-[14px] text-gray-400 font-medium uppercase tracking-widest">Showing 1 to 5 of 5 entries</p>
                <div class="flex items-center gap-8">
                  <span class="text-[14px] text-gray-500 font-medium tracking-wide">Page 1 of 12</span>
                  <div class="flex items-center gap-3">
                    <button class="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-[6px] text-gray-400 hover:border-[#224E22] hover:text-[#224E22] bg-white transition-all shadow-sm">
                      <ChevronLeftIcon class="w-5 h-5" />
                    </button>
                    <button class="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-[6px] text-gray-400 hover:border-[#224E22] hover:text-[#224E22] bg-white transition-all shadow-sm">
                      <ChevronRightIcon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  X as XIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Check as CheckIcon,
  Lock as LockIcon,
  RefreshCw as RefreshCwIcon,
} from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])

const checklistItems = [
  { label: 'Receive Validated Dataset', status: 'done' },
  { label: 'Automated Data Validation', status: 'done' },
  { label: 'Removing Duplicates', status: 'done' },
  { label: 'Correcting Formatting Errors', status: 'active' },
  { label: 'Validation results ready', status: 'pending' },
]

const lowerFiles = [
  { name: 'NHA LIST', errors: '02' },
  { name: 'RECORDS Handover/Endorsement', errors: '05' },
  { name: 'TECHNICAL UNIT Ocular Inspection', errors: '04' },
  { name: 'TECHNICAL UNIT Assessment', errors: '02' },
]
</script>

<style scoped>
@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.98) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-modal-in {
  animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes checkIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-check-in {
  opacity: 0;
  animation: checkIn 0.5s ease-out forwards;
}

@keyframes spinVerySlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-very-slow {
  animation: spinVerySlow 15s linear infinite;
}

/* Custom scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>
