<script setup lang="ts">
import { Eye, Download } from 'lucide-vue-next'

defineOptions({ name: 'TaskInboxPage' })

const tasks = [
  { ref: 'CP-00101', claimant: 'John Smith', type: 'Structural Damage', unit: 'Legal Review', task: 'Legal Evaluation', status: 'In Progress', priority: 'High' },
  { ref: 'CP-00102', claimant: 'Maria Santos', type: 'Flooding', unit: 'Ocular Inspection', task: 'Ocular Inspection', status: 'Pending', priority: 'Normal' },
  { ref: 'CP-00103', claimant: 'Pedro Reyes', type: 'Structural Damage', unit: 'GIS Validation', task: 'GIS Validation', status: 'SLA Risk', priority: 'High' },
  { ref: 'CP-00104', claimant: 'Ana Cruz', type: 'Fire Damage', unit: 'Document Review', task: 'Document Digitization', status: 'Overdue', priority: 'High' },
  { ref: 'CP-00105', claimant: 'Carlos Gomez', type: 'Flooding', unit: 'SER Evaluation', task: 'SER Report', status: 'Pending', priority: 'Normal' },
]

function statusColor(s: string) {
  if (s === 'In Progress') return 'bg-[#dbeafe]'
  if (s === 'Pending') return 'bg-[#ede9fe]'
  if (s === 'SLA Risk') return 'bg-[#fed7aa]'
  if (s === 'Overdue') return 'bg-[#fce7e7]'
  if (s === 'Completed') return 'bg-[#d1fae5]'
  return 'bg-[#f3f4f6]'
}

function priorityColor(p: string) {
  if (p === 'High') return 'bg-[#fce7e7]'
  return 'bg-[#d1fae5]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Title -->
    <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">My Queue Task</h1>

    <!-- Filters -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[10px] mb-[10px]">
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Assigned Unit</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Units</option>
            <option>Legal Review</option>
            <option>Ocular Inspection</option>
            <option>GIS Validation</option>
            <option>SER Evaluation</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Task Status</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Statuses</option>
            <option>In Progress</option>
            <option>Pending</option>
            <option>SLA Risk</option>
            <option>Overdue</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Task Priority</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Priorities</option>
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Date Range</label>
          <select class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none text-[#171A1F]">
            <option>All Dates</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[4px]">Search</label>
          <input type="text" placeholder="Search tasks..." class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[6px] px-[8px] py-[7px] outline-none focus:border-[#224e22] text-[#171A1F]" />
        </div>
      </div>
      <button class="w-full py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[7px] transition-colors text-center">
        Reset
      </button>
    </div>

    <!-- Tasks Table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#202224]">My Queue Tasks List</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[700px]">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[12px] py-[9px] w-[36px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Ref</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claimant Name</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Type</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Assigned Unit</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Task</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Priority</th>
              <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in tasks" :key="t.ref" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
              <td class="px-[12px] py-[10px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#232323]">{{ t.ref }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#232323]">{{ t.claimant }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#232323]">{{ t.type }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#232323]">{{ t.unit }}</td>
              <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#232323]">{{ t.task }}</td>
              <td class="px-[12px] py-[10px]"><span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="statusColor(t.status)">{{ t.status }}</span></td>
              <td class="px-[12px] py-[10px]"><span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="priorityColor(t.priority)">{{ t.priority }}</span></td>
              <td class="px-[12px] py-[10px]">
                <div class="flex gap-[6px]">
                  <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[21.23px] h-[21.23px]" /></button>
                  <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[21.23px] h-[21.23px]" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between mt-[10px]">
        <p class="text-[16px] leading-[20px] font-light text-[#808080]">Showing 1 to 5 of 5 entries</p>
        <div class="flex items-center gap-[4px]">
          <button class="w-[22px] h-[22px] border border-[#e5e7eb] rounded flex items-center justify-center text-[#6b7280] hover:bg-[#f3f4f6] text-[11px]">‹</button>
          <button class="w-[22px] h-[22px] border border-[#224e22] bg-[#224e22] rounded flex items-center justify-center text-white text-[11px]">1</button>
          <button class="w-[22px] h-[22px] border border-[#e5e7eb] rounded flex items-center justify-center text-[#6b7280] hover:bg-[#f3f4f6] text-[11px]">›</button>
        </div>
      </div>
    </div>
  </main>
</template>
