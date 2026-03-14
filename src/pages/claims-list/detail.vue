<script setup lang="ts">
import { Eye, Download, Upload, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'ClaimsListDetailPage' })

const documents = [
  { name: 'Proof of Ownership', uploadedBy: 'John Smith', date: '15-Jan-2025', status: 'Validated' },
  { name: 'Proof of Ownership', uploadedBy: 'John Smith', date: '15-Jan-2025', status: 'Validated' },
  { name: 'Proof of Ownership', uploadedBy: 'John Smith', date: '15-Jan-2025', status: 'Validated' },
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
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Claim Search</h1>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span class="text-[#A7A6A6]">Dashboard</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#A7A6A6]">Claim Search</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#171A1F]">Claim Reference: CP-00101</span>
      </nav>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Claim Details -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center gap-[10px] mb-[16px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Claim Details</h2>
        </div>
        <div class="grid grid-cols-2 gap-[10px]">
          <div v-for="field in [
            { label: 'Claim Reference:', value: 'CP-00101' },
            { label: 'Docket No.:', value: 'DN10101' },
            { label: 'Claimant Name:', value: 'John Smith' },
            { label: 'Claim Type:', value: 'Structural' },
            { label: 'Property Location:', value: '123 Main St, Marawi', full: true },
            { label: 'Date Filed:', value: 'Jan 15, 2025' },
            { label: 'Current Status:', value: 'Intake – Pending' },
            { label: 'Assigned Unit:', value: 'Record Unit' },
            { label: 'Assigned Officer:', value: 'Maria Lopez' },
          ]" :key="field.label" :class="field.full ? 'col-span-2' : ''">
            <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ field.label }}</p>
            <div class="px-[10px] py-[7px] border border-[#e5e7eb] rounded-[6px] bg-[#f9fafb] mt-[3px]">
              <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Claim Lifecycle -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[16px]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Claim Lifecycle</h2>
          </div>
          <span class="px-[10px] py-[3px] bg-[#ede9fe] text-[#171A1F] text-[16px] leading-[20px] font-normal rounded-full">■ Pending</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#f0f0f0]">
                <th v-for="col in ['Intake', 'GIS Validation', 'Legal Evaluation', 'Pending']" :key="col" class="py-[8px] px-[12px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">{{ col }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-[#f8f9fa]">
                <td class="py-[10px] px-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">15-Jan-2025</td>
                <td class="py-[10px] px-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">Today</td>
                <td class="py-[10px] px-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">Pending</td>
                <td class="py-[10px] px-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Property Information -->
        <div class="mt-[20px]">
          <div class="flex items-center gap-[10px] mb-[14px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Property Information</h2>
          </div>
          <div class="grid grid-cols-2 gap-[8px]">
            <div v-for="field in [
              { label: 'Full Name:', value: 'John Smith' },
              { label: 'ID Type:', value: 'Structural' },
              { label: 'Contact Number:', value: '+63 912 345 6789' },
              { label: 'ID Number:', value: '' },
              { label: 'Email:', value: 'johnsmith@email.com' },
              { label: 'Supporting Identity Document:', value: '' },
              { label: 'Address:', value: '45 Riverside Dr, Marawi' },
              { label: 'Property Address:', value: '123 Main St' },
              { label: 'Barangay / Municipality:', value: 'Marawi' },
              { label: 'Latitude:', value: '8.002457' },
              { label: 'Longitude:', value: '124.289949' },
            ]" :key="field.label">
              <div>
                <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ field.label }}</p>
                <div class="px-[8px] py-[5px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[2px]">
                  <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">{{ field.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documents + Map -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Documents -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
        <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Documents</h2>
          </div>
          <button class="flex items-center gap-[5px] text-[14px] leading-[29px] font-medium text-[#171A1F] border border-[#e5e7eb] rounded-[6px] px-[10px] py-[5px] hover:bg-[#f3f4f6] transition-colors">
            <Upload class="w-[12px] h-[12px]" /> Upload
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
                <th class="px-[16px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Document Name</th>
                <th class="px-[16px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Uploaded By</th>
                <th class="px-[16px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Date Uploaded</th>
                <th class="px-[16px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Status</th>
                <th class="px-[16px] py-[9px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doc in documents" :key="doc.name" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
                <td class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.name }}</td>
                <td class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.uploadedBy }}</td>
                <td class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ doc.date }}</td>
                <td class="px-[16px] py-[10px]">
                  <span class="px-[8px] py-[2px] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]" :class="statusClass(doc.status)">{{ doc.status }}</span>
                </td>
                <td class="px-[16px] py-[10px]">
                  <div class="flex items-center gap-[8px]">
                    <button class="text-[#6b7280] hover:text-[#374151] transition-colors"><Eye class="w-[14px] h-[14px]" /></button>
                    <button class="text-[#6b7280] hover:text-[#374151] transition-colors"><Download class="w-[14px] h-[14px]" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between px-[16px] py-[8px] border-t border-[#f0f0f0]">
          <p class="text-[10px] text-[#9ca3af]">Showing 1 to 5 of 5 entries</p>
          <div class="flex items-center gap-[4px]">
            <button class="w-[22px] h-[22px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronLeft class="w-[11px] h-[11px] text-[#6b7280]" /></button>
            <button class="w-[22px] h-[22px] border border-[#e5e7eb] rounded flex items-center justify-center hover:bg-[#f3f4f6]"><ChevronRight class="w-[11px] h-[11px] text-[#6b7280]" /></button>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
        <div class="flex items-center gap-[10px] px-[20px] py-[14px] border-b border-[#f5f5f5]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Documents</h2>
        </div>
        <div class="p-[20px] h-[220px] bg-[#f0f4f0] flex items-center justify-center rounded-b-[12px]">
          <div class="text-center text-[#9ca3af]">
            <div class="text-[40px] mb-2">📍</div>
            <p class="text-[12px]">Map View</p>
            <p class="text-[11px] text-[#b0b0b0]">Lat: 8.002457 | Lng: 124.289949</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#275227] hover:bg-[#234F23] text-white text-[20px] leading-[35px] font-medium rounded-[4px] transition-colors text-center">
        Request Additional Documents
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[4px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Forward to GIS Validation
      </button>
    </div>
  </main>
</template>
