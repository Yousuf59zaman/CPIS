<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, Eye, Download, Upload, ArrowRight } from 'lucide-vue-next'

defineOptions({ name: 'InspectionReviewPage' })

const activeTab = ref<'valid' | 'discrepant' | 'reviewed'>('valid')
const endorsementDecision = ref<'endorse' | 'investigate' | null>(null)

const categories = [
  { label: 'Structural Damage', checked: true },
  { label: 'Roof Damage', checked: true },
  { label: 'Flooding / Water Damage', checked: false },
  { label: 'Electrical Damage', checked: false },
]

const checklist = [
  { item: 'Inspection Documentation Complete', status: 'Verified', statusColor: 'green' },
  { item: 'Property Boundaries Confirmed', status: 'Verified', statusColor: 'green' },
  { item: 'Photographic Evidence Attached', status: 'Verified', statusColor: 'green' },
  { item: 'Assessment Form Signed', status: 'Pending', statusColor: 'orange' },
]

const attachments = [
  { name: "Driver's License.pdf", category: 'Inspection Report', severity: '' },
  { name: 'Barangay Certificate.pdf', category: 'Damage Photo', severity: 'Major' },
  { name: 'Property Photos.cip', category: 'Damage Photo', severity: 'Major' },
]
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <!-- Header -->
    <div class="flex items-start justify-between flex-wrap gap-[8px]">
      <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">Inspection Review And Endorsement</h1>
      <nav class="text-[12px] text-[#9ca3af] flex items-center gap-[6px]">
        <span>Dashboard</span><span>›</span><span>Claims List</span><span>›</span>
        <span class="text-[#374151] font-medium">Inspection Review</span>
      </nav>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
      <!-- Claim Summary -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center gap-[10px] mb-[14px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Claim Summary</h2>
        </div>
        <div class="grid grid-cols-2 gap-[8px]">
          <div v-for="f in [
            { label: 'Claim ID', value: 'CP-00101' },
            { label: 'Claimant Name', value: 'John Smith' },
            { label: 'Property Location', value: 'Bgry Lumbac, Marawi' },
            { label: 'Claim Type', value: 'Structural' },
            { label: 'Date Inspection', value: '10 January 2025' },
            { label: 'Assigned Inspectors', value: 'Carlos Reyes' },
          ]" :key="f.label">
            <div>
              <p class="text-[10px] text-[#6b7280]">{{ f.label }}</p>
              <div class="px-[9px] py-[6px] border border-[#e5e7eb] rounded-[5px] bg-[#f9fafb] mt-[3px]">
                <span class="text-[12px] text-[#374151]">{{ f.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Inspection Assessment -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center gap-[10px] mb-[10px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Inspection Assessment</h2>
        </div>
        <div class="flex border-b border-[#e5e7eb] mb-[12px]">
          <button v-for="t in ['valid','discrepant','reviewed']" :key="t" @click="activeTab = t as any"
            class="px-[12px] py-[7px] text-[11px] font-medium border-b-2 capitalize transition-colors"
            :class="activeTab === t ? 'border-[#224e22] text-[#224e22]' : 'border-transparent text-[#6b7280]'">
            {{ t }}
          </button>
        </div>
        <!-- Findings -->
        <p class="text-[11px] font-semibold text-[#374151] mb-[6px]">Findings</p>
        <ul class="text-[11px] text-[#6b7280] space-y-[4px] mb-[12px]">
          <li>• Significant structural damage on the second floor.</li>
          <li>• Cracks in the walls and ceilings.</li>
          <li>• One collapsed section of the roof.</li>
        </ul>
        <!-- Damage Categories -->
        <p class="text-[11px] font-semibold text-[#374151] mb-[6px]">Damage Categories</p>
        <div class="grid grid-cols-2 gap-[6px] mb-[12px]">
          <label v-for="cat in categories" :key="cat.label" class="flex items-center gap-[6px] text-[11px] text-[#374151]">
            <input type="checkbox" :checked="cat.checked" class="w-[12px] h-[12px] accent-[#224e22]" />
            {{ cat.label }}
          </label>
        </div>
        <!-- Estimated Severity -->
        <p class="text-[11px] font-semibold text-[#374151] mb-[6px]">Estimated Severity</p>
        <div class="space-y-[8px]">
          <div v-for="doc in attachments" :key="doc.name" class="flex items-center gap-[8px]">
            <button class="flex-1 flex items-center justify-between text-[11px] text-[#374151] border border-[#e5e7eb] rounded-[5px] px-[8px] py-[5px] hover:bg-[#f3f4f6]">
              📄 {{ doc.name }} <ChevronDown class="w-[12px] h-[12px] text-[#6b7280]" />
            </button>
            <select class="text-[11px] border border-[#e5e7eb] rounded-[5px] px-[6px] py-[5px] text-[#374151] outline-none">
              <option>Major</option><option>Minor</option><option>Moderate</option><option>Critical</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspection Review Checklist -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Inspection Review Checklist</h2>
      </div>
      <table class="w-full">
        <thead>
          <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Checklist Item</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Status</th>
            <th class="px-[12px] py-[9px] text-[10px] font-medium text-[#6b7280] uppercase text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in checklist" :key="row.item" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
            <td class="px-[12px] py-[10px] text-[12px] text-[#374151]">{{ row.item }}</td>
            <td class="px-[12px] py-[10px]">
              <span class="px-[8px] py-[2px] rounded-full text-[10px] font-medium"
                :class="row.statusColor === 'green' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#fed7aa] text-[#9a3412]'">
                {{ row.status }}
              </span>
            </td>
            <td class="px-[12px] py-[10px]">
              <button class="flex items-center gap-[4px] text-[11px] text-[#374151] border border-[#e5e7eb] rounded-[5px] px-[8px] py-[4px] hover:bg-[#f3f4f6]">
                Review <ChevronDown class="w-[10px] h-[10px]" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Decision and Endorsement Panel -->
    <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
      <div class="flex items-center gap-[10px] mb-[14px]">
        <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
        <h2 class="text-[16px] font-semibold text-[#171a1f]">Decision and Endorsement Panel</h2>
      </div>
      <div class="flex flex-col gap-[10px] mb-[16px]">
        <label class="flex items-start gap-[10px] p-[12px] border rounded-[8px] cursor-pointer transition-colors"
          :class="endorsementDecision === 'endorse' ? 'border-[#224e22] bg-[#f0f4f0]' : 'border-[#e5e7eb]'">
          <input type="radio" v-model="endorsementDecision" value="endorse" class="mt-[1px] accent-[#224e22]" />
          <div>
            <p class="text-[12px] font-semibold text-[#171a1f]">Endorse for Legal Evaluation</p>
            <p class="text-[11px] text-[#6b7280]">Inspection findings are complete and verified. Forward to legal team for review.</p>
          </div>
        </label>
        <label class="flex items-start gap-[10px] p-[12px] border rounded-[8px] cursor-pointer transition-colors"
          :class="endorsementDecision === 'investigate' ? 'border-[#d97706] bg-[#fffbeb]' : 'border-[#e5e7eb]'">
          <input type="radio" v-model="endorsementDecision" value="investigate" class="mt-[1px] accent-[#d97706]" />
          <div>
            <p class="text-[12px] font-semibold text-[#171a1f]">Require Further Investigation</p>
            <p class="text-[11px] text-[#6b7280]">Additional inspection or documentation is needed before endorsement.</p>
          </div>
        </label>
      </div>
      <p class="text-[12px] font-medium text-[#374151] mb-[6px]">Endorsement Comments</p>
      <textarea rows="4" placeholder="Add comments or notes regarding the endorsement decision..." class="w-full text-[12px] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[10px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af]"></textarea>
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-[12px]">
      <button class="flex-1 py-[12px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[14px] font-semibold rounded-[8px] transition-colors">
        Request Additional Documents
      </button>
      <button class="flex-1 py-[12px] bg-[#d97706] hover:bg-[#b45309] text-white text-[14px] font-semibold rounded-[8px] transition-colors flex items-center justify-center gap-[8px]">
        <ArrowRight class="w-[15px] h-[15px]" /> Send Back for Further Investigation
      </button>
    </div>
  </main>
</template>
