<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, Eye, Download, ArrowRight, Save } from 'lucide-vue-next'

defineOptions({ name: 'LegalReviewPage' })

const legalRecommendation = ref<'approve' | 'reject' | 'further' | null>(null)
const showDocs = ref(true)

const docs = [
  { name: "Inspection Report.pdf", category: 'Inspection Report', severity: 'Major' },
  { name: "Barangay Certificate.pdf", category: 'Supporting Docs', severity: 'Minor' },
  { name: "Property Photos.zip", category: 'Damage Photo', severity: 'Major' },
]

const legalFindings = [
  { date: '15-Jan-2025', voucher: 'VCH-001', file: 'Legal Assessment Form.pdf', by: 'Atty. Santos' },
  { date: '16-Jan-2025', voucher: 'VCH-002', file: 'Statutory Analysis.pdf', by: 'Atty. Santos' },
]

const paymentRecords = [
  { date: '17-Jan-2025', ref: 'PR-2025-001', desc: 'Initial Compensation Estimate', amount: '₱120,000.00' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-start justify-between flex-wrap gap-[8px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Legal Review</h1>
      <div class="flex items-center gap-[20px] text-[16px] leading-[24px] font-light text-[#A7A6A6]">
        <span>Session: <span class="text-[#171A1F] font-light">LR-2025-0023</span></span>
        <span class="w-px h-[14px] bg-[#e5e7eb]"></span>
        <span>Audit Ref: <span class="text-[#171A1F] font-light">AR-9901</span></span>
      </div>
    </div>

    <!-- Claim Summary -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Claim Summary</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-[8px]">
        <div v-for="f in [
          { label: 'Claim ID', value: 'CP-00101' },
          { label: 'Claimant Name', value: 'John Smith' },
          { label: 'Claim Type', value: 'Structural Damage' },
          { label: 'Property Location', value: 'Bgry Lumbac Madaya, Marawi' },
          { label: 'Inspection Date', value: '10 January 2025' },
          { label: 'Inspection Status', value: 'Completed' },
          { label: 'Assigned Officer', value: 'Atty. Maria Santos' },
        ]" :key="f.label">
          <div>
            <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ f.label }}</p>
            <div class="px-[9px] py-[6px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[3px]">
              <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ f.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Supporting Documents (collapsible) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <button @click="showDocs = !showDocs" class="w-full flex items-center justify-between px-[20px] py-[14px] hover:bg-[#fafafa]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Supporting Documents</h2>
        </div>
        <ChevronDown class="w-[16px] h-[16px] text-[#6b7280] transition-transform" :class="showDocs ? 'rotate-180' : ''" />
      </button>
      <div v-if="showDocs" class="px-[20px] pb-[16px]">
        <div class="space-y-[8px]">
          <div v-for="doc in docs" :key="doc.name" class="flex items-center gap-[8px]">
            <button class="flex-1 flex items-center justify-between text-[18px] leading-[27px] font-light text-[#171A1F] border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] hover:bg-[#f3f4f6]">
              📄 {{ doc.name }} <ChevronDown class="w-[12px] h-[12px] text-[#6b7280]" />
            </button>
            <select class="text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[5px] px-[8px] py-[7px] text-[#171A1F] outline-none min-w-[100px]">
              <option>{{ doc.category }}</option>
            </select>
            <select class="text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[5px] px-[8px] py-[7px] text-[#171A1F] outline-none min-w-[80px]">
              <option>{{ doc.severity }}</option><option>Minor</option><option>Moderate</option><option>Critical</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Legal Findings -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Legal Findings</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Date</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Voucher No.</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">File Name</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Uploaded By</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in legalFindings" :key="r.voucher" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.date }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.voucher }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.file }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.by }}</td>
            <td class="px-[12px] py-[10px]">
              <div class="flex gap-[6px]">
                <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[13px] h-[13px]" /></button>
                <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[13px] h-[13px]" /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Payment Records -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Payment Records</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Date</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Reference</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Description</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Amount</th>
            <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in paymentRecords" :key="r.ref" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.date }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.ref }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.desc }}</td>
            <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ r.amount }}</td>
            <td class="px-[12px] py-[10px]">
              <div class="flex gap-[6px]">
                <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[13px] h-[13px]" /></button>
                <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[13px] h-[13px]" /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Legal Recommendation -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Legal Recommendation</h2>
      </div>
      <div class="flex flex-col gap-[9px] mb-[16px]">
        <label v-for="opt in [
          { val: 'approve', label: 'Recommend for Approval', desc: 'All legal requirements are met. Recommend the claim for board approval.' },
          { val: 'reject', label: 'Recommend Rejection', desc: 'Legal assessment indicates the claim does not meet the eligibility criteria.' },
          { val: 'further', label: 'Further Investigation Required', desc: 'Additional documentation or investigation is needed before a recommendation can be made.' },
        ]" :key="opt.val"
          class="flex items-start gap-[10px] p-[12px] border rounded-[8px] cursor-pointer transition-colors"
          :class="legalRecommendation === opt.val ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
          <input type="radio" v-model="legalRecommendation" :value="opt.val" class="mt-[1px] accent-[#224e22]" />
          <div>
            <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ opt.label }}</p>
            <p class="text-[16px] leading-[20px] font-light text-[#808080]">{{ opt.desc }}</p>
          </div>
        </label>
      </div>
      <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[6px]">Legal Recommendation Notes</p>
      <textarea rows="4" placeholder="Enter detailed legal notes and reasoning for the recommendation..." class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#171A1F] placeholder-[#9ca3af]"></textarea>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <Save class="w-[15px] h-[15px]" /> Save Draft
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Forward to Board Agenda
      </button>
    </div>
  </main>
</template>
