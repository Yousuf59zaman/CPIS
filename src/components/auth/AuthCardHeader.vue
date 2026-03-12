<script setup lang="ts">
import logoWorkflow from '@/assets/logo_workflow.svg'
</script>

<template>
  <div class="px-[40px] pt-[30px] pb-[22px] flex items-center justify-center gap-[14px] relative overflow-hidden">
    <img :src="logoWorkflow" alt="CPIS" class="w-[58px] h-[58px] object-contain shrink-0" />
    <div>
      <p class="text-[#d9a047] text-[19px] font-semibold leading-[1.15] tracking-[-0.3px]">Claims Processing</p>
      <p class="text-[#2d632d] text-[17.5px] font-medium leading-[1.15] tracking-[-0.2px]">Information System</p>
      <p class="text-[#767676] text-[10.5px] font-light tracking-[0.7px] mt-[4px]">Marawi Compensation Board</p>
    </div>
    <!-- WORKFLOW rotated gradient text -->
    <div
      class="absolute right-[16px] top-[16px] bottom-[16px] flex items-center justify-center w-[14px] pointer-events-none"
    >
      <span
        class="-rotate-90 whitespace-nowrap text-[7.5px] font-semibold tracking-[1.2px] uppercase bg-gradient-to-l from-[#2407ff] to-[#f30f0b] bg-clip-text text-transparent leading-none"
      >
        WORKFLOW
      </span>
    </div>
    <!-- Ghost circle decoration -->
    <div
      class="absolute right-[30px] top-[-10px] w-[80px] h-[80px] opacity-[0.04] pointer-events-none overflow-hidden rounded-full border-[8px] border-dashed border-gray-500 rotate-12"
    ></div>
  </div>
</template>
