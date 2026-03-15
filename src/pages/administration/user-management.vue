<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileDown,
  MoreVertical,
  Search,
} from 'lucide-vue-next'

defineOptions({ name: 'UserManagementPage' })

const mfaEnabled = ref(false)
const accountStatus = ref<'active' | 'disabled'>('active')

const newUserForm = reactive({
  fullName: '',
  username: '',
  workPhone: '',
  workEmail: '',
  assignedUnit: '',
  systemRole: '',
  recommendation:
    'Property assessment matches legal deed documentation. Recommended for approval as per statutory limits for Flood Zone B compensation.',
})

const filters = reactive({
  search: '',
  status: '',
  unit: '',
  role: '',
})

const unitOptions = [
  { label: 'Select Unit', value: '' },
  { label: 'Executive Office', value: 'executive-office' },
  { label: 'Claims Review', value: 'claims-review' },
  { label: 'Fraud Detection', value: 'fraud-detection' },
  { label: 'Operations', value: 'operations' },
]

const roleOptions = [
  { label: 'Select Role', value: '' },
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Officer', value: 'officer' },
  { label: 'Auditor', value: 'auditor' },
  { label: 'Reviewer', value: 'reviewer' },
]

const filterStatusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Active', value: 'Active' },
  { label: 'Disabled', value: 'Disabled' },
]

const filterUnitOptions = [
  { label: 'All Units', value: '' },
  { label: 'Executive Office', value: 'executive-office' },
  { label: 'Claims Review', value: 'claims-review' },
  { label: 'Fraud Detection', value: 'fraud-detection' },
  { label: 'Operations', value: 'operations' },
]

const filterRoleOptions = [
  { label: 'All Roles', value: '' },
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Officer', value: 'officer' },
  { label: 'Auditor', value: 'auditor' },
  { label: 'Reviewer', value: 'reviewer' },
]

const users = [
  {
    name: 'Alexander Wright',
    handle: '@awright_admin',
    email: 'a.wright@cpis.gov',
    unit: 'Executive Office',
    role: 'Super Admin',
    status: 'Active',
    lastAccessDate: '2024-05-15',
    lastAccessTime: '08:42',
  },
  {
    name: 'Elena Rodriguez',
    handle: '@erodriguez_cl',
    email: 'e.rod@cpis.gov',
    unit: 'Claims Review',
    role: 'Officer',
    status: 'Active',
    lastAccessDate: '2024-05-15',
    lastAccessTime: '09:15',
  },
  {
    name: 'Marcus Thorne',
    handle: '@mthorne_fd',
    email: 'm.thorne@cpis.gov',
    unit: 'Fraud Detection',
    role: 'Auditor',
    status: 'Disabled',
    lastAccessDate: '2024-04-30',
    lastAccessTime: '14:20',
  },
  {
    name: 'Sarah Jenkins',
    handle: '@sjenkins_med',
    email: 's.jenkins@cpis.gov',
    unit: 'Executive Office',
    role: 'Super Admin',
    status: 'Active',
    lastAccessDate: '2024-05-14',
    lastAccessTime: '16:55',
  },
  {
    name: 'David Kim',
    handle: '@dkim_ops',
    email: 'd.kim@cpis.gov',
    unit: 'Operations',
    role: 'Reviewer',
    status: 'Active',
    lastAccessDate: '2024-05-15',
    lastAccessTime: '10:02',
  },
]

const inputClass =
  'h-[38px] w-full rounded-[6px] border border-[#ececec] bg-white px-[12px] text-[12px] text-[#4f4f58] outline-none transition placeholder:text-[#a1a1aa] focus:border-[#275227] focus:ring-1 focus:ring-[#275227]/10'

const selectClass =
  'h-[38px] w-full appearance-none rounded-[6px] border border-[#ececec] bg-white px-[12px] pr-[34px] text-[12px] text-[#4f4f58] outline-none transition focus:border-[#275227] focus:ring-1 focus:ring-[#275227]/10'

function statusColor(status: string) {
  if (status === 'Active') return 'bg-[#275227] text-white'
  return 'border border-[#d7d7dc] bg-white text-[#7d7e87]'
}
</script>

<template>
  <main class="flex flex-col gap-[22px] bg-[#f4f5f7] p-[20px] 2xl:p-[24px]">
    <div class="flex flex-wrap items-start justify-between gap-[12px]">
      <h1 class="text-[24px] font-medium text-[#202224] md:text-[30px]">User Management</h1>

      <div class="flex flex-wrap items-center justify-end gap-[10px]">
        <button
          type="button"
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[999px] bg-[#275227] px-[16px] text-[12px] font-medium text-white shadow-[0_8px_24px_rgba(39,82,39,0.16)] transition hover:bg-[#214721]"
        >
          <FileDown class="h-[13px] w-[13px]" />
          Export
        </button>

        <div
          class="flex items-center gap-[8px] rounded-[999px] border border-[#ece8e1] bg-[#fbfaf7] px-[16px] py-[8px] text-[10px] font-light text-[#9a9aa0]"
        >
          <span>Administration</span>
          <ChevronRight class="h-[10px] w-[10px]" />
          <span class="text-[#6b6b73]">User Management</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 items-start gap-[18px] xl:grid-cols-[320px_minmax(0,1fr)]">
      <section class="rounded-[12px] bg-white p-[18px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
        <div class="flex items-start justify-between gap-[10px]">
          <div>
            <div class="flex items-center gap-[10px]">
              <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
              <h2 class="text-[18px] font-medium text-[#275227] md:text-[20px]">Create New User</h2>
            </div>
            <p class="mt-[10px] max-w-[230px] text-[13px] leading-[1.5] text-[#5d6168]">
              Enter credentials and assign organizational permissions for new system access.
            </p>
          </div>

          <span class="rounded-[999px] bg-[#f7f7f7] px-[12px] py-[6px] text-[11px] text-[#6a6c71]">New Profile</span>
        </div>

        <div class="mt-[22px] space-y-[20px]">
          <div>
            <div class="mb-[12px] border-b border-[#d8d8dc] pb-[8px] text-[13px] font-medium text-[#202224]">
              Account Details
            </div>

            <div class="space-y-[12px]">
              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="full-name" class="text-[12px] text-[#202224]">Full Large Name</label>
                <input
                  id="full-name"
                  v-model="newUserForm.fullName"
                  type="text"
                  placeholder="e.g. Johnathan"
                  :class="inputClass"
                />
              </div>

              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="username" class="text-[12px] text-[#202224]">Username</label>
                <input
                  id="username"
                  v-model="newUserForm.username"
                  type="text"
                  placeholder="jdoe_admin"
                  :class="inputClass"
                />
              </div>

              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="work-phone" class="text-[12px] text-[#202224]">Work Phone</label>
                <input
                  id="work-phone"
                  v-model="newUserForm.workPhone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  :class="inputClass"
                />
              </div>

              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="work-email" class="text-[12px] text-[#202224]">Work Email Address</label>
                <input
                  id="work-email"
                  v-model="newUserForm.workEmail"
                  type="email"
                  placeholder="johnathan@cpis.gov"
                  :class="inputClass"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-[12px] border-b border-[#d8d8dc] pb-[8px] text-[13px] font-medium text-[#202224]">
              Assignment And Security
            </div>

            <div class="space-y-[12px]">
              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="assigned-unit" class="text-[12px] text-[#202224]">Assigned Unit</label>
                <div class="relative">
                  <select id="assigned-unit" v-model="newUserForm.assignedUnit" :class="selectClass">
                    <option v-for="option in unitOptions" :key="option.value || option.label" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                  <ChevronDown
                    class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
                  />
                </div>
              </div>

              <div
                class="grid gap-[10px] rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[10px] sm:grid-cols-[108px_minmax(0,1fr)] sm:items-center"
              >
                <label for="system-role" class="text-[12px] text-[#202224]">System Role</label>
                <div class="relative">
                  <select id="system-role" v-model="newUserForm.systemRole" :class="selectClass">
                    <option v-for="option in roleOptions" :key="option.value || option.label" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                  <ChevronDown
                    class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
                  />
                </div>
              </div>

              <div class="rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[12px]">
                <p class="mb-[10px] text-[12px] text-[#202224]">Account Status</p>
                <div class="flex flex-wrap items-center gap-x-[20px] gap-y-[8px] text-[12px] text-[#202224]">
                  <label class="inline-flex items-center gap-[6px]">
                    <input
                      v-model="accountStatus"
                      type="radio"
                      value="active"
                      class="h-[13px] w-[13px] accent-[#275227]"
                    />
                    <span>Active</span>
                  </label>
                  <label class="inline-flex items-center gap-[6px]">
                    <input
                      v-model="accountStatus"
                      type="radio"
                      value="disabled"
                      class="h-[13px] w-[13px] accent-[#275227]"
                    />
                    <span>Disabled</span>
                  </label>
                </div>
              </div>

              <div class="rounded-[6px] border border-[#f0f0f0] bg-[#faf8f3] p-[12px]">
                <div class="flex items-center justify-between gap-[12px]">
                  <div>
                    <p class="text-[12px] text-[#202224]">MFA Required</p>
                    <p class="mt-[2px] text-[10px] text-[#8a8b92]">Enforce Multi-Factor Authentication</p>
                  </div>
                  <button
                    type="button"
                    class="relative h-[18px] w-[34px] rounded-[999px] transition"
                    :class="mfaEnabled ? 'bg-[#275227]' : 'bg-[#6b7280]'"
                    @click="mfaEnabled = !mfaEnabled"
                  >
                    <span
                      class="absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition"
                      :class="mfaEnabled ? 'left-[18px]' : 'left-[2px]'"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label for="recommendation" class="mb-[8px] block text-[13px] font-medium text-[#202224]">
              Recommendation Note/Rationalization
            </label>
            <textarea
              id="recommendation"
              v-model="newUserForm.recommendation"
              rows="5"
              class="w-full rounded-[6px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] text-[12px] leading-[1.5] text-[#5d6168] outline-none transition focus:border-[#275227] focus:ring-1 focus:ring-[#275227]/10"
            ></textarea>
          </div>
        </div>

        <div class="mt-[18px] grid grid-cols-2 gap-[12px]">
          <button
            type="button"
            class="inline-flex h-[40px] items-center justify-center rounded-[4px] bg-[#275227] text-[14px] font-medium text-white transition hover:bg-[#214721]"
          >
            Discard
          </button>
          <button
            type="button"
            class="inline-flex h-[40px] items-center justify-center rounded-[4px] bg-[#da972e] text-[14px] font-medium text-white transition hover:bg-[#c38320]"
          >
            Create User
          </button>
        </div>
      </section>

      <div class="flex flex-col gap-[18px]">
        <section class="rounded-[12px] bg-white p-[12px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
          <div class="grid grid-cols-1 gap-[12px]">
            <div
              class="grid gap-[10px] rounded-[8px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] lg:grid-cols-[96px_minmax(0,1fr)] lg:items-center"
            >
              <label for="search-user" class="text-[12px] text-[#202224]">Search User</label>
              <div class="flex h-[38px] items-center gap-[8px] rounded-[6px] border border-[#ececec] bg-white px-[10px]">
                <Search class="h-[14px] w-[14px] text-[#6a6c71]" />
                <input
                  id="search-user"
                  v-model="filters.search"
                  type="text"
                  placeholder="Name, Email or Username.."
                  class="w-full bg-transparent text-[12px] text-[#5d6168] outline-none placeholder:text-[#a1a1aa]"
                />
              </div>
            </div>

            <div
              class="grid gap-[10px] rounded-[8px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] lg:grid-cols-[96px_minmax(0,1fr)] lg:items-center"
            >
              <label for="filter-status" class="text-[12px] text-[#202224]">Status</label>
              <div class="relative">
                <select id="filter-status" v-model="filters.status" :class="selectClass">
                  <option v-for="option in filterStatusOptions" :key="option.value || option.label" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <ChevronDown
                  class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
                />
              </div>
            </div>

            <div
              class="grid gap-[10px] rounded-[8px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] lg:grid-cols-[96px_minmax(0,1fr)] lg:items-center"
            >
              <label for="filter-unit" class="text-[12px] text-[#202224]">Unit/Desk</label>
              <div class="relative">
                <select id="filter-unit" v-model="filters.unit" :class="selectClass">
                  <option v-for="option in filterUnitOptions" :key="option.value || option.label" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <ChevronDown
                  class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
                />
              </div>
            </div>

            <div
              class="grid gap-[10px] rounded-[8px] border border-[#ececec] bg-[#faf8f3] px-[12px] py-[10px] lg:grid-cols-[96px_minmax(0,1fr)] lg:items-center"
            >
              <label for="filter-role" class="text-[12px] text-[#202224]">System Role</label>
              <div class="relative">
                <select id="filter-role" v-model="filters.role" :class="selectClass">
                  <option v-for="option in filterRoleOptions" :key="option.value || option.label" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <ChevronDown
                  class="pointer-events-none absolute right-[10px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[#6a6c71]"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-[12px] bg-white p-[16px] shadow-[8px_8px_72px_0px_rgba(0,0,0,0.05)]">
          <div class="mb-[16px] flex items-center gap-[10px]">
            <div class="h-[22px] w-[4px] rounded-br-[5px] rounded-tr-[5px] bg-[#275227]"></div>
            <h2 class="text-[18px] font-medium text-[#275227] md:text-[20px]">Property Information</h2>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full min-w-[900px]">
              <thead>
                <tr class="border-b border-[#efefef] bg-white">
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">
                    User Details
                  </th>
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">Unit</th>
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">Role</th>
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">Status</th>
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">
                    Last Access
                  </th>
                  <th class="px-[12px] py-[10px] text-left text-[10px] font-medium uppercase text-[#4f4f58]">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="user in users" :key="`${user.name}-${user.handle}`" class="border-b border-[#f3f3f3]">
                  <td class="px-[12px] py-[13px]">
                    <p class="text-[14px] text-[#4f4f58]">{{ user.name }}</p>
                    <p class="text-[11px] leading-[1.4] text-[#8a8b92]">{{ user.handle }}</p>
                    <p class="text-[11px] leading-[1.4] text-[#8a8b92]">{{ user.email }}</p>
                  </td>
                  <td class="px-[12px] py-[13px] text-[14px] leading-[1.35] text-[#4f4f58]">{{ user.unit }}</td>
                  <td class="px-[12px] py-[13px]">
                    <span
                      class="inline-flex rounded-[999px] border border-[#d9d9de] bg-white px-[10px] py-[3px] text-[10px] text-[#6a6c71]"
                    >
                      {{ user.role }}
                    </span>
                  </td>
                  <td class="px-[12px] py-[13px]">
                    <span
                      class="inline-flex rounded-[999px] px-[12px] py-[3px] text-[10px] font-medium"
                      :class="statusColor(user.status)"
                    >
                      {{ user.status }}
                    </span>
                  </td>
                  <td class="px-[12px] py-[13px] text-[14px] leading-[1.35] text-[#4f4f58]">
                    <div>{{ user.lastAccessDate }}</div>
                    <div>{{ user.lastAccessTime }}</div>
                  </td>
                  <td class="px-[12px] py-[13px]">
                    <div class="flex items-center gap-[8px]">
                      <button
                        type="button"
                        class="inline-flex h-[24px] w-[24px] items-center justify-center rounded-[999px] border border-[#ececec] text-[#6a6c71] transition hover:bg-[#f7f7f7]"
                      >
                        <Eye class="h-[12px] w-[12px]" />
                      </button>
                      <button
                        type="button"
                        class="inline-flex h-[24px] w-[24px] items-center justify-center rounded-[999px] bg-[#e8f2e8] text-[#275227] transition hover:bg-[#dbe8db]"
                      >
                        <Download class="h-[12px] w-[12px]" />
                      </button>
                      <button
                        type="button"
                        class="inline-flex h-[24px] w-[24px] items-center justify-center rounded-[999px] text-[#6a6c71] transition hover:bg-[#f7f7f7]"
                      >
                        <MoreVertical class="h-[12px] w-[12px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-[14px] flex flex-wrap items-center justify-between gap-[10px] text-[11px] text-[#a1a1aa]">
            <span>Showing 1 to 5 of 5 entries</span>

            <div class="flex items-center gap-[10px]">
              <span>Page 1 of 12</span>
              <div class="flex items-center gap-[6px]">
                <button
                  type="button"
                  class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
                >
                  <ChevronLeft class="h-[12px] w-[12px]" />
                </button>
                <button
                  type="button"
                  class="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#e5e7eb] bg-white text-[#8a8b92]"
                >
                  <ChevronRight class="h-[12px] w-[12px]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
