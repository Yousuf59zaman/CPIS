<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronDown, ChevronRight, FileText, RotateCcw, Send } from 'lucide-vue-next'

defineOptions({ name: 'SerReviewPage' })

const router = useRouter()

const reviewerDecision = ref<'approve' | 'return'>('approve')
const reviewerComment = ref('')
const sessionAction = ref('start')

const commentLimit = 2000

const summaryCards = [
  { label: 'Claim ID', value: 'CL-2024-99810' },
  { label: 'Status', value: 'Pending SER Review' },
  { label: 'Assigned Unit', value: 'Property Claims (West)' },
  { label: 'Assigned Officer', value: 'Sarah Thompson' },
]

const financialRows = [
  { label: 'Original Claimed Amount', value: 'PHP45,250.00' },
  { label: 'Policy Deductible', value: 'PHP1,000.00' },
  { label: 'Ineligible Items (Deduction)', value: '(PHP12,100.00)' },
  { label: 'Liability Percentage', value: '100%' },
  { label: 'Adjusted Loss Value', value: 'PHP33,150.00' },
  { label: 'Proposed Settlement', value: 'PHP32,150.00' },
]

const basisOfSettlement = [
  'Assessment completed based on site inspection report dated Oct 12, 2024. The structural damage reported at the rear of the property (Item 4b in original claim) was deemed as pre-existing wear and tear rather than damage, resulting in the $12,100.00 reduction.',
  'The remainder of the claim for roof tile replacement and interior water damage is consistent with weather event "Storm ALPHA" records. Labor rates applied are in accordance with the 2024 standardized schedule of rates for the Western District.',
]

const supportingEvidence = [
  'Inspector_Notes_V2.pdf',
  'Photos_Damage_Rear.zip',
  'Standard_Rates_Table.pdf',
]

const sessionOptions = [
  { label: 'Start Session', value: 'start' },
  { label: 'Pause Session', value: 'pause' },
  { label: 'Close Session', value: 'close' },
]

const commentCharactersRemaining = computed(() => commentLimit - reviewerComment.value.length)

async function cancelReview() {
  await router.push({ name: 'task-inbox' })
}

async function submitDecision() {
  if (reviewerDecision.value === 'return' && reviewerComment.value.trim().length === 0) {
    window.alert('Reviewer comments are required when returning the SER for revision.')
    return
  }

  if (reviewerDecision.value === 'approve') {
    await router.push({ name: 'payment-authorisation' })
    return
  }

  await router.push({ name: 'ser-report' })
}
</script>

<template>
  <main class="flex flex-col gap-[18px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <h1 class="text-[24px] font-medium text-[#202224] md:text-[30px]">SER Review</h1>

      <div class="flex flex-wrap items-center justify-end gap-[10px]">
        <button
          type="button"
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[999px] bg-[#275227] px-[16px] text-[12px] font-medium text-white shadow-[0_8px_24px_rgba(39,82,39,0.16)] transition hover:bg-[#214721]"
        >
          <FileText class="h-[13px] w-[13px]" />
          View Full Claim File
          <ChevronDown class="h-[12px] w-[12px]" />
        </button>

        <div
          class="flex items-center gap-[8px] rounded-[999px] border border-[#ece8e1] bg-[#fbfaf7] px-[16px] py-[8px] text-[10px] font-light text-[#9a9aa0]"
        >
          <span>Task Inbox</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span>SER Review</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span class="text-[#6b6b73]">CL-2024-99810</span>
        </div>
      </div>
    </div>

    <section class="grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="card in summaryCards"
        :key="card.label"
        class="rounded-[10px] border border-[#ececec] bg-white px-[16px] py-[14px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.04)]"
      >
        <div class="border-l-[4px] border-[#f3d6aa] pl-[12px]">
          <p class="text-[11px] text-[#9a5b64]">{{ card.label }}</p>
          <p class="mt-[8px] text-[14px] font-medium text-[#171a1f]">{{ card.value }}</p>
        </div>
      </article>
    </section>

    <div class="flex flex-wrap items-center justify-between gap-[12px]">
      <h2 class="text-[16px] font-medium text-[#202224]">Session Information</h2>

      <div class="flex flex-wrap items-center gap-[8px]">
        <button
          type="button"
          class="inline-flex h-[28px] items-center rounded-[999px] border border-[#e5e7eb] bg-white px-[12px] text-[11px] text-[#202224] transition hover:bg-[#f7f7f7]"
        >
          Generate Agenda PDF
        </button>

        <div class="relative min-w-[118px]">
          <select
            v-model="sessionAction"
            class="h-[28px] w-full appearance-none rounded-[999px] border border-[#e5e7eb] bg-white px-[12px] pr-[28px] text-[11px] text-[#202224] outline-none transition focus:border-[#275227]"
          >
            <option v-for="option in sessionOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <ChevronDown
            class="pointer-events-none absolute right-[10px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 text-[#6b7280]"
          />
        </div>
      </div>
    </div>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[18px] font-medium text-[#202224] md:text-[20px]">Financial Assessment Summary</h2>
      </div>

      <div class="grid grid-cols-1 gap-[10px] md:grid-cols-2">
        <div
          v-for="row in financialRows"
          :key="row.label"
          class="grid gap-[10px] rounded-[6px] border border-[#e5e7eb] bg-[#f9faf8] px-[12px] py-[8px] sm:grid-cols-[200px_minmax(0,1fr)] sm:items-center"
        >
          <p class="text-[12px] text-[#171a1f]">{{ row.label }}</p>
          <div class="flex min-h-[28px] items-center rounded-[4px] border border-[#e6e6e6] bg-white px-[10px]">
            <span class="text-[12px] text-[#171a1f]">{{ row.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[18px] font-medium text-[#202224] md:text-[20px]">Basis Of Settlement</h2>
      </div>

      <div class="rounded-[6px] border border-[#ececec] bg-white px-[14px] py-[12px]">
        <p
          v-for="paragraph in basisOfSettlement"
          :key="paragraph"
          class="text-[11px] leading-[1.7] text-[#5d6168] not-last:mb-[10px]"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h2 class="text-[18px] font-medium text-[#202224] md:text-[20px]">Supporting Evidence</h2>
      </div>

      <div class="rounded-[6px] border border-[#f1ede4] bg-[#fffaf0] p-[12px]">
        <div class="grid grid-cols-1 gap-[10px] md:grid-cols-3">
          <div
            v-for="document in supportingEvidence"
            :key="document"
            class="flex h-[34px] items-center rounded-[4px] border border-[#ece6da] bg-white px-[10px] text-[11px] text-[#5d6168]"
          >
            <FileText class="mr-[6px] h-[12px] w-[12px] text-[#8a8b92]" />
            {{ document }}
          </div>
        </div>
      </div>
    </section>

    <div class="text-[16px] font-medium text-[#202224]">Reviewer Action</div>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h3 class="text-[18px] font-medium text-[#202224]">Reviewer Comments</h3>
      </div>

      <textarea
        v-model="reviewerComment"
        :maxlength="commentLimit"
        rows="5"
        placeholder="Enter any additional notes for the authorizing officer..."
        class="min-h-[116px] w-full rounded-[8px] border border-[#e5e7eb] bg-white px-[12px] py-[12px] text-[12px] text-[#5d6168] outline-none transition placeholder:text-[#a1a1aa] focus:border-[#275227]"
      ></textarea>
      <p class="mt-[8px] text-[10px] text-[#a1a1aa]">
        Mandatory if returning for revision. Characters remaining: {{ commentCharactersRemaining }}
      </p>
    </section>

    <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
      <div class="mb-[14px] flex items-center gap-[10px]">
        <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
        <h3 class="text-[18px] font-medium text-[#202224]">Decision</h3>
      </div>

      <div class="grid grid-cols-1 gap-[14px] md:grid-cols-2">
        <label
          class="cursor-pointer rounded-[6px] border border-[#efe9dd] bg-[#fffdf8] px-[18px] py-[20px] text-center transition"
          :class="reviewerDecision === 'approve' ? 'border-[#275227] shadow-[0_0_0_1px_rgba(39,82,39,0.06)]' : ''"
        >
          <input v-model="reviewerDecision" type="radio" value="approve" class="sr-only" />
          <div class="mx-auto mb-[12px] flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#4f4f58]">
            <span v-if="reviewerDecision === 'approve'" class="h-[6px] w-[6px] rounded-full bg-[#275227]"></span>
          </div>
          <p class="text-[12px] font-medium uppercase tracking-[0.02em] text-[#202224]">Approve SER</p>
          <p class="mt-[6px] text-[10px] text-[#7d7e87]">Settlement will proceed to payment authorization.</p>
        </label>

        <label
          class="cursor-pointer rounded-[6px] border border-[#efe9dd] bg-[#fffdf8] px-[18px] py-[20px] text-center transition"
          :class="reviewerDecision === 'return' ? 'border-[#275227] shadow-[0_0_0_1px_rgba(39,82,39,0.06)]' : ''"
        >
          <input v-model="reviewerDecision" type="radio" value="return" class="sr-only" />
          <div class="mx-auto mb-[12px] flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#4f4f58]">
            <span v-if="reviewerDecision === 'return'" class="h-[6px] w-[6px] rounded-full bg-[#275227]"></span>
          </div>
          <p class="text-[12px] font-medium text-[#202224]">Return for Revision</p>
          <p class="mt-[6px] text-[10px] text-[#7d7e87]">Report will be sent back to Assessing Officer.</p>
        </label>
      </div>

      <p class="mt-[10px] text-[10px] text-[#a1a1aa]">By submitting, you electronically sign this review decision.</p>
    </section>

    <div class="grid grid-cols-1 gap-[12px] md:grid-cols-2">
      <button
        type="button"
        class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#275227] text-[14px] font-medium text-white transition hover:bg-[#214721]"
        @click="cancelReview"
      >
        <RotateCcw class="h-[14px] w-[14px]" />
        Cancel Review
      </button>
      <button
        type="button"
        class="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-[4px] bg-[#da972e] text-[14px] font-medium text-white transition hover:bg-[#c38320]"
        @click="submitDecision"
      >
        <Send class="h-[14px] w-[14px]" />
        Submit Decision
      </button>
    </div>
  </main>
</template>
