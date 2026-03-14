<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  ClipboardList,
  FileText,
  MapPin,
  Paperclip,
  XCircle,
} from 'lucide-vue-next'

defineOptions({ name: 'BoardDecisionPage' })

const showSupportingDocs = ref(true)
const activeDecisionTab = ref<'approve' | 'reject' | 'defer'>('approve')

const breadcrumbs = ['Claims Management', 'Board Review', 'Entry']

const summaryCards = [
  { label: 'Claim ID', value: 'CPIS-2026-001' },
  { label: 'Claimant', value: 'John Doe' },
  { label: 'Legal Rec.', value: 'APPROVE', pill: true },
  { label: 'Proposed Comp.', value: '$50,000.00' },
  { label: 'Status', value: 'UNDER BOARD REVIEW', pill: true, wide: true },
  { label: 'Meeting ID', value: 'BRD-2026-02' },
]

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
  <main class="flex flex-col gap-[22px] p-[20px] 2xl:p-[24px]">
    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h1 class="text-[24px] md:text-[30px] font-medium text-[#202224]">Board Decision Entry</h1>
      <div
        class="flex items-center gap-[10px] px-[20px] h-[50px] bg-white border border-[rgba(0,0,0,0.35)] rounded-[91px]">
        <span v-for="(crumb, index) in breadcrumbs" :key="crumb"
          class="flex items-center gap-[10px] text-[16px] text-[#a7a6a6]">
          <span>{{ crumb }}</span>
          <ChevronRight v-if="index < breadcrumbs.length - 1" class="w-[12px] h-[12px]" />
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-[12px]">
      <div v-for="card in summaryCards" :key="card.label"
        class="bg-white border border-[rgba(29,74,29,0.44)] rounded-[6px] shadow-[0px_2.751px_6.418px_0px_rgba(0,0,0,0.08)] p-[16px]">
        <div class="flex items-start gap-[12px]">
          <div class="w-[10px] bg-[#ffefd9] rounded-[6px] self-stretch"></div>
          <div class="flex-1">
            <p class="text-[18px] text-[#4e090a] font-light">{{ card.label }}</p>
            <div v-if="card.pill" class="mt-[8px]">
              <span
                class="inline-flex items-center px-[14px] h-[28px] rounded-[57px] border border-[#a6a6a6] text-[16px] text-[#171a1f]"
                :class="card.wide ? 'bg-[#f9f2e8]' : ''">
                {{ card.value }}
              </span>
            </div>
            <p v-else class="text-[20px] text-[#171a1f] mt-[6px]">{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center justify-between gap-[12px]">
        <div class="flex items-center gap-[12px]">
          <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <h2 class="text-[24px] md:text-[30px] text-black">Supporting Documents</h2>
        </div>
        <button type="button"
          class="w-[58px] h-[38px] rounded-[57px] border border-[#efd6ae] bg-[#fffbf5] flex items-center justify-center"
          @click="showSupportingDocs = !showSupportingDocs">
          <ChevronDown class="w-[24px] h-[24px] text-[#555556]" />
        </button>
      </div>

      <div v-if="showSupportingDocs" class="mt-[18px] space-y-[14px]">
        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <MapPin class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] text-[#171a1f]">{{ supportingNotes.locationTitle }}</p>
              <p class="text-[16px] text-[rgba(23,26,31,0.7)]">
                {{ supportingNotes.locationLines[0] }}
              </p>
              <p class="text-[16px] text-[rgba(23,26,31,0.7)]">
                {{ supportingNotes.locationLines[1] }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <FileText class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] text-[#171a1f]">{{ supportingNotes.legalTitle }}</p>
              <p class="text-[16px] text-[rgba(23,26,31,0.7)]">
                {{ supportingNotes.legalText }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <ClipboardList class="w-[24px] h-[24px] text-[#6b7280]" />
            <div>
              <p class="text-[20px] text-[#171a1f]">{{ supportingNotes.inspectionTitle }}</p>
              <p class="text-[16px] text-[rgba(23,26,31,0.7)]">
                {{ supportingNotes.inspectionText }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-[#fffcf6] rounded-[4px] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.1)] p-[18px]">
          <div class="flex items-start gap-[12px]">
            <FileText class="w-[22px] h-[24px] text-[#6b7280]" />
            <div class="flex-1">
              <p class="text-[20px] text-[#171a1f] capitalize">{{ supportingNotes.documentTitle }}</p>
              <div class="mt-[10px] grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
                <div v-for="file in supportingNotes.attachments" :key="file"
                  class="h-[48px] bg-white rounded-[4px] border border-[#e5e7eb] shadow-[inset_1px_1px_1px_0px_rgba(0,0,0,0.08)] flex items-center gap-[10px] px-[12px]">
                  <Paperclip class="w-[20px] h-[20px] text-[#6b7280]" />
                  <span class="text-[18px] text-[#171a1f] font-light">{{ file }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="button"
          class="w-full h-[43px] rounded-[4px] bg-[#275227] text-white text-[20px] font-medium flex items-center justify-center gap-[10px]">
          <ArrowRight class="w-[23px] h-[23px]" />
          View All Supporting Documents
        </button>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[12px]">
        <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[30px] text-black">Final Decision (Mandatory Selection)</h2>
      </div>

      <div class="mt-[16px]">
        <div class="flex items-center border-b border-[#e5e7eb]">
          <button type="button"
            class="flex items-center gap-[8px] h-[47px] px-[16px] text-[17px] text-[#171a1f] rounded-tl-[5px] rounded-tr-[5px]"
            :class="activeDecisionTab === 'approve' ? 'bg-[#eacea0]' : ''" @click="activeDecisionTab = 'approve'">
            <CheckCircle2 class="w-[18px] h-[18px]" />
            Approve
          </button>
          <button type="button" class="flex items-center gap-[8px] h-[47px] px-[16px] text-[17px] text-[#171a1f]"
            @click="activeDecisionTab = 'reject'">
            <XCircle class="w-[18px] h-[18px]" />
            Reject
          </button>
          <button type="button" class="flex items-center gap-[8px] h-[47px] px-[16px] text-[17px] text-[#171a1f]"
            @click="activeDecisionTab = 'defer'">
            <Clock3 class="w-[18px] h-[18px]" />
            Defer / Table
          </button>
        </div>

        <div class="mt-[20px]">
          <div class="flex flex-wrap items-center gap-[16px]">
            <div
              class="flex-1 min-w-[260px] h-[60px] bg-[rgba(245,248,245,0.7)] border border-[#a8aaa9] rounded-[6px] flex items-center px-[20px]">
              <span class="text-[20px] text-[#171a1f]">Approved Compensation Amount ($)</span>
            </div>
            <input type="text" value="50,000.00"
              class="flex-1 min-w-[260px] h-[48px] rounded-[4px] border border-[#e5e7eb] px-[16px] text-[18px] text-[#171a1f] shadow-[inset_1px_1px_1px_0px_rgba(0,0,0,0.08)]" />
          </div>
          <p class="text-[18px] text-[#171a1f] font-light mt-[10px]">
            Original proposed amount: $50,000.00
          </p>
        </div>

        <div class="mt-[20px]">
          <p class="text-[20px] text-black font-medium">Legal Findings &amp; Statutory Analysis</p>
          <textarea rows="4"
            placeholder="Provide reasoning if the approved amount deviates from the proposed compensation..."
            class="mt-[10px] w-full h-[130px] rounded-[4px] border border-[#e5e7eb] px-[12px] py-[10px] text-[18px] text-[#171a1f] font-light shadow-[inset_1px_1px_1px_0px_rgba(0,0,0,0.08)] resize-none"></textarea>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[12px]">
        <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[30px] text-black">Resolution Notes</h2>
      </div>
      <p class="text-[20px] text-black font-medium mt-[12px]">
        Board Resolution Notes (Mandatory Before Final Submission)
      </p>
      <textarea rows="4"
        placeholder="Provide reasoning if the approved amount deviates from the proposed compensation..."
        class="mt-[12px] w-full h-[151px] rounded-[4px] border border-[#e5e7eb] px-[12px] py-[10px] text-[18px] text-[#171a1f] font-light shadow-[inset_1px_1px_1px_0px_rgba(0,0,0,0.08)] resize-none"></textarea>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[12px]">
        <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[30px] text-[#202224]">Voting Record (Board Members)</h2>
      </div>

      <div class="mt-[16px] overflow-x-auto">
        <table class="w-full min-w-[900px]">
          <thead>
            <tr class="bg-[#fafafa] border-b border-[#b2b2b2]">
              <th class="px-[12px] py-[10px] text-left text-[18px] text-[#202224] uppercase">
                <div class="flex items-center gap-[10px]">
                  <span class="w-[20px] h-[20px] border border-[#d5d5d5] rounded-[2px] inline-flex"></span>
                  Member Name
                </div>
              </th>
              <th class="px-[12px] py-[10px] text-left text-[18px] text-[#202224] uppercase">Vote</th>
              <th class="px-[12px] py-[10px] text-left text-[18px] text-[#202224] uppercase">Timestamp</th>
              <th class="px-[12px] py-[10px] text-center text-[18px] text-[#202224] uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vote in votes" :key="vote.member" class="border-b border-[#f2f4f7]">
              <td class="px-[12px] py-[14px] text-[18px] text-[#232323]">
                <div class="flex items-center gap-[10px]">
                  <span class="w-[20px] h-[20px] border border-[#d5d5d5] rounded-[2px] inline-flex"></span>
                  {{ vote.member }}
                </div>
              </td>
              <td class="px-[12px] py-[14px]">
                <span class="inline-flex items-center px-[20px] py-[3px] rounded-[999px] text-[15px]" :class="vote.vote === 'Approve'
                    ? 'bg-[#275227] text-white'
                    : 'bg-white border border-[#a4a4a4] text-[#1b1f25]'
                  ">
                  {{ vote.vote }}
                </span>
              </td>
              <td class="px-[12px] py-[14px] text-[18px] text-[#232323]">{{ vote.timestamp }}</td>
              <td class="px-[12px] py-[14px] text-center">
                <span
                  class="inline-flex items-center gap-[6px] px-[20px] py-[3px] rounded-[57px] border border-[#a4a4a4] text-[15px] text-[#1b1f25]">
                  <CheckCircle2 v-if="vote.status === 'Confirmed'" class="w-[16px] h-[16px]" />
                  <Clock3 v-else class="w-[16px] h-[16px]" />
                  {{ vote.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-[12px] mt-[12px] text-[16px] text-[#808080]">
        <span>Showing 1 to 5 of 5 entries</span>
        <div class="flex items-center gap-[12px]">
          <span>Page 1 of 12</span>
          <div class="flex items-center gap-[8px]">
            <button type="button"
              class="w-[26px] h-[26px] border border-[#565e6d] rounded-[2px] flex items-center justify-center text-[#565e6d]">
              <ChevronRight class="w-[16px] h-[16px] rotate-180" />
            </button>
            <button type="button"
              class="w-[26px] h-[26px] border border-[#565e6d] rounded-[2px] flex items-center justify-center text-[#565e6d]">
              <ChevronRight class="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
