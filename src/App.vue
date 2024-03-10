<script setup>
import { tools } from '@/store/tools'
///////////////////////////////
const toolsPinia = tools()
const observer = new ResizeObserver((entries) => {
  const { width: appWidth } = entries[0].contentRect
  toolsPinia.state.appWidth = appWidth
})
observer.observe(document.getElementById('app'))
</script>
<template>
  <RouterView />
</template>
