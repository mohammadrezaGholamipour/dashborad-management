<script setup>
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
  <!-- ////////////////////////// -->
  <div :class="sidebarClass">
    <div class="logo">
      <img class="animate-pulse" src="@/assets/images/logo/logo.png" />
    </div>
  </div>
  <!-- ////////////////////////// -->
  <XyzTransition xyz="fade">
    <div
      @click="toolsPinia.changeSideBarStatus()"
      v-if="isMobileSidebarVisible"
      class="sideBar-bg-mobile"
    ></div>
  </XyzTransition>
  <!-- ////////////////////////// -->
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
