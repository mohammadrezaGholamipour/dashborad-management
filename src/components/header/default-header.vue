<script setup>
import { sidebar } from '@/store/sidebar'
// ////////////////////////////
const sidebarPinia = sidebar()
</script>
<template>
  <div class="parent-header">
    <img
      @click="sidebarPinia.changeSideBarStatus()"
      src="@/assets/images/icon/sideBar.svg"
      class="cursor-pointer"
    />
  </div>
</template>
<style scoped>
.parent-header {
  @apply w-full p-3 min-h-[100px] flex justify-start items-center border-b border-[#E6EFF5];
}
</style>
@/store/sidebar
