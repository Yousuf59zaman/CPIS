<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, Trash2, Upload, Eye, Download, ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'OcularInspectionPage' })

const activeTab = ref<'valid' | 'discrepant'>('valid')

const findings = [
  { name: "Driver's License.pdf", by: 'John Smith', date: '15-Jan-2025', status: 'Validated' },
  { name: 'Barangay Certificate.pdf', by: 'John Smith', date: '15-Jan-2025', status: 'Validated' },
  { name: 'Property Photos.cip', by: 'John Smith', date: '15-Jan-2025', status: 'Pending' },
]

function statusClass(s: string) {
  if (s === 'Validated') return 'bg-[#d1fae5]'
  if (s === 'Pending') return 'bg-[#ede9fe]'
  return 'bg-[#f3f4f6]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-start justify-between">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Ocular Inspection</h1>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span class="text-[#A7A6A6]">Dashboard</span><span class="text-[#A7A6A6]">›</span><span class="text-[#A7A6A6]">Ocular Inspection</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#171A1F]">Claim Reference: CP-00101</span>
      </nav>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Claim info card -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">CP-00101</h2>
          <button class="flex items-center gap-[6px] px-[12px] py-[6px] border border-[#e5e7eb] rounded-[6px] text-[16px] leading-[24px] font-medium text-[#171A1F] hover:bg-[#f3f4f6] transition-colors">
            Docket No: 2025-003278 <ChevronDown class="w-[13px] h-[13px]" />
          </button>
        </div>
        <div class="grid grid-cols-2 gap-[10px]">
          <div v-for="field in [
            { label: 'Claimant:', value: 'John Smith' },
            { label: 'Claim Type:', value: 'Structural' },
            { label: 'Date Filed:', value: 'Barangay Lumbac Madaya, Marawi' },
            { label: 'Assigned Unit:', value: 'Ocular Inspection Team' },
            { label: 'Assigned Inspectors:', value: 'Carlos Reyes, Fatima Sadiq', full: true },
          ]" :key="field.label" :class="field.full ? 'col-span-2' : ''">
            <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ field.label }}</p>
            <div class="px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb] mt-[3px]">
              <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Inspection Scheduling -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Inspection Scheduling</h2>
          <span class="px-[10px] py-[4px] bg-[#f3f4f6] text-[#171A1F] text-[16px] leading-[20px] font-normal rounded-full">Inspection schedule</span>
        </div>
        <div class="flex flex-col gap-[10px]">
          <div v-for="field in [
            { label: 'Inspectors:', value: 'Carlos Reyes, Fatima Sadiq' },
            { label: 'Date Scheduled:', value: 'April 09, 2025' },
            { label: 'Time Scheduled:', value: 'April 09, 2025' },
            { label: 'Remarks:', value: 'Coordinate with claimant for access to the property site.' },
          ]" :key="field.label">
            <div class="flex items-start gap-[10px]">
              <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] w-[120px] shrink-0 pt-[8px]">{{ field.label }}</p>
              <div class="flex-1 flex items-center gap-[6px]">
                <div class="flex-1 px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb]">
                  <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
                </div>
                <ChevronDown v-if="field.label !== 'Remarks:'" class="w-[14px] h-[14px] text-[#6b7280] shrink-0" />
              </div>
            </div>
          </div>
          <button class="w-full py-[11px] mt-[6px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[6px]">
            <Trash2 class="w-[14px] h-[14px]" /> Delete Inspection
          </button>
        </div>
      </div>
    </div>

    <!-- Inspection Assessment -->
    <div>
      <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23] mb-[12px]">Inspection Assessment</h2>
      <div class="flex border-b border-[#e5e7eb] mb-[16px]">
        <button
          @click="activeTab = 'valid'"
          class="px-[18px] py-[8px] text-[20px] leading-[30px] font-normal border-b-2 transition-colors"
          :class="activeTab === 'valid' ? 'border-[#224e22] text-[#224e22] bg-[#f0f4f0]' : 'border-transparent text-[#6b7280] hover:text-[#374151]'"
        >Valid</button>
        <button
          @click="activeTab = 'discrepant'"
          class="px-[18px] py-[8px] text-[20px] leading-[30px] font-normal border-b-2 transition-colors"
          :class="activeTab === 'discrepant' ? 'border-[#224e22] text-[#224e22] bg-[#f0f4f0]' : 'border-transparent text-[#6b7280] hover:text-[#374151]'"
        >Discrepant</button>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
        <!-- Findings table -->
        <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
          <div class="flex items-center gap-[10px] px-[20px] py-[14px] border-b border-[#f5f5f5]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h3 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Findings</h3>
          </div>
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
                <th class="px-[16px] py-[9px] w-[36px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></th>
                <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Document Name</th>
                <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Uploaded By</th>
                <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Date</th>
                <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
                <th class="px-[12px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doc in findings" :key="doc.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
                <td class="px-[16px] py-[10px]"><input type="checkbox" class="w-[12px] h-[12px] accent-[#224e22]" /></td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.name }}</td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.by }}</td>
                <td class="px-[12px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.date }}</td>
                <td class="px-[12px] py-[10px]">
                  <span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="statusClass(doc.status)">{{ doc.status }}</span>
                </td>
                <td class="px-[12px] py-[10px]">
                  <div class="flex items-center gap-[6px]">
                    <button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[13px] h-[13px]" /></button>
                    <button class="text-[#6b7280] hover:text-[#374151]"><Download class="w-[13px] h-[13px]" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex items-center justify-between px-[12px] py-[8px] border-t border-[#f0f0f0]">
            <p class="text-[16px] leading-[20px] font-light text-[#808080]">Showing 1 to 5 of 5 entries</p>
            <div class="flex items-center gap-[4px]">
              <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronLeft class="w-[10px] h-[10px] text-[#6b7280]" /></button>
              <button class="w-[20px] h-[20px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronRight class="w-[10px] h-[10px] text-[#6b7280]" /></button>
            </div>
          </div>
        </div>

        <!-- Action Panel -->
        <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
          <div class="flex items-center gap-[10px] mb-[14px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h3 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Action Panel</h3>
          </div>
          <div class="mb-[14px]">
            <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Barangay</label>
            <div class="flex items-center gap-[8px]">
              <div class="flex-1 px-[10px] py-[8px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb] flex items-center justify-between cursor-pointer">
                <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">Barangay</span>
                <ChevronDown class="w-[13px] h-[13px] text-[#6b7280]" />
              </div>
            </div>
          </div>
          <!-- Upload area -->
          <div class="border-2 border-dashed border-[#d1d5db] rounded-[10px] p-[20px] flex flex-col items-center justify-center gap-[8px] bg-[#fafafa]">
            <Upload class="w-[28px] h-[28px] text-[#9ca3af]" />
            <p class="text-[18px] leading-[27px] font-light text-[#232323]">Drag &amp; drop files here to upload or</p>
            <button class="flex items-center gap-[5px] px-[16px] py-[8px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[6px] transition-colors">
              <Upload class="w-[12px] h-[12px]" /> Upload Attachments
            </button>
            <p class="text-[16px] leading-[20px] font-light text-[#808080]">Only PDF and JPEG files are supported. Maximum file size: 10MB.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
