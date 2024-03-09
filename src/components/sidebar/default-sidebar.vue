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
  <XyzTransition xyz="fade">
    <div
      v-if="sidebarPinia.state.sideBarStatus && sidebarPinia.state.appWidth < 800"
      @click="sidebarPinia.changeSideBarStatus()"
      class="sideBar-bg-mobile"
    ></div>
  </XyzTransition>
</template>
<style scoped>
.parent-sidebar {
  @apply h-full bg-white z-[990] w-0 transition-all duration-500 border-x border-[#E6EFF5];
}
.sidebar-width {
  width: clamp(250px, 100%, 250px) !important;
}
.logo {
  @apply flex justify-center items-center;
  height: clamp(100px, 100%, 100px);
}
.logo img {
  mix-blend-mode: difference !important;
  height: 100px;
}
.sideBar-bg-mobile {
  @apply backdrop-blur-md absolute w-screen h-dvh;
}
</style>
