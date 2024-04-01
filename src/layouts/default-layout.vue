<script setup>
import ParentSidebar from '@/components/sidebar/parent-sidebar.vue'
import DefaultHeader from '@/components/header/default-header.vue'
import { tools } from '@/store/tools'
import { ref } from 'vue'
/////////////////////////////
const toolsPinia = tools()
const touchStartX = ref(0)
const minSwipeDistance = 50
///////////////////////////
const onTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

const onTouchMove = (event) => {
  const touchCurrentX = event.touches[0].clientX
  const swipeDistance = touchCurrentX - touchStartX.value
  if (swipeDistance > minSwipeDistance && !toolsPinia.state.sideBarStatus) {
    toolsPinia.changeSideBarStatus(true)
  }
  if (swipeDistance < -minSwipeDistance && toolsPinia.state.sideBarStatus) {
    toolsPinia.changeSideBarStatus(false)
  }
}

const onTouchEnd = () => {
  touchStartX.value = 0
}
</script>
<template>
  <div
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend.passive="onTouchEnd"
    class="parent-layout"
  >
    <ParentSidebar />
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
