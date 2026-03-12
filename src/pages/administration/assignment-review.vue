<script setup lang="ts">
defineOptions({ name: 'AssignmentReviewPage' })

const results = [
  { claimId: 'CP-00101', officer: 'Atty. Maria Santos', timestamp: '24-Jan-2025 09:05 AM', state: 'New Assignment' },
  { claimId: 'CP-00102', officer: 'Dir. Carlos Buena', timestamp: '24-Jan-2025 09:05 AM', state: 'New Assignment' },
  { claimId: 'CP-00103', officer: 'Atty. Ana Garcia', timestamp: '24-Jan-2025 09:05 AM', state: 'New Assignment' },
  { claimId: 'CP-00104', officer: 'Atty. Maria Santos', timestamp: '24-Jan-2025 09:05 AM', state: 'New Assignment' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Success Banner -->
    <div class="bg-[#d1fae5] border border-[#a7f3d0] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[12px]">
      <div class="w-[32px] h-[32px] rounded-full bg-[#16a34a] flex items-center justify-center flex-shrink-0">
        <span class="text-white text-[16px]">✓</span>
      </div>
      <div>
        <h2 class="text-[15px] font-bold text-[#065f46]">Raffling Completed Successfully</h2>
        <p class="text-[12px] text-[#047857]">All cases have been automatically assigned to available SER Officers based on workload distribution.</p>
      </div>
    </div>

    <!-- Batch Info -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Batch Information</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
        <div v-for="f in [
          { label: 'Batch ID', value: 'RB-2025-05' },
          { label: 'Execution Date', value: '24 January 2025 — 09:05 AM' },
          { label: 'Executed By', value: 'System (Automated)' },
        ]" :key="f.label">
          <p class="text-[10px] text-[#6b7280] mb-[3px]">{{ f.label }}</p>
          <div class="border border-[#e5e7eb] rounded-[6px] px-[10px] py-[7px] bg-[#f9fafb]">
            <span class="text-[12px] text-[#374151]">{{ f.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Raffling Results -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center justify-between mb-[14px]">
        <div class="flex items-center gap-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Raffling Results</h2>
        </div>
        <span class="px-[10px] py-[3px] bg-[#dbeafe] text-[#1e40af] text-[11px] font-medium rounded-full">
          Batch Size: {{ results.length }}
        </span>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Claim ID</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Assigned SER Officer</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Assignment Timestamp</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Verification State</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in results" :key="r.claimId" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] font-medium text-[#1d4a1d]">{{ r.claimId }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ r.officer }}</td>
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ r.timestamp }}</td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[10px] py-[3px] bg-[#1d4a1d] text-white text-[10px] font-medium rounded-[4px]">{{ r.state }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
        Cancel &amp; Re-run
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
        Confirm Assignment
      </button>
    </div>
  </main>
</template>
