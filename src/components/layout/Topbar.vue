<template>
  <div
    class="h-[108px] bg-white border-b-[0.3px] border-[#cdcdcd] w-full shrink-0 flex items-center justify-between px-[40px]"
  >
    <div class="flex items-center">
      <button class="text-[#202224] hover:text-gray-700 opacity-90 transition-colors">
        <MenuIcon class="w-[30px] h-[30px]" stroke-width="2" />
      </button>
    </div>

    <div class="flex items-center gap-[35px] h-full pr-[10px]">
      <button class="relative hover:opacity-80 transition-opacity">
        <img
          src="@/assets/icons/topbar/bell.svg"
          alt="Notifications"
          class="w-[24px] h-[26px] opacity-80"
        />
        <span
          class="absolute top-0 -right-px w-[8px] h-[8px] bg-[#eA5455] rounded-full border-[1.5px] border-white"
        ></span>
      </button>

      <div class="relative flex items-center shrink-0 w-[240px]">
        <!-- Circular layered profile picture overlapping left edge -->
        <div class="absolute left-[3px] z-10 w-[54px] h-[54px] flex items-center justify-center">
          <img
            src="@/assets/icons/topbar/Ellipse 2858.svg"
            class="absolute w-full h-full object-contain"
          />
          <img
            src="@/assets/icons/topbar/profile_pic.svg"
            class="absolute w-[50%] h-[50%] object-contain mb-[4px]"
          />
        </div>

        <div
          class="flex items-center bg-[rgba(245,248,245,0.7)] border-[0.2px] border-[#a8aaa9] rounded-[6px] w-[213px] h-[77px] ml-[30px] pl-[34px] pr-[12px] gap-[12px]"
        >
          <div class="flex flex-col justify-center gap-[2px]">
            <span
              class="font-['Poppins'] font-medium text-[#0d2f0d] text-[15px] leading-[1.2] whitespace-nowrap tracking-tight"
              >Maria Santos</span
            >
            <span
              class="font-['Poppins'] font-light text-[#286c45] text-[12px] leading-[1.2] whitespace-nowrap"
              >Record Officer</span
            >
          </div>

          <div class="h-[34px] border-l-[0.5px] border-[#cdcdcd] mx-[2px] opacity-80"></div>

          <div class="flex flex-col justify-center gap-[4px] mt-px">
            <span
              class="font-['Poppins'] font-light text-[#8e8e8e] text-[9.5px] leading-none whitespace-nowrap tracking-wide"
              >Session ID: SEAS:XXXX</span
            >
            <span
              class="font-['Poppins'] font-light text-[#8e8e8e] text-[9.5px] leading-none whitespace-nowrap tracking-wide"
              >Audit Ref: AUTH-SESSION-XXXXX</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu as MenuIcon } from 'lucide-vue-next'
</script>
