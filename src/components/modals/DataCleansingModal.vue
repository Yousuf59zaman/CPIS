<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-[6px]"
  >
    <!-- Modal Container (1920px from Figma) -->
    <div
      class="relative bg-white rounded-lg shadow-xl w-[1700px] max-w-[92vw] h-[90vh] my-[4vh] flex flex-col overflow-hidden animate-modal-in"
      @click.stop
    >
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col px-10 py-8 overflow-y-auto bg-white">
        <!-- Two Panel Layout (from Accessimate AuditResult.vue) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          <!-- Left Panel: Browser Preview with Violations (adapted from AuditResult left side) -->
          <div
            class="p-5 rounded-lg shadow-lg overflow-hidden h-fit"
            style="background: linear-gradient(91deg, rgba(34, 78, 34, 0.18) 0.62%, rgba(34, 78, 34, 0.08) 99.38%)"
          >
            <!-- Browser Chrome Bar (from AuditResult.vue) -->
            <div class="bg-gray-100 px-4 py-2.5 border-b rounded-md flex items-center">
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-[#224E22] rounded-full"></div>
                <div class="w-3 h-3 bg-[#4caf50] rounded-full"></div>
                <div class="w-3 h-3 bg-gray-200 rounded-full"></div>
              </div>
              <div class="flex-1 mx-4">
                <div class="flex items-center gap-2">
                  <ChevronLeftIcon class="w-3 h-3 text-[#9ca3af]" />
                  <ChevronRightIcon class="w-3 h-3 text-[#9ca3af]" />
                </div>
              </div>
              <div class="bg-white rounded px-3 py-1 text-sm text-gray-600 truncate flex items-center gap-1.5 flex-1">
                <LockIcon class="w-3 h-3 text-[#9ca3af]" />
                <span class="text-[11px] text-[#6b7280]">cpis.ph</span>
              </div>
              <div class="flex items-center space-x-2 ml-3">
                <RefreshCwIcon class="w-3.5 h-3.5 text-[#9ca3af]" />
                <WifiIcon class="w-3.5 h-3.5 text-[#9ca3af]" />
                <PlusIcon class="w-3.5 h-3.5 text-[#9ca3af]" />
              </div>
            </div>

            <!-- Browser Content: CPIS Logo -->
            <div class="relative bg-white mb-4 flex flex-col items-center justify-center px-6 py-8">
              <div class="w-[100px] h-[100px] rounded-full border-2 border-dashed border-[#224E22]/30 flex items-center justify-center mb-4 relative">
                <div class="w-[80px] h-[80px] rounded-full border-2 border-[#224E22]/20 flex items-center justify-center bg-white">
                  <img src="@/assets/images/CPIS_Logo.png" alt="CPIS" class="w-14 h-14 rounded-full" />
                </div>
                <div class="absolute inset-0 rounded-full border-2 border-dashed border-[#224E22]/40 animate-spin-very-slow"></div>
              </div>
            </div>

            <!-- Violations Section (from AuditResult.vue) -->
            <div class="accessibility-violations rounded-lg p-4">
              <div class="flex items-center mb-3">
                <h3 class="font-extrabold text-lg text-[#224E22]">
                  You've got violations! Tackle them with automation.
                </h3>
              </div>

              <ul class="space-y-2.5 text-sm ml-1">
                <li
                  v-for="(item, i) in checklistItems"
                  :key="i"
                  class="flex items-center gap-2.5 animate-check-in"
                  :style="{ animationDelay: `${i * 0.3}s` }"
                >
                  <template v-if="item.checked">
                    <svg class="w-4 h-4 text-[#224E22] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </template>
                  <template v-else>
                    <CircleIcon class="w-4 h-4 text-[#d1d5db] shrink-0" />
                  </template>
                  <span :class="item.checked ? 'text-[#202224]' : 'text-[#9ca3af]'">{{ item.label }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Panel: Data Cleansing Progress (adapted from AuditResult loading state) -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Header with Back + Search (from AuditResult.vue) -->
            <div class="p-6 border-b">
              <div class="flex items-center justify-between mb-3">
                <button class="flex items-center text-gray-600 hover:text-gray-900">
                  <ArrowLeftIcon class="w-4 h-4 mr-2" />
                  Back to Home
                </button>
              </div>
              <div class="flex items-center space-x-3">
                <div class="relative flex-1">
                  <input
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#224E22] focus:border-transparent"
                    placeholder="dev.cpis.ph"
                    disabled
                  />
                </div>
                <button class="bg-[#224E22] hover:bg-[#1a3d1a] text-white px-6 py-2 rounded-lg font-medium flex items-center">
                  <SearchIcon class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- Loading State (from AuditResult.vue lines 354-374) -->
            <div class="flex flex-col items-center justify-center h-auto p-8 mt-4">
              <div class="text-center">
                <div class="mb-6">
                  <div class="mx-auto relative">
                    <!-- LoadingLine component adapted for Vue 3 -->
                    <div class="relative w-full h-full overflow-hidden flex justify-center">
                      <img class="w-2/3" src="@/assets/images/scan_background.png" alt="Scanning" />
                      <div class="absolute top-0 left-0 w-full h-2 bg-[#224E22] animate-loading-line z-10"></div>
                    </div>
                  </div>
                </div>
                <h2 class="text-2xl font-semibold text-gray-800 mb-2">Data Cleansing In Progress</h2>
                <p class="text-gray-600">Preparing your results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Search as SearchIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  ArrowLeft as ArrowLeftIcon,
  RefreshCw as RefreshCwIcon,
  Lock as LockIcon,
  Wifi as WifiIcon,
  Plus as PlusIcon,
  Circle as CircleIcon,
} from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])

const checklistItems = [
  { label: 'Receive Validated Dataset', checked: true },
  { label: 'Automated Data Validation', checked: true },
  { label: 'Removing Duplicates', checked: true },
  { label: 'Correcting Formatting Errors', checked: false },
  { label: 'Filling in missing values', checked: false },
  { label: 'Flagging Incomplete Data', checked: false },
]
</script>

<style scoped>
/* Modal entrance (from Accessimate modal pattern) */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-modal-in {
  animation: modalIn 0.4s ease-out forwards;
}

/* Loading line animation (from LoadingLine.vue) */
@keyframes moveUpDown {
  0% { transform: translateY(0); }
  50% { transform: translateY(calc(100vh - 50%)); }
  100% { transform: translateY(0); }
}
.animate-loading-line {
  animation: moveUpDown 1.5s infinite ease-in-out;
}

/* Very slow spin for dashed border */
@keyframes spinVerySlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-very-slow {
  animation: spinVerySlow 12s linear infinite;
}

/* Slow spin for refresh icon */
.animate-spin-slow {
  animation: spinVerySlow 3s linear infinite;
}

/* Checklist item entrance */
@keyframes checkIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-check-in {
  opacity: 0;
  animation: checkIn 0.4s ease-out forwards;
}
</style>
