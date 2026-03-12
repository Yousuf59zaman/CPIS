<script setup lang="ts">
import bgLogin from '@/assets/images/bg_login.png'
import { Lock as LockIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-white font-['Poppins'] flex flex-col relative overflow-x-hidden">
    <!-- Background image strip -->
    <div
      class="absolute top-[24px] left-[24px] right-[24px] h-[340px] rounded-[15px] overflow-hidden pointer-events-none z-0"
    >
      <img :src="bgLogin" alt="" class="absolute inset-0 w-full h-full object-cover" />
      <div
        class="absolute inset-0 rounded-[15px]"
        style="background: linear-gradient(179deg, rgba(12,20,3,0.4) 35%, rgba(102,102,102,0.4) 185%)"
      ></div>
    </div>

    <!-- Page content slot -->
    <div class="relative z-10 flex-1 flex flex-col">
      <slot />
    </div>

    <!-- Footer security bar -->
    <div class="relative z-10 bg-white border-t border-[#cdcdcd]">
      <div class="flex items-center justify-center py-[16px] px-6 gap-[60px]">
        <div class="flex items-center gap-[9px] opacity-80">
          <LockIcon class="w-[14px] h-[14px] text-[#171a1f]" />
          <span class="text-[13px] text-[#171a1f] font-light capitalize">Encrypted connection (TLS)</span>
        </div>
        <div class="h-[18px] border-l border-[#cdcdcd] opacity-80"></div>
        <div class="flex items-center gap-[9px] opacity-80">
          <span class="text-[13px] text-[#171a1f] font-light capitalize">Idle timeout: 10 minutes</span>
        </div>
        <div class="h-[18px] border-l border-[#cdcdcd] opacity-80"></div>
        <div class="flex items-center gap-[9px] opacity-80">
          <span class="text-[13px] text-[#171a1f] font-light capitalize">5 failed attempts will lock account</span>
        </div>
      </div>
    </div>
  </div>
</template>
