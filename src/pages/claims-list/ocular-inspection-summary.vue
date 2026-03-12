<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Download, Upload, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'OcularInspectionSummaryPage' })

const activeTab = ref<'valid' | 'discrepant'>('valid')

const attachments = [
  { name: "Driver's License.pdf", by: 'John Smith', date: '15-Jan-2025', category: 'Inspection Report' },
  { name: 'Barangay Certificate.pdf', by: 'John Smith', date: '15-Jan-2025', category: 'Damage Photo' },
  { name: 'Property Photos.cip', by: 'John Smith', date: '15-Jan-2025', category: 'Damage Photo' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header -->
    <div class="flex items-start justify-between">
      <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">Ocular Inspection</h1>
      <nav class="text-[12px] text-[#9ca3af] flex items-center gap-[6px]">
        <span>Dashboard</span><span>›</span><span>Ocular Inspection</span><span>›</span>
        <span class="text-[#374151] font-medium">Claim Reference: CP-00101</span>
      </nav>
    </div>

    <h2 class="text-[18px] font-medium text-[#374151]">Claim Summary</h2>

    <!-- Claim + Assessment side by side -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Claim info -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h3 class="text-[16px] font-semibold text-[#171a1f]">CP-00101</h3>
          <button class="flex items-center gap-[6px] px-[12px] py-[5px] border border-[#e5e7eb] rounded-[6px] text-[11px] text-[#374151] hover:bg-[#f3f4f6]">
            Docket No: 2025-003278 ▾
          </button>
        </div>
        <div class="grid grid-cols-2 gap-[8px]">
          <div v-for="field in [
            { label: 'Claimant:', value: 'John Smith' },
            { label: 'Claim Type:', value: 'Structural' },
            { label: 'Date Filed:', value: 'Barangay Lumbac Madaya, Marawi' },
            { label: 'Assigned Unit:', value: 'Ocular Inspection Team' },
            { label: 'Assigned Inspectors:', value: 'Carlos Reyes, Fatima Sadiq', full: true },
          ]" :key="field.label" :class="field.full ? 'col-span-2' : ''">
            <p class="text-[10px] text-[#6b7280]">{{ field.label }}</p>
            <div class="px-[9px] py-[6px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[2px]">
              <span class="text-[11px] text-[#374151]">{{ field.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Inspection Assessment -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h3 class="text-[16px] font-semibold text-[#171a1f]">Inspection Assessment</h3>
          <span class="px-[10px] py-[3px] bg-[#d1fae5] text-[#065f46] text-[11px] font-medium rounded-full">Completed</span>
        </div>
        <div class="flex border-b border-[#e5e7eb] mb-[12px]">
          <button @click="activeTab = 'valid'" class="px-[14px] py-[7px] text-[12px] font-medium border-b-2 transition-colors" :class="activeTab === 'valid' ? 'border-[#224e22] text-[#224e22] bg-[#f0f4f0]' : 'border-transparent text-[#6b7280]'">Valid</button>
          <button @click="activeTab = 'discrepant'" class="px-[14px] py-[7px] text-[12px] font-medium border-b-2 transition-colors" :class="activeTab === 'discrepant' ? 'border-[#224e22] text-[#224e22]' : 'border-transparent text-[#6b7280]'">Discrepant</button>
        </div>
        <div>
          <p class="text-[12px] font-semibold text-[#374151] mb-[8px]">Findings</p>
          <ul class="space-y-[6px] text-[12px] text-[#6b7280]">
            <li class="flex items-start gap-[6px]"><span class="text-[#374151]">•</span> Significant structural damage observed on the second floor.</li>
            <li class="flex items-start gap-[6px]"><span class="text-[#374151]">•</span> Cracks in the walls and ceilings.</li>
            <li class="flex items-start gap-[6px]"><span class="text-[#374151]">•</span> One collapsed section of the roof.</li>
            <li class="flex items-start gap-[6px]"><span class="text-[#374151]">•</span> Property deemed uninhabitable in its current condition.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Inspection Assessment tabs (below) -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <div class="flex border-b border-[#e5e7eb] px-[20px] pt-[14px]">
        <h2 class="text-[16px] font-semibold text-[#171a1f] mb-[12px] mr-[24px]">Inspection Assessment</h2>
      </div>
      <div class="flex px-[20px] border-b border-[#e5e7eb]">
        <button @click="activeTab = 'valid'" class="px-[14px] py-[8px] text-[12px] font-medium border-b-2 transition-colors" :class="activeTab === 'valid' ? 'border-[#224e22] text-[#224e22] bg-[#f0f4f0]' : 'border-transparent text-[#6b7280]'">Valid</button>
        <button @click="activeTab = 'discrepant'" class="px-[14px] py-[8px] text-[12px] font-medium border-b-2 transition-colors" :class="activeTab === 'discrepant' ? 'border-[#224e22] text-[#224e22]' : 'border-transparent text-[#6b7280]'">Discrepant</button>
      </div>

      <!-- Attachments table -->
      <div class="px-[20px] py-[14px]">
        <div class="flex items-center justify-between mb-[12px]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h3 class="text-[15px] font-semibold text-[#171a1f]">Attachments</h3>
          </div>
          <button class="flex items-center gap-[5px] text-[12px] text-[#374151] border border-[#e5e7eb] rounded-[6px] px-[10px] py-[5px] hover:bg-[#f3f4f6]">
            <Upload class="w-[12px] h-[12px]" /> + Upload Attachment
          </button>
        </div>
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[12px] py-[9px] w-[36px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Document Name</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Uploaded By</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Date Uploaded</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Category</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Status</th>
              <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a in attachments" :key="a.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
              <td class="px-[12px] py-[10px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.name }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.by }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.date }}</td>
              <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ a.category }}</td>
              <td class="px-[12px] py-[10px]"><span class="text-[#16a34a]">✓</span></td>
              <td class="px-[12px] py-[10px]">
                <div class="flex gap-[6px]">
                  <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[13px] h-[13px]" /></button>
                  <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[13px] h-[13px]" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-between mt-[8px]">
          <p class="text-[10px] text-[#9ca3af]">Showing 1 to 5 of 5 entries</p>
          <div class="flex items-center gap-[4px]">
            <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronLeft class="w-[10px] h-[10px] text-[#6b7280]" /></button>
            <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronRight class="w-[10px] h-[10px] text-[#6b7280]" /></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Panel upload -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <h3 class="text-[15px] font-semibold text-[#171a1f] mb-[14px] text-center">Action Panel</h3>
      <div class="border-2 border-dashed border-[#d1d5db] rounded-[10px] p-[24px] flex flex-col items-center gap-[8px] bg-[#fafafa]">
        <Upload class="w-[28px] h-[28px] text-[#9ca3af]" />
        <p class="text-[12px] text-[#6b7280]">Drag &amp; drop files here to upload or</p>
        <button class="flex items-center gap-[5px] px-[16px] py-[8px] bg-[#d97706] hover:bg-[#b45309] text-white text-[12px] font-medium rounded-[6px] transition-colors">
          <Upload class="w-[12px] h-[12px]" /> Upload Attachments
        </button>
        <p class="text-[10px] text-[#9ca3af]">Only PDF and JPEG files are supported. Maximum file size: 10MB.</p>
      </div>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
        Request Additional Documents
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Forward to Legal Evaluation
      </button>
    </div>
  </main>
</template>
