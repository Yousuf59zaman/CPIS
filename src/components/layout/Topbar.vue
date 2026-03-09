<template>
  <div
    class="h-[70px] md:h-[80px] lg:h-[90px] 2xl:h-[108px] bg-white border-b-[0.3px] border-[#cdcdcd] w-full shrink-0 flex items-center justify-between px-[16px] md:px-[24px] lg:px-[32px] 2xl:px-[40px] sticky top-0 z-30"
  >
    <!-- Logo area replacement or simply an empty flex-1 space if there wasn't anything else besides the mobile hamburger -->
    <div class="flex items-center"></div>

    <div class="flex items-center gap-[35px] h-full pr-[10px]">
      <button class="relative hover:opacity-80 transition-opacity">
        <img
          src="@/assets/icons/topbar/bell.svg"
          alt="Notifications"
          class="w-[20px] h-[22px] md:w-[22px] md:h-[24px] 2xl:w-[24px] 2xl:h-[26px] opacity-80"
        />
        <span
          class="absolute top-0 -right-px w-[6px] h-[6px] md:w-[7px] md:h-[7px] 2xl:w-[8px] 2xl:h-[8px] bg-[#eA5455] rounded-full border-[1.5px] border-white"
        ></span>
      </button>

      <!-- Profile Section: Full on lg+, icon only on smaller screens -->
      <div class="relative flex items-center shrink-0 w-auto lg:w-[200px] 2xl:w-[240px]">
        <!-- Circular layered profile picture overlapping left edge (always visible) -->
        <div
          class="relative lg:absolute lg:left-[3px] z-10 w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] 2xl:w-[54px] 2xl:h-[54px] flex items-center justify-center cursor-pointer"
        >
          <img
            src="@/assets/icons/topbar/Ellipse 2858.svg"
            class="absolute w-full h-full object-contain"
          />
          <img
            src="@/assets/icons/topbar/profile_pic.svg"
            class="absolute w-[50%] h-[50%] object-contain mb-[4px]"
          />
        </div>

        <!-- Expanded Profile Box (Hidden on mobile/tablet, visible on lg+) -->
        <div
          class="hidden lg:flex items-center bg-[rgba(245,248,245,0.7)] border-[0.2px] border-[#a8aaa9] rounded-[6px] w-[185px] 2xl:w-[213px] h-[65px] 2xl:h-[77px] ml-[24px] 2xl:ml-[30px] pl-[30px] 2xl:pl-[34px] pr-[10px] 2xl:pr-[12px] gap-[8px] 2xl:gap-[12px]"
        >
          <div class="flex flex-col justify-center gap-[2px]">
            <span
              class="font-['Poppins'] font-medium text-[#0d2f0d] text-[13px] 2xl:text-[15px] leading-[1.2] whitespace-nowrap tracking-tight"
              >Maria Santos</span
            >
            <span
              class="font-['Poppins'] font-light text-[#286c45] text-[11px] 2xl:text-[12px] leading-[1.2] whitespace-nowrap"
              >Record Officer</span
            >
          </div>

          <div
            class="h-[28px] 2xl:h-[34px] border-l-[0.5px] border-[#cdcdcd] mx-[2px] opacity-80"
          ></div>

          <div class="flex flex-col justify-center gap-[4px] mt-px">
            <span
              class="font-['Poppins'] font-light text-[#8e8e8e] text-[8.5px] 2xl:text-[9.5px] leading-none whitespace-nowrap tracking-wide"
              >Session ID: SEAS:XXXX</span
            >
            <span
              class="font-['Poppins'] font-light text-[#8e8e8e] text-[8.5px] 2xl:text-[9.5px] leading-none whitespace-nowrap tracking-wide"
              >Audit Ref: AUTH-SESSION-XXXXX</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
