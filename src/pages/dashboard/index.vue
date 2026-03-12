<script setup lang="ts">
import { TrendingUp, MoreVertical, ChevronLeft, ChevronRight, FileText, Search, Clock, BarChart2 } from 'lucide-vue-next'

defineOptions({ name: 'DashboardPage' })

const stats = [
  { label: 'Pending\nApplications', value: '124', trend: '8.5%', icon: '📋', color: 'bg-[#fef3c7]', iconBg: 'bg-[#fffbeb]' },
  { label: 'Returned\nApplications', value: '18', trend: '8.5%', icon: '↩', color: 'bg-[#f0fdf4]', iconBg: 'bg-[#f0fdf4]' },
  { label: 'Completed\nIntake', value: '342', trend: '8.5%', icon: '✓', color: 'bg-[#eff6ff]', iconBg: 'bg-[#eff6ff]', down: true },
  { label: 'Overdue\nApplications', value: '09', trend: '8.5%', icon: '!', color: 'bg-[#fef2f2]', iconBg: 'bg-[#fef2f2]' },
]

const queueItems = [
  { ref: 'CP-00101', name: 'Rahman, A', date: '12-Feb-2026', status: 'Pending', days: 3, priority: 'Normal' },
  { ref: 'CP-00102', name: 'Karim, S', date: '11-Feb-2026', status: 'Returned', days: 5, priority: 'High' },
  { ref: 'CP-00103', name: 'Akter, M', date: '09-Feb-2026', status: 'Pending', days: 7, priority: 'SLA Risk' },
]

const workflowStages = [
  { stage: 'Claim Intake', total: 124, inProgress: 87, awaiting: 37, sla: '09' },
  { stage: 'GIS Validation', total: 310, inProgress: 112, awaiting: 41, sla: '05' },
  { stage: 'Ocular Inspection', total: 198, inProgress: 84, awaiting: 22, sla: '03' },
  { stage: 'Legal Evaluation', total: 156, inProgress: 51, awaiting: 19, sla: '02' },
  { stage: 'Board Review', total: 47, inProgress: 12, awaiting: 7, sla: '01' },
  { stage: 'Payment Processing', total: 32, inProgress: 8, awaiting: 5, sla: '00' },
]

const quickActions = [
  { label: 'New Claim Intake', icon: FileText },
  { label: 'Search Claim', icon: Search },
  { label: 'View Overdue Cases', icon: Clock },
  { label: 'Generate Report', icon: BarChart2 },
]

function priorityClass(p: string) {
  if (p === 'High') return 'bg-[#fce7e7] text-[#c53030]'
  if (p === 'SLA Risk') return 'bg-[#fed7aa] text-[#c05621]'
  return 'bg-[#d1fae5] text-[#065f46]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Page title -->
    <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">Dashboard</h1>

    <!-- Stats row -->
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-[14px] 2xl:gap-[18px]">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-[12px] border border-[#f0f0f0] p-[16px] 2xl:p-[20px] flex items-center gap-[14px] shadow-sm"
      >
        <div class="w-[52px] h-[52px] 2xl:w-[62px] 2xl:h-[62px] rounded-full flex items-center justify-center text-[22px] shrink-0" :class="stat.iconBg">
          {{ stat.icon }}
        </div>
        <div>
          <p class="text-[26px] 2xl:text-[32px] font-bold text-[#171a1f] leading-none">{{ stat.value }}</p>
          <p class="text-[11px] 2xl:text-[12px] text-[#6b7280] mt-[3px] whitespace-pre-line leading-[1.3]">{{ stat.label }}</p>
          <div class="flex items-center gap-[4px] mt-[4px]">
            <TrendingUp class="w-[11px] h-[11px]" :class="stat.down ? 'text-[#d0272a]' : 'text-[#16a34a]'" />
            <span class="text-[10px]" :class="stat.down ? 'text-[#d0272a]' : 'text-[#16a34a]'">{{ stat.trend }} Lorem ipsum is</span>
          </div>
        </div>
      </div>
    </div>

    <!-- My Active Queue -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">My Active Queue</h2>
        </div>
        <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0]">
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Claim Ref</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Claimant Name</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Submission Date</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Status</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Days</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Priority</th>
              <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in queueItems" :key="item.ref" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
              <td class="px-[20px] py-[12px] text-[13px] text-[#374151]">{{ item.ref }}</td>
              <td class="px-[20px] py-[12px] text-[13px] text-[#374151]">{{ item.name }}</td>
              <td class="px-[20px] py-[12px] text-[13px] text-[#374151]">{{ item.date }}</td>
              <td class="px-[20px] py-[12px] text-[13px] text-[#374151]">{{ item.status }}</td>
              <td class="px-[20px] py-[12px] text-[13px] text-[#374151]">{{ item.days }}</td>
              <td class="px-[20px] py-[12px]">
                <span class="px-[10px] py-[3px] rounded-full text-[11px] font-medium" :class="priorityClass(item.priority)">
                  {{ item.priority }}
                </span>
              </td>
              <td class="px-[20px] py-[12px]">
                <span class="px-[12px] py-[3px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium cursor-pointer hover:bg-[#a7f3d0] transition-colors">
                  Open
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between px-[20px] py-[10px] border-t border-[#f0f0f0]">
        <p class="text-[11px] text-[#9ca3af]">Showing 1 to 5 of 5 entries</p>
        <div class="flex items-center gap-[6px]">
          <span class="text-[11px] text-[#9ca3af]">Page 1 of 12</span>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6] transition-colors">
            <ChevronLeft class="w-[13px] h-[13px] text-[#6b7280]" />
          </button>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6] transition-colors">
            <ChevronRight class="w-[13px] h-[13px] text-[#6b7280]" />
          </button>
        </div>
      </div>
    </div>

    <!-- Workflow Status + Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] 2xl:grid-cols-[1fr_320px] gap-[14px] 2xl:gap-[18px]">
      <!-- Workflow Status -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[16px] font-semibold text-[#171a1f]">Workflow Status Overview</h2>
          </div>
          <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#f0f0f0]">
                <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Stage</th>
                <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Total</th>
                <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">In Progress</th>
                <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">Awaiting Action</th>
                <th class="px-[20px] py-[10px] text-[11px] font-medium text-[#6b7280] uppercase tracking-wider text-left">SLA Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in workflowStages" :key="row.stage" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
                <td class="px-[20px] py-[11px] text-[13px] text-[#374151]">{{ row.stage }}</td>
                <td class="px-[20px] py-[11px] text-[13px] text-[#374151]">{{ row.total }}</td>
                <td class="px-[20px] py-[11px] text-[13px] text-[#374151]">{{ row.inProgress }}</td>
                <td class="px-[20px] py-[11px] text-[13px] text-[#374151]">{{ row.awaiting }}</td>
                <td class="px-[20px] py-[11px] text-[13px] font-medium text-[#d0272a]">{{ row.sla }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Quick Actions</h2>
          <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
        </div>
        <div class="p-[16px] flex flex-col gap-[10px]">
          <button
            v-for="action in quickActions"
            :key="action.label"
            class="flex items-center gap-[12px] w-full px-[14px] py-[12px] bg-[#fffbeb] hover:bg-[#fef3c7] rounded-[8px] transition-colors text-left"
          >
            <div class="w-[32px] h-[32px] bg-[#fef3c7] rounded-[8px] flex items-center justify-center shrink-0">
              <component :is="action.icon" class="w-[16px] h-[16px] text-[#d97706]" />
            </div>
            <span class="text-[13px] font-medium text-[#374151]">{{ action.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
