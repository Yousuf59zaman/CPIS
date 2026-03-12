<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Download, ChevronDown } from 'lucide-vue-next'

defineOptions({ name: 'BoardDecisionPage' })

const activeDecisionTab = ref<'approve' | 'reject' | 'defer'>('approve')
const showSupportingDocs = ref(true)

const votes = [
  { member: 'Chairperson Maria Cruz', vote: 'Approve', timestamp: '22-Jan-2025 10:15 AM', status: 'Voted' },
  { member: 'Director Juan Santos', vote: 'Pending', timestamp: '—', status: 'Pending' },
  { member: 'Commissioner Ana Reyes', vote: 'Pending', timestamp: '—', status: 'Pending' },
  { member: 'Legal Adviser Pedro Gom', vote: 'Pending', timestamp: '—', status: 'Pending' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header info strip -->
    <div class="flex flex-wrap gap-[20px] pb-[14px] border-b border-[#e5e7eb]">
      <div v-for="f in [
        { label: 'Claim ID', value: 'CP-00101' },
        { label: 'Claimant', value: 'John Smith' },
        { label: 'Legal Rec.', value: 'APPROVE' },
        { label: 'Proposed Comp.', value: '₱145,000.00' },
        { label: 'Status', value: 'UNDER BOARD REVIEW' },
        { label: 'Meeting ID', value: 'MTG-2025-001' },
      ]" :key="f.label" class="border-l-2 border-[#d97706] pl-[10px]">
        <p class="text-[10px] text-[#9ca3af] uppercase">{{ f.label }}</p>
        <p class="text-[13px] font-semibold text-[#1d4a1d]">{{ f.value }}</p>
      </div>
    </div>

    <!-- Supporting Documents (collapsible) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <button @click="showSupportingDocs = !showSupportingDocs" class="w-full flex items-center justify-between px-[20px] py-[14px] hover:bg-[#fafafa]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Supporting Documents</h2>
        </div>
        <ChevronDown class="w-[16px] h-[16px] text-[#6b7280] transition-transform" :class="showSupportingDocs ? 'rotate-180' : ''" />
      </button>
      <div v-if="showSupportingDocs" class="px-[20px] pb-[16px]">
        <div class="grid grid-cols-2 gap-[10px] mb-[12px]">
          <div v-for="f in [
            { label: 'Property Location', value: 'Barangay Lumbac Madaya, Marawi City' },
            { label: 'Legal Findings Summary', value: 'All statutory requirements met. Eligible for compensation.' },
            { label: 'Inspection Summary', value: 'Structural damage confirmed — second floor collapse, roof failure.' },
            { label: 'Document Links', value: 'Inspector\'s Report · Property Title · Damage Photos' },
          ]" :key="f.label">
            <div>
              <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
              <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] bg-[#f9fafb]">
                <p class="text-[12px] text-[#374151]">{{ f.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="px-[14px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[12px] font-medium rounded-[7px] transition-colors">
          View All Supporting Documents
        </button>
      </div>
    </div>

    <!-- Final Decision -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Final Decision <span class="text-[12px] text-[#d0272a] font-normal ml-[4px]">(Mandatory Selection)</span></h2>
      </div>
      <div class="flex border-b border-[#e5e7eb] mb-[16px]">
        <button v-for="tab in ['approve', 'reject', 'defer']" :key="tab"
          @click="activeDecisionTab = tab as any"
          class="px-[16px] py-[9px] text-[12px] font-medium capitalize border-b-2 transition-colors"
          :class="activeDecisionTab === tab ? 'border-[#224e22] text-[#224e22]' : 'border-transparent text-[#6b7280]'">
          {{ tab }}
        </button>
      </div>
      <div class="space-y-[12px]">
        <div>
          <label class="text-[12px] font-medium text-[#374151] block mb-[5px]">Approved Compensation Amount</label>
          <input type="text" value="₱145,000.00" class="w-full text-[12px] border border-[#e5e7eb] rounded-[7px] px-[12px] py-[9px] outline-none focus:border-[#224e22] text-[#374151]" />
        </div>
        <div>
          <label class="text-[12px] font-medium text-[#374151] block mb-[5px]">Legal Findings</label>
          <textarea rows="3" class="w-full text-[12px] border border-[#e5e7eb] rounded-[7px] px-[12px] py-[9px] outline-none focus:border-[#224e22] resize-none text-[#374151]">All statutory requirements met. Claim is eligible for compensation under applicable CPIS guidelines.</textarea>
        </div>
      </div>
    </div>

    <!-- Resolution Notes -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[10px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Resolution Notes <span class="text-[12px] text-[#d0272a] font-normal ml-[4px]">(Mandatory)</span></h2>
      </div>
      <textarea rows="4" placeholder="Enter the official board resolution notes and any conditions attached to the decision..." class="w-full text-[12px] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af]"></textarea>
    </div>

    <!-- Voting Record -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Voting Record (Board Members)</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Member Name</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Vote</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Timestamp</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in votes" :key="v.member" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ v.member }}</td>
            <td class="px-[12px] py-[10px]">
              <button class="px-[10px] py-[3px] rounded-[5px] text-[11px] font-medium transition-colors"
                :class="v.vote === 'Approve' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]'">
                {{ v.vote }}
              </button>
            </td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ v.timestamp }}</td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[8px] py-[2px] rounded-full text-[10px] font-medium"
                :class="v.status === 'Voted' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#ede9fe] text-[#5b21b6]'">
                {{ v.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
