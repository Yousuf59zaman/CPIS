<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <!-- Outer Modal Container (1597px) -->
    <div
      class="w-[1597px] max-h-[92vh] bg-white rounded-[8px] shadow-2xl flex flex-col relative overflow-hidden font-['Poppins',sans-serif] text-[#171a1f]"
    >
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-6 right-8 text-[#9ca3af] hover:text-[#171A1F] transition-colors z-10"
      >
        <XIcon class="w-8 h-8" />
      </button>

      <!-- Inner Content -->
      <div class="w-full pt-8 pb-6 px-8 flex flex-col overflow-y-auto overflow-x-hidden">
        <!-- Header -->
        <div class="flex items-center gap-3 mb-6">
          <div class="h-8 w-1.5 bg-[#224E22] rounded-r-sm"></div>
          <h2 class="text-[30px] font-normal text-[#202224] tracking-tight">Validation Error</h2>
        </div>

        <!-- Upper Table Section -->
        <div class="mb-6 w-full">
          <div
            class="w-full bg-white border border-[#f3f4f6] rounded-[4px] overflow-hidden shadow-sm"
          >
            <!-- Table Header -->
            <div class="flex items-center bg-[#fafafa] border-b border-[#f3f4f6] px-4 py-5 w-full">
              <div class="w-[40%] text-[18px] font-medium text-[#202224] uppercase">File Name</div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Error Count
              </div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Status
              </div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Action
              </div>
            </div>

            <!-- Expanded Row (VCAF) -->
            <div class="flex flex-col border-b border-[#f3f4f6] bg-white w-full">
              <div
                class="flex items-center px-4 py-6 group hover:bg-gray-50/50 transition-colors w-full"
              >
                <div class="w-[40%] flex items-center gap-4">
                  <ChevronDownIcon class="w-5 h-5 text-[#202224]" />
                  <span class="text-[18px] font-medium text-[#202224]">VCAF</span>
                </div>
                <div class="w-[20%] text-[18px] text-[#202224] text-center font-medium">01</div>
                <div class="w-[20%] flex justify-center">
                  <span class="bg-white border border-[#fca5a5] text-[15px] px-6 py-1 rounded-[4px]"
                    >Error</span
                  >
                </div>
                <div class="w-[20%] flex justify-center">
                  <button
                    class="bg-[#F2F4F2] text-[#171A1F] text-[16px] px-8 py-2 rounded-[4px] hover:bg-[#e5e7eb] transition-colors"
                  >
                    Open
                  </button>
                </div>
              </div>

              <!-- Nested Sub-table (Expanded content) -->
              <div
                class="bg-[#fafafa] py-10 px-6 border-t border-gray-100 flex flex-col items-center w-full"
              >
                <h4 class="text-[20px] font-semibold text-[#171A1F] mb-8 uppercase tracking-wide">
                  VCAF (3 ERROR)
                </h4>

                <!-- Sub-table Container -->
                <div
                  class="w-full bg-white border border-[#f3f4f6] rounded-[4px] shadow-md flex flex-col overflow-hidden"
                >
                  <!-- Sub-table Header -->
                  <div
                    class="flex items-center border-b border-[#f3f4f6] bg-white px-4 py-5 w-full"
                  >
                    <div class="w-[18%] text-[14px] font-medium text-[#202224] uppercase">
                      Docket Number
                    </div>
                    <div class="w-[22%] text-[14px] font-medium text-[#202224] uppercase">
                      Names Based on VCAF
                    </div>
                    <div class="w-[15%] text-[14px] font-medium text-[#202224] uppercase">
                      Barangay(s)
                    </div>
                    <div
                      class="w-[8%] text-[14px] font-medium text-[#202224] uppercase text-center"
                    >
                      Gender
                    </div>
                    <div
                      class="w-[8%] text-[14px] font-medium text-[#202224] uppercase text-center"
                    >
                      Age
                    </div>
                    <div
                      class="w-[15%] text-[14px] font-medium text-[#202224] uppercase text-center"
                    >
                      Birthdate
                    </div>
                    <div
                      class="w-[14%] text-[14px] font-medium text-[#202224] uppercase text-right"
                    >
                      Number of MAA
                    </div>
                  </div>

                  <!-- Sub-table Row -->
                  <div class="py-10 relative bg-white w-full">
                    <div class="flex items-center w-full">
                      <div class="w-[18%] text-[16px] text-[#202224]">07-04-2023-MCB-MC-0001</div>
                      <div class="w-[22%] relative">
                        <!-- Tooltip -->
                        <div
                          class="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-[#D12B00] text-white text-[12px] px-4 py-2 rounded-[4px] shadow-lg z-30 whitespace-nowrap"
                        >
                          INVALID DATA
                          <div
                            class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#D12B00]"
                          ></div>
                        </div>
                        <div
                          class="bg-white border border-[#FCA5A5] rounded-full px-6 py-2.5 text-[16px] text-[#202224] inline-block shadow-sm"
                        >
                          JUNALYN ABDULLAH GUNTING
                        </div>
                      </div>
                      <div class="w-[15%] text-[16px] text-[#202224]">SABALA MANAO</div>
                      <div class="w-[8%] text-[16px] text-[#202224] text-center">F</div>
                      <div class="w-[8%] text-[16px] text-[#202224] text-center">30</div>
                      <div class="w-[15%] text-[16px] text-[#D12B00] text-center font-medium">
                        3/27/1993
                      </div>
                      <div class="w-[14%] text-[16px] text-[#202224] text-right font-medium">
                        1 MAA
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Save Button -->
                <div class="w-full flex justify-end mt-10">
                  <button
                    class="bg-[#224E22] text-white text-[18px] font-medium px-14 py-3 rounded-[4px] hover:bg-[#1a3d1a] transition-all shadow-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lower Table Section -->
        <div class="w-full">
          <div
            class="w-full bg-white border border-[#f3f4f6] rounded-[4px] overflow-hidden flex flex-col shadow-sm"
          >
            <!-- Table Header -->
            <div class="flex items-center bg-[#fafafa] border-b border-[#f3f4f6] px-4 py-5 w-full">
              <div class="w-[40%] text-[18px] font-medium text-[#202224] uppercase">File Name</div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Error Count
              </div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Status
              </div>
              <div class="w-[20%] text-[18px] font-medium text-[#202224] uppercase text-center">
                Action
              </div>
            </div>

            <!-- Table Body -->
            <div class="flex flex-col w-full">
              <template
                v-for="(file, i) in [
                  { name: 'NHA LIST', errors: '02' },
                  { name: 'RECORDS Handover/Endorsement', errors: '05' },
                  { name: 'TECHNICAL UNIT Ocular Inspection', errors: '04' },
                  { name: 'TECHNICAL UNIT Assessment', errors: '02' },
                ]"
                :key="i"
              >
                <div
                  class="flex items-center px-4 py-5 border-b border-[#f3f4f6] hover:bg-gray-50/50 transition-colors w-full"
                >
                  <div class="w-[40%] flex items-center gap-4">
                    <ChevronRightIcon class="w-5 h-5 text-[#202224]" />
                    <span class="text-[18px] text-[#202224]">{{ file.name }}</span>
                  </div>
                  <div class="w-[20%] text-[18px] text-[#202224] text-center font-medium">
                    {{ file.errors }}
                  </div>
                  <div class="w-[20%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[15px] px-6 py-1 rounded-[4px]"
                      >Error</span
                    >
                  </div>
                  <div class="w-[20%] flex justify-center">
                    <button
                      class="bg-[#F2F4F2] text-[#171A1F] text-[16px] px-8 py-2 rounded-[4px] hover:bg-[#e5e7eb] transition-colors"
                    >
                      Open
                    </button>
                  </div>
                </div>
              </template>
            </div>

            <!-- Pagination -->
            <div
              class="flex justify-between items-center px-4 py-6 border-t border-[#f3f4f6] bg-[#fafafa] w-full"
            >
              <p class="text-[14px] text-[#9ca3af] font-light uppercase tracking-wider">
                Showing 1 to 5 of 5 entries
              </p>
              <div class="flex items-center gap-6">
                <span class="text-[14px] text-[#6b7280]">Page 1 of 12</span>
                <div class="flex items-center gap-2">
                  <button
                    class="w-9 h-9 flex items-center justify-center border border-[#e5e7eb] rounded-[4px] text-[#9ca3af] hover:border-[#224E22] hover:text-[#224E22] bg-white transition-all"
                  >
                    <ChevronLeftIcon class="w-5 h-5" />
                  </button>
                  <button
                    class="w-9 h-9 flex items-center justify-center border border-[#e5e7eb] rounded-[4px] text-[#6b7280] hover:border-[#224E22] hover:text-[#224E22] bg-white transition-all"
                  >
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
</template>

<script setup lang="ts">
import {
  X as XIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f9fafb;
}
::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>
