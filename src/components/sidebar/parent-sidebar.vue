<script setup>
import SidebarLogo from './components/sidebar-logo.vue';
import { tools } from '@/store/tools'
import { computed } from 'vue'
////////////////////////////////
const toolsPinia = tools()
const sidebarClass = computed(() => {
  const classList = ['parent-sidebar']
  if (toolsPinia.state.appWidth < 700) {
    classList.push('absolute')
    if (toolsPinia.state.sideBarStatus) {
      classList.push('sidebar-width')
    }
  } else if (toolsPinia.state.sideBarStatus) {
    classList.push('sidebar-width')
  }
  return classList.join(' ')
})
const isMobileSidebarVisible = computed(() => {
  return toolsPinia.state.sideBarStatus && toolsPinia.state.appWidth < 700
})
</script>
<template>
  <div :class="sidebarClass">
    <!-- ////////////////////////// -->
    <SidebarLogo />
    <!-- ////////////////////////// -->
    <XyzTransition xyz="fade">
      <div
        @click="toolsPinia.changeSideBarStatus()"
        v-if="isMobileSidebarVisible"
        class="sideBar-bg-mobile"
      ></div>
    </XyzTransition>
    <!-- ////////////////////////// -->
  </div>
</template>
<style scoped>
.parent-sidebar {
  @apply h-full bg-white z-[990] w-0 transition-all duration-500 border-x border-[#E6EFF5];
}
.sidebar-width {
  width: clamp(250px, 100%, 250px) !important;
}
.sideBar-bg-mobile {
  @apply backdrop-blur-md absolute w-screen h-dvh;
}
</style>
