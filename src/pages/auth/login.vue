<script setup lang="ts">
import { ref } from 'vue'
import { Lock as LockIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-vue-next'
import logoWorkflow from '@/assets/logo_workflow.svg'
import bgLogin from '@/assets/images/bg_login.png'

defineOptions({ name: 'LoginPage' })

const username = ref('')
const password = ref('')
const rememberMe = ref(true)
const showPassword = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white font-['Poppins'] flex flex-col relative overflow-x-hidden">
    <!-- Background image strip (aerial photo) -->
    <div
      class="absolute top-[24px] left-[24px] right-[24px] h-[340px] rounded-[15px] overflow-hidden pointer-events-none z-0"
    >
      <img :src="bgLogin" alt="" class="absolute inset-0 w-full h-full object-cover" />
      <div
        class="absolute inset-0 rounded-[15px]"
        style="background: linear-gradient(179deg, rgba(12,20,3,0.4) 35%, rgba(102,102,102,0.4) 185%)"
      ></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 flex-1 flex flex-col">
      <!-- Card centered -->
      <div class="flex-1 flex items-center justify-center pt-[90px] pb-[100px] px-4">
        <div
          class="bg-white rounded-[15px] shadow-[0px_7px_23px_0px_rgba(0,0,0,0.05)] w-full max-w-[420px]"
        >
          <!-- Logo header -->
          <div class="px-[40px] pt-[32px] pb-[24px] flex items-center justify-center gap-[14px] relative overflow-hidden">
            <img :src="logoWorkflow" alt="CPIS" class="w-[60px] h-[60px] object-contain shrink-0" />
            
            <!-- Fingerprint ghost -->
            <div class="absolute right-[30px] top-[-10px] w-[80px] h-[80px] opacity-[0.04] pointer-events-none overflow-hidden rounded-full border-[8px] border-dashed border-gray-500 rotate-12"></div>
          </div>

          <!-- Separator -->
          <div class="h-px bg-[#f0f0f0]"></div>

          <!-- Form body -->
          <div class="px-[40px] pt-[28px] pb-[26px] flex flex-col gap-[16px]">
            <!-- Username / Email -->
            <div>
              <label class="block text-[12px] font-medium text-[#374151] mb-[7px]">Username/Email</label>
              <input
                v-model="username"
                type="text"
                placeholder="e.g. RU-12345-2024"
                class="w-full px-[14px] py-[10px] border border-[#e5e7eb] rounded-[5px] text-[13px] bg-white text-[#374151] placeholder-[#b2b2b2] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-[12px] font-medium text-[#374151] mb-[7px]">Password</label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••••••"
                  class="w-full px-[14px] pr-[42px] py-[10px] border border-[#e5e7eb] rounded-[5px] text-[13px] bg-white text-[#374151] placeholder-[#b2b2b2] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                >
                  <LockIcon class="w-[15px] h-[15px]" />
                </button>
              </div>
            </div>

            <!-- Remember me + Forgot Password -->
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-[8px] cursor-pointer select-none">
                <div
                  class="relative w-[38px] h-[20px] rounded-full transition-colors duration-200 cursor-pointer"
                  :class="rememberMe ? 'bg-[#1d4a1d]' : 'bg-[#d1d5db]'"
                  @click="rememberMe = !rememberMe"
                >
                  <div
                    class="absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow transition-transform duration-200"
                    :class="rememberMe ? 'translate-x-[20px]' : 'translate-x-[2px]'"
                  ></div>
                </div>
                <span class="text-[12.5px] text-[#374151]">Remember me</span>
              </label>
              <router-link
                to="/auth/reset-password"
                class="text-[12.5px] text-[#d9a047] hover:text-[#b45309] font-medium transition-colors"
              >
                Forgot Password?
              </router-link>
            </div>

            <!-- Access CPIS button -->
            <button
              class="w-full py-[13px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[15px] font-medium rounded-[4px] transition-colors mt-[2px] tracking-[0.2px]"
            >
              Access CPIS
            </button>

            <!-- Authorized notice -->
            <div class="text-center mt-[2px]">
              <p class="text-[#d9a047] text-[13.5px] font-medium">Authorized Personnel Only</p>
              <p class="text-[#b2b2b2] text-[11px] mt-[3px] leading-[1.4]">
                Unauthorized access is strictly prohibited and monitored.
              </p>
            </div>
          </div>

          <!-- Card bottom: Encrypted session -->
          <div class="h-px bg-[#f0f0f0]"></div>
          <div class="px-[40px] py-[13px] flex items-center justify-center gap-[7px] text-[#9ca3af]">
            <ShieldCheckIcon class="w-[14px] h-[14px]" />
            <span class="text-[11px] font-light">Encrypted Session Established</span>
          </div>
        </div>
      </div>
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

   