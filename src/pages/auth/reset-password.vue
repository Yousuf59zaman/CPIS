<script setup lang="ts">
import { ref } from 'vue'
import { Eye as EyeIcon, EyeOff as EyeOffIcon, Lock as LockIcon } from 'lucide-vue-next'
import logoWorkflow from '@/assets/logo_workflow.svg'
import bgLogin from '@/assets/images/bg_login.png'

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
        <div class="bg-white rounded-[15px] shadow-[0px_7px_23px_0px_rgba(0,0,0,0.05)] w-full max-w-[440px]">
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
              <div class="flex gap-[8px]">
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
                  class="flex-1 h-[48px] text-center text-[17px] font-semibold border border-[#e5e7eb] rounded-[5px] bg-white text-[#374151] focus:outline-none focus:border-[#1d4a1d] focus:ring-1 focus:ring-[#1d4a1d]/20 transition-colors"
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
  <div class="min-h-screen relative overflow-hidden font-['Poppins']">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/src/assets/images/scan_background.png')"
    ></div>
    <div class="absolute inset-0 bg-black/25"></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <div class="flex-1 flex items-center justify-center p-4 pb-[70px]">
        <div class="bg-white rounded-[16px] shadow-2xl w-full max-w-[440px] overflow-hidden">
          <!-- Logo row -->
          <div class="flex items-center justify-center gap-[10px] px-[36px] pt-[24px] pb-[18px] border-b border-[#f0f0f0]">
            <img src="@/assets/images/CPIS_Logo.png" alt="CPIS Logo" class="w-[44px] h-[44px] object-contain shrink-0" />
            <div class="relative">
              <p class="text-[#d9a047] text-[14px] font-bold leading-[1.1]">Claims Processing</p>
              <p class="text-[#224e22] text-[14px] font-bold leading-[1.1]">Information System</p>
              <p class="text-[#a0a0a0] text-[7px] font-normal tracking-[0.5px] mt-[3px]">Marawi Compensation Board</p>
              <span class="absolute -right-[22px] top-0 opacity-20 -rotate-90 origin-right font-bold text-[6px] uppercase tracking-[1.5px] text-blue-700 whitespace-nowrap">WORKFLOW</span>
            </div>
          </div>

          <!-- Form -->
          <div class="px-[36px] py-[24px] flex flex-col gap-[18px]">
            <div>
              <h2 class="text-[18px] font-semibold text-[#171a1f]">Enter Reset Code</h2>
              <p class="text-[12px] text-[#6b7280] mt-[4px]">
                Please enter the 6-digit authorization code sent to your registered government email.
              </p>
            </div>

            <!-- Authorization Code -->
            <div>
              <label class="block text-[11px] font-medium text-[#4b5563] mb-[8px]">Authorization Code</label>
              <div class="flex gap-[8px]">
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
                  class="flex-1 h-[44px] text-center text-[16px] font-semibold border border-[#e5e7eb] rounded-[8px] bg-[#f9fafb] text-[#374151] focus:outline-none focus:border-[#224e22] focus:ring-1 focus:ring-[#224e22]/30 transition-colors"
                />
              </div>
            </div>

            <!-- New Password -->
            <div>
              <label class="block text-[11px] font-medium text-[#4b5563] mb-[5px]">New Password</label>
              <div class="relative">
                <input
                  v-model="newPassword"
                  :type="showNew ? 'text' : 'password'"
                  placeholder="••••••••••••"
                  class="w-full pr-[40px] pl-[12px] py-[9px] border border-[#e5e7eb] rounded-[8px] text-[13px] bg-[#f9fafb] text-[#374151] focus:outline-none focus:border-[#224e22] focus:ring-1 focus:ring-[#224e22]/30 transition-colors"
                />
                <button
                  type="button"
                  @click="showNew = !showNew"
                  class="absolute right-[11px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280]"
                >
                  <Eye v-if="!showNew" class="w-[15px] h-[15px]" />
                  <EyeOff v-else class="w-[15px] h-[15px]" />
                </button>
              </div>
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-[11px] font-medium text-[#4b5563] mb-[5px]">Confirm Password</label>
              <div class="relative">
                <input
                  v-model="confirmPassword"
                  :type="showConfirm ? 'text' : 'password'"
                  placeholder="••••••••••••"
                  class="w-full pr-[40px] pl-[12px] py-[9px] border border-[#e5e7eb] rounded-[8px] text-[13px] bg-[#f9fafb] text-[#374151] focus:outline-none focus:border-[#224e22] focus:ring-1 focus:ring-[#224e22]/30 transition-colors"
                />
                <button
                  type="button"
                  @click="showConfirm = !showConfirm"
                  class="absolute right-[11px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280]"
                >
                  <Eye v-if="!showConfirm" class="w-[15px] h-[15px]" />
                  <EyeOff v-else class="w-[15px] h-[15px]" />
                </button>
              </div>
            </div>

            <!-- Submit -->
            <button class="w-full py-[11px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
              Submit New Password
            </button>
          </div>

          <!-- Card footer -->
          <div class="px-[36px] py-[10px] bg-[#f9fafb] border-t border-[#f0f0f0] flex items-center justify-between text-[10px] text-[#9ca3af]">
            <span>⊙ AUDIT REF: AUTH-RESET-REQ-0XGF22A</span>
            <span>VER: 2.4.0-PROD</span>
          </div>

          <!-- Security notice -->
          <div class="px-[36px] pb-[18px] pt-[2px]">
            <p class="text-center text-[10px] text-[#9ca3af] leading-[1.5]">
              This system is for authorized personnel only. All reset attempts are logged and monitored by the MCB
              Information Security Office. Unauthorized access is subject to administrative and legal penalties.
            </p>
          </div>
        </div>
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
