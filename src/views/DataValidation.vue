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
        <main class="flex-1 w-full px-4 md:px-6 2xl:px-10 pt-5 2xl:pt-6 pb-8 mx-auto">
          <!-- Breadcrumb row -->
          <div class="flex items-center w-full mb-6 lg:mb-10 animate-fade-in-up">
            <div
              class="flex items-center gap-1.5 lg:gap-2 bg-white px-3 lg:px-5 py-1 rounded-[57px] border-[0.5px] border-[#d1d5db] shadow-sm h-[32px] lg:h-[36px]"
            >
              <span class="text-[13px] lg:text-[16px] font-light text-[#A7A6A6] whitespace-nowrap"
                >Dashboard</span
              >
              <ChevronRightIcon
                class="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-[#808080]"
                stroke-width="1.5"
              />
              <span
                class="text-[13px] lg:text-[16px] font-light text-[#171A1F] whitespace-nowrap capitalize"
                >Data Cleansing</span
              >
            </div>
          </div>

          <h2
            class="text-[22px] md:text-[24px] lg:text-[28px] font-Poppins text-[#202224] mb-6 lg:mb-10 leading-tight font-medium tracking-tight"
          >
            Claimant Data Validation
          </h2>

          <!-- Main Responsive Grid Layout -->
          <div
            class="flex flex-col 2xl:flex-row items-stretch 2xl:items-start gap-4 lg:gap-6 w-full animate-fade-in-up"
          >
            <!-- Left Card: Upload Claimant Data -->
            <div
              class="w-full 2xl:flex-1 bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col min-h-[400px] 2xl:h-[820px] shadow-[0_4px_40px_rgba(0,0,0,0.03)]"
            >
              <div class="pt-6 lg:pt-8 px-6 lg:px-8 pb-5 lg:pb-6 relative flex items-center">
                <div class="absolute left-[-2px] h-6 lg:h-8 w-1.5 bg-[#224E22] rounded-r-1.5"></div>
                <h3
                  class="text-[22px] md:text-[26px] 2xl:text-[30px] font-normal text-[#202224] mb-0 ml-[10px]"
                >
                  Upload Claimant Data
                </h3>
              </div>
              <div class="flex-1 px-6 lg:px-8 pb-6 lg:pb-8 flex flex-col">
                <!-- Dotted Dropzone -->
                <div
                  class="flex-1 w-full border-2 border-dashed border-[#e5e7eb] rounded-[10px] flex flex-col items-center justify-center bg-transparent mt-2 py-10 lg:py-0"
                >
                  <img
                    src="@/assets/icons/CSV.svg"
                    class="w-[50px] sm:w-[66px] h-auto mb-5 lg:mb-6"
                    alt="CSV Icon"
                  />
                  <p
                    class="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#171A1F] font-normal mb-6 lg:mb-8 text-center px-4"
                  >
                    Click to upload CSV File
                  </p>
                  <div
                    class="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-5 mb-4 lg:mb-5 w-full sm:w-auto px-4 sm:px-0"
                  >
                    <button
                      class="bg-[#285328] text-white h-[48px] rounded-[6px] text-[15px] md:text-[17px] 2xl:text-[18.667px] leading-normal font-medium text-center w-full sm:w-[220px] hover:bg-[#1b3d1b] transition-colors shadow-sm"
                    >
                      Upload CSV
                    </button>
                    <button
                      class="bg-[#d99f43] text-white h-[48px] rounded-[6px] text-[15px] md:text-[17px] 2xl:text-[18.667px] leading-normal font-medium text-center w-full sm:w-[220px] hover:bg-[#c28f3e] transition-colors shadow-sm"
                    >
                      Sample CSV
                    </button>
                  </div>
                  <p
                    class="text-[12px] lg:text-[14px] text-[#616161] font-light text-center leading-relaxed px-4"
                  >
                    or drag and drop claimant_records.csv here
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Card: Validation Actions -->
            <div
              class="w-full 2xl:w-[493px] bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col min-h-fit 2xl:h-[820px] pt-6 lg:pt-8 px-4 lg:px-8 pb-6 lg:pb-8 shadow-[0_4px_40px_rgba(0,0,0,0.03)]"
            >
              <div class="flex justify-between items-center mb-5 lg:mb-6 relative">
                <div
                  class="absolute left-[-16px] lg:left-[-32px] h-6 lg:h-8 w-1.5 bg-[#224E22] rounded-r-1.5"
                ></div>
                <h3
                  class="text-[20px] md:text-[24px] 2xl:text-[26px] font-Poppins text-[#224E22] ml-[-2px] tracking-tight font-medium"
                >
                  Validation Actions
                </h3>
                <button
                  class="bg-[#F3F4F6] rounded-[24px] px-3 lg:px-4 py-1.5 lg:py-2 text-[13px] lg:text-[16px] font-normal text-[#171A1F] hover:bg-[#e5e7eb] transition-colors"
                >
                  New Profile
                </button>
              </div>

              <p
                class="text-[14px] md:text-[16px] 2xl:text-[18px] text-[#171A1F] mb-6 lg:mb-8 font-light"
              >
                Execute bulk operations on current batch
              </p>

              <!-- Large Beige Container -->
              <div class="bg-[#FCFAEE] rounded-[16px] p-4 lg:p-6 flex flex-col flex-1">
                <!-- Validate Data Box -->
                <div class="bg-[#F2F4F2] rounded-[8px] p-1.5 mb-5 lg:mb-6">
                  <div
                    class="bg-white border border-[#E5E7EB] rounded-[6px] p-3.5 flex items-center gap-3 shadow-sm cursor-pointer hover:border-[#224E22] transition-colors"
                  >
                    <FileCheckIcon class="w-4 h-4 lg:w-5 lg:h-5 text-[#4b5563] ml-1" />
                    <span
                      class="text-[15px] md:text-[17px] 2xl:text-[18px] text-[#171A1F] font-light"
                      >Validate Data</span
                    >
                  </div>
                </div>

                <p
                  class="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#000] font-normal capitalize mb-2"
                >
                  Transfer To Template
                </p>
                <div class="w-full h-px bg-[#d1d5db] mb-5 lg:mb-6"></div>

                <!-- Finalize Dataset Box -->
                <div class="bg-[#F2F4F2] rounded-[8px] p-1.5 mb-5 lg:mb-6">
                  <div
                    class="bg-white border border-[#E5E7EB] rounded-[6px] p-3.5 flex items-center gap-3 shadow-sm cursor-pointer hover:border-[#224E22] transition-colors"
                  >
                    <ClipboardCheckIcon class="w-4 h-4 lg:w-5 lg:h-5 text-[#4b5563] ml-1" />
                    <span
                      class="text-[15px] md:text-[17px] 2xl:text-[18px] text-[#171A1F] font-light"
                      >Finalize Dataset</span
                    >
                  </div>
                </div>
                <p
                  class="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#000] font-normal capitalize mb-2"
                >
                  Transfer To Template
                </p>
                <div class="w-full h-px bg-[#d1d5db] mb-5 lg:mb-6"></div>

                <!-- System Notice Block -->
                <div
                  class="bg-white border border-[#E5E7EB] rounded-[8px] p-4 mb-4 lg:mb-5 shadow-sm"
                >
                  <h4
                    class="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#171A1F] font-normal mb-2"
                  >
                    System Notice
                  </h4>
                  <p
                    class="text-[14px] md:text-[16px] 2xl:text-[18px] text-[#171A1F] font-light leading-relaxed"
                  >
                    All data submitted to the IT Unit must be signed off by the Record Unit Lead.
                    Ensure the 'Finalize' step is logged before submission.
                  </p>
                </div>

                <div class="flex-1 min-h-[20px]"></div>

                <!-- Need Help -->
                <div class="bg-white border border-[#E5E7EB] rounded-[8px] p-4 shadow-sm">
                  <div class="flex items-center gap-1.5 mb-1">
                    <h4
                      class="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#171A1F] font-normal capitalize"
                    >
                      Need Help?
                    </h4>
                    <InfoIcon class="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#6b7280]" />
                  </div>
                  <p
                    class="text-[10px] md:text-[11px] text-[#171A1F] leading-snug italic font-normal"
                  >
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
