<script setup lang="ts">
import { Eye, Download, FileDown } from 'lucide-vue-next'

defineOptions({ name: 'AdministrationPage' })

const rafflingCases = [
  { claimId: 'CP-00101', claimant: 'John Smith', amount: '₱145,000.00', priority: 'High', status: 'Ready' },
  { claimId: 'CP-00102', claimant: 'Maria Santos', amount: '₱90,000.00', priority: 'Normal', status: 'Ready' },
  { claimId: 'CP-00103', claimant: 'Pedro Reyes', amount: '₱210,000.00', priority: 'High', status: 'Ready' },
  { claimId: 'CP-00104', claimant: 'Ana Cruz', amount: '₱75,000.00', priority: 'Normal', status: 'Ready' },
]

const officers = [
  { name: 'Atty. Maria Santos', workload: 65, systemStatus: 'Active', eligible: true },
  { name: 'Dir. Carlos Buena', workload: 40, systemStatus: 'Active', eligible: true },
  { name: 'Atty. Juan Reyes', workload: 90, systemStatus: 'Active', eligible: false },
  { name: 'Atty. Ana Garcia', workload: 30, systemStatus: 'Active', eligible: true },
]

function priorityColor(p: string) {
  if (p === 'High') return 'bg-[#fce7e7]'
  return 'bg-[#d1fae5]'
}

function workloadColor(pct: number) {
  if (pct >= 80) return 'bg-[#dc2626]'
  if (pct >= 60) return 'bg-[#d97706]'
  return 'bg-[#16a34a]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Administration — SER Raffling</h1>

    <!-- Info Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-[12px]">
      <div v-for="card in [
        { label: 'Raffling Status', value: 'Ready for Raffling', valueColor: 'text-[#16a34a]' },
        { label: 'Total Cases Pending', value: '12', valueColor: 'text-[#1d4a1d]' },
        { label: 'Raffling Batch ID', value: 'RB-2025-05', valueColor: 'text-[#374151]' },
        { label: 'Raffling Date', value: '24 January 2025', valueColor: 'text-[#374151]' },
      ]" :key="card.label"
        class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px]">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[6px]">{{ card.label }}</p>
        <p class="text-[30px] leading-[45px] font-semibold" :class="card.valueColor">{{ card.value }}</p>
      </div>
    </div>

    <!-- Cases Ready for Raffling -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Cases Ready for Raffling</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim ID</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claimant Name</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Approved Amount</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Priority</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in rafflingCases" :key="c.claimId" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.claimId }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.claimant }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ c.amount }}</td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="priorityColor(c.priority)">{{ c.priority }}</span>
            </td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px] bg-[#d1fae5]">{{ c.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Available SER Officers -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Available SER Officers</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Officer Name</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Current Workload</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">System Status</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Eligible for Raffle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="o in officers" :key="o.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ o.name }}</td>
            <td class="px-[12px] py-[10px]">
              <div class="flex items-center gap-[8px]">
                <div class="flex-1 bg-[#f3f4f6] rounded-full h-[8px] overflow-hidden max-w-[100px]">
                  <div class="h-full rounded-full" :class="workloadColor(o.workload)" :style="{ width: o.workload + '%' }"></div>
                </div>
                <span class="text-[16px] leading-[20px] font-light text-[#808080]">{{ o.workload }}%</span>
              </div>
            </td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[8px] py-[2px] bg-[#d1fae5] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]">{{ o.systemStatus }}</span>
            </td>
            <td class="px-[12px] py-[10px]">
              <span class="text-[16px] leading-[20px] font-light text-[#171A1F]">{{ o.eligible ? 'Yes' : 'No' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <FileDown class="w-[15px] h-[15px]" /> Export List
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors">
        Run Automated Raffle
      </button>
    </div>
  </main>
</template>
