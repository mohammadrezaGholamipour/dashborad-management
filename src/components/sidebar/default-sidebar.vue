<script setup>
import { sidebar } from '@/store/sidebar'
import { computed } from 'vue'
// ////////////////////////////
const sidebarPinia = sidebar()
const sidebarClass = computed(() => {
  if (sidebarPinia.state.sideBarStatus) {
    return 'parent-sidebar sidebar-width'
  } else {
    return 'parent-sidebar'
  }
})
</script>
<template>
  <div :class="sidebarClass">
    <div class="logo">
      <img src="@/assets/images/logo/logo.png" />
    </div>
  </div>
</template>
<style scoped>
.parent-sidebar {
  @apply h-full w-0 transition-all duration-500 border-x border-[#E6EFF5];
}
.sidebar-width {
  width: clamp(250px, 100%, 250px) !important;
}
.logo {
  @apply flex  justify-center items-center;
  height: clamp(100px, 100%, 100px);
}
.logo img {
  mix-blend-mode: difference;
  height: 100px;
}
</style>
