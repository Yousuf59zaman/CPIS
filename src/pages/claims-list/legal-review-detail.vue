<script setup lang="ts">
import { ref } from 'vue'
import {
  Eye,
  Download,
  ChevronDown,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'

defineOptions({ name: 'LegalReviewDetailPage' })

const showReferenceData = ref(true)
const selectedDecision = ref<'endorse' | 'investigate' | 'defer'>('endorse')

const breadcrumbs = ['Claims List', 'Legal Review', 'Legal Review Detail']

const summaryCards = [
  { label: 'Claim ID', value: 'CPIS-2026-001' },
  { label: 'Claimant', value: 'John Doe' },
  { label: 'Status', value: 'Pending', isStatus: true },
  { label: 'Claim Type', value: 'Property Damage' },
  { label: 'Assigned Officer', value: 'A. Rahman' },
]

const referenceDetails = [
  {
    label: 'Property Location',
    value: 'Barangay Lumbac Madaya, Marawi City, Lanao del Sur',
  },
  {
    label: 'Inspection Summary',
    value: 'Structural damage confirmed. Second floor collapse, roof failure, cracked foundation.',
  },
  {
    label: 'GIS Reference',
    value: 'GIS-REF-2025-00101 | Lat: 7.9986, Lng: 124.2928',
  },
  {
    label: 'Proposed Compensation',
    value: 'PHP 145,000.00 (Based on damage assessment report)',
  },
]

const legalAssessmentText =
  "Initial review of Title Deed Parcel 402 indicates valid ownership held by John Doe as of January 2026. The property damage falls within the statutory definitions of 'Natural Disaster Compensation' under Act 42 (2022). No prior claims registered for this specific plot. GIS reference alignment confirmed. Boundary disputes are not present in the registry for this location."

const complianceItems = [
  { text: 'Ownership Documents Verified', checked: true },
  { text: 'Supporting Documents Complete', checked: false },
  { text: 'Eligibility Criteria Met', checked: true },
  { text: 'No Conflict of Interest Identified', checked: true },
]

const documentRows = [
  {
    name: 'Land Title Deed - Parcel 402',
    category: 'Ownership',
    uploadedBy: 'S. Kassim',
    date: '2026-01-12',
  },
  {
    name: 'Property Appraisal Report v2',
    category: 'Valuation',
    uploadedBy: 'M. Chen',
    date: '2026-01-14',
  },
  {
    name: 'GIS Boundary Survey Map',
    category: 'Technical',
    uploadedBy: 'GIS Dept',
    date: '2026-01-10',
  },
  {
    name: 'Structural Integrity Cert',
    category: 'Safety',
    uploadedBy: 'Eng. Tan',
    date: '2026-01-15',
  },
  {
    name: 'Claimant ID & Proof of Address',
    category: 'KYC',
    uploadedBy: 'John Doe',
    date: '2026-01-08',
  },
]

const decisionOptions = [
  {
    value: 'endorse',
    title: 'Endorse for Legal Evaluation',
    description: 'Move this case forward for board deliberation and final decision.',
  },
  {
    value: 'investigate',
    title: 'Require Further Investigation',
    description: 'Need additional information for accurate assessment.',
  },
  {
    value: 'defer',
    title: 'Defer Decision',
    description: 'Hold until additional documents are submitted and verified.',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h1 class="text-[24px] md:text-[28px] font-semibold text-[#171a1f]">Legal Review</h1>
      <div class="flex flex-wrap items-center gap-[10px] text-[16px] leading-[20px] font-light text-[#808080]">
        <div class="flex items-center gap-[6px]">
          <span v-for="(crumb, i) in breadcrumbs" :key="crumb" class="flex items-center gap-[6px]">
            <span>{{ crumb }}</span>
            <ChevronRight v-if="i < breadcrumbs.length - 1" class="w-[14px] h-[14px] text-[#9ca3af]" />
          </span>
        </div>
        <span class="hidden sm:inline-block h-[14px] w-[1px] bg-[#e5e7eb]"></span>
        <span class="text-[#171a1f]">Claim Reference: MCB-2025-00123</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[12px]">
      <div v-for="card in summaryCards" :key="card.label"
        class="bg-white border border-[#f2f2f2] rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[16px]">
        <div class="flex items-start gap-[12px]">
          <div class="w-[5px] bg-[#234f23] rounded-[5px] self-stretch"></div>
          <div class="flex-1">
            <p class="text-[16px] leading-[20px] font-light text-[#808080]">{{ card.label }}</p>
            <div v-if="card.isStatus" class="mt-[8px]">
              <span
                class="inline-flex items-center px-[14px] h-[23px] rounded-[14px] bg-[#eef4ee] text-[#1B1F25] text-[15px] leading-[22px] font-light">
                {{ card.value }}
              </span>
            </div>
            <p v-else class="text-[18px] font-semibold text-[#171a1f] mt-[6px]">
              {{ card.value }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <button type="button" class="w-full flex items-center justify-between px-[20px] py-[16px]"
        @click="showReferenceData = !showReferenceData">
        <div class="flex items-center gap-[10px]">
          <h2 class="text-[22px] md:text-[24px] font-semibold text-[#171a1f]">Claim Summary &amp; Reference Data</h2>
        </div>
        <ChevronDown class="w-[18px] h-[18px] text-[#6b7280] transition-transform"
          :class="showReferenceData ? 'rotate-180' : ''" />
      </button>
      <div v-if="showReferenceData" class="px-[20px] pb-[20px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          <div v-for="detail in referenceDetails" :key="detail.label">
            <p class="text-[16px] leading-[20px] font-light text-[#808080] mb-[6px]">{{ detail.label }}</p>
            <div class="border border-[#e5e7eb] rounded-[8px] px-[14px] py-[12px] bg-[#f9fafb]">
              <p class="text-[18px] leading-[27px] font-light text-[#171A1F] leading-[1.5]">{{ detail.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <div class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
        <div class="flex items-start gap-[12px]">
          <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <div>
            <h2 class="text-[26px] md:text-[30px] font-medium text-[#171a1f]">Legal Assessment</h2>
            <p class="text-[18px] text-[#171a1f] font-medium mt-[8px]">Legal Findings &amp; Statutory Analysis</p>
          </div>
        </div>
        <div
          class="mt-[16px] bg-white border border-[#ededed] rounded-[4px] p-[14px] text-[18px] leading-[27px] font-light text-[#171A1F] leading-[1.7] shadow-[inset_1px_1px_1px_0px_rgba(0,0,0,0.08)]">
          {{ legalAssessmentText }}
        </div>
      </div>

      <div class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
        <div class="flex items-start gap-[12px]">
          <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <h2 class="text-[26px] md:text-[30px] font-medium text-[#171a1f]">Compliance &amp; Verification Checklist</h2>
        </div>
        <div class="mt-[20px] space-y-[16px]">
          <label v-for="item in complianceItems" :key="item.text"
            class="flex items-start gap-[12px] text-[16px] text-[#171a1f]">
            <input type="checkbox" :checked="item.checked" class="w-[16px] h-[16px] accent-[#7e8084]" />
            <span>{{ item.text }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="flex flex-wrap items-center justify-between gap-[12px] px-[20px] pt-[20px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
          <h2 class="text-[18px] md:text-[20px] font-semibold text-[#171a1f]">Supporting Documents</h2>
        </div>
        <div class="flex flex-wrap items-center gap-[12px]">
          <div class="relative">
            <Search class="absolute left-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#9ca3af]" />
            <input type="text" placeholder="search files..."
              class="w-[200px] sm:w-[240px] h-[30px] rounded-[16px] border border-[#e5e7eb] pl-[36px] pr-[12px] text-[18px] leading-[27px] font-light text-[#171A1F] outline-none bg-white" />
          </div>
          <button type="button"
            class="h-[30px] px-[12px] rounded-[16px] border border-[#e5e7eb] text-[18px] leading-[27px] font-light text-[#171A1F] flex items-center gap-[6px]">
            <SlidersHorizontal class="w-[16px] h-[16px] text-[#6b7280]" />
            Category
          </button>
        </div>
      </div>

      <div class="px-[20px] pb-[10px] pt-[12px]">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[760px]">
            <thead>
              <tr class="bg-[#f6f7f6] border-y border-[#ececec]">
                <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                  Document Name
                </th>
                <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                  Category
                </th>
                <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                  Uploaded By
                </th>
                <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                  Date
                </th>
                <th class="px-[12px] py-[10px] text-left text-[18px] leading-[27px] font-normal text-[#202224] uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in documentRows" :key="row.name" class="border-b border-[#f0f0f0] hover:bg-[#fafafa]">
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#171A1F]">
                  <div class="flex items-center gap-[10px]">
                    <input type="checkbox" class="w-[14px] h-[14px] accent-[#234f23]" />
                    <span>{{ row.name }}</span>
                  </div>
                </td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#171A1F]">
                  <span
                    class="inline-flex items-center px-[10px] h-[23px] rounded-[999px] border border-[#e5e7eb] text-[#1B1F25] text-[15px] leading-[22px] font-light">
                    {{ row.category }}
                  </span>
                </td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#171A1F]">{{ row.uploadedBy }}</td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-light text-[#171A1F]">{{ row.date }}</td>
                <td class="px-[12px] py-[12px]">
                  <div class="flex items-center gap-[10px]">
                    <button
                      class="w-[26px] h-[26px] border border-[#e5e7eb] rounded-full flex items-center justify-center text-[#6b7280]"
                      type="button">
                      <Eye class="w-[14px] h-[14px]" />
                    </button>
                    <button
                      class="w-[26px] h-[26px] border border-[#e5e7eb] rounded-full flex items-center justify-center text-[#6b7280]"
                      type="button">
                      <Download class="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="flex flex-wrap items-center justify-between gap-[12px] px-[20px] pb-[18px] text-[16px] leading-[20px] font-light text-[#808080]">
        <span>Showing 1 to 5 of 5 entries</span>
        <div class="flex items-center gap-[12px]">
          <span>Page 1 of 12</span>
          <div class="flex items-center gap-[8px]">
            <button
              class="w-[26px] h-[26px] flex items-center justify-center rounded-[6px] border border-[#e5e7eb] text-[#6b7280]"
              type="button">
              <ChevronLeft class="w-[16px] h-[16px]" />
            </button>
            <button
              class="w-[26px] h-[26px] flex items-center justify-center rounded-[6px] border border-[#e5e7eb] text-[#6b7280]"
              type="button">
              <ChevronRight class="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-[10px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)] p-[20px]">
      <div class="flex items-start gap-[12px]">
        <div class="w-[5px] h-[30px] bg-[#234f23] rounded-br-[5px] rounded-tr-[5px]"></div>
        <h2 class="text-[24px] md:text-[28px] font-semibold text-[#171a1f]">Decision and Endorsement Panel</h2>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[460px_1fr] gap-[20px] mt-[18px]">
        <div class="space-y-[18px]">
          <label v-for="option in decisionOptions" :key="option.value"
            class="flex items-start gap-[12px] cursor-pointer">
            <input type="radio" name="decision" :value="option.value" v-model="selectedDecision"
              class="mt-[6px] w-[16px] h-[16px] accent-[#234f23]" />
            <div>
              <p class="text-[16px] font-semibold text-[#171a1f]">{{ option.title }}</p>
              <p class="text-[16px] leading-[20px] font-light text-[#808080]">{{ option.description }}</p>
            </div>
          </label>
        </div>

        <div>
          <p class="text-[16px] font-semibold text-[#171a1f] mb-[8px]">Remarks</p>
          <textarea rows="5" placeholder="Specify what further information or investigation is needed. Comment."
            class="w-full h-[129px] border border-[#e5e7eb] rounded-[8px] px-[14px] py-[12px] text-[18px] leading-[27px] font-light text-[#171A1F] outline-none resize-none"></textarea>
        </div>
      </div>
    </section>
  </main>
</template>


