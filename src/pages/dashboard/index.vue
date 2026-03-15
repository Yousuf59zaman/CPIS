<script setup lang="ts">
import { TrendingUp, MoreVertical, ChevronLeft, ChevronRight, FileText, Search, Clock, BarChart2, ClipboardList, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-vue-next'

defineOptions({ name: 'DashboardPage' })

const stats = [
  { label: 'Pending\nApplications', value: '124', trend: '8.5%', icon: ClipboardList, color: 'bg-[#fef3c7]', iconBg: 'bg-[#fffbeb]' },
  { label: 'Returned\nApplications', value: '18', trend: '8.5%', icon: RotateCcw, color: 'bg-[#f0fdf4]', iconBg: 'bg-[#f0fdf4]' },
  { label: 'Completed\nIntake', value: '342', trend: '8.5%', icon: CheckCircle2, color: 'bg-[#eff6ff]', iconBg: 'bg-[#eff6ff]', down: true },
  { label: 'Overdue\nApplications', value: '09', trend: '8.5%', icon: AlertTriangle, color: 'bg-[#fef2f2]', iconBg: 'bg-[#fef2f2]' },
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
  if (p === 'High') return 'bg-[#fce7e7]'
  if (p === 'SLA Risk') return 'bg-[#fed7aa]'
  return 'bg-[#d1fae5]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins'] bg-[rgba(241,243,241,0.15)]">
    <!-- Page title -->
    <h1 class="text-[30px] leading-[45px] font-medium text-[#000000]">Dashboard</h1>

    <!-- Stats row -->
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-[14px] 2xl:gap-[18px]">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="relative bg-white rounded-[12px] border border-[#f0f0f0] p-[16px] 2xl:p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        <div class="absolute -right-[28px] -top-[38px] h-[160px] w-[160px] rounded-full opacity-50" :class="stat.color"></div>
        <div class="relative flex items-start justify-between gap-[12px]">
          <div class="flex items-start gap-[12px]">
            <div class="w-[52px] h-[52px] 2xl:w-[62px] 2xl:h-[62px] rounded-[10px] flex items-center justify-center shrink-0" :class="stat.iconBg">
              <component :is="stat.icon" class="w-[24px] h-[24px] text-[#5b5b5b]" />
            </div>
            <div>
              <p class="text-[21px] leading-[25px] font-medium text-[#1D4A1D] mt-[3px] whitespace-pre-line">{{ stat.label }}</p>
              <div class="flex items-center gap-[4px] mt-[4px]">
                <TrendingUp class="w-[11px] h-[11px]" :class="stat.down ? 'text-[#d0272a]' : 'text-[#16a34a]'" />
                <span class="text-[16.9986px] leading-[25px] font-normal text-[#0D9546]">{{ stat.trend }} Lorem ipsum is</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <p
              class="text-[75px] leading-[112px] font-semibold tracking-[-4px] bg-clip-text text-transparent"
              style="background: linear-gradient(200.38deg, #5E4D31 13.54%, #1D4A1D 89.85%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            >
              {{ stat.value }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- My Active Queue -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] overflow-hidden">
      <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <h2 class="text-[30px] leading-[45px] font-medium text-[#000000]">My Active Queue</h2>
        </div>
        <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claim Ref</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Claimant Name</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Submission Date</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Days</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Priority</th>
              <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in queueItems" :key="item.ref" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ item.ref }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ item.name }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ item.date }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ item.status }}</td>
              <td class="px-[20px] py-[12px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ item.days }}</td>
              <td class="px-[20px] py-[12px]">
                <span
                  class="px-[10px] py-[3px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]"
                  :class="priorityClass(item.priority)"
                >
                  {{ item.priority }}
                </span>
              </td>
              <td class="px-[20px] py-[12px]">
                <span class="px-[12px] py-[3px] bg-[#d1fae5] text-[#1B1F25] rounded-full text-[15px] leading-[22px] font-light flex items-center justify-center h-[23px] cursor-pointer hover:bg-[#a7f3d0] transition-colors">
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
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] overflow-hidden">
        <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
            <h2 class="text-[30px] leading-[45px] font-medium text-[#000000]">Workflow Status Overview</h2>
          </div>
          <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
                <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Stage</th>
                <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Total</th>
                <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">In Progress</th>
                <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Awaiting Action</th>
                <th class="px-[20px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">SLA Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in workflowStages" :key="row.stage" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
                <td class="px-[20px] py-[11px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ row.stage }}</td>
                <td class="px-[20px] py-[11px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ row.total }}</td>
                <td class="px-[20px] py-[11px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ row.inProgress }}</td>
                <td class="px-[20px] py-[11px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ row.awaiting }}</td>
                <td class="px-[20px] py-[11px] text-[18px] leading-[27px] font-light text-[#1B1F25]">{{ row.sla }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-[#f8f3ec] rounded-[12px] border border-[#f0f0f0] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] overflow-hidden">
        <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <h2 class="text-[30px] leading-[45px] font-medium text-[#000000]">Quick Actions</h2>
          <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
        </div>
        <div class="p-[16px] flex flex-col gap-[10px]">
          <button
            v-for="action in quickActions"
            :key="action.label"
            class="flex items-center gap-[12px] w-full px-[14px] py-[12px] bg-white border border-[#f0f0f0] rounded-[8px] shadow-[0px_2px_6px_rgba(0,0,0,0.04)] hover:bg-[#fafafa] transition-colors text-left"
          >
            <div class="w-[32px] h-[32px] bg-[#f9f3e8] rounded-[8px] flex items-center justify-center shrink-0">
              <component :is="action.icon" class="w-[16px] h-[16px] text-[#b8894f]" />
            </div>
            <span class="text-[20px] leading-[30px] font-normal text-[#464255]">{{ action.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
