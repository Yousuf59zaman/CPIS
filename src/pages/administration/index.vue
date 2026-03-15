<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, ChevronRight, Download, Shuffle } from 'lucide-vue-next'

defineOptions({ name: 'AdministrationIndexPage' })

type RaffleCase = {
  id: string
  name: string
  amount: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'Ready'
}

type Officer = {
  name: string
  workload: string
  workloadPercent: number
  status: 'Active' | 'On Leave'
  eligible: 'Yes' | 'No'
}

type AssignmentResult = {
  id: string
  officer: string
  time: string
  state: string
}

const RAFFLE_STORAGE_KEY = 'cpis-ser-raffling-results'
const router = useRouter()

const rafflingBatchId = 'RB-2026-05'
const executionDate = '24/05/2026'

const rafflingCases: RaffleCase[] = [
  { id: 'CPIS-2026-001', name: 'John Doe', amount: '50,000', priority: 'High', status: 'Ready' },
  { id: 'CPIS-2026-002', name: 'Jane Smith', amount: '30,000', priority: 'Medium', status: 'Ready' },
  { id: 'CPIS-2026-003', name: 'Robert Wilson', amount: '12,500', priority: 'Low', status: 'Ready' },
  { id: 'CPIS-2026-004', name: 'Alice Johnson', amount: '75,000', priority: 'High', status: 'Ready' },
  { id: 'CPIS-2026-005', name: 'Michael Brown', amount: '22,000', priority: 'Medium', status: 'Ready' },
]

const officers: Officer[] = [
  { name: 'Officer A', workload: '5 Active Cases', workloadPercent: 56, status: 'Active', eligible: 'Yes' },
  { name: 'Officer B', workload: '3 Active Cases', workloadPercent: 34, status: 'Active', eligible: 'Yes' },
  { name: 'Officer C', workload: '7 Active Cases', workloadPercent: 74, status: 'On Leave', eligible: 'No' },
  { name: 'Officer D', workload: '2 Active Cases', workloadPercent: 22, status: 'Active', eligible: 'Yes' },
  { name: 'Officer E', workload: '4 Active Cases', workloadPercent: 42, status: 'Active', eligible: 'Yes' },
]

const selectedCaseIds = ref<string[]>(['CPIS-2026-002'])
const selectedOfficerNames = ref<string[]>([])

const summaryCards = [
  { label: 'Status', value: 'Ready for Raffling' },
  { label: 'Total Cases Pending', value: '12' },
  { label: 'Raffling Batch ID', value: rafflingBatchId },
  { label: 'Date', value: executionDate },
]

const priorityClasses: Record<RaffleCase['priority'], string> = {
  High: 'bg-[#fde9e7]',
  Medium: 'bg-[#fee79b]',
  Low: 'bg-[#f3f4f6]',
}

const statusClasses: Record<Officer['status'], string> = {
  Active: 'bg-[#d1fae5]',
  'On Leave': 'bg-[#fef3c7]',
}

const eligibleClasses: Record<Officer['eligible'], string> = {
  Yes: 'bg-[#d1fae5]',
  No: 'bg-[#fef3c7]',
}

const allCasesSelected = computed(
  () => rafflingCases.length > 0 && selectedCaseIds.value.length === rafflingCases.length,
)

const allOfficersSelected = computed(
  () => officers.length > 0 && selectedOfficerNames.value.length === officers.length,
)

const selectedCases = computed(() =>
  selectedCaseIds.value.length > 0
    ? rafflingCases.filter((row) => selectedCaseIds.value.includes(row.id))
    : rafflingCases,
)

const raffleOfficerPool = computed(() => {
  const scopedOfficers =
    selectedOfficerNames.value.length > 0
      ? officers.filter((officer) => selectedOfficerNames.value.includes(officer.name))
      : officers

  return scopedOfficers.filter((officer) => officer.status === 'Active' && officer.eligible === 'Yes')
})

function handleCaseSelectionToggle(event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  selectedCaseIds.value = checked ? rafflingCases.map((row) => row.id) : []
}

function handleOfficerSelectionToggle(event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  selectedOfficerNames.value = checked ? officers.map((officer) => officer.name) : []
}

function buildCsv() {
  const exportedCases = selectedCases.value
  const exportedOfficers =
    selectedOfficerNames.value.length > 0
      ? officers.filter((officer) => selectedOfficerNames.value.includes(officer.name))
      : officers

  const caseRows = exportedCases.map((row) =>
    [row.id, row.name, row.amount, row.priority, row.status].join(','),
  )

  const officerRows = exportedOfficers.map((officer) =>
    [officer.name, officer.workload, officer.status, officer.eligible].join(','),
  )

  return [
    'Cases Ready for Raffling',
    'Claim ID,Claimant Name,Approved Amount (PHP),Priority,Status',
    ...caseRows,
    '',
    'Available SER Officers',
    'Officer Name,Current Workload,System Status,Eligible for Raffle',
    ...officerRows,
  ].join('\n')
}

function exportList() {
  if (typeof window === 'undefined') return

  const csvContent = buildCsv()
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `ser-raffling-${rafflingBatchId}.csv`
  link.click()

  window.URL.revokeObjectURL(url)
}

function generateAssignments(casesToAssign: RaffleCase[], availableOfficers: Officer[]) {
  const fallbackOfficer = availableOfficers[0]

  if (!fallbackOfficer) return []

  return casesToAssign.map<AssignmentResult>((row, index) => {
    const assignedOfficer = availableOfficers[index % availableOfficers.length] ?? fallbackOfficer
    const secondOffset = 12 + index * 3

    return {
      id: row.id,
      officer: assignedOfficer.name,
      time: `10:35:${String(secondOffset).padStart(2, '0')} AM`,
      state: 'New Assignment',
    }
  })
}

async function runAutomatedRaffle() {
  const casesToAssign = selectedCases.value
  const availableOfficers = raffleOfficerPool.value

  if (casesToAssign.length === 0) {
    window.alert('Select at least one case to run the automated raffle.')
    return
  }

  if (availableOfficers.length === 0) {
    window.alert('No eligible officers are available for raffling.')
    return
  }

  const payload = {
    batchId: rafflingBatchId,
    executionDate,
    executedBy: 'Automated Raffling Engine',
    results: generateAssignments(casesToAssign, availableOfficers),
  }

  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(RAFFLE_STORAGE_KEY, JSON.stringify(payload))
  }

  await router.push({ name: 'assignment-review' })
}
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">SER Raffling</h1>

      <div
        class="flex items-center gap-[8px] rounded-[999px] border border-[#ece8e1] bg-[#fbfaf7] px-[16px] py-[8px] text-[16px] leading-[24px] font-light text-[#A7A6A6]"
      >
        <span>Administration</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Workflow Tools</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span class="text-[#171A1F]">SER Raffling Interface</span>
      </div>
    </div>

    <section class="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="card in summaryCards"
        :key="card.label"
        class="rounded-[10px] border border-[#ececec] bg-white px-[18px] py-[16px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.04)]"
      >
        <div class="border-l-[4px] border-[#f3d6aa] pl-[12px]">
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ card.label }}</p>
          <p class="mt-[8px] text-[18px] leading-[27px] font-light text-[#171A1F]">{{ card.value }}</p>
        </div>
      </article>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Cases Ready for Raffling</h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[760px]">
          <thead>
            <tr class="border-b border-[#ececec] bg-[#fafafa]">
              <th class="px-[12px] py-[10px] text-left">
                <input
                  type="checkbox"
                  class="h-[12px] w-[12px] accent-[#275227]"
                  :checked="allCasesSelected"
                  @change="handleCaseSelectionToggle"
                />
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Claim ID</th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Claimant Name
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Approved Amount (PHP)
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Priority</th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in rafflingCases" :key="row.id" class="border-b border-[#f3f3f3]">
              <td class="px-[12px] py-[14px]">
                <input
                  v-model="selectedCaseIds"
                  type="checkbox"
                  :value="row.id"
                  class="h-[12px] w-[12px] accent-[#6b7280]"
                />
              </td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ row.id }}</td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ row.name }}</td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ row.amount }}</td>
              <td class="px-[12px] py-[14px]">
                <span
                  class="inline-flex h-[23px] items-center justify-center rounded-[999px] px-[12px] text-[15px] leading-[22px] font-light text-[#1B1F25]"
                  :class="priorityClasses[row.priority]"
                >
                  {{ row.priority }}
                </span>
              </td>
              <td class="px-[12px] py-[14px]">
                <span class="inline-flex items-center gap-[6px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">
                  <span
                    class="inline-flex h-[12px] w-[12px] items-center justify-center rounded-full border border-[#202224] text-[8px] text-[#202224]"
                  >
                    <span class="h-[4px] w-[4px] rounded-full bg-[#202224]"></span>
                  </span>
                  {{ row.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-[12px] flex flex-wrap items-center justify-between gap-[10px] text-[16px] leading-[20px] font-light text-[#808080]">
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

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Available SER Officers</h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[760px]">
          <thead>
            <tr class="border-b border-[#ececec] bg-[#fafafa]">
              <th class="px-[12px] py-[10px] text-left">
                <input
                  type="checkbox"
                  class="h-[12px] w-[12px] accent-[#275227]"
                  :checked="allOfficersSelected"
                  @change="handleOfficerSelectionToggle"
                />
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Officer Name
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Current Workload
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                System Status
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Eligible for Raffle
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="officer in officers" :key="officer.name" class="border-b border-[#f3f3f3]">
              <td class="px-[12px] py-[14px]">
                <input
                  v-model="selectedOfficerNames"
                  type="checkbox"
                  :value="officer.name"
                  class="h-[12px] w-[12px] accent-[#6b7280]"
                />
              </td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ officer.name }}</td>
              <td class="px-[12px] py-[14px]">
                <div class="flex items-center gap-[10px]">
                  <div class="h-[6px] w-[58px] rounded-full bg-[#d7d7dc]">
                    <div class="h-[6px] rounded-full bg-[#275227]" :style="{ width: `${officer.workloadPercent}%` }"></div>
                  </div>
                  <span class="text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ officer.workload }}</span>
                </div>
              </td>
              <td class="px-[12px] py-[14px]">
                <span
                  class="inline-flex h-[23px] items-center justify-center rounded-[999px] px-[12px] text-[15px] leading-[22px] font-light text-[#1B1F25]"
                  :class="statusClasses[officer.status]"
                >
                  {{ officer.status }}
                </span>
              </td>
              <td class="px-[12px] py-[14px]">
                <span
                  class="inline-flex h-[23px] items-center gap-[5px] rounded-[999px] px-[12px] text-[15px] leading-[22px] font-light text-[#1B1F25]"
                  :class="eligibleClasses[officer.eligible]"
                >
                  <span
                    class="inline-flex h-[10px] w-[10px] items-center justify-center rounded-full border border-current text-[6px]"
                  >
                    <span
                      class="h-[3px] w-[3px] rounded-full"
                      :class="officer.eligible === 'Yes' ? 'bg-[#60636b]' : 'bg-[#bdbec5]'"
                    ></span>
                  </span>
                  {{ officer.eligible }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-[12px] flex flex-wrap items-center justify-between gap-[10px] text-[16px] leading-[20px] font-light text-[#808080]">
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

    <div class="grid grid-cols-1 gap-[12px] md:grid-cols-2">
      <button
        type="button"
        class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#275227] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#214721]"
        @click="exportList"
      >
        <Download class="h-[14px] w-[14px]" />
        Export List
      </button>
      <button
        type="button"
        class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#da972e] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#c38320]"
        @click="runAutomatedRaffle"
      >
        <Shuffle class="h-[14px] w-[14px]" />
        Run Automated Raffle
      </button>
    </div>
  </main>
</template>



