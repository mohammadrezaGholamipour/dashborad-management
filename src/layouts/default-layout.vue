<script setup>
import DefaultSidebar from '@/components/sidebar/default-sidebar.vue'
import DefaultHeader from '@/components/header/default-header.vue'
</script>
<template>
  <div class="parent-layout">
    <DefaultSidebar />
    <div class="header-and-header">
      <DefaultHeader />
      <RouterView class="main" />
    </div>
  </div>
</template>
<style scoped>
.parent-layout {
  @apply bg-white flex justify-start items-start w-screen h-screen;
}
.header-and-header {
  @apply w-full flex flex-col justify-start items-start h-full;
}
.main {
  @apply w-full h-full p-3;
}
</style>
