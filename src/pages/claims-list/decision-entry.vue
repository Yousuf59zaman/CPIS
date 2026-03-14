<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight, CircleCheckBig, Send } from 'lucide-vue-next'

defineOptions({ name: 'DecisionEntryPage' })

const boardDecision = ref<'approve' | 'reject' | 'defer'>('approve')
const confirmations = ref({
  member1: true,
  member2: true,
  member3: false,
  secretary: false,
})

const legalAssessmentPoints = [
  'Property ownership is verified through deed, and identity confirmed.',
  'Compliance with Compensation Act established; non-owner dispute absent.',
  'Inspection report highlights severe structural damage as required.',
  'Claimant suffered significant personal injury due to conflict-related event.',
  'All submitted documents align with legal and compensation requirements.',
  'Recommendation is to consider the provided documentation of damage and personal injury as sufficient grounds for compensation.',
  'No discrepancies observed in provided documentation.',
]
</script>

<template>
  <main class="flex flex-col gap-[20px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]" style="font-family: 'Poppins', Inter, sans-serif;">
    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h1 class="text-[24px] md:text-[30px] font-medium text-[#202224]">Decision Entry</h1>
      <div
        class="flex items-center gap-[8px] h-[32px] rounded-[999px] border border-[#e5e7eb] bg-[#f7f7f7] px-[16px] text-[10px] font-light text-[#a7a6a6]">
        <span>Dashboard</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>Board Deliberation</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span class="text-[#8f8f8f]">Decision Entry</span>
        <ChevronRight class="h-[10px] w-[10px]" />
        <span>CP-0001</span>
      </div>
    </div>

    <section class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <div class="rounded-[10px] bg-white p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
        <div class="mb-[12px] flex items-center gap-[10px]">
          <div class="h-[24px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#234f23]"></div>
          <h2 class="text-[22px] md:text-[24px] font-normal text-[#202224]">CP-00101</h2>
        </div>

        <div class="space-y-[10px]">
          <div class="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] sm:h-[40px]">
            <p class="text-[13px] text-[#171a1f]">Claimant:</p>
            <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">John Smith</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] sm:h-[40px]">
            <p class="text-[13px] text-[#171a1f]">Location:</p>
            <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">Structural</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] sm:h-[40px]">
            <p class="text-[13px] text-[#171a1f]">Inspection:</p>
            <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">Barangay Lumbac Madaya, Marawi City</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] sm:h-[40px]">
            <p class="text-[13px] text-[#171a1f]">Current Status:</p>
            <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">Significant damage observed, referred for Legal</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5e7eb] bg-[#f6f7f6] px-[12px] py-[8px] sm:h-[40px]">
            <p class="text-[13px] text-[#171a1f]">Current Status:</p>
            <div class="flex h-[26px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
              <span class="text-[12px] text-[#171a1f]">Pending Board Decision</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-[10px] bg-white p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
        <div class="mb-[12px] flex items-center gap-[10px]">
          <div class="h-[24px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#234f23]"></div>
          <h2 class="text-[22px] md:text-[24px] font-normal text-black">Board Decision</h2>
        </div>

        <div class="space-y-[12px] text-[#171a1f]">
          <div>
            <label class="flex items-center gap-[8px] text-[13px] font-normal">
              <input v-model="boardDecision" value="approve" type="radio" class="h-[12px] w-[12px] accent-[#2b5329]" />
              Recommend Approval
            </label>
            <div class="mt-[6px] grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5dbca] bg-[#fffdf6] px-[12px] py-[8px] sm:h-[40px]">
              <p class="text-[12px] text-[#171a1f]">Approved Amount:</p>
              <input type="text" value="120,000"
                class="h-[26px] rounded-[4px] border border-[#e6e6e6] bg-white px-[10px] text-[12px] text-[#171a1f] outline-none" />
            </div>
          </div>

          <div>
            <label class="flex items-center gap-[8px] text-[13px] font-normal">
              <input v-model="boardDecision" value="reject" type="radio" class="h-[12px] w-[12px] accent-[#2b5329]" />
              Reject
            </label>
            <div class="mt-[6px] grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-[8px] rounded-[6px] border border-[#e5dbca] bg-[#fffdf6] px-[12px] py-[8px] sm:h-[40px]">
              <p class="text-[12px] text-[#171a1f]">Rejection Grounds:</p>
              <input type="text"
                class="h-[26px] rounded-[4px] border border-[#e6e6e6] bg-white px-[10px] text-[12px] text-[#171a1f] outline-none" />
            </div>
          </div>

          <div>
            <label class="flex items-center gap-[8px] text-[13px] font-normal">
              <input v-model="boardDecision" value="defer" type="radio" class="h-[12px] w-[12px] accent-[#2b5329]" />
              Defer
            </label>
            <div class="mt-[6px] grid grid-cols-1 sm:grid-cols-2 gap-[8px] items-center rounded-[6px] border border-[#e5dbca] bg-[#fffdf6] px-[12px] py-[8px] sm:h-[40px]">
              <select class="h-[26px] rounded-[4px] border border-[#e6e6e6] bg-white px-[10px] text-[12px] text-[#171a1f] outline-none">
                <option>Defer Reason</option>
              </select>
              <select class="h-[26px] rounded-[4px] border border-[#e6e6e6] bg-white px-[10px] text-[12px] text-[#171a1f] outline-none">
                <option>Next Review Date:</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <div class="rounded-[10px] bg-white p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
        <div class="mb-[12px] flex items-center gap-[10px]">
          <div class="h-[24px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#234f23]"></div>
          <h2 class="text-[18px] md:text-[20px] font-normal text-black">Legal Assessment</h2>
        </div>

        <p class="text-[12px] leading-[1.45] text-[#171a1f]">
          Claimant Has Submitted Ownership Documents And Damage Evidence In Accordance With Compensation Act
          Guidelines.
        </p>

        <ul class="mt-[10px] space-y-[8px]">
          <li v-for="point in legalAssessmentPoints" :key="point" class="flex items-start gap-[8px]">
            <span class="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#275227]"></span>
            <p class="text-[12px] leading-[1.45] text-[#171a1f]">{{ point }}</p>
          </li>
        </ul>
      </div>

      <div class="space-y-[16px]">
        <div class="rounded-[10px] bg-white p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
          <div class="mb-[12px] flex items-center gap-[10px]">
            <div class="h-[24px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#234f23]"></div>
            <h2 class="text-[18px] md:text-[20px] font-normal text-black">Resolution Notes</h2>
          </div>

          <label class="flex items-start gap-[8px] text-[12px] leading-[1.45] text-[#171a1f]">
            <input type="checkbox" checked class="mt-[2px] h-[12px] w-[12px] accent-[#7d7f84]" />
            <span>
              Approved in he amount of PHP 120,000 due to verified ownership and significant damage. Assigned to Board
              Divison B for further processing.
            </span>
          </label>
        </div>

        <div class="rounded-[10px] bg-white p-[20px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
          <div class="mb-[12px] flex items-center gap-[10px]">
            <div class="h-[24px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#234f23]"></div>
            <h2 class="text-[18px] md:text-[20px] font-normal text-black">Member Confirmation</h2>
          </div>

          <div class="space-y-[10px] text-[12px] text-[#171a1f]">
            <label class="flex items-center gap-[8px]">
              <input v-model="confirmations.member1" type="checkbox" class="h-[12px] w-[12px] accent-[#7d7f84]" />
              Member 1
            </label>
            <label class="flex items-center gap-[8px]">
              <input v-model="confirmations.member2" type="checkbox" class="h-[12px] w-[12px] accent-[#7d7f84]" />
              Member 2
            </label>
            <label class="flex items-center gap-[8px]">
              <input v-model="confirmations.member3" type="checkbox" class="h-[12px] w-[12px] accent-[#7d7f84]" />
              Member 3
            </label>
            <label class="flex items-center gap-[8px]">
              <input v-model="confirmations.secretary" type="checkbox" class="h-[12px] w-[12px] accent-[#7d7f84]" />
              Secretary
            </label>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
      <button type="button"
        class="flex h-[36px] items-center justify-center gap-[8px] rounded-[4px] bg-[#275227] text-[13px] font-medium text-white hover:bg-[#224622]">
        <CircleCheckBig class="h-[14px] w-[14px]" />
        Confirm Decision
      </button>
      <button type="button"
        class="flex h-[36px] items-center justify-center gap-[8px] rounded-[4px] bg-[#da972e] text-[13px] font-medium text-white hover:bg-[#be861f]">
        <Send class="h-[14px] w-[14px]" />
        Send for Redeliberation
      </button>
    </div>
  </main>
</template>
