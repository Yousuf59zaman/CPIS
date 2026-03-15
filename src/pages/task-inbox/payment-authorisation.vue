<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, FileText, Save, Send } from 'lucide-vue-next'

defineOptions({ name: 'PaymentAuthorisationPage' })

const paymentDecision = ref<'approve' | 'reject'>('approve')
const authorisationComment = ref('')

const contextFields = [
  { label: 'Claim Context', value: 'CPIS-2026-001' },
  { label: 'Current Status', value: 'PENDING FINANCE AUTHORIZATION' },
  { label: 'Assigned Unit', value: 'DIVISION OF FINANCE (H.O.)' },
  { label: 'Assigned Officer', value: 'STERLING, ROBERT J.' },
]

const highlightCards = [
  { label: 'Claim ID', value: 'CPIS-2026-001', emphasis: '' },
  { label: 'Voucher No', value: 'DV-2026-045', emphasis: '' },
  { label: 'Total Amount (USD)', value: '50,000.00', emphasis: 'text-[30px] leading-[45px] font-semibold text-[#171A1F]' },
]

const voucherLines = [
  {
    id: '01',
    accountCode: '7402-2110',
    description: 'Medical Reimbursement - Inpatient Care',
    amount: '35,000.00',
  },
  {
    id: '02',
    accountCode: '7402-2115',
    description: 'Pharmaceutical Supplies - Chronic Condition',
    amount: '10,000.00',
  },
  {
    id: '03',
    accountCode: '7402-2120',
    description: 'Post-Operative Consultation Fees',
    amount: '5,000.00',
  },
]

const decisionOptions = [
  {
    value: 'approve' as const,
    label: 'Approve Payment',
    description: 'Submit for disbursement',
  },
  {
    value: 'reject' as const,
    label: 'Reject & Return',
    description: 'Back to verification officer',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Payment Authorisation</h1>

      <div class="flex flex-wrap items-center justify-end gap-[10px]">
        <button
          type="button"
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[999px] bg-[#275227] px-[16px] text-[16px] leading-[32px] font-medium text-white shadow-[0_8px_24px_rgba(39,82,39,0.16)] transition hover:bg-[#214721]"
        >
          <FileText class="h-[13px] w-[13px]" />
          Draft Authorisation
        </button>

        <div
          class="flex items-center gap-[8px] rounded-[999px] border border-[#ece8e1] bg-[#fbfaf7] px-[16px] py-[8px] text-[16px] leading-[24px] font-light text-[#A7A6A6]"
        >
          <span>Task Inbox</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span>Authorization Queue</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span class="text-[#171A1F]">Payment Authorization</span>
        </div>
      </div>
    </div>

    <section class="rounded-[12px] bg-white p-[12px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="grid grid-cols-1 gap-[10px] md:grid-cols-2">
        <div
          v-for="field in contextFields"
          :key="field.label"
          class="grid gap-[10px] rounded-[8px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] sm:grid-cols-[96px_1fr] sm:items-center"
        >
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ field.label }}</p>
          <div class="flex min-h-[34px] items-center rounded-[6px] border border-[#ececec] bg-white px-[12px]">
            <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-[18px] md:grid-cols-3">
      <article
        v-for="card in highlightCards"
        :key="card.label"
        class="min-h-[116px] rounded-[10px] border border-[#ececec] bg-white px-[18px] py-[16px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.04)]"
      >
        <div class="mb-[12px] h-[70px] border-l-[4px] border-[#f3d6aa] pl-[14px]">
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ card.label }}</p>
          <p class="mt-[10px] text-[18px] leading-[27px] font-light text-[#171A1F]" :class="card.emphasis">{{ card.value }}</p>
        </div>
      </article>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[18px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Voucher Line Details</h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full min-w-[760px]">
          <thead>
            <tr class="border-b border-[#efefef] bg-[#fafafa]">
              <th class="px-[12px] py-[12px] text-left">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#275227]" />
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Line Item</th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Account Code
              </th>
              <th class="px-[12px] py-[12px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                Description
              </th>
              <th class="px-[12px] py-[12px] text-right text-[18px] leading-[27px] font-normal text-[#202224] uppercase">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="line in voucherLines" :key="line.id" class="border-b border-[#f3f3f3]">
              <td class="px-[12px] py-[14px]">
                <input type="checkbox" class="h-[12px] w-[12px] accent-[#275227]" />
              </td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.id }}</td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.accountCode }}</td>
              <td class="px-[12px] py-[14px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.description }}</td>
              <td class="px-[12px] py-[14px] text-right text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-[14px] flex flex-wrap items-center justify-between gap-[10px] text-[16px] leading-[20px] font-light text-[#808080]">
        <span>Showing 1 to 5 of 5 entries</span>

        <div class="flex items-center gap-[10px]">
          <span>Page 1 of 12</span>
          <div class="flex items-center gap-[6px]">
            <button
              type="button"
              class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
            >
              <ChevronLeft class="h-[12px] w-[12px]" />
            </button>
            <button
              type="button"
              class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
            >
              <ChevronRight class="h-[12px] w-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[18px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Legal Recommendation</h2>
      </div>

      <div class="grid grid-cols-1 gap-[24px] xl:grid-cols-[240px_minmax(0,1fr)]">
        <div>
          <p class="mb-[12px] text-[20px] leading-[28px] font-normal text-[#171A1F]">Selection</p>
          <div class="space-y-[12px]">
            <label
              v-for="option in decisionOptions"
              :key="option.value"
              class="flex cursor-pointer items-start gap-[10px]"
            >
              <input
                v-model="paymentDecision"
                type="radio"
                :value="option.value"
                class="mt-[2px] h-[13px] w-[13px] accent-[#275227]"
              />
              <div>
                <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ option.label }}</p>
                <p class="text-[16px] leading-[24px] font-light text-[#808080]">{{ option.description }}</p>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label for="authorisation-comments" class="mb-[12px] block text-[20px] leading-[28px] font-normal text-[#171A1F]">
            Authorization Comments
          </label>
          <textarea
            id="authorisation-comments"
            v-model="authorisationComment"
            rows="4"
            placeholder="Enter detailed justification for this decision..."
            class="min-h-[92px] w-full rounded-[8px] border border-[#ececec] bg-white px-[14px] py-[12px] text-[18px] leading-[27px] font-light text-[#171A1F] outline-none transition focus:border-[#275227]"
          ></textarea>
          <p class="mt-[8px] text-[16px] leading-[20px] font-light text-[#808080]">
            * Comments are mandatory for all Reject & Return decisions. For approvals, these will appear on the payment
            advice.
          </p>
        </div>
      </div>

      <div class="mt-[26px] grid grid-cols-1 gap-[16px] md:grid-cols-2">
        <button
          type="button"
          class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#275227] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#214721]"
        >
          <Save class="h-[14px] w-[14px]" />
          Save Draft
        </button>
        <button
          type="button"
          class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#da972e] text-[20px] leading-[35px] font-medium text-white transition hover:bg-[#c38320]"
        >
          <Send class="h-[14px] w-[14px]" />
          Submit Decision
        </button>
      </div>
    </section>
  </main>
</template>





