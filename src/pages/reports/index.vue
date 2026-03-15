<script setup lang="ts">
import { reactive } from 'vue'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  type ChartData,
  type ChartOptions,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileDown,
  Search,
} from 'lucide-vue-next'

defineOptions({ name: 'ReportsPage' })

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const filters = reactive({
  fromDate: '2026-12-01',
  toDate: '2026-12-01',
  office: '',
  claimType: '',
  status: '',
  chartMode: 'count',
  search: '',
  pageSize: '10',
})

const officeOptions = [
  { label: 'All Offices', value: '' },
  { label: 'Office A - North', value: 'office-a' },
  { label: 'Office B - Central', value: 'office-b' },
  { label: 'Office C - South', value: 'office-c' },
]

const claimTypeOptions = [
  { label: 'All Types', value: '' },
  { label: 'Property', value: 'property' },
  { label: 'Flood', value: 'flood' },
  { label: 'Medical', value: 'medical' },
]

const statusOptions = [
  { label: 'All Statuses', value: '' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Returned', value: 'Returned' },
  { label: 'Completed', value: 'Completed' },
  { label: 'Overdue', value: 'Overdue' },
]

const pageSizeOptions = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
]

const chartModeOptions = [
  { label: 'By Count', value: 'count' },
  { label: 'By Value', value: 'value' },
]

const summaryCards = [
  { label: 'Total Claims', value: '157', note: '+12% from last month' },
  { label: 'Claimant Name', value: '42' },
  { label: 'Claim Type', value: '15' },
  { label: 'Property Location', value: '88' },
  { label: 'Overdue', value: '12' },
]

const claims = [
  {
    agenda: 'CLM-88219',
    claimant: 'Jonathan Vance',
    unit: 'Unit A - North',
    status: 'Pending',
    submitted: '2023-10-12',
    type: '12',
  },
  {
    agenda: 'CLM-88220',
    claimant: 'Sarah McAllister',
    unit: 'Unit C - South',
    status: 'Completed',
    submitted: '2023-10-05',
    type: '19',
  },
  {
    agenda: 'CLM-88221',
    claimant: 'Robert Chen',
    unit: 'Unit B - Central',
    status: 'Overdue',
    submitted: '2023-09-15',
    type: '39',
  },
  {
    agenda: 'CLM-88222',
    claimant: 'Elena Rodriguez',
    unit: 'Unit A - North',
    status: 'Returned',
    submitted: '2023-10-20',
    type: '6',
  },
  {
    agenda: 'CLM-88223',
    claimant: 'Marcus Thompson',
    unit: 'Unit D - East',
    status: 'Pending',
    submitted: '2023-10-18',
    type: '12',
  },
]

const chartData: ChartData<'bar'> = {
  labels: ['Pending', 'Returned', 'Completed', 'Overdue'],
  datasets: [
    {
      data: [55, 18, 100, 14],
      backgroundColor: ['#DFC1FC', '#F7F3EC', '#BFF1BF', '#FF3B3B'],
      borderWidth: 0,
      borderRadius: 0,
      borderSkipped: false,
      categoryPercentage: 0.68,
      barPercentage: 0.84,
      maxBarThickness: 100,
    },
  ],
}

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#202224',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      displayColors: false,
      padding: 10,
    },
  },
  layout: {
    padding: {
      top: 8,
      right: 8,
      left: 0,
      bottom: 0,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: '#5d6168',
        font: {
          family: 'Poppins, sans-serif',
          size: 12,
          weight: 'normal',
        },
      },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        color: '#7d7e87',
        font: {
          family: 'Poppins, sans-serif',
          size: 11,
          weight: 'normal',
        },
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
}

const inputClass =
  'h-[38px] w-full rounded-[6px] border border-[#ececec] bg-white px-[12px] text-[18px] leading-[27px] font-light text-[#171A1F] outline-none transition placeholder:text-[#a1a1aa] focus:border-[#275227] focus:ring-1 focus:ring-[#275227]/10'

const selectClass =
  'h-[38px] w-full appearance-none rounded-[6px] border border-[#ececec] bg-white px-[12px] pr-[34px] text-[18px] leading-[27px] font-light text-[#171A1F] outline-none transition focus:border-[#275227] focus:ring-1 focus:ring-[#275227]/10'

function statusColor(status: string) {
  if (status === 'Completed') return 'bg-[#d7f7d9] text-[#2c8c45]'
  if (status === 'Pending') return 'bg-[#efdbff] text-[#8f42cf]'
  if (status === 'Overdue') return 'bg-[#ff5252] text-white'
  if (status === 'Returned') return 'bg-[#fff2bf] text-[#b38a1f]'
  return 'bg-[#eef0f2] text-[#6b7280]'
}
</script>

<template>
  <main class="flex flex-col gap-[22px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <h1 class="text-[24px] font-medium text-[#202224] md:text-[30px]">Reports</h1>

      <div class="flex flex-wrap items-center justify-end gap-[10px]">
        <button
          type="button"
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[999px] bg-[#275227] px-[16px] text-[20px] leading-[35px] font-medium text-white shadow-[0_8px_24px_rgba(39,82,39,0.16)] transition hover:bg-[#214721]"
        >
          <FileDown class="h-[13px] w-[13px]" />
          Export Data
        </button>

        <div
          class="flex items-center gap-[8px] rounded-[999px] border border-[#ece8e1] bg-[#fbfaf7] px-[16px] py-[8px] text-[16px] leading-[24px] font-light text-[#A7A6A6]"
        >
          <span>Dashboard</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span>Reports</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span class="text-[#6b6b73]">Claims by Status</span>
        </div>
      </div>
    </div>

    <section class="rounded-[12px] bg-white p-[12px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="grid grid-cols-1 gap-[12px] xl:grid-cols-6">
        <div class="rounded-[8px] border border-[#ececec] bg-[#faf8f3] p-[10px] xl:col-span-2">
          <label for="from-date" class="mb-[6px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">From Date</label>
          <input id="from-date" v-model="filters.fromDate" type="date" :class="inputClass" />
        </div>

        <div class="rounded-[8px] border border-[#ececec] bg-[#faf8f3] p-[10px] xl:col-span-2">
          <label for="to-date" class="mb-[6px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">To Date</label>
          <input id="to-date" v-model="filters.toDate" type="date" :class="inputClass" />
        </div>

        <div class="rounded-[8px] border border-[#ececec] bg-[#faf8f3] p-[10px] xl:col-span-2">
          <label for="office-unit" class="mb-[6px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">Office/Unit</label>
          <div class="relative">
            <select id="office-unit" v-model="filters.office" :class="selectClass">
              <option v-for="option in officeOptions" :key="option.value || option.label" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            <ChevronDown
              class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
            />
          </div>
        </div>

        <div class="rounded-[8px] border border-[#ececec] bg-[#faf8f3] p-[10px] xl:col-span-3">
          <label for="claim-type" class="mb-[6px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">Claim Type</label>
          <div class="relative">
            <select id="claim-type" v-model="filters.claimType" :class="selectClass">
              <option v-for="option in claimTypeOptions" :key="option.value || option.label" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            <ChevronDown
              class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
            />
          </div>
        </div>

        <div class="rounded-[8px] border border-[#ececec] bg-[#faf8f3] p-[10px] xl:col-span-3">
          <label for="status-filter" class="mb-[6px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">Status</label>
          <div class="relative">
            <select id="status-filter" v-model="filters.status" :class="selectClass">
              <option v-for="option in statusOptions" :key="option.value || option.label" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            <ChevronDown
              class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
            />
          </div>
        </div>
      </div>

      <div class="mt-[12px] grid grid-cols-1 gap-[12px] md:grid-cols-2">
        <button
          type="button"
          class="inline-flex h-[40px] items-center justify-center rounded-[4px] bg-[#275227] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#214721]"
        >
          Apply
        </button>
        <button
          type="button"
          class="inline-flex h-[40px] items-center justify-center rounded-[4px] bg-[#da972e] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#c38320]"
        >
          Reset
        </button>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-5">
      <article
        v-for="card in summaryCards"
        :key="card.label"
        class="rounded-[10px] border border-[#ececec] bg-white px-[16px] py-[14px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.04)]"
      >
        <div class="border-l-[4px] border-[#f3d6aa] pl-[12px]">
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ card.label }}</p>
          <p class="mt-[6px] text-[18px] font-semibold leading-none text-[#171a1f] md:text-[40px]">
            {{ card.value }}
          </p>
          <p v-if="card.note" class="mt-[8px] text-[16px] leading-[20px] font-light text-[#808080]">{{ card.note }}</p>
        </div>
      </article>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[16px] flex flex-wrap items-start justify-between gap-[12px]">
        <div>
          <div class="flex items-center gap-[10px]">
            <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
            <h2 class="text-[18px] font-medium text-[#202224] md:text-[20px]">Status Distribution</h2>
          </div>
          <p class="mt-[4px] text-[16px] leading-[20px] font-light text-[#808080]">
            Current workload distribution across all processed units
          </p>
        </div>

        <div class="relative min-w-[98px]">
          <select v-model="filters.chartMode" :class="`${selectClass} h-[28px] rounded-[999px] bg-[#f5f6f6] py-0 text-[16px] leading-[20px] font-light text-[#808080]`">
            <option v-for="option in chartModeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="pointer-events-none absolute right-[10px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 text-[#8a8b92]"
          />
        </div>
      </div>

      <div class="h-[240px]">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </section>

    <section class="rounded-[12px] bg-white p-[12px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[12px] flex flex-wrap items-center justify-between gap-[10px] px-[2px]">
        <div
          class="flex w-full max-w-[340px] items-center gap-[8px] rounded-[999px] border border-[#e9eaec] bg-white px-[12px] py-[7px]"
        >
          <Search class="h-[12px] w-[12px] text-[#767982]" />
          <input
            v-model="filters.search"
            type="text"
            placeholder="Search claims by ID, Claimant or Unit.."
            class="w-full bg-transparent text-[18px] leading-[27px] font-light text-[#171A1F] outline-none placeholder:text-[#a1a1aa]"
          />
        </div>

        <div class="flex items-center gap-[10px]">
          <div class="flex items-center gap-[8px] text-[20px] leading-[28px] font-normal text-[#171A1F]">
            <span>Show:</span>
            <div class="relative min-w-[70px]">
              <select v-model="filters.pageSize" :class="`${selectClass} h-[28px] rounded-[999px] py-0 text-[16px] leading-[20px] font-light text-[#808080]`">
                <option v-for="option in pageSizeOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <ChevronDown
                class="pointer-events-none absolute right-[10px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 text-[#6a6c71]"
              />
            </div>
          </div>

          <button
            type="button"
            class="inline-flex h-[28px] items-center gap-[6px] rounded-[999px] border border-[#ececec] bg-white px-[10px] text-[16px] leading-[20px] font-light text-[#808080]"
          >
            <FileDown class="h-[12px] w-[12px]" />
            CSV
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[860px]">
          <thead>
            <tr class="border-b border-[#efefef] bg-[#fafafa]">
              <th class="px-[12px] py-[12px] text-left">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#275227]" />
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Agenda No
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Claimant Name
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Assigned Unit
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Status</th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Submitted
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Claim Type
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="claim in claims" :key="claim.agenda" class="border-b border-[#f3f3f3]">
              <td class="px-[12px] py-[12px]">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#275227]" />
              </td>
              <td class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ claim.agenda }}</td>
              <td class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ claim.claimant }}</td>
              <td class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ claim.unit }}</td>
              <td class="px-[12px] py-[12px]">
                <span
                  class="inline-flex rounded-[999px] px-[10px] py-[2px] text-[15px] leading-[22px] font-light text-[#1B1F25]"
                  :class="statusColor(claim.status)"
                >
                  {{ claim.status }}
                </span>
              </td>
              <td class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ claim.submitted }}</td>
              <td class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ claim.type }}</td>
              <td class="px-[12px] py-[12px]">
                <div class="flex items-center gap-[8px]">
                  <button
                    type="button"
                    class="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[999px] border border-[#ececec] text-[#6a6c71] transition hover:bg-[#f7f7f7]"
                  >
                    <Eye class="h-[11px] w-[11px]" />
                  </button>
                  <button
                    type="button"
                    class="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[999px] border border-[#ececec] text-[#6a6c71] transition hover:bg-[#f7f7f7]"
                  >
                    <Download class="h-[11px] w-[11px]" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-[12px] flex flex-wrap items-center justify-between gap-[10px] px-[4px] text-[16px] leading-[20px] font-light text-[#808080]">
        <span>Showing 1 to 5 of 5 entries</span>

        <div class="flex items-center gap-[10px]">
          <span>Page 1 of 12</span>
          <div class="flex items-center gap-[6px]">
            <button
              type="button"
              class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
            >
              <ChevronLeft class="h-[12px] w-[12px]" />
            </button>
            <button
              type="button"
              class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
            >
              <ChevronRight class="h-[12px] w-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>



