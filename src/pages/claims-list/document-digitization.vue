<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'DocumentDigitizationPage' })

const documents = [
  { name: 'Claim Form', type: '📄', status: 'Normal' },
  { name: 'Proof of Identity', type: '🖼', status: 'High' },
  { name: 'Proof of Ownership', type: '📄', status: 'SLA Risk' },
  { name: 'Map Sketch of Property', type: '🖼', status: 'High' },
  { name: 'Damage Photographs', type: '🖼', status: 'SLA Risk' },
]

function statusClass(s: string) {
  if (s === 'Normal') return 'bg-[#d1fae5]'
  if (s === 'High') return 'bg-[#fce7e7]'
  if (s === 'SLA Risk') return 'bg-[#fed7aa]'
  return 'bg-[#f3f4f6]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-start justify-between">
      <div>
        <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Claim Intake &amp; Document Digitization</h1>
        <p class="text-[16px] leading-[24px] font-light text-[#A7A6A6] mt-[2px]">Claim Reference: CP-00101</p>
      </div>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span class="text-[#A7A6A6]">Dashboard</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#A7A6A6]">Claim Intake</span>
      </nav>
    </div>

    <!-- Claim info strip -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[16px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-[10px]">
        <div v-for="field in [
          { label: 'Claim Reference:', value: 'CP-00101' },
          { label: 'Claimant Name:', value: 'John Smith' },
          { label: 'Claim Type:', value: 'Structural' },
          { label: 'Property Location:', value: '123 Main St, Marawi' },
          { label: 'Current Status:', value: 'In Intake – Missing Documents', wide: true },
        ]" :key="field.label" :class="field.wide ? 'col-span-2' : ''">
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ field.label }}</p>
          <div class="px-[10px] py-[6px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb] mt-[3px]">
            <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Attachment Table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <div class="px-[20px] py-[14px] border-b border-[#f5f5f5]">
        <div class="flex items-center gap-[10px] mb-[4px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Attachment Table</h2>
        </div>
        <p class="text-[16px] leading-[20px] font-light text-[#808080] pl-[14px]">
          Upload the required supporting documents to complete the digitization process. Only PDF and JPEG files are supported. Maximum file size: 10MB.
        </p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[20px] py-[10px] w-[40px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" />
              </th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Document Name</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">File Type</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doc in documents" :key="doc.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
              <td class="px-[20px] py-[12px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" />
              </td>
              <td class="px-[16px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.name }}</td>
              <td class="px-[16px] py-[12px]">
                <span class="text-[18px]">{{ doc.type }}</span>
              </td>
              <td class="px-[16px] py-[12px]">
                <span class="px-[10px] py-[3px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="statusClass(doc.status)">
                  {{ doc.status }}
                </span>
              </td>
              <td class="px-[16px] py-[12px]">
                <span class="px-[12px] py-[3px] bg-[#d1fae5] text-[#1B1F25] rounded-full text-[15px] leading-[22px] font-light flex items-center justify-center h-[23px] cursor-pointer hover:bg-[#a7f3d0] transition-colors">
                  Open
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between px-[20px] py-[10px] border-t border-[#f0f0f0]">
        <p class="text-[16px] leading-[20px] font-light text-[#808080]">Showing 1 to 5 of 5 entries</p>
        <div class="flex items-center gap-[6px]">
          <span class="text-[16px] leading-[20px] font-light text-[#808080]">Page 1 of 12</span>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronLeft class="w-[13px] h-[13px] text-[#6b7280]" /></button>
          <button class="w-[24px] h-[24px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronRight class="w-[13px] h-[13px] text-[#6b7280]" /></button>
        </div>
      </div>
    </div>
  </main>
</template>
