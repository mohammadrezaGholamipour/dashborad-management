<script setup>
import { sidebar } from '@/store/sidebar'
import { tools } from '@/store/tools'
import { computed } from 'vue'
// ////////////////////////////
const sidebarPinia = sidebar()
const toolsPinia = tools()
const sidebarClass = computed(() => {
  if (sidebarPinia.state.sideBarStatus) {
    if (toolsPinia.appWidth < 500) {
      return 'parent-sidebar sidebar-width absolute'
    } else {
      return 'parent-sidebar sidebar-width'
    }
  } else {
    return 'parent-sidebar'
  }
})
const test = () => {
  const observer = new ResizeObserver((entries) => {
    const { width } = entries[0].contentRect
    return width
  })
  observer.observe(document.getElementById('app'))
  console.log(document.getElementById('app'))
}
console.log(test())
</script>
<template>
  <p>{{ test }}dfsfsdfsddf</p>
  <div :class="sidebarClass">
    <div class="logo absolute">
      <img class="animate-pulse" src="@/assets/images/logo/logo.png" />
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
  @apply flex justify-center items-center;
  height: clamp(100px, 100%, 100px);
}
.logo img {
  mix-blend-mode: difference;
  height: 100px;
}
</style>
