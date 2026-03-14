<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, ChevronDown, FileText } from 'lucide-vue-next'

defineOptions({ name: 'SerReviewPage' })

const reviewerDecision = ref<'approve' | 'return'>('approve')

const summaryCards = [
  { label: 'Claim ID', value: 'CL-2024-99810' },
  { label: 'Status', value: 'Pending SER Review' },
  { label: 'Assigned Unit', value: 'Property Claims (West)' },
  { label: 'Assigned Officer', value: 'Sarah Thompson' },
]

const financialRows = [
  { label: 'Original Claimed Amount', value: 'PHP45,250.00' },
  { label: 'Policy Deductible', value: 'PHP1,000.00' },
  { label: 'Ineligible Items (Deduction)', value: '(PHP12,100.00)' },
  { label: 'Liability Percentage', value: '100%' },
  { label: 'Adjusted Loss Value', value: 'PHP33,150.00' },
  { label: 'Proposed Settlement', value: 'PHP32,150.00' },
]

const supportingEvidence = [
  'Inspector_Notes_V2.pdf',
  'Photos_Damage_Rear.zip',
  'Standard_Rates_Table.pdf',
]
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]" style="font-family: 'Poppins', Inter, sans-serif;">
    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h1 class="text-[24px] md:text-[30px] font-medium text-[#202224]">SER Review</h1>
      <div class="flex flex-wrap items-center gap-[10px]">
        <button type="button" class="h-[32px] px-[12px] rounded-[999px] bg-[#275227] text-white text-[11px] flex items-center gap-[6px]">
          <FileText class="w-[12px] h-[12px]" />
          View Full Claim File
          <ChevronDown class="w-[12px] h-[12px]" />
        </button>
        <div class="flex items-center gap-[8px] h-[32px] rounded-[999px] border border-[#e5e7eb] bg-[#f7f7f7] px-[14px] text-[10px] font-light text-[#a7a6a6]">
          <span>Task Inbox</span>
          <ChevronDown class="h-[10px] w-[10px] rotate-[-90deg]" />
          <span>SER Review</span>
          <ChevronDown class="h-[10px] w-[10px] rotate-[-90deg]" />
          <span>CL-2024-99810</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[12px]">
      <div v-for="card in summaryCards" :key="card.label"
        class="bg-white border border-[#ececec] rounded-[8px] p-[12px] shadow-[0px_2px_6px_rgba(0,0,0,0.04)]">
        <p class="text-[11px] text-[#6b7280]">{{ card.label }}</p>
        <div class="mt-[6px] h-[26px] rounded-[4px] border border-[#e6e6e6] bg-[#fffdf6] px-[10px] flex items-center">
          <span class="text-[12px] text-[#171a1f]">{{ card.value }}</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between gap-[12px]">
      <h2 class="text-[16px] font-semibold text-[#202224]">Session Information</h2>
      <div class="flex items-center gap-[8px]">
        <button type="button" class="h-[28px] px-[10px] rounded-[999px] border border-[#e5e7eb] text-[11px] text-[#171a1f] bg-white">
          Generate Agenda PDF
        </button>
        <button type="button" class="h-[28px] px-[10px] rounded-[999px] border border-[#e5e7eb] text-[11px] text-[#171a1f] bg-white flex items-center gap-[6px]">
          Start Session
          <ChevronDown class="w-[12px] h-[12px]" />
        </button>
      </div>
    </div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Financial Assessment Summary</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div v-for="row in financialRows" :key="row.label" class="grid grid-cols-1 sm:grid-cols-[190px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px]">
          <p class="text-[12px] text-[#171a1f]">{{ row.label }}</p>
          <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">{{ row.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Basis Of Settlement</h2>
      </div>
      <p class="text-[12px] leading-[1.55] text-[#171a1f]">
        Assessment completed based on site inspection report dated Oct 12, 2024. The structural damage reported at the rear of the property (Item 4b in original claim) was deemed as pre-existing wear and tear rather than storm damage, resulting in the $12,100.00 reduction.
      </p>
      <p class="text-[12px] leading-[1.55] text-[#171a1f] mt-[8px]">
        The remainder of the claim for roof tile replacement and interior water damage is consistent with weather event "Storm ALPHA" records. Labor rates applied are in accordance with the 2024 standardized schedule of rates for the Western District.
      </p>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[18px] md:text-[20px] font-medium text-[#202224]">Supporting Evidence</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-[10px] rounded-[8px] bg-[#fffaf0] p-[12px]">
        <div v-for="doc in supportingEvidence" :key="doc" class="h-[32px] rounded-[6px] border border-[#e5e7eb] bg-white px-[10px] text-[11px] text-[#171a1f] flex items-center">
          {{ doc }}
        </div>
      </div>
    </section>

    <div class="text-[16px] font-semibold text-[#202224]">Reviewer Action</div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[10px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h3 class="text-[16px] font-medium text-[#202224]">Reviewer Comments</h3>
      </div>
      <textarea
        rows="4"
        placeholder="Enter any additional notes for the authorizing officer..."
        class="w-full rounded-[8px] border border-[#e5e7eb] px-[12px] py-[10px] text-[12px] text-[#171a1f] outline-none resize-none"
      ></textarea>
      <p class="text-[11px] text-[#6b7280] mt-[6px]">Mandatory if returning for revision. Characters remaining: 2000</p>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[24px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h3 class="text-[16px] font-medium text-[#202224]">Decision</h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
        <label class="rounded-[8px] border border-[#e5e7eb] bg-[#fffdf6] p-[12px] flex items-start gap-[8px] cursor-pointer"
          :class="reviewerDecision === 'approve' ? 'border-[#275227]' : ''">
          <input v-model="reviewerDecision" value="approve" type="radio" class="mt-[2px] accent-[#275227]" />
          <div>
            <p class="text-[12px] font-medium text-[#171a1f]">Approve SER</p>
            <p class="text-[11px] text-[#6b7280]">Settlement will proceed to payment authorization.</p>
          </div>
        </label>
        <label class="rounded-[8px] border border-[#e5e7eb] bg-[#fffdf6] p-[12px] flex items-start gap-[8px] cursor-pointer"
          :class="reviewerDecision === 'return' ? 'border-[#275227]' : ''">
          <input v-model="reviewerDecision" value="return" type="radio" class="mt-[2px] accent-[#275227]" />
          <div>
            <p class="text-[12px] font-medium text-[#171a1f]">Return for Revision</p>
            <p class="text-[11px] text-[#6b7280]">Report will be sent back to Assessing Officer.</p>
          </div>
        </label>
      </div>
      <p class="text-[11px] text-[#6b7280] mt-[10px]">By submitting, you electronically sign this review decision.</p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
      <button type="button" class="h-[36px] rounded-[4px] bg-[#275227] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]">
        Cancel Review
      </button>
      <button type="button" class="h-[36px] rounded-[4px] bg-[#da972e] text-[13px] font-medium text-white flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[14px] h-[14px]" />
        Submit Decision
      </button>
    </div>
  </main>
</template>
