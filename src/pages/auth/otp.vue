<script setup lang="ts">
import { ref } from 'vue'
import { ShieldAlert as ShieldAlertIcon, Clock as ClockIcon, Info as InfoIcon, Headphones as HeadphonesIcon, RefreshCw as RefreshCwIcon, Lock as LockIcon } from 'lucide-vue-next'
import logoWorkflow from '@/assets/logo_workflow.svg'
import bgLogin from '@/assets/images/bg_login.png'

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

    <!-- Main content -->
    <div class="relative z-10 flex-1 flex flex-col">
      <div class="flex-1 flex flex-col items-center justify-center pt-[90px] pb-[110px] px-4 gap-[16px]">

        <!-- Card -->
        <div class="bg-white rounded-[15px] shadow-[0px_7px_23px_0px_rgba(0,0,0,0.05)] w-full max-w-[720px]">
          <!-- Logo header -->
          <div class="px-[40px] pt-[30px] pb-[22px] flex items-center justify-center gap-[14px] relative overflow-hidden">
            <img :src="logoWorkflow" alt="CPIS" class="w-[58px] h-[58px] object-contain shrink-0" />
            <div>
              <p class="text-[#d9a047] text-[19px] font-semibold leading-[1.15] tracking-[-0.3px]">Claims Processing</p>
              <p class="text-[#2d632d] text-[17.5px] font-medium leading-[1.15] tracking-[-0.2px]">Information System</p>
              <p class="text-[#767676] text-[10.5px] font-light tracking-[0.7px] mt-[4px]">Marawi Compensation Board</p>
            </div>
            <!-- WORKFLOW rotated -->
            <div class="absolute right-[16px] top-[16px] bottom-[16px] flex items-center justify-center w-[14px] pointer-events-none">
              <span
                class="-rotate-90 whitespace-nowrap text-[7.5px] font-semibold tracking-[1.2px] uppercase bg-gradient-to-l from-[#2407ff] to-[#f30f0b] bg-clip-text text-transparent leading-none"
              >
                WORKFLOW
              </span>
            </div>
            <div class="absolute right-[30px] top-[-10px] w-[80px] h-[80px] opacity-[0.04] pointer-events-none overflow-hidden rounded-full border-[8px] border-dashed border-gray-500 rotate-12"></div>
          </div>

          <!-- Separator -->
          <div class="h-px bg-[#f0f0f0]"></div>

          <!-- Two-column body -->
          <div class="flex divide-x divide-[#f0f0f0]">
            <!-- Left: Security Notice -->
            <div class="w-[280px] shrink-0 px-[28px] py-[28px]">
              <div class="flex items-center gap-[9px] mb-[22px]">
                <ShieldAlertIcon class="w-[18px] h-[18px] text-[#374151]" />
                <h2 class="text-[15px] font-semibold text-[#171a1f]">Security Notice:</h2>
              </div>
              <div class="flex flex-col gap-[18px]">
                <div>
                  <div class="flex items-center gap-[7px] mb-[3px]">
                    <ClockIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                    <p class="text-[12.5px] font-medium text-[#374151]">OTP expires in 5 minutes</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[20px] leading-[1.4]">The code will be invalid after the time limit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[7px] mb-[3px]">
                    <InfoIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                    <p class="text-[12.5px] font-medium text-[#374151]">Maximum 3 attempts</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[20px] leading-[1.4]">The code will be invalid after the time limit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[7px] mb-[3px]">
                    <ShieldAlertIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                    <p class="text-[12.5px] font-medium text-[#374151]">Verification attempts logged</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[20px] leading-[1.4]">IP address and timestamp are recorded for audit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[7px]">
                    <HeadphonesIcon class="w-[13px] h-[13px] text-[#6b7280] shrink-0" />
                    <p class="text-[12.5px] font-medium text-[#374151]">Need help? Contact System Admin</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: OTP Entry -->
            <div class="flex-1 px-[36px] py-[28px]">
              <h2 class="text-[18px] font-semibold text-[#171a1f] mb-[7px]">Enter One Time Password</h2>
              <p class="text-[12px] text-[#6b7280] mb-[26px] leading-[1.5]">
                We have sent a 6-digit OTP to your email. You can generate<br />OTP maximum 4 times in 1 hour.
              </p>

              <!-- OTP Boxes -->
              <div class="flex gap-[10px] mb-[10px]">
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
                  class="w-[54px] h-[54px] text-center text-[18px] font-semibold border border-[#e5e7eb] rounded-[6px] bg-white text-[#374151] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
                />
              </div>

              <!-- Resend OTP -->
              <div class="flex items-center justify-end mb-[22px]">
                <button class="flex items-center gap-[5px] text-[12px] text-[#6b7280] hover:text-[#374151] transition-colors">
                  <RefreshCwIcon class="w-[12px] h-[12px]" />
                  <span>Resend OTP – 12:32</span>
                </button>
              </div>

              <!-- Continue button -->
              <button
                class="w-full py-[13px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[15px] font-medium rounded-[4px] transition-colors tracking-[0.2px]"
              >
                Continue Verification
              </button>
            </div>
          </div>

          <!-- Card footer: session + audit ref -->
          <div class="h-px bg-[#f0f0f0]"></div>
          <div class="px-[36px] py-[10px] flex items-center justify-between text-[10.5px] text-[#9ca3af] font-light">
            <span>SESSION ID: SE35-74228-MCB-X9</span>
            <span>AUDIT REF: AUTH-OTP-B821-4AB</span>
          </div>
        </div>

        <!-- Below-card notice -->
        <p class="text-[#171a1f]/50 text-[13px] font-light">
          Authorized Personnel Access Only • Secure Connection Active
        </p>
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
  <div class="min-h-screen relative overflow-hidden font-['Poppins']">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/src/assets/images/scan_background.png')"
    ></div>
    <div class="absolute inset-0 bg-black/25"></div>

    <!-- Page layout -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <div class="flex-1 flex items-center justify-center p-4 pb-[70px]">
        <div class="bg-white rounded-[16px] shadow-2xl w-full max-w-[800px] overflow-hidden">
          <!-- Logo row -->
          <div class="flex items-center justify-center gap-[10px] px-[40px] pt-[28px] pb-[20px] border-b border-[#f0f0f0]">
            <img src="@/assets/images/CPIS_Logo.png" alt="CPIS Logo" class="w-[48px] h-[48px] object-contain shrink-0" />
            <div class="relative">
              <p class="text-[#d9a047] text-[15px] font-bold leading-[1.1]">Claims Processing</p>
              <p class="text-[#224e22] text-[15px] font-bold leading-[1.1]">Information System</p>
              <p class="text-[#a0a0a0] text-[7px] font-normal tracking-[0.5px] mt-[3px]">Marawi Compensation Board</p>
              <span class="absolute -right-[24px] top-0 opacity-20 -rotate-90 origin-right font-bold text-[6px] uppercase tracking-[1.5px] text-blue-700 whitespace-nowrap">WORKFLOW</span>
            </div>
          </div>

          <!-- Two-column body -->
          <div class="flex divide-x divide-[#f0f0f0]">
            <!-- Left: Security Notice -->
            <div class="w-[300px] shrink-0 px-[28px] py-[28px]">
              <div class="flex items-center gap-[8px] mb-[20px]">
                <ShieldAlert class="w-[18px] h-[18px] text-[#374151]" />
                <h2 class="text-[16px] font-semibold text-[#171a1f]">Security Notice:</h2>
              </div>
              <div class="flex flex-col gap-[16px]">
                <div>
                  <div class="flex items-center gap-[6px] mb-[3px]">
                    <Clock class="w-[13px] h-[13px] text-[#6b7280]" />
                    <p class="text-[12px] font-medium text-[#374151]">OTP expires in 5 minutes</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[19px]">The code will be invalid after the time limit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[6px] mb-[3px]">
                    <Info class="w-[13px] h-[13px] text-[#6b7280]" />
                    <p class="text-[12px] font-medium text-[#374151]">Maximum 3 attempts</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[19px]">The code will be invalid after the time limit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[6px] mb-[3px]">
                    <ShieldAlert class="w-[13px] h-[13px] text-[#6b7280]" />
                    <p class="text-[12px] font-medium text-[#374151]">Verification attempts logged</p>
                  </div>
                  <p class="text-[11px] text-[#9ca3af] pl-[19px]">IP address and timestamp are recorded for audit.</p>
                </div>
                <div>
                  <div class="flex items-center gap-[6px] mb-[3px]">
                    <Headphones class="w-[13px] h-[13px] text-[#6b7280]" />
                    <p class="text-[12px] font-medium text-[#374151]">Need help? Contact System Admin</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: OTP Entry -->
            <div class="flex-1 px-[36px] py-[28px]">
              <h2 class="text-[18px] font-semibold text-[#171a1f] mb-[6px]">Enter One Time Password</h2>
              <p class="text-[12px] text-[#6b7280] mb-[24px]">
                We have sent a 6-digit OTP to your email. You can generate OTP maximum 4 times in 1 hour.
              </p>

              <!-- OTP Boxes -->
              <div class="flex gap-[10px] mb-[12px]">
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
                  class="w-[52px] h-[52px] text-center text-[18px] font-semibold border border-[#e5e7eb] rounded-[8px] bg-[#f9fafb] text-[#374151] focus:outline-none focus:border-[#224e22] focus:ring-1 focus:ring-[#224e22]/30 transition-colors"
                />
              </div>

              <!-- Resend OTP -->
              <div class="flex items-center justify-end mb-[20px]">
                <button class="flex items-center gap-[5px] text-[12px] text-[#6b7280] hover:text-[#374151] transition-colors">
                  <RefreshCw class="w-[12px] h-[12px]" />
                  <span>Resend OTP – 12:32</span>
                </button>
              </div>

              <!-- Submit -->
              <button class="w-full py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
                Continue Verification
              </button>
            </div>
          </div>

          <!-- Card footer -->
          <div class="px-[36px] py-[10px] bg-[#f9fafb] border-t border-[#f0f0f0] flex items-center justify-between text-[10px] text-[#9ca3af]">
            <span>SESSION ID: SE35-74228-MCB-X9</span>
            <span>AUDIT REF: AUTH-OTP-B821-4AB</span>
          </div>
        </div>

        <!-- Below card notice -->
        <p class="absolute bottom-[80px] text-white/70 text-[11px]">
          Authorized Personnel Access Only • Secure Connection Active
        </p>
      </div>

      <!-- Bottom security bar -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] z-20">
        <div class="flex items-center justify-center gap-[8vw] py-[10px] px-6">
          <div class="flex items-center gap-[7px]">
            <img src="@/assets/icons/footer/lock.svg" class="w-[15px] h-[15px] opacity-70" />
            <span class="text-[12px] text-[#374151] font-light">Encrypted Connection (TLS)</span>
          </div>
          <div class="h-[14px] border-l border-[#d1d5db]"></div>
          <div class="flex items-center gap-[7px]">
            <img src="@/assets/icons/footer/clock.svg" class="w-[15px] h-[15px] opacity-70" />
            <span class="text-[12px] text-[#374151] font-light">Idle Timeout: 10 Minutes</span>
          </div>
          <div class="h-[14px] border-l border-[#d1d5db]"></div>
          <div class="flex items-center gap-[7px]">
            <img src="@/assets/icons/footer/shield-alert.svg" class="w-[15px] h-[15px] opacity-70" />
            <span class="text-[12px] text-[#374151] font-light">5 Failed Attempts Will Lock Account</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
