<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CheckCircle } from 'lucide-vue-next'

defineOptions({ name: 'DecisionEntryPage' })

const boardDecision = ref<'approve' | 'reject' | 'defer' | null>(null)
const memberConfirmed = ref(false)
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px] font-['Poppins']">
    <!-- Header -->
    <div class="flex items-start justify-between flex-wrap gap-[8px]">
      <h1 class="text-[30px] leading-[45px] font-medium text-[#202224]">Decision Entry</h1>
      <nav class="text-[16px] leading-[24px] font-light text-[#A7A6A6] flex items-center gap-[6px]">
        <span>Dashboard</span><span>›</span><span>Board Agenda</span><span>›</span>
        <span class="text-[#171A1F]">Decision Entry</span>
      </nav>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Claim Info Card -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <h2 class="text-[30px] leading-[45px] font-semibold text-[#1d4a1d]">CP-00101</h2>
          <span class="px-[8px] py-[2px] bg-[#fed7aa] rounded-full text-[15px] leading-[22px] font-light text-[#1B1F25] flex items-center justify-center h-[23px]">Under Board Review</span>
        </div>
        <div class="grid grid-cols-2 gap-[8px]">
          <div v-for="f in [
            { label: 'Claimant Name', value: 'John Smith' },
            { label: 'Claim Type', value: 'Structural Damage' },
            { label: 'Property Location', value: 'Bgry Lumbac Madaya, Marawi' },
            { label: 'Legal Recommendation', value: 'APPROVE' },
            { label: 'Proposed Compensation', value: '₱145,000.00' },
            { label: 'Meeting ID', value: 'MTG-2025-001' },
          ]" :key="f.label">
            <div>
              <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ f.label }}</p>
              <div class="px-[9px] py-[6px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[3px]">
                <span class="text-[18px] leading-[27px] font-light text-[#171A1F]" :class="f.label === 'Legal Recommendation' ? 'text-[#16a34a] font-semibold' : ''">{{ f.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Board Decision Entry -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px] flex flex-col gap-[14px]">
        <!-- Board Decision radio -->
        <div>
          <div class="flex items-center gap-[10px] mb-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Board Decision</h2>
          </div>
          <div class="flex flex-col gap-[8px]">
            <label v-for="opt in [
              { val: 'approve', label: 'Recommend Approval', desc: 'Board approves the claim for compensation.' },
              { val: 'reject', label: 'Reject Claim', desc: 'Board determines the claim does not qualify.' },
              { val: 'defer', label: 'Defer Decision', desc: 'Board requires additional information.' },
            ]" :key="opt.val"
              class="flex items-start gap-[10px] p-[10px] border rounded-[8px] cursor-pointer transition-colors"
              :class="boardDecision === opt.val ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
              <input type="radio" v-model="boardDecision" :value="opt.val" class="mt-[1px] accent-[#224e22]" />
              <div>
                <p class="text-[20px] leading-[28px] font-normal text-[#171A1F]">{{ opt.label }}</p>
                <p class="text-[16px] leading-[24px] font-light text-[#808080]">{{ opt.desc }}</p>
              </div>
            </label>
          </div>
        </div>

        <!-- Approved amount -->
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[5px]">Approved Compensation Amount</label>
          <input type="text" placeholder="₱0.00" class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[7px] px-[12px] py-[9px] outline-none focus:border-[#224e22] text-[#171A1F]" />
        </div>

        <!-- Legal Assessment bullets -->
        <div>
          <div class="flex items-center gap-[10px] mb-[8px]">
            <div class="w-[4px] h-[14px] bg-[#224e22] rounded-full"></div>
            <h3 class="text-[30px] leading-[45px] font-normal text-[#234F23]">Legal Assessment</h3>
          </div>
          <ul class="text-[16px] leading-[24px] font-light text-[#808080] space-y-[4px]">
            <li class="flex items-start gap-[6px]"><CheckCircle class="w-[11px] h-[11px] mt-[1px] text-[#16a34a] flex-shrink-0" /> All statutory requirements satisfied</li>
            <li class="flex items-start gap-[6px]"><CheckCircle class="w-[11px] h-[11px] mt-[1px] text-[#16a34a] flex-shrink-0" /> Property eligibility confirmed</li>
            <li class="flex items-start gap-[6px]"><CheckCircle class="w-[11px] h-[11px] mt-[1px] text-[#16a34a] flex-shrink-0" /> Damage assessment consistent with evidence</li>
          </ul>
        </div>

        <!-- Resolution Notes -->
        <div>
          <label class="text-[20px] leading-[28px] font-normal text-[#171A1F] block mb-[5px]">Resolution Notes</label>
          <textarea rows="3" placeholder="Enter official board resolution notes..." class="w-full text-[18px] leading-[27px] font-light border border-[#e5e7eb] rounded-[7px] px-[12px] py-[9px] outline-none focus:border-[#224e22] resize-none text-[#171A1F] placeholder-[#9ca3af]"></textarea>
        </div>

        <!-- Member Confirmation -->
        <div class="border border-[#e5e7eb] rounded-[8px] p-[12px] bg-[#fafafa]">
          <p class="text-[20px] leading-[28px] font-normal text-[#171A1F] mb-[8px]">Member Confirmation</p>
          <label class="flex items-center gap-[8px] cursor-pointer">
            <input type="checkbox" v-model="memberConfirmed" class="w-[13px] h-[13px] accent-[#224e22]" />
            <span class="text-[18px] leading-[27px] font-light text-[#171A1F]">I confirm this decision is made in accordance with board resolution procedures and applicable regulations.</span>
          </label>
        </div>
      </div>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors">
        Confirm Decision
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[20px] leading-[35px] font-medium rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Send for Redeliberation
      </button>
    </div>
  </main>
</template>

