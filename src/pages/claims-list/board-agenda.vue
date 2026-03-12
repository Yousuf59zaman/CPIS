<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Download, FileText } from 'lucide-vue-next'

defineOptions({ name: 'BoardAgendaPage' })

const agendaItems = [
  { no: '001', ref: 'CP-00101', claimant: 'John Smith', type: 'Structural Damage', recommendation: 'APPROVE', inspection: 'Completed', status: 'Pending' },
  { no: '002', ref: 'CP-00102', claimant: 'Maria Santos', type: 'Flooding', recommendation: 'DEFER', inspection: 'Completed', status: 'Pending' },
  { no: '003', ref: 'CP-00103', claimant: 'Pedro Reyes', type: 'Structural Damage', recommendation: 'REJECT', inspection: 'Completed', status: 'Under Review' },
  { no: '004', ref: 'CP-00104', claimant: 'Ana Cruz', type: 'Fire Damage', recommendation: 'APPROVE', inspection: 'Completed', status: 'Pending' },
]

function statusColor(status: string) {
  if (status === 'Pending') return 'bg-[#ede9fe] text-[#5b21b6]'
  if (status === 'Under Review') return 'bg-[#fed7aa] text-[#9a3412]'
  if (status === 'Completed') return 'bg-[#d1fae5] text-[#065f46]'
  return 'bg-[#f3f4f6] text-[#374151]'
}

function recColor(rec: string) {
  if (rec === 'APPROVE') return 'text-[#16a34a] font-semibold'
  if (rec === 'REJECT') return 'text-[#dc2626] font-semibold'
  if (rec === 'DEFER') return 'text-[#d97706] font-semibold'
  return 'text-[#374151]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header -->
    <div class="flex items-start justify-between flex-wrap gap-[8px]">
      <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">Board Agenda</h1>
      <nav class="text-[12px] text-[#9ca3af] flex items-center gap-[6px]">
        <span>Dashboard</span><span>›</span><span class="text-[#374151] font-medium">Board Agenda</span>
      </nav>
    </div>

    <!-- Session Information -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[16px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Session Information</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px] mb-[16px]">
        <div v-for="f in [
          { label: 'Board Session Date', value: '22 January 2025' },
          { label: 'Division', value: 'Marawi Division' },
          { label: 'Agenda Number', value: 'AGN-2025-001' },
          { label: 'Session Status', value: 'Scheduled' },
        ]" :key="f.label">
          <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
          <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] bg-[#f9fafb]">
            <span class="text-[12px] text-[#374151]">{{ f.value }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-[10px]">
        <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[12px] font-medium rounded-[7px] transition-colors">
          <FileText class="w-[13px] h-[13px]" /> Generate Agenda PDF
        </button>
        <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#d97706] hover:bg-[#b45309] text-white text-[12px] font-medium rounded-[7px] transition-colors">
          Start Session
        </button>
      </div>
    </div>

    <!-- Agenda Table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Agenda</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[700px]">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Agenda No.</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Claim Reference</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Claimant</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Claim Type</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Legal Rec.</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Inspection</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Status</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in agendaItems" :key="row.no" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151] font-medium">{{ row.no }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ row.ref }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ row.claimant }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ row.type }}</td>
              <td class="px-[12px] py-[10px] text-[12px]" :class="recColor(row.recommendation)">{{ row.recommendation }}</td>
              <td class="px-[12px] py-[10px]"><span class="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[10px] font-medium">{{ row.inspection }}</span></td>
              <td class="px-[12px] py-[10px]"><span class="px-[8px] py-[2px] rounded-full text-[10px] font-medium" :class="statusColor(row.status)">{{ row.status }}</span></td>
              <td class="px-[12px] py-[10px]">
                <div class="flex gap-[6px]">
                  <button class="px-[10px] py-[4px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[10px] font-medium rounded-[5px] transition-colors">Open</button>
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
