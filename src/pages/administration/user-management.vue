<script setup lang="ts">
import { ref } from 'vue'
import { Eye, Search, FileDown } from 'lucide-vue-next'

defineOptions({ name: 'UserManagementPage' })

const mfaEnabled = ref(true)
const activeRadio = ref<'active' | 'disabled'>('active')

const users = [
  { name: 'Maria Santos', email: 'm.santos@cpis.gov.ph', username: 'msantos', unit: 'Legal Division', role: 'Legal Reviewer', status: 'Active', lastAccess: '23-Jan-2025' },
  { name: 'Carlos Reyes', email: 'c.reyes@cpis.gov.ph', username: 'creyes', unit: 'OI Team', role: 'Inspector', status: 'Active', lastAccess: '22-Jan-2025' },
  { name: 'Ana Garcia', email: 'a.garcia@cpis.gov.ph', username: 'agarcia', unit: 'Finance Division', role: 'SER Officer', status: 'Inactive', lastAccess: '15-Jan-2025' },
  { name: 'Juan Buena', email: 'j.buena@cpis.gov.ph', username: 'jbuena', unit: 'Admin', role: 'Administrator', status: 'Active', lastAccess: '23-Jan-2025' },
]

function statusColor(s: string) {
  return s === 'Active' ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-[#fce7e7] text-[#c53030]'
}
</script>

<template>
  <main class="flex flex-col gap-[16px] 2xl:gap-[20px] p-[20px] 2xl:p-[24px]">
    <h1 class="text-[22px] 2xl:text-[24px] font-semibold text-[#171a1f]">User Management</h1>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-[16px] items-start">
      <!-- Create New User Form -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center gap-[10px] mb-[16px]">
          <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
          <h2 class="text-[16px] font-semibold text-[#171a1f]">Create New User</h2>
        </div>

        <!-- Account Details -->
        <p class="text-[11px] font-semibold text-[#374151] uppercase tracking-wide mb-[10px]">Account Details</p>
        <div class="grid grid-cols-2 gap-[8px] mb-[14px]">
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Full Name</label>
            <input type="text" placeholder="Juan Dela Cruz" class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none focus:border-[#224e22] text-[#374151]" />
          </div>
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Username</label>
            <input type="text" placeholder="jdelacruz" class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none focus:border-[#224e22] text-[#374151]" />
          </div>
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Work Phone</label>
            <input type="tel" placeholder="+63 9XX XXX XXXX" class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none focus:border-[#224e22] text-[#374151]" />
          </div>
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Work Email</label>
            <input type="email" placeholder="user@cpis.gov.ph" class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none focus:border-[#224e22] text-[#374151]" />
          </div>
        </div>

        <!-- Assignment & Security -->
        <p class="text-[11px] font-semibold text-[#374151] uppercase tracking-wide mb-[10px]">Assignment &amp; Security</p>
        <div class="space-y-[8px] mb-[14px]">
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Assigned Unit</label>
            <select class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none text-[#374151]">
              <option>Select unit...</option>
              <option>Legal Division</option>
              <option>OI Team</option>
              <option>Finance Division</option>
              <option>Administration</option>
            </select>
          </div>
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">System Role</label>
            <select class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] px-[9px] py-[7px] outline-none text-[#374151]">
              <option>Select role...</option>
              <option>Administrator</option>
              <option>Legal Reviewer</option>
              <option>Inspector</option>
              <option>SER Officer</option>
              <option>Finance Officer</option>
            </select>
          </div>
          <div>
            <label class="text-[11px] text-[#6b7280] block mb-[4px]">Account Status</label>
            <div class="flex gap-[14px]">
              <label class="flex items-center gap-[6px] cursor-pointer">
                <input type="radio" v-model="activeRadio" value="active" class="w-[12px] h-[12px] accent-[#224e22]" />
                <span class="text-[11px] text-[#374151]">Active</span>
              </label>
              <label class="flex items-center gap-[6px] cursor-pointer">
                <input type="radio" v-model="activeRadio" value="disabled" class="w-[12px] h-[12px] accent-[#224e22]" />
                <span class="text-[11px] text-[#374151]">Disabled</span>
              </label>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <label class="text-[11px] text-[#374151]">Multi-Factor Authentication (MFA)</label>
            <button @click="mfaEnabled = !mfaEnabled" class="w-[38px] h-[20px] rounded-full transition-colors relative flex-shrink-0" :class="mfaEnabled ? 'bg-[#224e22]' : 'bg-[#d1d5db]'">
              <span class="absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full shadow transition-all" :class="mfaEnabled ? 'left-[20px]' : 'left-[2px]'"></span>
            </button>
          </div>
        </div>

        <!-- Notes -->
        <label class="text-[11px] text-[#6b7280] block mb-[4px]">Notes</label>
        <textarea rows="3" placeholder="Optional notes about this user..." class="w-full text-[11px] border border-[#e5e7eb] rounded-[7px] px-[9px] py-[7px] outline-none focus:border-[#224e22] resize-none text-[#374151] placeholder-[#9ca3af] mb-[14px]"></textarea>

        <!-- CTA -->
        <div class="flex gap-[8px]">
          <button class="flex-1 py-[9px] bg-[#374151] hover:bg-[#1f2937] text-white text-[12px] font-medium rounded-[7px] transition-colors">Discard</button>
          <button class="flex-1 py-[9px] bg-[#d97706] hover:bg-[#b45309] text-white text-[12px] font-medium rounded-[7px] transition-colors">Create User</button>
        </div>
      </div>

      <!-- Search & User List -->
      <div class="bg-white rounded-[12px] border border-[#f0f0f0] shadow-sm p-[20px]">
        <div class="flex items-center justify-between mb-[14px]">
          <div class="flex items-center gap-[10px]">
            <div class="w-[4px] h-[18px] bg-[#224e22] rounded-full"></div>
            <h2 class="text-[16px] font-semibold text-[#171a1f]">User List</h2>
          </div>
          <button class="flex items-center gap-[5px] px-[12px] py-[6px] bg-[#1d4a1d] hover:bg-[#163a16] text-white text-[11px] font-medium rounded-[6px] transition-colors">
            <FileDown class="w-[11px] h-[11px]" /> Export
          </button>
        </div>

        <!-- Search input -->
        <div class="relative mb-[10px]">
          <Search class="absolute left-[9px] top-1/2 -translate-y-1/2 w-[13px] h-[13px] text-[#9ca3af]" />
          <input type="text" placeholder="Search users..." class="w-full text-[11px] border border-[#e5e7eb] rounded-[6px] pl-[28px] pr-[9px] py-[7px] outline-none focus:border-[#224e22] text-[#374151]" />
        </div>

        <!-- Filter dropdowns -->
        <div class="grid grid-cols-2 gap-[6px] mb-[12px]">
          <select class="text-[11px] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[6px] outline-none text-[#374151]">
            <option>All Statuses</option><option>Active</option><option>Inactive</option>
          </select>
          <select class="text-[11px] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[6px] outline-none text-[#374151]">
            <option>All Units</option><option>Legal Division</option><option>OI Team</option><option>Finance</option>
          </select>
          <select class="text-[11px] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[6px] outline-none text-[#374151]">
            <option>All Desks</option>
          </select>
          <select class="text-[11px] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[6px] outline-none text-[#374151]">
            <option>All Roles</option><option>Administrator</option><option>Legal Reviewer</option><option>Inspector</option>
          </select>
        </div>

        <!-- User list table -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-[400px]">
            <thead>
              <tr class="border-b border-[#f0f0f0] bg-[#fafafa]">
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">User Details</th>
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">Unit</th>
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">Role</th>
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">Status</th>
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">Last Access</th>
                <th class="px-[10px] py-[8px] text-[9px] font-medium text-[#6b7280] uppercase text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in users" :key="u.username" class="border-b border-[#f8f9fa] hover:bg-[#fafafa]">
                <td class="px-[10px] py-[9px]">
                  <p class="text-[11px] font-semibold text-[#374151]">{{ u.name }}</p>
                  <p class="text-[10px] text-[#9ca3af]">{{ u.email }}</p>
                  <p class="text-[10px] text-[#9ca3af]">@{{ u.username }}</p>
                </td>
                <td class="px-[10px] py-[9px] text-[11px] text-[#374151]">{{ u.unit }}</td>
                <td class="px-[10px] py-[9px] text-[11px] text-[#374151]">{{ u.role }}</td>
                <td class="px-[10px] py-[9px]"><span class="px-[7px] py-[2px] rounded-full text-[9px] font-medium" :class="statusColor(u.status)">{{ u.status }}</span></td>
                <td class="px-[10px] py-[9px] text-[10px] text-[#6b7280]">{{ u.lastAccess }}</td>
                <td class="px-[10px] py-[9px]"><button class="text-[#6b7280] hover:text-[#374151]"><Eye class="w-[12px] h-[12px]" /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
