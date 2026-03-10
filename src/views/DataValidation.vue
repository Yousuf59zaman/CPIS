<template>
  <div
    class="flex flex-col min-h-screen w-full bg-[#f4f7f4] font-['Poppins',sans-serif] overflow-x-hidden text-[#171a1f]"
  >
    <div class="flex flex-1 relative items-stretch h-full">
      <aside
        class="w-0 lg:w-[260px] xl:w-[280px] 2xl:w-[320px] bg-white lg:border-r lg:border-[#cdcdcd] shrink-0 relative z-40 lg:z-10"
      >
        <div class="sticky top-0 h-screen w-full">
          <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
        </div>
      </aside>

      <div class="flex-1 flex flex-col min-w-0 relative z-20">
        <AppTopbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
        <main
          class="flex-1 w-full max-w-[1602px] px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px] mx-auto"
        >
          <!-- Breadcrumb row -->
          <div class="flex items-center w-full mb-[24px] animate-fade-in-up">
            <div
              class="flex items-center gap-[8px] bg-white px-[20px] py-[4px] rounded-[57px] border-[0.5px] border-[#d1d5db] shadow-sm h-[36px]"
            >
              <span class="text-[13px] font-['Poppins'] text-[#808080] whitespace-nowrap"
                >Dashboard</span
              >
              <ChevronRightIcon class="w-[14px] h-[14px] text-[#808080]" stroke-width="1.5" />
              <span class="text-[13px] font-['Poppins'] text-[#808080] whitespace-nowrap"
                >Data Cleansing</span
              >
            </div>
          </div>

          <h2
            class="text-[28px] font-['Poppins'] text-[#202224] mb-[32px] leading-tight font-medium tracking-tight"
          >
            Claimant Data Validation
          </h2>

          <!-- Main Responsive Grid Layout -->
          <div
            class="flex flex-col 2xl:flex-row items-stretch 2xl:items-start gap-[16px] 2xl:gap-[22px] w-full max-w-[1517px] animate-fade-in-up"
          >
            <!-- Left Card: Upload Claimant Data -->
            <div
              class="w-full 2xl:max-w-[1002px] 2xl:flex-1 bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col min-h-[400px] 2xl:h-[820px] shrink-0"
              style="box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.03)"
            >
              <div class="pt-[32px] px-[32px] pb-[24px] relative flex items-center">
                <div
                  class="absolute left-[-2px] h-[32px] w-[6px] bg-[#224E22] rounded-r-[6px]"
                ></div>
                <h3
                  class="text-[26px] font-['Poppins'] text-[#202224] mb-0 ml-[10px] tracking-tight"
                >
                  Upload Claimant Data
                </h3>
              </div>
              <div class="flex-1 px-[32px] pb-[32px] flex flex-col">
                <!-- Dotted Dropzone -->
                <div
                  class="flex-1 w-full border-2 border-dashed border-[#e5e7eb] rounded-[10px] flex flex-col items-center justify-center bg-transparent mt-[8px] py-[40px] 2xl:py-0"
                >
                  <img
                    src="@/assets/icons/CSV.svg"
                    class="w-[50px] sm:w-[66px] h-auto mb-[20px]"
                    alt="CSV Icon"
                  />
                  <p
                    class="text-[15px] sm:text-[16px] font-medium text-[#202224] mb-[28px] text-center px-[16px]"
                  >
                    Click to upload CSV File
                  </p>
                  <div
                    class="flex flex-col sm:flex-row items-center justify-center gap-[12px] sm:gap-[20px] mb-[16px] w-full sm:w-auto px-[16px] sm:px-0"
                  >
                    <button
                      class="bg-[#285328] text-white h-[48px] rounded-[6px] text-[15px] font-medium w-full sm:w-[220px] hover:bg-[#1b3d1b] transition-colors shadow-sm tracking-wide"
                    >
                      Upload CSV
                    </button>
                    <button
                      class="bg-[#d99f43] text-white h-[48px] rounded-[6px] text-[15px] font-medium w-full sm:w-[220px] hover:bg-[#c28f3e] transition-colors shadow-sm tracking-wide"
                    >
                      Sample CSV
                    </button>
                  </div>
                  <p
                    class="text-[13px] sm:text-[14px] text-[#9ca3af] font-light text-center px-[16px]"
                  >
                    or drag and drop claimant_records.csv here
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Card: Validation Actions -->
            <div
              class="w-full 2xl:w-[493px] bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col 2xl:h-[820px] shrink-0 pt-[24px] 2xl:pt-[32px] px-[16px] 2xl:px-[32px] pb-[24px] 2xl:pb-[32px]"
              style="box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.03)"
            >
              <div class="flex justify-between items-center mb-[20px] relative">
                <div
                  class="absolute left-[-32px] h-[32px] w-[6px] bg-[#224E22] rounded-r-[6px]"
                ></div>
                <h3
                  class="text-[26px] font-['Poppins'] text-[#224E22] ml-[-2px] tracking-tight font-medium"
                >
                  Validation Actions
                </h3>
                <button
                  class="bg-[#F3F4F6] rounded-[24px] px-[16px] py-[6px] text-[13px] font-medium text-[#4b5563] hover:bg-[#e5e7eb] transition-colors"
                >
                  New Profile
                </button>
              </div>

              <p class="text-[14px] text-[#4b5563] mb-[24px] font-light">
                Execute bulk operations on current batch
              </p>

              <!-- Large Beige Container -->
              <div class="bg-[#FCFAEE] rounded-[16px] p-[16px] 2xl:p-[24px] flex flex-col flex-1">
                <!-- Validate Data Box (grey er vitor white) -->
                <div class="bg-[#F2F4F2] rounded-[8px] p-[6px] mb-[20px]">
                  <div
                    class="bg-white border border-[#E5E7EB] rounded-[6px] p-[14px] flex items-center gap-[12px] shadow-sm cursor-pointer hover:border-[#224E22] transition-colors"
                  >
                    <FileCheckIcon class="w-[20px] h-[20px] text-[#4b5563] ml-[4px]" />
                    <span class="text-[15px] text-[#374151] font-medium">Validate Data</span>
                  </div>
                </div>

                <p class="text-[14px] text-[#374151] font-medium mb-[8px]">Transfer To Template</p>
                <div class="w-full h-px bg-[#d1d5db] mb-[20px]"></div>

                <!-- Finalize Dataset Box -->
                <div class="bg-[#F2F4F2] rounded-[8px] p-[6px] mb-[20px]">
                  <div
                    class="bg-white border border-[#E5E7EB] rounded-[6px] p-[14px] flex items-center gap-[12px] shadow-sm cursor-pointer hover:border-[#224E22] transition-colors"
                  >
                    <ClipboardCheckIcon class="w-[20px] h-[20px] text-[#4b5563] ml-[4px]" />
                    <span class="text-[15px] text-[#374151] font-medium">Finalize Dataset</span>
                  </div>
                </div>

                <p class="text-[14px] text-[#374151] font-medium mb-[8px]">Transfer To Template</p>
                <div class="w-full h-px bg-[#d1d5db] mb-[20px]"></div>

                <!-- System Notice Block -->
                <div
                  class="bg-white border border-[#E5E7EB] rounded-[8px] p-[16px] mb-[16px] shadow-sm"
                >
                  <h4 class="text-[15px] text-[#374151] font-semibold mb-[8px]">System Notice</h4>
                  <p class="text-[13px] text-[#4b5563] leading-[22px] font-light">
                    All data submitted to the IT Unit must be signed off by the Record Unit Lead.
                    Ensure the 'Finalize' step is logged before submission.
                  </p>
                </div>

                <div class="flex-1"></div>

                <!-- Need Help -->
                <div class="bg-white border border-[#E5E7EB] rounded-[8px] p-[16px] shadow-sm">
                  <div class="flex items-center gap-[6px] mb-[4px]">
                    <h4 class="text-[14px] text-[#374151] font-semibold">Need Help?</h4>
                    <InfoIcon class="w-[14px] h-[14px] text-[#6b7280]" />
                  </div>
                  <p class="text-[11px] text-[#6b7280] leading-[18px] italic font-light">
                    Read the Migration Guidelines or contact the IT Support Desk at ext. 4421.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronRight as ChevronRightIcon,
  FileCheck as FileCheckIcon,
  ClipboardCheck as ClipboardCheckIcon,
  Info as InfoIcon,
} from 'lucide-vue-next'
import AppSidebar from '@/components/layout/Sidebar.vue'
import AppTopbar from '@/components/layout/Topbar.vue'
import AppFooter from '@/components/layout/Footer.vue'

const isSidebarOpen = ref(false)
</script>

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
