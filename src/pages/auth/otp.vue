<script setup lang="ts">
import { ref } from 'vue'
import { ShieldAlert as ShieldAlertIcon, Clock as ClockIcon, Info as InfoIcon, Headphones as HeadphonesIcon, RefreshCw as RefreshCwIcon } from 'lucide-vue-next'
import AuthCardHeader from '@/components/auth/AuthCardHeader.vue'

defineOptions({ name: 'OtpPage' })

const otpDigits = ref<string[]>(['', '', '', '', '', ''])

function onOtpInput(index: number, e: Event) {
  const val = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(-1)
  otpDigits.value[index] = val
  if (val && index < 5) {
    const next = document.getElementById(`otp-${index + 1}`)
    next?.focus()
  }
}

function onOtpKeydown(index: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    const prev = document.getElementById(`otp-${index - 1}`)
    prev?.focus()
  }
}
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center pt-[100px] pb-[100px] px-4 gap-[14px]">
    <!-- Card -->
    <div class="bg-white rounded-[15px] shadow-[0px_7px_23px_0px_rgba(0,0,0,0.05)] w-full max-w-[720px]">
      <AuthCardHeader />

      <!-- Separator -->
      <div class="h-px bg-[#f0f0f0]"></div>

      <!-- Two-column body -->
      <div class="flex divide-x divide-[#f0f0f0]">
        <!-- Left: Security Notice -->
        <div class="w-[280px] shrink-0 px-[28px] py-[30px]">
          <div class="flex items-center gap-[8px] mb-[20px]">
            <ShieldAlertIcon class="w-[17px] h-[17px] text-[#374151]" />
            <h2 class="text-[15px] font-semibold text-[#171a1f]">Security Notice:</h2>
          </div>
          <div class="flex flex-col gap-[16px]">
            <div>
              <div class="flex items-center gap-[6px] mb-[4px]">
                <ClockIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                <p class="text-[12px] font-medium text-[#374151]">OTP expires in 5 minutes</p>
              </div>
              <p class="text-[11px] text-[#9ca3af] pl-[19px] leading-[1.4]">The code will be invalid after the time limit.</p>
            </div>
            <div>
              <div class="flex items-center gap-[6px] mb-[4px]">
                <InfoIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                <p class="text-[12px] font-medium text-[#374151]">Maximum 3 attempts</p>
              </div>
              <p class="text-[11px] text-[#9ca3af] pl-[19px] leading-[1.4]">The code will be invalid after the time limit.</p>
            </div>
            <div>
              <div class="flex items-center gap-[6px] mb-[4px]">
                <ShieldAlertIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                <p class="text-[12px] font-medium text-[#374151]">Verification attempts logged</p>
              </div>
              <p class="text-[11px] text-[#9ca3af] pl-[19px] leading-[1.4]">IP address and timestamp are recorded for audit.</p>
            </div>
            <div>
              <div class="flex items-center gap-[6px]">
                <HeadphonesIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                <p class="text-[12px] font-medium text-[#374151]">Need help? Contact System Admin</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: OTP Entry -->
        <div class="flex-1 px-[36px] py-[28px]">
          <h2 class="text-[18px] font-semibold text-[#171a1f] mb-[6px]">Enter One Time Password</h2>
          <p class="text-[12px] text-[#6b7280] mb-[20px] leading-[1.5]">
            We have sent a 6-digit OTP to your email. You can generate OTP maximum 4 times in 1 hour.
          </p>

          <!-- OTP Boxes -->
          <div class="flex gap-[8px] mb-[14px] justify-center">
            <input
              v-for="(digit, i) in otpDigits"
              :key="i"
              :id="`otp-${i}`"
              :value="digit"
              @input="onOtpInput(i, $event)"
              @keydown="onOtpKeydown(i, $event)"
              type="text"
              maxlength="1"
              inputmode="numeric"
              class="w-[54px] h-[54px] text-center text-[20px] font-semibold border border-[#e5e7eb] rounded-[5px] bg-white text-[#374151] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
            />
          </div>

          <!-- Resend OTP -->
          <div class="flex items-center justify-end mb-[24px]">
            <button class="flex items-center gap-[5px] text-[11.5px] text-[#6b7280] hover:text-[#374151] transition-colors">
              <RefreshCwIcon class="w-[11px] h-[11px]" />
              <span>Resend OTP – 12:32</span>
            </button>
          </div>

          <!-- Continue button -->
          <button
            class="w-full py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-medium rounded-[6px] transition-colors tracking-[0.2px]"
          >
            Continue Verification
          </button>
        </div>
      </div>

      <!-- Card footer: session + audit ref -->
      <div class="h-px bg-[#f0f0f0]"></div>
      <div class="px-[36px] py-[11px] flex items-center justify-between text-[10px] text-[#9ca3af] font-light">
        <span>SESSION ID: SE35-74228-MCB-X9</span>
        <span>AUDIT REF: AUTH-OTP-B821-4AB</span>
      </div>
    </div>

    <!-- Below-card notice -->
    <p class="text-[#171a1f]/50 text-[12px] font-light">
      Authorized Personnel Access Only • Secure Connection Active
    </p>
  </div>
</template>
