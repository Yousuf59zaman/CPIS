<script setup lang="ts">
import { ref } from 'vue'
import { Bold, Italic, AlignLeft, AlignCenter, Upload, Save, ArrowRight } from 'lucide-vue-next'

defineOptions({ name: 'SerReportPage' })

const official1 = ref(false)
const official2 = ref(false)

const compensationItems = [
  { component: 'Structural Repair', amount: '₱85,000.00', notes: 'Based on inspection report' },
  { component: 'Temporary Housing Allowance', amount: '₱20,000.00', notes: '3-month provision' },
  { component: 'Personal Property Damage', amount: '₱25,000.00', notes: 'Assessed by inspector' },
  { component: 'Administrative Fees', amount: '₱15,000.00', notes: 'Processing and verification' },
]

const attachments = [
  { name: "Inspector's Report.pdf", date: '15-Jan-2025', by: 'C. Reyes' },
  { name: 'Damage Assessment.pdf', date: '15-Jan-2025', by: 'C. Reyes' },
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
        { label: 'Status', value: 'SER Report Drafting' },
        { label: 'Meeting ID', value: 'MTG-2025-001' },
      ]" :key="f.label" class="border-l-2 border-[#d97706] pl-[10px]">
        <p class="text-[10px] text-[#9ca3af] uppercase">{{ f.label }}</p>
        <p class="text-[13px] font-semibold text-[#1d4a1d]">{{ f.value }}</p>
      </div>
    </div>

    <!-- Claim Summary Reference -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Claim Summary Reference</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
        <div v-for="f in [
          { label: 'Property Location', value: 'Bgry Lumbac Madaya, Marawi City' },
          { label: 'Inspection Summary', value: 'Structural damage confirmed' },
          { label: 'GIS Reference', value: 'GIS-REF-2025-00101' },
          { label: 'Board Resolution', value: 'RES-2025-001 — Approved' },
        ]" :key="f.label">
          <div class="border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] bg-[#f9fafb]">
            <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
            <p class="text-[12px] text-[#374151]">{{ f.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SER Report Content (rich text) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center justify-between mb-[10px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">SER Report Content</h2>
        </div>
        <span class="text-[10px] text-[#9ca3af] italic">Auto Save — 10:42 AM</span>
      </div>
      <!-- Toolbar -->
      <div class="flex items-center gap-[6px] p-[6px] border border-[#e5e7eb] rounded-t-[7px] bg-[#fafafa]">
        <button class="p-[5px] rounded hover:bg-[#e5e7eb] transition-colors"><Bold class="w-[13px] h-[13px] text-[#374151]" /></button>
        <button class="p-[5px] rounded hover:bg-[#e5e7eb] transition-colors"><Italic class="w-[13px] h-[13px] text-[#374151]" /></button>
        <div class="w-px h-[16px] bg-[#d1d5db] mx-[2px]"></div>
        <button class="p-[5px] rounded hover:bg-[#e5e7eb] transition-colors"><AlignLeft class="w-[13px] h-[13px] text-[#374151]" /></button>
        <button class="p-[5px] rounded hover:bg-[#e5e7eb] transition-colors"><AlignCenter class="w-[13px] h-[13px] text-[#374151]" /></button>
      </div>
      <textarea rows="8" class="w-full text-[12px] border border-[#e5e7eb] border-t-0 rounded-b-[7px] px-[12px] py-[10px] outline-none resize-none text-[#374151]"
        placeholder="Write the SER report content here...">This Settlement Evaluation Report (SER) is prepared pursuant to the board's resolution dated 22 January 2025 approving the claim filed by John Smith (CP-00101). The report evaluates the appropriate compensation based on inspection findings, damage assessment, and applicable compensation matrices.</textarea>
    </div>

    <!-- Compensation Breakdown -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Compensation Breakdown</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Component</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Amount (PHP)</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in compensationItems" :key="item.component" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ item.component }}</td>
            <td class="px-[12px] py-[10px] text-[12px] font-medium text-[#374151]">{{ item.amount }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#6b7280]">{{ item.notes }}</td>
          </tr>
          <tr class="border-t-2 border-[#e5e7eb] bg-[#f0f4f0]">
            <td class="px-[12px] py-[10px] text-[13px] font-bold text-[#1d4a1d]">TOTAL</td>
            <td class="px-[12px] py-[10px] text-[13px] font-bold text-[#1d4a1d]">₱145,000.00</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Attachments -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center justify-between mb-[14px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Attachments</h2>
        </div>
        <button class="flex items-center gap-[5px] px-[12px] py-[6px] border border-[#e5e7eb] rounded-[6px] text-[11px] text-[#374151] hover:bg-[#f3f4f6]">
          <Upload class="w-[12px] h-[12px]" /> Upload
        </button>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">File Name</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Date</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Uploaded By</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in attachments" :key="a.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.name }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.date }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.by }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Official Declaration -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[12px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Official Declaration</h2>
      </div>
      <div class="space-y-[10px]">
        <label class="flex items-start gap-[10px] cursor-pointer">
          <input type="checkbox" v-model="official1" class="w-[13px] h-[13px] mt-[1px] accent-[#224e22]" />
          <span class="text-[12px] text-[#374151]">I certify that the information contained in this SER is accurate, complete, and based on verified documentation and inspection findings.</span>
        </label>
        <label class="flex items-start gap-[10px] cursor-pointer">
          <input type="checkbox" v-model="official2" class="w-[13px] h-[13px] mt-[1px] accent-[#224e22]" />
          <span class="text-[12px] text-[#374151]">I acknowledge that this report will be subject to review and that any falsification of information is a violation of CPIS policies and applicable laws.</span>
        </label>
      </div>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <Save class="w-[15px] h-[15px]" /> Save Draft
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Submit for SER Review
      </button>
    </div>
  </main>
</template>
