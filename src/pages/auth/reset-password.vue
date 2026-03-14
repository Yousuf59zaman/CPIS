<script setup lang="ts">
import { ref } from 'vue'
import { Eye as EyeIcon, EyeOff as EyeOffIcon } from 'lucide-vue-next'
import AuthCardHeader from '@/components/auth/AuthCardHeader.vue'

defineOptions({ name: 'ResetPasswordPage' })

const codeDigits = ref<string[]>(['', '', '', '', '', ''])
const newPassword = ref('')
const confirmPassword = ref('')
const showNew = ref(false)
const showConfirm = ref(false)

function onCodeInput(index: number, e: Event) {
  const val = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(-1)
  codeDigits.value[index] = val
  if (val && index < 5) {
    const next = document.getElementById(`code-${index + 1}`)
    next?.focus()
  }
}

function onCodeKeydown(index: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !codeDigits.value[index] && index > 0) {
    const prev = document.getElementById(`code-${index - 1}`)
    prev?.focus()
  }
}
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center pt-[90px] pb-[110px] px-4 gap-[16px]">
    <!-- Card -->
    <div class="bg-white rounded-[15px] shadow-[0px_7px_23px_0px_rgba(0,0,0,0.05)] w-full max-w-[440px]">
      <AuthCardHeader />

      <!-- Separator -->
      <div class="h-px bg-[#f0f0f0]"></div>

      <!-- Form body -->
      <div class="px-[40px] pt-[28px] pb-[24px] flex flex-col gap-[16px]">
        <!-- Heading -->
        <div>
          <h2 class="text-[18px] font-semibold text-[#171a1f]">Enter Reset Code</h2>
          <p class="text-[12px] text-[#6b7280] mt-[5px] leading-[1.5]">
            Please enter the 6-digit authorization code sent to your registered government email.
          </p>
        </div>

        <!-- Authorization Code boxes -->
        <div>
          <label class="block text-[12px] font-medium text-[#374151] mb-[8px]">Authorization Code</label>
          <div class="flex gap-[8px] justify-center">
            <input
              v-for="(digit, i) in codeDigits"
              :key="i"
              :id="`code-${i}`"
              :value="digit"
              @input="onCodeInput(i, $event)"
              @keydown="onCodeKeydown(i, $event)"
              type="text"
              maxlength="1"
              inputmode="numeric"
              class="w-[54px] h-[54px] text-center text-[18px] font-semibold border border-[#e5e7eb] rounded-[6px] bg-white text-[#374151] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
            />
          </div>
        </div>

        <!-- New Password -->
        <div>
          <label class="block text-[12px] font-medium text-[#374151] mb-[7px]">New Password</label>
          <div class="relative">
            <input
              v-model="newPassword"
              :type="showNew ? 'text' : 'password'"
              placeholder="••••••••••••"
              class="w-full pl-[14px] pr-[42px] py-[10px] border border-[#e5e7eb] rounded-[5px] text-[13px] bg-white text-[#374151] placeholder-[#b2b2b2] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
            />
            <button
              type="button"
              @click="showNew = !showNew"
              class="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            >
              <EyeIcon v-if="!showNew" class="w-[15px] h-[15px]" />
              <EyeOffIcon v-else class="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-[12px] font-medium text-[#374151] mb-[7px]">Confirm Password</label>
          <div class="relative">
            <input
              v-model="confirmPassword"
              :type="showConfirm ? 'text' : 'password'"
              placeholder="••••••••••••"
              class="w-full pl-[14px] pr-[42px] py-[10px] border border-[#e5e7eb] rounded-[5px] text-[13px] bg-white text-[#374151] placeholder-[#b2b2b2] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
            />
            <button
              type="button"
              @click="showConfirm = !showConfirm"
              class="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            >
              <EyeIcon v-if="!showConfirm" class="w-[15px] h-[15px]" />
              <EyeOffIcon v-else class="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>

        <!-- Submit button -->
        <button
          class="w-full py-[13px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[15px] font-medium rounded-[4px] transition-colors tracking-[0.2px] mt-[2px]"
        >
          Submit New Password
        </button>
      </div>

      <!-- Card bottom: audit ref -->
      <div class="h-px bg-[#f0f0f0]"></div>
      <div class="px-[36px] py-[10px] flex items-center justify-between text-[10.5px] text-[#9ca3af] font-light">
        <span>⊙ AUDIT REF: AUTH-RESET-REQ-0XGF22A</span>
        <span>VER: 2.4.0-PROD</span>
      </div>
    </div>

    <!-- Below-card security notice -->
    <p class="text-[#171a1f]/50 text-[12px] font-light text-center max-w-[500px] leading-[1.6]">
      This system is for authorized personnel only. All reset attempts are logged and monitored by the MCB
      Information Security Office. Unauthorized access is subject to administrative and legal penalties.
    </p>
  </div>
</template>
