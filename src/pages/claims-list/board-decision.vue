<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, ClipboardList, FileText, MapPin } from 'lucide-vue-next'

defineOptions({ name: 'BoardDecisionPage' })

const showSupportingDocs = ref(true)
const activeDecisionTab = ref<'approve' | 'reject' | 'defer'>('approve')

const supportingNotes = {
  locationTitle: 'Property location',
  locationLines: ['124 Industry Road, Sector 7-G, Metropolitan District.', 'Tax Parcel: MP-004-992-XX'],
  legalTitle: 'Legal Findings Summary',
  legalText:
    'Claimant has provided sufficient proof of ownership and maintenance records. No negligence found on claimant part. City liability established per Public Works Act. Legal recommends full approval of proposed compensation amount.',
  inspectionTitle: 'Inspection Summary',
  inspectionText:
    'Claimant has provided sufficient proof of ownership and maintenance records. No negligence found on claimant part. City liability established per Public Works Act. Legal recommends full approval of proposed compensation amount.',
  documentTitle: 'document',
  attachments: ['Legal_Opinion_CPIS_001.pdf', 'Inspection_Report_V2.pdf'],
}

const votes = [
  {
    member: 'Member 01 (Chair)',
    vote: 'Approve',
    timestamp: '25/02/2026 11:05 AM',
    status: 'Confirmed',
  },
  {
    member: 'Member 02 (Legal Advisor)',
    vote: 'Approve',
    timestamp: '25/02/2026 11:07 AM',
    status: 'Confirmed',
  },
  {
    member: 'Member 03 (Observer)',
    vote: 'Pending',
    timestamp: '25/02/2026 11:15 AM',
    status: 'Awaiting Action',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
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
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ f.label }}</p>
        <p class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ f.value }}</p>
      </div>
    </div>

    <!-- Supporting Documents (collapsible) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <button
        type="button"
        @click="showSupportingDocs = !showSupportingDocs"
        class="w-full flex items-center justify-between px-[20px] py-[14px] hover:bg-[#fafafa]"
      >
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Supporting Documents</h2>
        </div>
        <span
          class="w-[58px] h-[38px] rounded-[57px] border border-[#efd6ae] bg-[#fffbf5] flex items-center justify-center"
        >
          <ChevronDown class="w-[24px] h-[24px] text-[#555556]" />
        </span>
      </button>

      <div v-if="showSupportingDocs" class="mt-[18px] space-y-[14px]">
        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <MapPin class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ supportingNotes.locationTitle }}</p>
              <p class="text-[16px] leading-[24px] font-light text-[#808080]">
                {{ supportingNotes.locationLines[0] }}
              </p>
              <p class="text-[16px] leading-[24px] font-light text-[#808080]">
                {{ supportingNotes.locationLines[1] }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <FileText class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ supportingNotes.legalTitle }}</p>
              <p class="text-[16px] leading-[24px] font-light text-[#808080]">
                {{ supportingNotes.legalText }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <ClipboardList class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ supportingNotes.inspectionTitle }}</p>
              <p class="text-[16px] leading-[24px] font-light text-[#808080]">
                {{ supportingNotes.inspectionText }}
              </p>
            </div>
          </div>
        </div>
        <button
          class="h-[40px] px-[16px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[4px] transition-colors"
        >
          View All Supporting Documents
        </button>
      </div>
    </div>

    <!-- Final Decision -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">
          Final Decision
          <span class="text-[16px] leading-[20px] font-light text-[#d0272a] ml-[6px]">(Mandatory Selection)</span>
        </h2>
      </div>
      <div class="flex border-b border-[#e5e7eb] mb-[16px]">
        <button v-for="tab in ['approve', 'reject', 'defer']" :key="tab"
          @click="activeDecisionTab = tab as any"
          class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal capitalize border-b-2 transition-colors"
          :class="activeDecisionTab === tab ? 'border-[#224e22] text-[#224e22]' : 'border-transparent text-[#6b7280]'">
          {{ tab }}
        </button>
      </div>
      <div class="space-y-[12px]">
        <div>
          <label class="block mb-[6px] text-[20px] leading-[28px] font-normal text-[#171A1F]">Approved Compensation Amount</label>
          <input
            type="text"
            value="₱145,000.00"
            class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[7px] px-[12px] py-[10px] outline-none focus:border-[#224e22] text-[#171A1F]"
          />
        </div>
        <div>
          <label class="block mb-[6px] text-[20px] leading-[28px] font-normal text-[#171A1F]">Legal Findings</label>
          <textarea
            rows="3"
            class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[7px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#171A1F]"
          >All statutory requirements met. Claim is eligible for compensation under applicable CPIS guidelines.</textarea>
        </div>
      </div>
    </div>

    <!-- Resolution Notes -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[10px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">
          Resolution Notes
          <span class="text-[16px] leading-[20px] font-light text-[#d0272a] ml-[6px]">(Mandatory)</span>
        </h2>
      </div>
      <textarea
        rows="4"
        placeholder="Enter the official board resolution notes and any conditions attached to the decision..."
        class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[8px] px-[12px] py-[12px] outline-none focus:border-[#224e22] resize-none text-[#171A1F] placeholder-[#808080]"
      ></textarea>
    </div>

    <!-- Voting Record -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Voting Record (Board Members)</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Member Name</th>
            <th class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Vote</th>
            <th class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Timestamp</th>
            <th class="px-[12px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in votes" :key="v.member" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-light text-[#171A1F] opacity-80">{{ v.member }}</td>
            <td class="px-[12px] py-[10px]">
              <button
                class="px-[12px] py-[3px] rounded-[999px] text-[15px] leading-[22px] font-light text-[#1B1F25] transition-colors"
                :class="v.vote === 'Approve' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]'">
                {{ v.vote }}
              </button>
            </td>
            <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-light text-[#171A1F] opacity-80">{{ v.timestamp }}</td>
            <td class="px-[12px] py-[10px]">
              <span
                class="px-[12px] py-[3px] rounded-[999px] text-[15px] leading-[22px] font-light text-[#1B1F25]"
                :class="v.status === 'Voted' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#ede9fe] text-[#5b21b6]'"
              >
                {{ v.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
