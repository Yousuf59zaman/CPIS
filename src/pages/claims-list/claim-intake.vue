<script setup lang="ts">
import { Upload, Trash2, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-vue-next'

defineOptions({ name: 'ClaimIntakePage' })

const uploadedFiles = [
  { name: 'Claim_Form.pdf', type: 'pdf', date: 'April 23, 2024', by: 'Jane Doe' },
  { name: 'John_Smith_ID.jpg', type: 'image', date: 'April 23, 2024', by: 'Jane Doe' },
  { name: 'Claim Form', type: 'pdf', date: 'April 23, 2024', by: 'Jane Doe' },
  { name: 'Claim Form', type: 'image', date: 'April 23, 2024', by: 'Jane Doe' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Claim Intake</h1>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span class="text-[#A7A6A6]">Dashboard</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#A7A6A6]">Claim Intake</span>
      </nav>
    </div>

    <!-- Upload area -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[16px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Claim Reference: CP-00101</h2>
      </div>

      <!-- Drop zone -->
      <div class="border-2 border-dashed border-[#d1d5db] rounded-[10px] p-[32px] flex flex-col items-center justify-center gap-[12px] bg-[#fafafa] hover:bg-[#f3f4f6] transition-colors cursor-pointer">
        <div class="text-[40px] text-[#9ca3af]">
          <Upload class="w-[40px] h-[40px] text-[#9ca3af]" />
        </div>
        <p class="text-[18px] leading-[27px] font-light text-[#232323]">Drag & drop files here to upload or</p>
        <button class="px-[20px] py-[9px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors">
          Browse Files
        </button>
        <p class="text-[16px] leading-[20px] font-light text-[#808080]">Only PDF and JPEG files are supported. Maximum file size: 10MB.</p>
      </div>
    </div>

    <!-- Submit button -->
    <button class="w-full py-[13px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors">
      Submit Documents
    </button>

    <!-- Uploaded Files table -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
      <div class="flex items-center justify-between px-[20px] py-[14px] border-b border-[#f5f5f5]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Uploaded Files</h2>
        </div>
        <MoreVertical class="w-[18px] h-[18px] text-[#9ca3af] cursor-pointer" />
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
              <th class="px-[20px] py-[10px] w-[40px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" />
              </th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">File Name</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">File Type</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Upload Date</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Uploaded By</th>
              <th class="px-[16px] py-[10px] text-[18px] leading-[27px] font-normal text-[#202224] uppercase text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in uploadedFiles" :key="file.name + file.date" class="border-b border-[#f8f9fa] hover:bg-[#fafafa] transition-colors">
              <td class="px-[20px] py-[12px]">
                <input type="checkbox" class="w-[13px] h-[13px] rounded border-[#d1d5db] accent-[#224e22]" />
              </td>
              <td class="px-[16px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ file.name }}</td>
              <td class="px-[16px] py-[12px]">
                <div class="w-[28px] h-[28px] bg-[#f3f4f6] rounded flex items-center justify-center text-[10px] text-[#6b7280] font-medium uppercase">
                  {{ file.type === 'pdf' ? '📄' : '🖼' }}
                </div>
              </td>
              <td class="px-[16px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ file.date }}</td>
              <td class="px-[16px] py-[12px] text-[18px] leading-[27px] font-normal text-[#202224] opacity-80">{{ file.by }}</td>
              <td class="px-[16px] py-[12px]">
                <div class="flex items-center gap-[6px]">
                  <span class="flex items-center gap-[4px] px-[10px] py-[3px] bg-[#d1fae5] text-[#1B1F25] rounded-full text-[15px] leading-[22px] font-light h-[23px]">
                    ✓ Uploaded
                  </span>
                  <button class="flex items-center gap-[4px] px-[10px] py-[3px] bg-[#fde8e8] text-[#1B1F25] rounded-full text-[15px] leading-[22px] font-light h-[23px] hover:bg-[#fbd0d0] transition-colors">
                    <Trash2 class="w-[10px] h-[10px]" /> Delete
                  </button>
                </div>
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
