<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-vue-next'

defineOptions({ name: 'AssignmentReviewPage' })

type RaffleResult = {
  id: string
  officer: string
  time: string
  state: string
}

type StoredRafflePayload = {
  batchId: string
  executionDate: string
  executedBy: string
  results: RaffleResult[]
}

const RAFFLE_STORAGE_KEY = 'cpis-ser-raffling-results'
const router = useRouter()

const batchInfo = ref([
  { label: 'Batch ID', value: 'RB-2026-05' },
  { label: 'Execution Date', value: '12/05/2026' },
])

const batchExecutor = ref({ label: 'Executed By', value: 'Sarah Jenkins (System Admin)' })

const rafflingResults = ref<RaffleResult[]>([
  { id: 'CPIS-2026-001', officer: 'Officer B', time: '10:35:12 AM', state: 'New Assignment' },
  { id: 'CPIS-2026-002', officer: 'Officer A', time: '10:35:14 AM', state: 'New Assignment' },
  { id: 'CPIS-2026-003', officer: 'Officer C', time: '10:35:18 AM', state: 'New Assignment' },
  { id: 'CPIS-2026-004', officer: 'Officer B', time: '10:35:21 AM', state: 'New Assignment' },
  { id: 'CPIS-2026-005', officer: 'Officer E', time: '10:35:25 AM', state: 'New Assignment' },
])

onMounted(() => {
  if (typeof window === 'undefined') return

  const rawPayload = window.sessionStorage.getItem(RAFFLE_STORAGE_KEY)

  if (!rawPayload) return

  try {
    const payload = JSON.parse(rawPayload) as StoredRafflePayload

    batchInfo.value = [
      { label: 'Batch ID', value: payload.batchId },
      { label: 'Execution Date', value: payload.executionDate },
    ]
    batchExecutor.value = { label: 'Executed By', value: payload.executedBy }
    rafflingResults.value = payload.results
  } catch {
    // Fallback to the default mock data if stored data is malformed.
  }
})

async function cancelAndRerun() {
  await router.push({ name: 'administration' })
}

function confirmAssignment() {
  if (typeof window === 'undefined') return
  window.alert('Assignments confirmed successfully.')
}
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]" style="font-family: 'Poppins', Inter, sans-serif;">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <div>
        <h1 class="text-[24px] md:text-[30px] font-medium text-[#202224]">Assignment Review And Confirmation</h1>
        <p class="text-[12px] text-[#6b7280]">Review the automated officer assignments before finalizing the batch distribution.</p>
      </div>
      <div
        class="flex items-center gap-[8px] h-[32px] rounded-[999px] border border-[#e5e7eb] bg-[#f7f7f7] px-[16px] text-[10px] font-light text-[#a7a6a6]"
      >
        <span>Administration</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Assignment Management</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Raffling Results</span>
      </div>
    </div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[10px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <div>
          <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Raffling Completed Successfully</h2>
          <p class="text-[11px] text-[#6b7280]">The Algorithm Has Finished Distributing The Current Claim Batch Among Available Officers.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div
          v-for="info in batchInfo"
          :key="info.label"
          class="grid grid-cols-[140px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px]"
        >
          <p class="text-[12px] text-[#171a1f]">{{ info.label }}</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">{{ info.value }}</span>
          </div>
        </div>
        <div
          class="grid grid-cols-[140px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] md:col-span-2"
        >
          <p class="text-[12px] text-[#171a1f]">{{ batchExecutor.label }}</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">{{ batchExecutor.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center justify-between gap-[12px] mb-[12px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <div>
            <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Raffling Results</h2>
            <p class="text-[11px] text-[#6b7280]">Summary Of {{ rafflingResults.length }} Generated Assignments Based On Current SER Availability.</p>
          </div>
        </div>
        <span class="text-[11px] text-[#6b7280] bg-[#f6f7f6] border border-[#e5e7eb] px-[10px] py-[4px] rounded-[999px]">
          Batch Size: {{ String(rafflingResults.length).padStart(2, '0') }}
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[720px]">
          <thead>
            <tr class="bg-[#fafafa] border-y border-[#ececec]">
              <th class="px-[12px] py-[10px] text-left text-[10px] font-semibold text-[#6b7280] uppercase">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#234f23]" />
              </th>
              <th class="px-[12px] py-[10px] text-left text-[10px] font-semibold text-[#6b7280] uppercase">Claim ID</th>
              <th class="px-[12px] py-[10px] text-left text-[10px] font-semibold text-[#6b7280] uppercase">Assigned SER Officer</th>
              <th class="px-[12px] py-[10px] text-left text-[10px] font-semibold text-[#6b7280] uppercase">Assignment Timestamp</th>
              <th class="px-[12px] py-[10px] text-left text-[10px] font-semibold text-[#6b7280] uppercase">Verification State</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rafflingResults" :key="row.id" class="border-b border-[#f0f0f0]">
              <td class="px-[12px] py-[10px]">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#234f23]" />
              </td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#171a1f]">{{ row.id }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#171a1f]">{{ row.officer }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#171a1f]">{{ row.time }}</td>
              <td class="px-[12px] py-[10px]">
                <span class="px-[12px] h-[22px] inline-flex items-center rounded-[999px] text-[10px] bg-[#e5e7eb] text-[#374151]">
                  {{ row.state }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex items-center justify-between mt-[10px] text-[11px] text-[#9ca3af]">
        <span>Showing 1 to {{ rafflingResults.length }} of {{ rafflingResults.length }} entries</span>
        <div class="flex items-center gap-[10px]">
          <span>Page 1 of 12</span>
          <div class="flex items-center gap-[6px]">
            <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded-[4px] flex items-center justify-center" type="button">
              <ChevronLeft class="w-[12px] h-[12px]" />
            </button>
            <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded-[4px] flex items-center justify-center" type="button">
              <ChevronRight class="w-[12px] h-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
      <button
        type="button"
        class="h-[36px] rounded-[4px] bg-[#275227] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]"
        @click="cancelAndRerun"
      >
        <RotateCcw class="w-[14px] h-[14px]" />
        Cancel &amp; Re-run
      </button>
      <button
        type="button"
        class="h-[36px] rounded-[4px] bg-[#da972e] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]"
        @click="confirmAssignment"
      >
        <CheckCircle2 class="w-[14px] h-[14px]" />
        Confirm Assignment
      </button>
    </div>
  </main>
</template>
