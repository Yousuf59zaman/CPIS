<script setup lang="ts">
import { ref } from 'vue'
import { MoreVertical, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

defineOptions({ name: 'ClaimsListPage' })

const router = useRouter()

const filters = ref({
  claimId: '',
  claimantName: '',
  status: 'All Statuses',
  barangay: 'Barangay',
  fromDate: '01/01/2026',
  toDate: '05/01/2026',
})

const claims = [
  { ref: 'CP-00101', name: 'John Smith', type: 'Structural', status: 'Missing Documents' },
  { ref: 'CP-00102', name: 'Ali Rahman', type: 'Structural', status: 'Missing Documents' },
  { ref: 'CP-00103', name: 'Susan Cruz', type: 'Non-Structural', status: 'Missing Documents' },
  { ref: 'CP-00104', name: 'Ahmad Hussein', type: 'Death Claim', status: 'Missing Documents' },
  { ref: 'CP-00105', name: 'Anthony Reyes', type: 'Non-Structural', status: 'Missing Documents' },
  { ref: 'CP-00106', name: 'Emily Santos', type: 'Non-Structural', status: 'Missing Documents' },
  { ref: 'CP-00107', name: 'Ahmed Karim', type: 'Non-Structural', status: 'Missing Documents' },
  { ref: 'CP-00108', name: 'MD Rahman', type: 'Non-Structural', status: 'Missing Documents' },
]

function statusClass(s: string) {
  if (s === 'Missing Documents') return 'bg-[#fed7aa]'
  if (s === 'Pending') return 'bg-[#ede9fe]'
  if (s === 'Validated') return 'bg-[#d1fae5]'
  return 'bg-[#f3f4f6]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Page header -->
    <div class="flex items-center justify-between">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Claim Search</h1>
      <div class="flex items-center gap-[10px]">
        <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[16px] leading-[32px] font-medium rounded-[8px] transition-colors">
          <RotateCcw class="w-[13px] h-[13px]" />
          Clear Filters
        </button>
        <nav class="text-[16px] leading-[24px] font-light text-[#171A1F]">
          <span>Dashboard</span>
          <span class="mx-[6px] text-[#A7A6A6]">›</span>
          <span class="text-[#A7A6A6]">Claim Search</span>
        </nav>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px] 2xl:p-[20px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[12px]">
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Claim ID</label>
          <input
            v-model="filters.claimId"
            type="text"
            placeholder="e.g. CLM-2023-XXXX"
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] placeholder-[#d1d5db] focus:outline-none focus:border-[#224e22]"
          />
        </div>
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Claimant Name</label>
          <input
            v-model="filters.claimantName"
            type="text"
            placeholder="Enter full name..."
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] placeholder-[#d1d5db] focus:outline-none focus:border-[#224e22]"
          />
        </div>
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Status</label>
          <select
            v-model="filters.status"
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] focus:outline-none focus:border-[#224e22] appearance-none cursor-pointer"
          >
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Missing Documents</option>
            <option>Validated</option>
          </select>
        </div>
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Barangay</label>
          <input
            v-model="filters.barangay"
            type="text"
            placeholder="Barangay"
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] focus:outline-none focus:border-[#224e22]"
          />
        </div>
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">From Date</label>
          <input
            v-model="filters.fromDate"
            type="text"
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] focus:outline-none focus:border-[#224e22]"
          />
        </div>
        <div>
          <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">To Date</label>
          <input
            v-model="filters.toDate"
            type="text"
            class="w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] text-[18px] leading-[27px] font-light text-[#171A1F] bg-[#f9fafb] focus:outline-none focus:border-[#224e22]"
          />
        </div>
      </div>
    </div>

    <!-- Claims table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#202224]">Claim Intake Queue</h2>
        </div>
        <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[20px] py-[10px] w-[40px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" />
              </th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Reference No.</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claimant Name</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Type</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="claim in claims"
              :key="claim.ref"
              class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors cursor-pointer"
              @click="router.push(`/claims-list/${claim.ref}`)"
            >
              <td class="px-[20px] py-[12px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" @click.stop />
              </td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#232323]">{{ claim.ref }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#232323]">{{ claim.name }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#232323]">{{ claim.type }}</td>
              <td class="px-[20px] py-[12px]">
                <span class="px-[10px] py-[3px] rounded-full text-[15px] leading-[22px] font-light text-[#171A1F] flex items-center justify-center h-[23px]" :class="statusClass(claim.status)">
                  {{ claim.status }}
                </span>
              </td>
              <td class="px-[20px] py-[12px]" @click.stop>
                <span
                  class="px-[12px] py-[3px] bg-[#d1fae5] text-[#171A1F] rounded-full text-[15px] leading-[22px] font-light flex items-center justify-center h-[23px] cursor-pointer hover:bg-[#a7f3d0] transition-colors"
                  @click="router.push(`/claims-list/${claim.ref}`)"
                >
                  Open
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between px-[20px] py-[10px] border-t border-[#f0f0f0]">
        <p class="text-[16px] leading-[20px] font-light text-[#808080]">Showing 1 to 5 of 5 entries</p>
        <div class="flex items-center gap-[6px]">
          <span class="text-[16px] leading-[20px] font-light text-[#808080]">Page 1 of 12</span>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]">
            <ChevronLeft class="w-[13px] h-[13px] text-[#6b7280]" />
          </button>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]">
            <ChevronRight class="w-[13px] h-[13px] text-[#6b7280]" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
