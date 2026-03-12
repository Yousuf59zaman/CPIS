<script setup lang="ts">
import { ref } from 'vue'
import { FileText, ArrowRight } from 'lucide-vue-next'

defineOptions({ name: 'SerReviewPage' })

const reviewerDecision = ref<'approve' | 'return' | null>(null)
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header -->
    <div class="flex items-center justify-between flex-wrap gap-[8px]">
      <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">SER Review</h1>
      <button class="flex items-center gap-[6px] px-[14px] py-[7px] border border-[#224e22] rounded-[7px] text-[12px] text-[#224e22] font-medium hover:bg-[#f0f4f0] transition-colors">
        <FileText class="w-[13px] h-[13px]" /> View Full Claim File
      </button>
    </div>

    <!-- Info strip -->
    <div class="flex flex-wrap gap-[20px] pb-[14px] border-b border-[#e5e7eb]">
      <div v-for="f in [
        { label: 'Claim ID', value: 'CP-00101' },
        { label: 'Status', value: 'SER Review' },
        { label: 'Assigned Unit', value: 'SER Review Panel' },
        { label: 'Assigned Officer', value: 'Atty. Maria Santos' },
      ]" :key="f.label" class="border-l-2 border-[#d97706] pl-[10px]">
        <p class="text-[10px] text-[#9ca3af] uppercase">{{ f.label }}</p>
        <p class="text-[13px] font-semibold text-[#1d4a1d]">{{ f.value }}</p>
      </div>
    </div>

    <!-- Session Information -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Session Information</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px] mb-[12px]">
        <div v-for="f in [
          { label: 'Session Date', value: '23 January 2025' },
          { label: 'Session ID', value: 'SER-SESSION-001' },
          { label: 'Division', value: 'Marawi Division' },
          { label: 'Session Status', value: 'Active' },
        ]" :key="f.label">
          <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
          <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] bg-[#f9fafb]">
            <span class="text-[12px] text-[#374151]">{{ f.value }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-[10px]">
        <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[12px] font-medium rounded-[7px] transition-colors">
          <FileText class="w-[13px] h-[13px]" /> Generate Agenda PDF
        </button>
        <button class="flex items-center gap-[6px] px-[14px] py-[8px] bg-[#d97706] hover:bg-[#b45309] text-white text-[12px] font-medium rounded-[7px] transition-colors">
          Start Session
        </button>
      </div>
    </div>

    <!-- Financial Assessment Summary -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Financial Assessment Summary</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-[10px]">
        <div v-for="f in [
          { label: 'Structural Repair', value: '₱85,000.00' },
          { label: 'Temporary Housing', value: '₱20,000.00' },
          { label: 'Personal Property Damage', value: '₱25,000.00' },
          { label: 'Administrative Fees', value: '₱15,000.00' },
          { label: 'Total SER Amount', value: '₱145,000.00' },
          { label: 'Compliance Status', value: 'Verified' },
        ]" :key="f.label">
          <div>
            <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
            <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] bg-[#f9fafb]">
              <span class="text-[12px] font-medium" :class="f.label === 'Total SER Amount' ? 'text-[#1d4a1d]' : 'text-[#374151]'">{{ f.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Basis of Settlement -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Basis of Settlement</h2>
      </div>
      <p class="text-[12px] text-[#6b7280] leading-[1.7] mb-[10px]">
        The settlement evaluation is based on the damage inspection report conducted on 10 January 2025, photographic evidence, 
        and the applicable compensation matrix under CPIS guidelines. The structural damages have been classified as Major, 
        warranting full compensation under Category A provisions.
      </p>
      <p class="text-[12px] text-[#6b7280] leading-[1.7]">
        The proposed compensation of ₱145,000.00 reflects the total cost of structural repair, temporary housing assistance, 
        replacement of damaged personal property, and applicable administrative processing fees. This amount is consistent with 
        board-approved SER computation guidelines.
      </p>
    </div>

    <!-- Supporting Evidence -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Supporting Evidence</h2>
      </div>
      <div class="flex flex-wrap gap-[8px]">
        <div v-for="doc in ["Inspector's Report.pdf", 'Damage Assessment.pdf', 'Property Title.pdf']" :key="doc"
          class="flex items-center gap-[6px] px-[10px] py-[6px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb]">
          <span class="text-base">📄</span>
          <span class="text-[11px] text-[#374151]">{{ doc }}</span>
        </div>
      </div>
    </div>

    <!-- Reviewer Action -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Reviewer Action</h2>
      </div>
      <div class="mb-[14px]">
        <label class="text-[12px] font-medium text-[#374151] block mb-[6px]">Reviewer Comments</label>
        <textarea rows="4" placeholder="Enter your review comments, observations, or recommendations..." class="w-full text-[12px] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af]"></textarea>
      </div>
      <div>
        <p class="text-[12px] font-medium text-[#374151] mb-[8px]">Decision</p>
        <div class="flex flex-col gap-[8px]">
          <label v-for="opt in [
            { val: 'approve', label: 'Approve SER', desc: 'SER is accurate and complete. Forward for payment authorization.' },
            { val: 'return', label: 'Return for Revision', desc: 'SER requires additional data or corrections before approval.' },
          ]" :key="opt.val"
            class="flex items-start gap-[10px] p-[11px] border rounded-[8px] cursor-pointer transition-colors"
            :class="reviewerDecision === opt.val ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
            <input type="radio" v-model="reviewerDecision" :value="opt.val" class="mt-[1px] accent-[#224e22]" />
            <div>
              <p class="text-[12px] font-semibold text-[#171a1f]">{{ opt.label }}</p>
              <p class="text-[11px] text-[#6b7280]">{{ opt.desc }}</p>
            </div>
          </label>
        </div>
      </div>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
        Cancel Review
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Submit Decision
      </button>
    </div>
  </main>
</template>
