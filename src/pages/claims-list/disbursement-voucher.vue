<script setup lang="ts">
import { ref } from 'vue'
import { Save, ArrowRight } from 'lucide-vue-next'

defineOptions({ name: 'DisbursementVoucherPage' })

const checklist = [
  { label: 'Voucher amount matches approved compensation', checked: true },
  { label: 'Payee information verified and complete', checked: true },
  { label: 'Supporting documents attached and validated', checked: false },
  { label: 'Budget allocation confirmed by Finance Division', checked: false },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header info strip -->
    <div class="flex flex-wrap gap-[20px] pb-[14px] border-b border-[#e5e7eb]">
      <div v-for="f in [
        { label: 'Claim ID', value: 'CP-00101' },
        { label: 'Claimant', value: 'John Smith' },
        { label: 'Approved Amount', value: '₱145,000.00' },
        { label: 'SER Ref', value: 'SER-2025-001' },
        { label: 'Process Status', value: 'Disbursement Processing' },
      ]" :key="f.label" class="border-l-2 border-[#d97706] pl-[10px]">
        <p class="text-[10px] text-[#9ca3af] uppercase">{{ f.label }}</p>
        <p class="text-[13px] font-semibold text-[#1d4a1d]">{{ f.value }}</p>
      </div>
    </div>

    <!-- Claim Summary -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Claim Summary — CP-00101</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-[8px]">
        <div v-for="f in [
          { label: 'Claimant Name', value: 'John Smith' },
          { label: 'Claim Type', value: 'Structural Damage' },
          { label: 'Property Location', value: 'Bgry Lumbac Madaya, Marawi' },
          { label: 'Board Decision', value: 'APPROVED' },
          { label: 'Board Resolution Date', value: '22 January 2025' },
          { label: 'SER Reference', value: 'SER-2025-001' },
        ]" :key="f.label">
          <div>
            <p class="text-[10px] text-[#6b7280]">{{ f.label }}</p>
            <div class="px-[9px] py-[6px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[3px]">
              <span class="text-[12px] text-[#374151]" :class="f.label === 'Board Decision' ? 'text-[#16a34a] font-semibold' : ''">{{ f.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Details -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Payment Details</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
        <div>
          <label class="text-[11px] font-medium text-[#374151] block mb-[5px]">Voucher Number</label>
          <div class="flex gap-[6px]">
            <input type="text" value="DV-2025-001" class="flex-1 text-[12px] border border-[#e5e7eb] rounded-[7px] px-[10px] py-[8px] outline-none focus:border-[#224e22] text-[#374151]" />
            <span class="px-[8px] py-[8px] bg-[#e5e7eb] text-[#374151] text-[10px] font-medium rounded-[5px] h-fit">Auto</span>
          </div>
        </div>
        <div>
          <label class="text-[11px] font-medium text-[#374151] block mb-[5px]">Payment Amount</label>
          <input type="text" value="₱145,000.00" class="w-full text-[12px] border border-[#e5e7eb] rounded-[7px] px-[10px] py-[8px] outline-none focus:border-[#224e22] text-[#374151]" />
        </div>
        <div>
          <label class="text-[11px] font-medium text-[#374151] block mb-[5px]">Schedule Payment Date</label>
          <input type="date" class="w-full text-[12px] border border-[#e5e7eb] rounded-[7px] px-[10px] py-[8px] outline-none focus:border-[#224e22] text-[#374151]" />
        </div>
      </div>
    </div>

    <!-- Financial Verification Checklist -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Financial Verification Checklist</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <label v-for="(item, i) in checklist" :key="i" class="flex items-start gap-[10px] p-[10px] border border-[#e5e7eb] rounded-[8px] cursor-pointer hover:bg-[#fafafa]">
          <input type="checkbox" :checked="item.checked" class="w-[13px] h-[13px] mt-[1px] accent-[#224e22]" />
          <span class="text-[12px] text-[#374151]">{{ item.label }}</span>
        </label>
      </div>
    </div>

    <!-- Payment Remarks -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center justify-between mb-[10px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Payment Remarks &amp; Justification</h2>
        </div>
        <span class="text-[10px] text-[#9ca3af] italic">Auto-saving...</span>
      </div>
      <textarea rows="4" placeholder="Enter remarks regarding the payment disbursement, any special conditions, or justification..." class="w-full text-[12px] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af]"></textarea>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <Save class="w-[15px] h-[15px]" /> Save Draft
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Submit for Authorization
      </button>
    </div>
  </main>
</template>
