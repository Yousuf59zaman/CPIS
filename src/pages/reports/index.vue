<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Download, FileDown } from 'lucide-vue-next'

defineOptions({ name: 'ReportsPage' })

const claims = [
  { agenda: 'AGN-001', claimant: 'John Smith', unit: 'Legal Review', status: 'Completed', submitted: '15-Jan-2025', type: 'Structural' },
  { agenda: 'AGN-002', claimant: 'Maria Santos', unit: 'Ocular Inspection', status: 'Pending', submitted: '16-Jan-2025', type: 'Flooding' },
  { agenda: 'AGN-003', claimant: 'Pedro Reyes', unit: 'GIS Validation', status: 'Overdue', submitted: '10-Jan-2025', type: 'Structural' },
  { agenda: 'AGN-004', claimant: 'Ana Cruz', unit: 'Document Review', status: 'Returned', submitted: '12-Jan-2025', type: 'Fire Damage' },
  { agenda: 'AGN-005', claimant: 'Carlos Gomez', unit: 'SER Evaluation', status: 'Pending', submitted: '14-Jan-2025', type: 'Flooding' },
]

const stats = [
  { label: 'Total Claims', value: '157', color: 'text-[#1d4a1d]' },
  { label: 'Claimants', value: '42', color: 'text-[#5b21b6]' },
  { label: 'Claim Types', value: '15', color: 'text-[#0369a1]' },
  { label: 'Property Locations', value: '88', color: 'text-[#d97706]' },
  { label: 'Overdue', value: '12', color: 'text-[#dc2626]' },
]

function statusColor(s: string) {
  if (s === 'Completed') return 'bg-[#d1fae5]'
  if (s === 'Pending') return 'bg-[#ede9fe]'
  if (s === 'Overdue') return 'bg-[#fce7e7]'
  if (s === 'Returned') return 'bg-[#fed7aa]'
  return 'bg-[#f3f4f6]'
}

const barData = [
  { label: 'Pending', pct: 55, color: 'bg-[#7c3aed]' },
  { label: 'Returned', pct: 25, color: 'bg-[#f97316]' },
  { label: 'Completed', pct: 75, color: 'bg-[#16a34a]' },
  { label: 'Overdue', pct: 15, color: 'bg-[#dc2626]' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-center justify-between flex-wrap gap-[8px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Reports</h1>
      <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[16px] leading-[32px] font-medium rounded-[7px] transition-colors">
        <FileDown class="w-[13px] h-[13px]" /> Export Data
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[10px] mb-[10px]">
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">From Date</label>
          <input type="date" class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none focus:border-[#224e22] text-[#171A1F]" />
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">To Date</label>
          <input type="date" class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none focus:border-[#224e22] text-[#171A1F]" />
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Office / Unit</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Offices</option>
            <option>Legal Review</option>
            <option>Ocular Inspection</option>
            <option>GIS Validation</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Claim Type</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Types</option>
            <option>Structural Damage</option>
            <option>Flooding</option>
            <option>Fire Damage</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Status</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Overdue</option>
            <option>Returned</option>
          </select>
        </div>
      </div>
      <div class="flex gap-[8px]">
        <button class="px-[20px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[16px] leading-[32px] font-medium rounded-[7px] transition-colors">Apply</button>
        <button class="px-[20px] py-[8px] bg-[#d97706] hover:bg-[#b45309] text-white text-[16px] leading-[32px] font-medium rounded-[7px] transition-colors">Reset</button>
      </div>
    </div>

    <!-- Summary Stats -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-[10px]">
      <div v-for="s in stats" :key="s.label" class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px] text-center">
        <p class="text-[30px] leading-[45px] font-semibold mb-[4px]" :class="s.color">{{ s.value }}</p>
        <p class="text-[16px] leading-[20px] font-light text-[#808080]">{{ s.label }}</p>
      </div>
    </div>

    <!-- Status Distribution Chart -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[16px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Status Distribution</h2>
      </div>
      <div class="space-y-[12px]">
        <div v-for="bar in barData" :key="bar.label" class="flex items-center gap-[10px]">
          <span class="w-[80px] text-[16px] leading-[20px] font-light text-[#808080] text-right flex-shrink-0">{{ bar.label }}</span>
          <div class="flex-1 bg-[#f3f4f6] rounded-full h-[10px] overflow-hidden">
            <div class="h-full rounded-full transition-all" :class="bar.color" :style="{ width: bar.pct + '%' }"></div>
          </div>
          <span class="text-[16px] leading-[20px] font-light text-[#808080] w-[30px]">{{ bar.pct }}%</span>
        </div>
      </div>
    </div>

    <!-- Claims Table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center justify-between mb-[12px] flex-wrap gap-[8px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Claims</h2>
        </div>
        <div class="flex items-center gap-[8px]">
          <input type="text" placeholder="Search..." class="text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[5px] outline-none focus:border-[#224e22] text-[#171A1F] w-[140px]" />
          <select class="text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[5px] outline-none text-[#171A1F]">
            <option>Show 10</option><option>Show 25</option><option>Show 50</option>
          </select>
          <button class="flex items-center gap-[4px] px-[10px] py-[5px] border border-[#e5e7eb] rounded-[6px] text-[14px] leading-[29px] font-medium text-[#171A1F] hover:bg-[#f3f4f6]">
            <FileDown class="w-[11px] h-[11px]" /> CSV
          </button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[600px]">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Agenda No.</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claimant Name</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Assigned Unit</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Submitted</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Type</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in claims" :key="c.agenda" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.agenda }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.claimant }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.unit }}</td>
              <td class="px-[12px] py-[10px]"><span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="statusColor(c.status)">{{ c.status }}</span></td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.submitted }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.type }}</td>
              <td class="px-[12px] py-[10px]">
                <div class="flex gap-[6px]">
                  <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[13px] h-[13px]" /></button>
                  <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[13px] h-[13px]" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
