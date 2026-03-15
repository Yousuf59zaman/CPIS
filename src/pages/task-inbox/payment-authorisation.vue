<script setup lang="ts">
import { ref } from 'vue'
import { FileText, Save, ArrowRight } from 'lucide-vue-next'

defineOptions({ name: 'PaymentAuthorisationPage' })

const paymentDecision = ref<'approve' | 'reject' | null>(null)

const voucherLines = [
  { lineItem: 'Structural Repair', accountCode: 'ACC-001-SR', description: 'Repair of structural damages', amount: '₱85,000.00' },
  { lineItem: 'Temporary Housing', accountCode: 'ACC-002-TH', description: '3-month temporary housing allowance', amount: '₱20,000.00' },
  { lineItem: 'Personal Property', accountCode: 'ACC-003-PP', description: 'Personal property damage replacement', amount: '₱25,000.00' },
  { lineItem: 'Admin Fees', accountCode: 'ACC-004-AF', description: 'Administrative processing fees', amount: '₱15,000.00' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-center justify-between flex-wrap gap-[8px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Payment Authorisation</h1>
      <button class="flex items-center gap-[6px] px-[14px] py-[7px] bg-[#1d4a1d] hover:bg-[#163a16] rounded-[7px] text-[16px] leading-[32px] text-white font-medium transition-colors">
        <FileText class="w-[13px] h-[13px]" /> Draft Authorisation
      </button>
    </div>

    <!-- 4-field info row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
      <div v-for="f in [
        { label: 'Claim Context', value: 'Structural Damage — Marawi City' },
        { label: 'Current Status', value: 'Payment Authorization' },
        { label: 'Assigned Unit', value: 'Finance Division' },
        { label: 'Assigned Officer', value: 'Dir. Carlos Buena' },
      ]" :key="f.label"
        class="bg-white rounded-[10px] border border-[#f0f0f0] shadow-sm px-[14px] py-[10px]">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[3px]">{{ f.label }}</p>
        <p class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ f.value }}</p>
      </div>
    </div>

    <!-- 3 large info boxes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px] flex flex-col items-center">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[6px]">Claim ID</p>
        <p class="text-[30px] leading-[45px] font-semibold text-[#1d4a1d]">CP-00101</p>
      </div>
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px] flex flex-col items-center">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[6px]">Voucher No.</p>
        <p class="text-[30px] leading-[45px] font-semibold text-[#1d4a1d]">DV-2026-045</p>
      </div>
      <div class="bg-white rounded-[12px] border-2 border-[#224e22] shadow-sm p-[20px] flex flex-col items-center">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[6px]">Total Amount (PHP)</p>
        <p class="text-[30px] leading-[45px] font-semibold text-[#1d4a1d]">145,000.00</p>
      </div>
    </div>

    <!-- Voucher Line Details -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Voucher Line Details</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Line Item</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Account Code</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Description</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in voucherLines" :key="line.lineItem" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.lineItem }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80 font-mono">{{ line.accountCode }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ line.description }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80 text-right">{{ line.amount }}</td>
          </tr>
          <tr class="bg-[#f0f4f0] border-t-2 border-[#e5e7eb]">
            <td colspan="3" class="px-[12px] py-[10px] text-[18px] leading-[27px] font-semibold text-[#1d4a1d]">TOTAL</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-semibold text-[#1d4a1d] text-right">₱145,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Legal / Authorization Recommendation -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Legal Recommendation</h2>
      </div>
      <div class="flex flex-col gap-[8px] mb-[14px]">
        <label v-for="opt in [
          { val: 'approve', label: 'Approve Payment', desc: 'Authorize disbursement of ₱145,000.00 to claimant John Smith.' },
          { val: 'reject', label: 'Reject &amp; Return', desc: 'Payment authorization is denied. Return voucher for review.' },
        ]" :key="opt.val"
          class="flex items-start gap-[10px] p-[11px] border rounded-[8px] cursor-pointer transition-colors"
          :class="paymentDecision === opt.val ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
          <input type="radio" v-model="paymentDecision" :value="opt.val" class="mt-[1px] accent-[#224e22]" />
          <div>
            <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]" v-html="opt.label"></p>
            <p class="text-[16px] leading-[24px] font-light text-[#808080]">{{ opt.desc }}</p>
          </div>
        </label>
      </div>
      <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[5px]">Authorization Comments</label>
      <textarea rows="3" placeholder="Enter authorization comments or conditions..." class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#171A1F] placeholder-[#9ca3af]"></textarea>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <Save class="w-[15px] h-[15px]" /> Save Draft
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Submit Decision
      </button>
    </div>
  </main>
</template>
