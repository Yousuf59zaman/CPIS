<template>
  <div
    class="flex flex-col min-h-screen w-full bg-[#f4f7f4] font-['Poppins',sans-serif] overflow-x-hidden text-[#171a1f]"
  >
    <div class="flex flex-1 relative items-stretch h-full">
      <!-- Sidebar column wrapping container -->
      <aside
        class="w-0 lg:w-[260px] xl:w-[280px] 2xl:w-[320px] bg-white lg:border-r lg:border-[#cdcdcd] shrink-0 relative z-40 lg:z-10"
      >
        <div class="sticky top-0 h-screen w-full">
          <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
        </div>
      </aside>

      <div class="flex-1 flex flex-col min-w-0 relative z-20">
        <!-- Topbar component -->
        <AppTopbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

        <!-- Main content -->
        <main
          class="flex-1 w-full max-w-full px-[16px] md:px-[24px] 2xl:px-[40px] pt-[20px] 2xl:pt-[24px] pb-[32px]"
        >
          <!-- Breadcrumb & Action Button Row -->
          <div
            class="flex flex-col md:flex-row items-center justify-between w-full mb-0 animate-fade-in-up gap-4 md:gap-0"
          >
            <div
              class="flex items-center gap-[10px] bg-white px-[20px] 2xl:px-[24px] py-[6px] 2xl:py-[8px] rounded-[57px] border-[0.5px] border-[#a6a6a6] shadow-sm h-[34px] 2xl:h-[38px] w-full md:w-[140px] justify-center md:justify-start"
            >
              <span
                class="text-[14px] 2xl:text-[16px] font-['Poppins'] text-[#171a1f] whitespace-nowrap leading-[20px]"
                >Dashboard</span
              >
            </div>

            <button
              class="w-full md:w-auto h-[34px] 2xl:h-[38px] px-[20px] 2xl:px-[24px] rounded-[57px] flex items-center justify-center gap-2 text-[#171a1f] font-['Poppins'] text-[14px] 2xl:text-[16px] shadow-sm hover:bg-[#e0ece5] transition-colors"
              style="
                background-image:
                  linear-gradient(90deg, rgb(238, 243, 240) 0%, rgb(238, 243, 240) 100%),
                  linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
              "
            >
              <PlusIcon class="w-3.5 h-3.5 2xl:w-4 2xl:h-4 ml-[-6px]" />
              <span class="whitespace-nowrap">Start New Data Cleansing</span>
            </button>
          </div>

          <div class="h-[18px] 2xl:h-[24px] w-full shrink-0"></div>

          <!-- The Main White Card -->
          <div
            class="bg-white rounded-[10px] shadow-sm border border-gray-100 pt-[24px] px-[16px] pb-[16px] w-full max-w-full animate-fade-in-up flex flex-col min-w-0"
            style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)"
          >
            <!-- Card Header -->
            <div
              class="flex flex-col lg:flex-row justify-between items-start lg:items-center relative px-0 md:px-[16px] pb-[16px] gap-6 lg:gap-4"
            >
              <div class="flex flex-col relative w-full lg:w-auto pl-[16px] md:pl-0">
                <!-- Custom half-height green marker for title, dynamically positioned to offset container padding on each breakpoint -->
                <div
                  class="absolute left-0 md:left-[-32px] top-[6px] h-[24px] 2xl:h-[30px] w-[5px] bg-[#1a4a1a] rounded-r-[5px]"
                ></div>

                <h2
                  class="text-[20px] md:text-[24px] xl:text-[26px] 2xl:text-[30px] font-['Poppins'] text-black mb-1 capitalize leading-tight md:leading-[41px]"
                >
                  Data Cleansing Dashboard
                </h2>
                <p
                  class="text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] font-['Poppins'] font-light text-black capitalize leading-normal w-full"
                >
                  Confirm all mandatory compliance checks before authorization
                </p>
              </div>

              <div
                class="flex flex-col md:flex-row items-center gap-[15px] w-full lg:w-auto lg:mr-[3%]"
              >
                <div
                  class="relative w-full md:w-[240px] 2xl:w-[285px] h-[34px] 2xl:h-[38px] rounded-[57px] border-[0.5px] border-[#a4a4a4] shrink-0"
                  style="
                    background-image:
                      linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
                      linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
                  "
                >
                  <input
                    type="text"
                    placeholder="Search files..."
                    class="w-full h-full pl-[20px] 2xl:pl-[24px] pr-10 bg-transparent rounded-[57px] text-[14px] 2xl:text-[16px] font-['Poppins'] font-light text-[#171a1f] focus:outline-none"
                  />
                  <SearchIcon
                    class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] 2xl:w-[18px] 2xl:h-[18px] text-[#202224] opacity-50"
                    stroke-width="1.5"
                  />
                </div>
                <button
                  class="w-full md:w-auto h-[34px] 2xl:h-[38px] px-[20px] 2xl:px-[24px] rounded-[57px] flex items-center justify-center font-['Poppins'] text-[14px] 2xl:text-[16px] text-[#171a1f] shrink-0"
                  style="
                    background-image:
                      linear-gradient(90deg, rgb(238, 243, 240) 0%, rgb(238, 243, 240) 100%),
                      linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
                  "
                >
                  Filter
                </button>
              </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto custom-scrollbar w-full mt-0 pb-4 px-[16px]">
              <table
                class="w-full text-left border-collapse block md:table min-w-full md:min-w-[1000px]"
              >
                <thead class="hidden md:table-header-group">
                  <tr
                    class="bg-[#F2F4F7] border-y-[0.3px] border-y-[rgba(0,0,0,0.15)] border-x-0 border-solid text-[#202224] text-[13px] 2xl:text-[15px] font-['Poppins'] font-medium uppercase tracking-wider h-[45px] 2xl:h-[55px]"
                  >
                    <th class="pl-[30px] pr-4 whitespace-nowrap font-medium">Batch ID</th>
                    <th class="px-4 whitespace-nowrap font-medium">Upload Date</th>
                    <th class="px-4 whitespace-nowrap font-medium text-center">Records</th>
                    <th class="px-4 whitespace-nowrap font-medium text-center">Status</th>
                    <th class="pr-[30px] pl-4 whitespace-nowrap font-medium text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="block md:table-row-group">
                  <tr
                    v-for="(row, index) in tableData"
                    :key="index"
                    class="block md:table-row bg-white border border-gray-200 md:border-y-0 md:border-x-0 md:border-b-[0.3px] md:border-b-[rgba(0,0,0,0.15)] md:border-solid hover:bg-gray-50/50 transition-colors h-auto md:h-[65px] 2xl:h-[90px] rounded-[10px] md:rounded-none mb-4 md:mb-0 p-4 md:p-0 shadow-sm md:shadow-none"
                  >
                    <td
                      class="flex md:table-cell justify-between items-center py-[12px] md:py-0 border-b border-gray-100 md:border-0 last:border-0 pl-0 md:pl-[30px] pr-0 md:pr-4 text-[#202224] text-[14px] 2xl:text-[16px] font-['Poppins'] font-normal whitespace-nowrap"
                    >
                      <span
                        class="md:hidden font-medium text-gray-500 text-[13px] uppercase tracking-wider"
                        >Batch ID</span
                      >
                      <span class="opacity-80">{{ row.id }}</span>
                    </td>
                    <td
                      class="flex md:table-cell justify-between items-center py-[12px] md:py-0 border-b border-gray-100 md:border-0 last:border-0 px-0 md:px-4 text-[#202224] text-[14px] 2xl:text-[16px] font-['Poppins'] font-normal whitespace-nowrap"
                    >
                      <span
                        class="md:hidden font-medium text-gray-500 text-[13px] uppercase tracking-wider"
                        >Upload Date</span
                      >
                      <span class="opacity-80">{{ row.date }}</span>
                    </td>
                    <td
                      class="flex md:table-cell justify-between items-center py-[12px] md:py-0 border-b border-gray-100 md:border-0 last:border-0 px-0 md:px-4 text-[#202224] text-[14px] 2xl:text-[16px] font-['Poppins'] font-normal whitespace-nowrap md:text-center"
                    >
                      <span
                        class="md:hidden font-medium text-gray-500 text-[13px] uppercase tracking-wider"
                        >Records</span
                      >
                      <span class="opacity-80">{{ row.records }}</span>
                    </td>
                    <td
                      class="flex md:table-cell justify-between items-center py-[12px] md:py-0 border-b border-gray-100 md:border-0 last:border-0 px-0 md:px-4 md:text-center"
                    >
                      <span
                        class="md:hidden font-medium text-gray-500 text-[13px] uppercase tracking-wider"
                        >Status</span
                      >
                      <span
                        class="inline-flex justify-center items-center px-[16px] 2xl:px-[24px] py-[4px] 2xl:py-[6px] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] font-light border-[0.5px] border-[#a6a6a6] text-[#1b1f25] bg-white whitespace-nowrap leading-none"
                      >
                        {{ row.status }}
                      </span>
                    </td>
                    <td
                      class="flex md:table-cell justify-between items-center pt-[16px] pb-[4px] md:py-0 border-b border-gray-100 md:border-0 last:border-0 pl-0 pr-0 md:pr-[30px] md:pl-4 md:text-center"
                    >
                      <span
                        class="md:hidden font-medium text-gray-500 text-[13px] uppercase tracking-wider"
                        >Action</span
                      >
                      <button
                        class="inline-flex justify-center items-center px-[12px] 2xl:px-[16px] py-[4px] 2xl:py-[6px] rounded-[57px] text-[12px] 2xl:text-[14px] font-['Poppins'] font-normal border-[0.5px] border-[#a6a6a6] text-[#565e6d] bg-white whitespace-nowrap leading-none hover:bg-gray-50 transition-colors"
                      >
                        {{ row.action }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div
              class="flex flex-col sm:flex-row justify-between items-center mt-[20px] 2xl:mt-[30px] px-[16px] gap-4"
            >
              <span
                class="font-['Poppins'] font-light text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[20px] text-[#808080]"
                >Showing 1 to 5 of 5 entries</span
              >
              <div class="flex items-center gap-[15px] sm:gap-[30px]">
                <span
                  class="font-['Poppins'] font-light text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[20px] text-[#808080]"
                  >Page 1 of 12</span
                >
                <div class="flex gap-2">
                  <button
                    class="w-[24px] h-[24px] 2xl:w-[28px] 2xl:h-[28px] rounded-[2px] flex items-center justify-center border-[0.5px] border-[#565e6d] text-[#565e6d] hover:bg-gray-50 bg-white overflow-hidden"
                  >
                    <ChevronLeftIcon
                      class="w-[14px] h-[14px] 2xl:w-[16px] 2xl:h-[16px]"
                      stroke-width="1.5"
                    />
                  </button>
                  <button
                    class="w-[24px] h-[24px] 2xl:w-[28px] 2xl:h-[28px] rounded-[2px] flex items-center justify-center border-[0.5px] border-[#565e6d] text-[#565e6d] hover:bg-gray-50 bg-white overflow-hidden"
                  >
                    <ChevronRightIcon
                      class="w-[14px] h-[14px] 2xl:w-[16px] 2xl:h-[16px]"
                      stroke-width="1.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Footer component -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Plus as PlusIcon,
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from 'lucide-vue-next'
import AppSidebar from '@/components/layout/Sidebar.vue'
import AppTopbar from '@/components/layout/Topbar.vue'
import AppFooter from '@/components/layout/Footer.vue'

const isSidebarOpen = ref(false)

const tableData = [
  {
    id: 'BCH-2023-10-001',
    date: 'Oct 24, 2023 10:30 AM',
    records: '15,420',
    status: 'Validated',
    action: 'View Details',
  },
  {
    id: 'BCH-2023-10-001',
    date: 'Oct 24, 2023 10:30 AM',
    records: '850',
    status: 'Pending Validation',
    action: 'View Details',
  },
  {
    id: 'BCH-2023-10-001',
    date: 'Oct 24, 2023 10:30 AM',
    records: '4,200',
    status: 'Submitted to IT',
    action: 'View Details',
  },
  {
    id: 'BCH-2023-10-001',
    date: 'Oct 24, 2023 10:30 AM',
    records: '125',
    status: 'Failed',
    action: 'View Details',
  },
  {
    id: 'BCH-2023-10-001',
    date: 'Oct 24, 2023 10:30 AM',
    records: '9,800',
    status: 'Validated',
    action: 'View Details',
  },
]
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

/* Custom Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cdcdcd;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a6a6a6;
}
</style>
