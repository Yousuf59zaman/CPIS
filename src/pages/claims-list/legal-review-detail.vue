<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Download, ChevronDown } from 'lucide-vue-next'

defineOptions({ name: 'LegalReviewDetailPage' })

const legalRecommendation = ref<'approve' | 'reject' | 'defer' | null>(null)
const showClaimSummary = ref(true)

const checklist = [
  { text: 'All required identification documents are present and verified', checked: true },
  { text: 'Property registration and title documents have been validated', checked: true },
  { text: 'Damage assessment report is consistent with photographic evidence', checked: false },
  { text: 'Claimant eligibility criteria are met under applicable regulations', checked: false },
]

const docs = [
  { name: "Inspector's Report.pdf", category: 'Inspection Report', action: 'View' },
  { name: 'Title of Property.pdf', category: 'Property Document', action: 'View' },
  { name: 'Barangay Certificate.pdf', category: 'Supporting Docs', action: 'View' },
  { name: 'Damage Photos.zip', category: 'Damage Photo', action: 'View' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Info strip -->
    <div class="flex flex-wrap gap-[20px] pb-[14px] border-b border-[#e5e7eb]">
      <div v-for="field in [
        { label: 'Claim ID', value: 'CP-00101' },
        { label: 'Claimant', value: 'John Smith' },
        { label: 'Status', value: 'Under Legal Review' },
        { label: 'Claim Type', value: 'Structural Damage' },
        { label: 'Assigned Officer', value: 'Atty. Maria Santos' },
      ]" :key="field.label" class="border-l-2 border-[#d97706] pl-[10px]">
        <p class="text-[10px] text-[#9ca3af] uppercase">{{ field.label }}</p>
        <p class="text-[13px] font-semibold text-[#1d4a1d]">{{ field.value }}</p>
      </div>
    </div>

    <!-- Claim Summary & Reference Data (collapsible) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <button @click="showClaimSummary = !showClaimSummary" class="w-full flex items-center justify-between px-[20px] py-[14px] hover:bg-[#fafafa]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Claim Summary &amp; Reference Data</h2>
        </div>
        <ChevronDown class="w-[16px] h-[16px] text-[#6b7280] transition-transform" :class="showClaimSummary ? 'rotate-180' : ''" />
      </button>
      <div v-if="showClaimSummary" class="px-[20px] pb-[16px]">
        <div class="grid grid-cols-2 gap-[10px]">
          <div v-for="f in [
            { label: 'Property Location', value: 'Barangay Lumbac Madaya, Marawi City, Lanao del Sur' },
            { label: 'Inspection Summary', value: 'Structural damage confirmed — second floor collapse, roof failure, cracked foundation.' },
            { label: 'GIS Reference', value: 'GIS-REF-2025-00101 | Lat: 7.9986, Lng: 124.2928' },
            { label: 'Proposed Compensation', value: '₱145,000.00 (Based on damage assessment report)' },
          ]" :key="f.label">
            <div>
              <p class="text-[10px] text-[#6b7280] mb-[4px]">{{ f.label }}</p>
              <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[8px] bg-[#f9fafb]">
                <p class="text-[12px] text-[#374151]">{{ f.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Legal Assessment -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Legal Assessment</h2>
      </div>
      <h3 class="text-[13px] font-semibold text-[#374151] mb-[8px]">Legal Findings &amp; Statutory Analysis</h3>
      <p class="text-[12px] text-[#6b7280] leading-[1.7] mb-[10px]">
        Upon thorough review of the submitted claim documentation, the legal team has conducted a statutory analysis in accordance with 
        Republic Act No. 7160 (Local Government Code) and applicable CPIS guidelines. The claimant, John Smith, has presented 
        evidence of substantial structural damage to the property located in Barangay Lumbac Madaya, Marawi City.
      </p>
      <p class="text-[12px] text-[#6b7280] leading-[1.7]">
        The inspection findings, corroborated by photographic evidence and the inspector's signed report, confirm the extent of damages. 
        The property has been assessed as uninhabitable. The proposed compensation of ₱145,000.00 is consistent with the damage severity 
        under the applicable compensation matrix. The legal assessment concludes that this claim is eligible for board approval.
      </p>
    </div>

    <!-- Compliance Checklist -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Compliance &amp; Verification Checklist</h2>
      </div>
      <div class="space-y-[10px]">
        <label v-for="(item, i) in checklist" :key="i" class="flex items-start gap-[10px]">
          <input type="checkbox" :checked="item.checked" class="w-[14px] h-[14px] mt-[1px] accent-[#224e22]" />
          <span class="text-[12px] text-[#374151]">{{ item.text }}</span>
        </label>
      </div>
    </div>

    <!-- Supporting Documents -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Supporting Documents</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Document Name</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Category</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in docs" :key="d.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ d.name }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ d.category }}</td>
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
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Legal Recommendation</h2>
      </div>
      <div class="flex flex-col gap-[9px] mb-[16px]">
        <label v-for="opt in [
          { val: 'approve', label: 'Recommend for Approval', desc: 'Claim meets all legal and statutory requirements for approval.' },
          { val: 'reject', label: 'Recommend Rejection', desc: 'Claim does not meet eligibility criteria under applicable regulations.' },
          { val: 'defer', label: 'Defer for Further Review', desc: 'Additional documentation or legal analysis is required.' },
        ]" :key="opt.val"
          class="flex items-start gap-[10px] p-[12px] border rounded-[8px] cursor-pointer transition-colors"
          :class="legalRecommendation === opt.val ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
          <input type="radio" v-model="legalRecommendation" :value="opt.val" class="mt-[1px] accent-[#224e22]" />
          <div>
            <p class="text-[12px] font-semibold text-[#171a1f]">{{ opt.label }}</p>
            <p class="text-[11px] text-[#6b7280]">{{ opt.desc }}</p>
          </div>
        </label>
      </div>
      <p class="text-[12px] font-medium text-[#374151] mb-[6px]">Legal Recommendation Notes</p>
      <textarea rows="4" placeholder="Provide detailed legal reasoning and notes for the recommendation..." class="w-full text-[12px] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af]"></textarea>
    </div>
  </main>
</template>
