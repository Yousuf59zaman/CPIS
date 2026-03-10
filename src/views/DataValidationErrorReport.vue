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
          class="flex-1 w-full max-w-[1602px] px-4 md:px-6 2xl:px-10 pt-5 2xl:pt-6 pb-8 mx-auto"
        >
          <!-- Breadcrumb row -->
          <div class="flex items-center w-full mb-6 animate-fade-in-up">
            <div
              class="flex items-center gap-2 bg-white px-5 py-1 rounded-[57px] border-[0.5px] border-[#d1d5db] shadow-sm h-[36px]"
            >
              <span class="text-[13px] font-['Poppins'] text-[#808080] whitespace-nowrap"
                >Dashboard</span
              >
              <ChevronRightIcon class="w-[14px] h-[14px] text-[#808080]" stroke-width="1.5" />
              <span class="text-[13px] font-['Poppins'] text-[#808080] whitespace-nowrap"
                >Data Cleansing</span
              >
              <ChevronRightIcon class="w-[14px] h-[14px] text-[#808080]" stroke-width="1.5" />
              <span class="text-[13px] font-['Poppins'] text-[#808080] whitespace-nowrap"
                >Data Validation</span
              >
            </div>
          </div>

          <h2
            class="text-[28px] font-Poppins text-[#202224] mb-10 leading-tight font-medium tracking-tight"
          >
            Data Validation
          </h2>

          <!-- 1920x1080 Layout Container -->
          <div class="w-full max-w-[1518px] flex flex-col animate-fade-in-up">
            <!-- Warning Banner -->
            <div
              class="w-full bg-[#fefdf4] border border-[#f5ead6] rounded-[8px] p-4 flex items-center justify-between shadow-sm"
            >
              <div class="flex items-start gap-4">
                <TriangleAlertIcon class="w-5 h-5 text-[#b45309] mt-[2px]" stroke-width="2" />
                <div class="flex flex-col gap-1">
                  <h4 class="text-[15px] font-medium text-[#92400e]">Dataset validation failed</h4>
                  <p class="text-[13px] text-[#b45309] font-light">
                    Some records contain critical errors that must be resolved before the data can
                    be finalized for processing.
                  </p>
                </div>
              </div>
              <button
                class="bg-[#f3f4f6] text-[#4b5563] text-[13px] font-medium px-4 py-1.5 rounded-6 hover:bg-[#e5e7eb] transition-colors whitespace-nowrap"
              >
                Action Required
              </button>
            </div>

            <!-- Vertical Spacer -->
            <div class="h-12 w-full"></div>

            <!-- Step Progress Cards container -->
            <div class="flex items-center justify-between w-full">
              <!-- Card 1 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4 mr-5"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  CSV File Uploaded
                </h5>
                <div class="bg-[#1a5319] text-white text-3 font-medium px-5 py-1.5 rounded-6">
                  Completed
                </div>
              </div>
              <!-- Card 2 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4 mr-5"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  Data Cleansing
                </h5>
                <div class="bg-[#1a5319] text-white text-3 font-medium px-5 py-1.5 rounded-6">
                  Completed
                </div>
              </div>
              <!-- Card 3 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4 mr-5"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  Data Validation
                </h5>
                <div class="bg-[#ef4444] text-white text-3 font-medium px-5 py-1.5 rounded-6">
                  Validation Error
                </div>
              </div>
              <!-- Card 4 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4 mr-5"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  Migration Template
                </h5>
                <div
                  class="bg-white text-[#6b7280] text-3 font-medium px-8 py-1.5 rounded-6 border border-[#d1d5db]"
                >
                  To Do
                </div>
              </div>
              <!-- Card 5 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4 mr-5"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  Finalize Claimant<br />Data
                </h5>
                <div
                  class="bg-white text-[#6b7280] text-3 font-medium px-8 py-1.5 rounded-6 border border-[#d1d5db]"
                >
                  To Do
                </div>
              </div>
              <!-- Card 6 -->
              <div
                class="w-[235px] h-[132px] bg-white rounded-2 border-l-4 border-l-[#fde68a] border-y border-r border-[#f3f4f6] shadow-sm flex flex-col items-center justify-center p-4"
              >
                <h5 class="text-[15px] font-medium text-[#5c4033] mb-6 text-center">
                  Submit to IT Unit
                </h5>
                <div
                  class="bg-white text-[#6b7280] text-3 font-medium px-8 py-1.5 rounded-6 border border-[#d1d5db]"
                >
                  To Do
                </div>
              </div>
            </div>

            <!-- Vertical Spacer -->
            <div class="h-12 w-full"></div>

            <!-- Metric Cards row -->
            <div class="flex w-full">
              <!-- Valid Records -->
              <div
                class="flex-1 bg-white rounded-3 border border-[#f3f4f6] p-6 shadow-sm flex flex-col relative overflow-hidden mr-6"
              >
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-[15px] font-medium text-[#224E22]">Valid Records</h4>
                  <CheckCircle2Icon class="w-5 h-5 text-[#224E22]" />
                </div>
                <p
                  class="text-[36px] font-semibold text-[#1a5319] leading-tight mb-4 tracking-tight"
                >
                  12,452
                </p>
                <div class="flex items-center gap-1.5">
                  <CheckCircle2Icon class="w-[14px] h-[14px] text-[#1a5319]" />
                  <span class="text-[13px] text-[#224E22] font-medium">Ready for migration</span>
                </div>
              </div>

              <!-- Invalid Records -->
              <div
                class="flex-1 bg-white rounded-3 border border-[#f3f4f6] p-6 shadow-sm flex flex-col relative overflow-hidden"
              >
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-[15px] font-medium text-[#dc2626]">Invalid Records</h4>
                  <AlertCircleIcon class="w-5 h-5 text-[#dc2626]" />
                </div>
                <p
                  class="text-[36px] font-semibold text-[#dc2626] leading-tight mb-4 tracking-tight"
                >
                  38
                </p>
                <div class="flex items-center gap-1.5">
                  <AlertCircleIcon class="w-[14px] h-[14px] text-[#dc2626]" />
                  <span class="text-[13px] text-[#dc2626] font-medium"
                    >Action required to proceed</span
                  >
                </div>
              </div>
            </div>

            <!-- Vertical Spacer -->
            <div class="h-12 w-full"></div>

            <!-- Invalid Records Data Table -->
            <div
              class="w-[1517px] h-[770px] bg-white rounded-[12px] border border-[#f3f4f6] flex flex-col pt-8 mb-10 shadow-[0_4px_40px_rgba(0,0,0,0.03)]"
            >
              <!-- Header -->
              <div class="flex justify-between items-start px-8 mb-8 relative">
                <div class="absolute left-[-2px] h-8 w-1.5 bg-[#224E22] rounded-r-1.5"></div>
                <div>
                  <h3
                    class="text-6 font-['Poppins'] text-[#374151] mb-1 ml-[10px] tracking-tight font-medium"
                  >
                    Invalid Records
                  </h3>
                  <p class="text-[13px] text-[#6b7280] ml-[10px] font-light">
                    Showing Critical Validation Failures For Manual Review
                  </p>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    class="bg-white border border-[#e5e7eb] rounded-6 px-5 py-2 text-[13px] font-medium text-[#4b5563] hover:bg-[#f3f4f6] transition-colors"
                  >
                    Filter Errors
                  </button>
                  <button
                    class="bg-[#f3f4f6] rounded-6 px-5 py-2 text-[13px] font-medium text-[#4b5563] hover:bg-[#e5e7eb] transition-colors"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>

              <!-- Table Columns -->
              <div
                class="flex items-center w-full px-8 py-4 border-y border-[#f3f4f6] bg-[#fafafa]"
              >
                <div class="w-[25%] text-3 font-medium text-[#6b7280] tracking-wider uppercase">
                  Docket Number
                </div>
                <div class="w-[20%] text-3 font-medium text-[#6b7280] tracking-wider uppercase">
                  Claimant Name
                </div>
                <div
                  class="w-[15%] text-3 font-medium text-[#6b7280] tracking-wider uppercase text-center"
                >
                  Error Count
                </div>
                <div
                  class="w-[15%] text-3 font-medium text-[#6b7280] tracking-wider uppercase text-center"
                >
                  Status
                </div>
                <div
                  class="w-[10%] text-3 font-medium text-[#6b7280] tracking-wider uppercase text-center"
                >
                  Row #
                </div>
                <div
                  class="w-[15%] text-3 font-medium text-[#6b7280] tracking-wider uppercase text-center"
                >
                  Action
                </div>
              </div>

              <!-- Table Rows -->
              <div class="flex flex-col flex-1 px-8">
                <!-- Row 1 -->
                <div class="flex items-center w-full py-6 border-b border-[#f3f4f6]">
                  <div class="w-[25%] text-[14px] text-[#4b5563] font-light">
                    07-04-2023-MCB-MC-0005
                  </div>
                  <div class="w-[20%] text-[14px] text-[#4b5563] font-light">Johnathan Miller</div>
                  <div class="w-[15%] text-[14px] text-[#4b5563] font-light text-center">01</div>
                  <div class="w-[15%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[#ef4444] text-[11px] font-medium px-6 py-1 rounded-6"
                      >Error</span
                    >
                  </div>
                  <div class="w-[10%] text-[14px] text-[#4b5563] font-light text-center">142</div>
                  <div class="w-[15%] flex justify-center items-center gap-3">
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
                  </div>
                </div>
                <!-- Row 2 -->
                <div class="flex items-center w-full py-6 border-b border-[#f3f4f6]">
                  <div class="w-[25%] text-[14px] text-[#4b5563] font-light">
                    07-04-2023-MCB-MC-0006
                  </div>
                  <div class="w-[20%] text-[14px] text-[#4b5563] font-light">Sarah Williams</div>
                  <div class="w-[15%] text-[14px] text-[#4b5563] font-light text-center">05</div>
                  <div class="w-[15%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[#ef4444] text-[11px] font-medium px-6 py-1 rounded-6"
                      >Error</span
                    >
                  </div>
                  <div class="w-[10%] text-[14px] text-[#4b5563] font-light text-center">218</div>
                  <div class="w-[15%] flex justify-center items-center gap-3">
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
                  </div>
                </div>
                <!-- Row 3 with Avatar Overlap -->
                <div class="flex items-center w-full py-6 border-b border-[#f3f4f6] relative">
                  <div class="w-[25%] text-[14px] text-[#4b5563] font-light">
                    07-04-2023-MCB-MC-0007
                  </div>
                  <div class="w-[20%] text-[14px] text-[#4b5563] font-light">Robert Chen</div>
                  <div class="w-[15%] text-[14px] text-[#4b5563] font-light text-center">02</div>
                  <div class="w-[15%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[#ef4444] text-[11px] font-medium px-6 py-1 rounded-6"
                      >Error</span
                    >
                  </div>
                  <div class="w-[10%] text-[14px] text-[#4b5563] font-light text-center">405</div>
                  <div class="w-[15%] flex justify-center items-center gap-3">
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
                  </div>
                  <!-- Overlapping Avatars (Absolute positioning matching Figma popover spec) -->
                  <div
                    class="absolute right-[4%] top-[-10px] bg-white rounded-3 p-2 flex items-center z-10 animate-fade-in-up"
                    style="
                      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.12);
                      filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
                    "
                  >
                    <img
                      src="https://i.pravatar.cc/100?img=11"
                      alt="Avatar 1"
                      class="w-[38px] h-[38px] rounded-full relative z-20 object-cover border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="Avatar 2"
                      class="w-[38px] h-[38px] rounded-full ml-2 relative z-10 object-cover border-2 border-white"
                    />
                    <!-- CSS Triangle point down -->
                    <div
                      class="absolute bottom-[-8px] right-[40%] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"
                    ></div>
                  </div>
                </div>
                <!-- Row 4 -->
                <div class="flex items-center w-full py-6 border-b border-[#f3f4f6]">
                  <div class="w-[25%] text-[14px] text-[#4b5563] font-light">
                    07-04-2023-MCB-MC-0008
                  </div>
                  <div class="w-[20%] text-[14px] text-[#4b5563] font-light">Elena Rodriguez</div>
                  <div class="w-[15%] text-[14px] text-[#4b5563] font-light text-center">04</div>
                  <div class="w-[15%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[#ef4444] text-[11px] font-medium px-6 py-1 rounded-6"
                      >Error</span
                    >
                  </div>
                  <div class="w-[10%] text-[14px] text-[#4b5563] font-light text-center">512</div>
                  <div class="w-[15%] flex justify-center items-center gap-3">
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
                  </div>
                </div>
                <!-- Row 5 -->
                <div class="flex items-center w-full py-6 border-b border-[#f3f4f6]">
                  <div class="w-[25%] text-[14px] text-[#4b5563] font-light">
                    07-04-2023-MCB-MC-0009
                  </div>
                  <div class="w-[20%] text-[14px] text-[#4b5563] font-light">David Thompson</div>
                  <div class="w-[15%] text-[14px] text-[#4b5563] font-light text-center">04</div>
                  <div class="w-[15%] flex justify-center">
                    <span
                      class="bg-white border border-[#fca5a5] text-[#ef4444] text-[11px] font-medium px-6 py-1 rounded-6"
                      >Error</span
                    >
                  </div>
                  <div class="w-[10%] text-[14px] text-[#4b5563] font-light text-center">601</div>
                  <div class="w-[15%] flex justify-center items-center gap-3">
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <EyeIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <div
                      class="bg-[#f3f4f6] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e5e7eb]"
                    >
                      <WrenchIcon class="w-4 h-4 text-[#6b7280]" />
                    </div>
                    <MoreVerticalIcon class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
                  </div>
                </div>

                <div class="flex-1"></div>

                <!-- Footer Pagination -->
                <div class="flex justify-between items-center py-6">
                  <p class="text-[13px] text-[#9ca3af] font-light">Showing 1 to 5 of 5 entries</p>
                  <div class="flex items-center gap-3">
                    <span class="text-[13px] text-[#6b7280]">Page 1 of 12</span>
                    <div class="flex items-center gap-1">
                      <button
                        class="w-6 h-6 flex items-center justify-center border border-[#e5e7eb] rounded-1 text-[#9ca3af] hover:bg-[#f3f4f6]"
                      >
                        <ChevronRightIcon class="w-[14px] h-[14px] rotate-180" />
                      </button>
                      <button
                        class="w-6 h-6 flex items-center justify-center border border-[#e5e7eb] rounded-1 text-[#6b7280] hover:bg-[#f3f4f6]"
                      >
                        <ChevronRightIcon class="w-[14px] h-[14px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vertical Spacer -->
            <div class="h-10 w-full"></div>

            <!-- Generate Migration Template Button -->
            <button
              class="w-[1517px] h-[47px] bg-[#89939e] text-white text-[15px] font-medium rounded-1 flex flex-col justify-center items-center hover:bg-[#7a838a] transition-colors shadow-sm tracking-wide"
            >
              <div class="flex items-center gap-2">
                <SettingsIcon class="w-4 h-4 text-white" />
                <span>Generate Migration Template</span>
              </div>
            </button>
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
  TriangleAlert as TriangleAlertIcon,
  CheckCircle2 as CheckCircle2Icon,
  AlertCircle as AlertCircleIcon,
  Eye as EyeIcon,
  Wrench as WrenchIcon,
  MoreVertical as MoreVerticalIcon,
  Settings2 as SettingsIcon,
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
