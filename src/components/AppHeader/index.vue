<script setup lang="ts">
import { Menu as MenuIcon } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()
</script>

<template>
  <div
    class="h-[70px] md:h-[80px] lg:h-[90px] 2xl:h-[108px] bg-white border-b-[0.3px] border-[#cdcdcd] w-full shrink-0 flex items-center justify-between px-[16px] md:px-[24px] lg:px-[32px] 2xl:px-[40px] sticky top-0 z-30"
  >
    <!-- Mobile Menu Toggle -->
    <div class="flex items-center lg:hidden">
      <button
        type="button"
        aria-label="Toggle sidebar"
        @click="emit('toggle-sidebar')"
        class="p-2 -ml-2 text-[#224E22] hover:bg-[#F4F7F4] rounded-md transition-colors"
      >
        <MenuIcon class="w-6 h-6" />
      </button>
    </div>

    <div class="flex items-center lg:flex-1"></div>

    <div class="flex items-center gap-[42px] h-full pr-[10px]">
      <button class="relative hover:opacity-80 transition-opacity" style="margin-right: 8px">
        <img
          src="@/assets/icons/topbar/.svg"
          alt="Notifications"
          class="opacity-80"
          style="width: 26px; height: 28px"
        />
        <!-- <span
          class="absolute top-0 -right-px w-[6px] h-[6px] md:w-[7px] md:h-[7px] 2xl:w-[8px] 2xl:h-[8px] bg-[#eA5455] rounded-full border-[1.5px] border-white"
        ></span> -->
      </button>

      <!-- Profile Section: Full on lg+, icon only on smaller screens -->
      <div class="relative flex items-center shrink-0">
        <!-- Mobile-only: circle in flow -->
        <div
          class="lg:hidden relative z-10 w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full bg-white"
        >
          <img
            src="@/assets/icons/topbar/Mask group.svg"
            class="w-[85%] h-[85%] object-contain"
            alt="Profile"
          />
        </div>

        <!-- Expanded Profile Box (lg+): circle overlaps left edge -->
        <div
          class="hidden lg:flex relative bg-[rgba(245,248,245,0.7)] border-[0.2px] border-[#a8aaa9] rounded-[12px] pl-[36px] 2xl:pl-[40px]"
          style="height: 77px; width: 220px"
        >
          <!-- Circle: overlaps left edge -->
          <div
            class="absolute left-[-36px] 2xl:left-[-38px] top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] 2xl:w-[72px] 2xl:h-[72px] flex items-center justify-center cursor-pointer rounded-full bg-white"
          >
            <img
              src="@/assets/icons/topbar/Mask group.svg"
              class="w-[81%] h-[81%] object-contain"
              alt="Profile"
            />
          </div>

          <div class="flex flex-col justify-center h-full w-full" style="gap: 4px">
            <div class="flex flex-col justify-center gap-[1px]">
              <span
                class="font-['Poppins'] font-semibold text-[#0d2f0d] leading-[1.2] whitespace-nowrap"
                style="font-size: 15px"
                >Maria Santos</span
              >
              <span
                class="font-['Poppins'] font-medium text-[#286c45] leading-[1.3] whitespace-nowrap"
                style="font-size: 12px"
                >Record Officer</span
              >
            </div>

            <div class="h-[0.5px] w-full bg-[#cdcdcd] opacity-60"></div>

            <div class="flex flex-col justify-center gap-[3px] min-w-0">
              <span
                class="font-['Poppins'] font-light text-[#8e8e8e] leading-none whitespace-nowrap tracking-wide"
                style="font-size: 9px"
                >Session ID: SEAS:XXXX</span
              >
              <span
                class="font-['Poppins'] font-light text-[#8e8e8e] leading-none whitespace-nowrap tracking-wide"
                style="font-size: 9px"
                >Audit Ref: AUTH-SESSION-XXXXX</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
