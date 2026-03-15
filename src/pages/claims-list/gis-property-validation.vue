<script setup lang="ts">
import { MapPin, ArrowRight, Save } from 'lucide-vue-next'

defineOptions({ name: 'GisPropertyValidationPage' })

const coords = { lat: '8.002457', lng: '124.289949', area: '80' }
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-start justify-between">
      <div>
        <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">GIS &amp; Property Validation</h1>
        <p class="text-[16px] leading-[24px] font-light text-[#A7A6A6] mt-[2px]">Claim Reference: CP-00101</p>
      </div>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span class="text-[#A7A6A6]">GIS &amp; Property Validation</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#A7A6A6]">Claim Summary Details</span><span class="text-[#A7A6A6]">›</span>
        <span class="text-[#171A1F]">Claim Reference: MCB-2025-00123</span>
      </nav>
    </div>

    <!-- Info cards -->
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-[12px]">
      <div v-for="card in [
        { label: 'Claim Reference ID', value: 'MCB-2025-0121' },
        { label: 'Claimant Name', value: 'John Smith' },
        { label: 'Claim Type', value: 'Structural' },
        { label: 'Property Location', value: '123 Main St, Marawi' },
      ]" :key="card.label" class="bg-white rounded-[10px] border border-[#e5e7eb] border-l-4 border-l-[#224e22] px-[14px] py-[12px] shadow-sm">
        <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ card.label }}</p>
        <p class="text-[18px] leading-[27px] font-light text-[#171A1F] mt-[4px]">{{ card.value }}</p>
      </div>
    </div>

    <!-- Main content: coords + map -->
    <div class="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-[16px]">
      <!-- Property Coordinates -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center gap-[10px] mb-[18px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Property Coordinates</h2>
        </div>

        <div class="flex flex-col gap-[14px]">
          <div>
            <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Latitude:</label>
            <input :value="coords.lat" type="text" class="w-full px-[12px] py-[9px] border border-[#e5e7eb] rounded-[8px] text-[18px] leading-[27px] font-light bg-[#f9fafb] text-[#171A1F] focus:outline-none focus:border-[#224e22]" />
          </div>
          <div>
            <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Longitude:</label>
            <div class="flex gap-[8px]">
              <input :value="coords.lng" type="text" class="flex-1 px-[12px] py-[9px] border border-[#e5e7eb] rounded-[8px] text-[18px] leading-[27px] font-light bg-[#f9fafb] text-[#171A1F] focus:outline-none focus:border-[#224e22]" />
              <button class="px-[14px] py-[9px] bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[16px] leading-[24px] font-medium text-[#171A1F] rounded-[8px] border border-[#e5e7eb] flex items-center gap-[5px] transition-colors">
                <MapPin class="w-[12px] h-[12px]" /> Pin on Map
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[5px]">Land Area (sqm):</label>
            <input :value="coords.area" type="text" class="w-full px-[12px] py-[9px] border border-[#e5e7eb] rounded-[8px] text-[18px] leading-[27px] font-light bg-[#f9fafb] text-[#171A1F] focus:outline-none focus:border-[#224e22]" />
          </div>
          <p class="text-[16px] leading-[20px] font-light text-[#808080]">Please validate and update property coordinates using the map.</p>

          <div class="flex flex-col gap-[10px] mt-[4px]">
            <button class="w-full py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
              <Save class="w-[15px] h-[15px]" /> Save Coordinates
            </button>
            <button class="w-full py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
              <ArrowRight class="w-[15px] h-[15px]" /> Forward for Ocular Inspection
            </button>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm overflow-hidden">
        <div class="h-full min-h-[320px] bg-[#e8f0e8] flex items-center justify-center">
          <div class="text-center text-[#6b7280]">
            <div class="text-[60px] mb-3">🗺️</div>
            <p class="text-[18px] leading-[27px] font-normal text-[#202224]">Property Map View</p>
            <p class="text-[16px] leading-[20px] font-light text-[#808080] mt-[4px]">Lat: 8.002457 | Lng: 124.289949</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
