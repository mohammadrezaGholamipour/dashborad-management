<script setup>
import { sidebar } from '@/store/sidebar'
// ////////////////////////////
const sidebarPinia = sidebar()
const observer = new ResizeObserver((entries) => {
  const { width: appWidth } = entries[0].contentRect
  sidebarPinia.state.appWidth = appWidth
})
observer.observe(document.getElementById('app'))
</script>
<template>
  <RouterView />
</template>
