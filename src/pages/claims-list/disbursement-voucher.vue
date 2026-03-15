<script setup lang="ts">
import { ArrowRight, ChevronRight, Save } from 'lucide-vue-next'

defineOptions({ name: 'DisbursementVoucherPage' })

const summaryCards = [
  { label: 'Claim ID', value: 'CPIS-2026-001' },
  { label: 'Claimant', value: 'John Doe' },
  { label: 'Approved Amount', value: '50,000.00 USD' },
  { label: 'SER Ref', value: 'SER-2026-022' },
  { label: 'Process Status', value: 'Pending Processing' },
]

const claimSummaryFields = [
  { label: 'Claimant:', value: 'John Smith' },
  { label: 'Location:', value: 'Structural' },
  { label: 'Inspection:', value: 'Barangay Lumbac Madaya, Marawi City' },
  { label: 'Current Status:', value: 'Pending Board Decision' },
]

const verificationChecks = [
  {
    title: 'SER Approval Verified',
    description: 'Confirm expenditure matches approved service report values.',
  },
  {
    title: 'Budget Allocation Confirmed',
    description: 'Ensure GL code has sufficient funds for this disbursement.',
  },
  {
    title: 'Bank Details Verified',
    description: 'Verify payee bank account is active and matches KYC records.',
  },
  {
    title: 'No Duplicate Payment Found',
    description: 'System check completed for previous payments on this SER ref.',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]" style="font-family: 'Poppins', Inter, sans-serif;">
    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h1 class="text-[24px] md:text-[30px] font-medium text-[#202224]">Disbursement voucher</h1>
      <div class="flex items-center gap-[8px] h-[32px] rounded-[999px] border border-[#e5e7eb] bg-[#f7f7f7] px-[16px] text-[10px] font-light text-[#a7a6a6]">
        <span>Claim list</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Claims Management</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Disbursement</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>New Voucher</span>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[12px]">
      <div v-for="card in summaryCards" :key="card.label"
        class="bg-white border border-[#ececec] rounded-[8px] p-[12px] shadow-[0px_2px_6px_rgba(0,0,0,0.04)]">
        <p class="text-[11px] text-[#6b7280]">{{ card.label }}</p>
        <p class="text-[14px] text-[#171a1f] font-medium mt-[6px]">{{ card.value }}</p>
      </div>
    </div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Claim summary</h2>
      </div>

      <div class="mb-[12px] text-[16px] text-[#202224]">CP-00101</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div v-for="field in claimSummaryFields" :key="field.label" class="grid grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px]">
          <p class="text-[12px] text-[#171a1f]">{{ field.label }}</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">{{ field.value }}</span>
          </div>
        </div>
        <div class="grid grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] md:col-span-2">
          <p class="text-[12px] text-[#171a1f]">Current Status:</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">Significant damage observed, referred for Legal</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[6px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Payment Details</h2>
      </div>
      <p class="text-[11px] text-[#6b7280] mb-[10px]">Configure Disbursement Execution Parameters</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div class="grid grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px]">
          <p class="text-[12px] text-[#171a1f]">voucher number</p>
          <div class="flex items-center gap-[6px]">
            <div class="flex h-[26px] flex-1 items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">DV-2026-00452-GEN</span>
            </div>
            <span class="h-[20px] px-[8px] rounded-[999px] border border-[#e5e7eb] text-[10px] text-[#6b7280] flex items-center">Auto</span>
          </div>
        </div>
        <div class="grid grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px]">
          <p class="text-[12px] text-[#171a1f]">Payment Amount</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">50,000.00</span>
          </div>
        </div>
        <div class="grid grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] md:col-span-2">
          <p class="text-[12px] text-[#171a1f]">Schedule Payment Date</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">Select date</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[6px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Financial Verification Checklist</h2>
      </div>
      <p class="text-[11px] text-[#6b7280] mb-[10px]">Confirm All Mandatory Compliance Checks Before Authorization</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <label v-for="item in verificationChecks" :key="item.title" class="flex items-start gap-[8px] rounded-[6px] border border-[#f0f0f0] bg-[#fffcf6] px-[12px] py-[10px]">
          <input type="checkbox" class="mt-[2px] h-[12px] w-[12px] accent-[#234f23]" />
          <div>
            <p class="text-[12px] font-medium text-[#171a1f]">{{ item.title }}</p>
            <p class="text-[11px] text-[#6b7280]">{{ item.description }}</p>
          </div>
        </label>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[10px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Payment Remarks &amp; Justification</h2>
      </div>
      <textarea
        rows="4"
        placeholder="Enter any additional notes for the authorizing officer..."
        class="w-full rounded-[8px] border border-[#e5e7eb] px-[12px] py-[10px] text-[12px] text-[#171a1f] outline-none resize-none"
      ></textarea>
      <p class="text-[11px] text-[#6b7280] mt-[6px]">Auto-save active: Last saved 2 minutes ago</p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
      <button type="button" class="h-[36px] rounded-[4px] bg-[#275227] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]">
        <Save class="w-[14px] h-[14px]" />
        Save Draft
      </button>
      <button type="button" class="h-[36px] rounded-[4px] bg-[#da972e] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[14px] h-[14px]" />
        Submit for Authorization
      </button>
    </div>
  </main>
</template>
