<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import AuthLayout from '@/layouts/auth.vue'

const layouts: Record<string, Component> = {
  default: DefaultLayout,
  auth: AuthLayout,
}

const route = useRoute()
const currentLayout = computed(
  () => layouts[(route.meta.layout as string) ?? 'default'] ?? DefaultLayout,
)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f4f7f4;
}
</style>
