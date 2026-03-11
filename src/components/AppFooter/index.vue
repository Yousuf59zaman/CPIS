<template>
  <div
    class="h-auto md:h-[86px] py-4 md:py-0 bg-white border-t-[0.3px] border-[#cdcdcd] w-full shrink-0 flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[5vw] xl:gap-[8vw] px-4 z-10 text-center">
    <div class="flex items-center gap-[8px] xl:gap-[12px]">
      <div class="flex items-center justify-center">
        <img src="@/assets/icons/footer/lock.svg" class="w-[18px] h-[18px] opacity-80" />
      </div>
      <span
        class="text-[#171A1F] text-[18px] font-['Poppins'] font-light capitalize whitespace-normal md:whitespace-nowrap">Encrypted
        Connection (TLS)</span>
    </div>

    <div class="hidden md:block h-[18px] border-l border-[#cdcdcd] opacity-80"></div>

    <div class="flex items-center gap-[8px] xl:gap-[12px]">
      <div class="flex items-center justify-center">
        <img src="@/assets/icons/footer/clock.svg" class="w-[18px] h-[18px] opacity-80" />
      </div>
      <span
        class="text-[#171A1F] text-[18px] font-['Poppins'] font-light capitalize whitespace-normal md:whitespace-nowrap">Idle
        Timeout: 10 Minutes</span>
    </div>

    <div class="hidden md:block h-[18px] border-l border-[#cdcdcd] opacity-80"></div>

    <div class="flex items-center gap-[8px] xl:gap-[12px]">
      <div class="flex items-center justify-center">
        <img src="@/assets/icons/footer/shield-alert.svg" class="w-[18px] h-[18px] opacity-80" />
      </div>
      <span
        class="text-[#171A1F] text-[18px] font-['Poppins'] font-light capitalize whitespace-normal md:whitespace-nowrap">5
        Failed Attempts Will Lock Account</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
