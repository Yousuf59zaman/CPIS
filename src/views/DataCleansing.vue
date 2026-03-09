<template>
  <div
    class="flex flex-col h-screen w-full bg-[#f4f7f4] font-['Poppins',sans-serif] overflow-hidden"
  >
    <div class="flex flex-1 min-h-0 relative">
      <!-- Sidebar component -->
      <Sidebar />

      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <!-- Background pattern/separator if needed from Figma could be here -->

        <!-- Topbar component -->
        <Topbar />

        <!-- Main content -->
        <main
          class="flex-1 overflow-y-auto overflow-x-hidden relative px-[40px] pt-[24px] pb-[100px]"
        >
          <!-- Breadcrumb & Action Button Row -->
          <div class="flex items-center justify-between w-full mb-0 animate-fade-in-up">
            <div
              class="flex items-center gap-[10px] bg-white px-[24px] py-[8px] rounded-[57px] border-[0.5px] border-[#a6a6a6] shadow-sm h-[38px] w-[140px]"
            >
              <span
                class="text-[16px] font-['Poppins'] text-[#171a1f] whitespace-nowrap leading-[20px]"
                >Dashboard</span
              >
            </div>

            <button
              class="h-[38px] px-[24px] rounded-[57px] flex items-center justify-center gap-2 text-[#171a1f] font-['Poppins'] text-[16px] shadow-sm hover:bg-[#e0ece5] transition-colors"
              style="
                background-image:
                  linear-gradient(90deg, rgb(238, 243, 240) 0%, rgb(238, 243, 240) 100%),
                  linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
              "
            >
              <PlusIcon class="w-4 h-4 ml-[-6px]" />
              <span>Start New Data Cleansing</span>
            </button>
          </div>

          <div class="h-[24px] w-full shrink-0"></div>

          <!-- The Main White Card -->
          <div
            class="bg-white rounded-[10px] shadow-sm border border-gray-100 pt-[24px] px-[16px] pb-[16px] w-full animate-fade-in-up flex flex-col"
            style="box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.05)"
          >
            <!-- Card Header -->
            <div
              class="flex flex-wrap justify-between items-center relative px-[16px] pb-[16px] gap-4"
            >
              <div class="flex flex-col relative">
                <!-- Custom half-height green marker for title, positioned at the card's edge (-32px offsets the 16px+16px px padding) -->
                <div
                  class="absolute left-[-32px] top-[6px] h-[30px] w-[5px] bg-[#1a4a1a] rounded-r-[5px]"
                ></div>

                <h2 class="text-[30px] font-['Poppins'] text-black mb-1 capitalize leading-[41px]">
                  Data Cleansing Dashboard
                </h2>
                <p
                  class="text-[18px] font-['Poppins'] font-light text-black capitalize leading-normal"
                >
                  Confirm all mandatory compliance checks before authorization
                </p>
              </div>

              <div class="flex items-center gap-[15px] mr-[3%]">
                <div
                  class="relative w-[285px] h-[38px] rounded-[57px] border-[0.5px] border-[#a4a4a4]"
                  style="
                    background-image:
                      linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%),
                      linear-gradient(90deg, rgb(23, 26, 31) 0%, rgb(23, 26, 31) 100%);
                  "
                >
                  <input
                    type="text"
                    placeholder="Search files..."
                    class="w-full h-full pl-[24px] pr-10 bg-transparent rounded-[57px] text-[16px] font-['Poppins'] font-light text-[#171a1f] focus:outline-none"
                  />
                  <SearchIcon
                    class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202224] opacity-50"
                    stroke-width="1.5"
                  />
                </div>
                <button
                  class="h-[38px] px-[24px] rounded-[57px] flex items-center justify-center font-['Poppins'] text-[16px] text-[#171a1f]"
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
            <div class="overflow-x-auto w-full mt-0 pb-4 px-[16px]">
              <table class="w-full text-left border-collapse table-auto">
                <thead>
                  <tr
                    class="bg-[#F2F4F7] border-y-[0.3px] border-y-[rgba(0,0,0,0.15)] border-x-0 border-solid text-[#202224] text-[15px] font-['Poppins'] font-medium uppercase tracking-wider h-[55px]"
                  >
                    <th class="pl-[30px] pr-4 whitespace-nowrap font-medium">Batch ID</th>
                    <th class="px-4 whitespace-nowrap font-medium">Upload Date</th>
                    <th class="px-4 whitespace-nowrap font-medium text-center">Records</th>
                    <th class="px-4 whitespace-nowrap font-medium text-center">Status</th>
                    <th class="pr-[30px] pl-4 whitespace-nowrap font-medium text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in tableData"
                    :key="index"
                    class="border-b-[0.3px] border-b-[rgba(0,0,0,0.15)] border-x-0 border-solid hover:bg-gray-50/50 transition-colors h-[90px]"
                  >
                    <td
                      class="pl-[30px] pr-4 text-[#202224] text-[16px] opacity-80 font-['Poppins'] font-normal whitespace-nowrap"
                    >
                      {{ row.id }}
                    </td>
                    <td
                      class="px-4 text-[#202224] text-[16px] opacity-80 font-['Poppins'] font-normal whitespace-nowrap"
                    >
                      {{ row.date }}
                    </td>
                    <td
                      class="px-4 text-[#202224] text-[16px] opacity-80 font-['Poppins'] font-normal whitespace-nowrap text-center"
                    >
                      {{ row.records }}
                    </td>
                    <td class="px-4 text-center">
                      <span
                        class="inline-flex justify-center items-center px-[24px] py-[6px] rounded-[57px] text-[14px] font-['Poppins'] font-light border-[0.5px] border-[#a6a6a6] text-[#1b1f25] bg-white whitespace-nowrap leading-none"
                      >
                        {{ row.status }}
                      </span>
                    </td>
                    <td class="pr-[30px] pl-4 text-center">
                      <button
                        class="inline-flex justify-center items-center px-[16px] py-[6px] rounded-[57px] text-[14px] font-['Poppins'] font-normal border-[0.5px] border-[#a6a6a6] text-[#565e6d] bg-white whitespace-nowrap leading-none hover:bg-gray-50 transition-colors"
                      >
                        {{ row.action }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex flex-wrap justify-between items-center mt-[30px] px-[16px] gap-4">
              <span class="font-['Poppins'] font-light text-[16px] leading-[20px] text-[#808080]"
                >Showing 1 to 5 of 5 entries</span
              >
              <div class="flex items-center gap-[30px]">
                <span class="font-['Poppins'] font-light text-[16px] leading-[20px] text-[#808080]"
                  >Page 1 of 12</span
                >
                <div class="flex gap-2">
                  <button
                    class="w-[28px] h-[28px] rounded-[2px] flex items-center justify-center border-[0.5px] border-[#565e6d] text-[#565e6d] hover:bg-gray-50 bg-white overflow-hidden text-[14px]"
                  >
                    <ChevronLeftIcon class="w-[16px] h-[16px]" stroke-width="1.5" />
                  </button>
                  <button
                    class="w-[28px] h-[28px] rounded-[2px] flex items-center justify-center border-[0.5px] border-[#565e6d] text-[#565e6d] hover:bg-gray-50 bg-white overflow-hidden text-[14px]"
                  >
                    <ChevronRightIcon class="w-[16px] h-[16px]" stroke-width="1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Footer component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {
  Plus as PlusIcon,
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from 'lucide-vue-next'
import Sidebar from '@/components/layout/Sidebar.vue'
import Topbar from '@/components/layout/Topbar.vue'
import Footer from '@/components/layout/Footer.vue'

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
</style>
