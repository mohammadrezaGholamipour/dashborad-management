<script setup>
import { sidebar } from '@/store/sidebar'
import { ref, watch } from 'vue'
// ////////////////////////////
const sidebarPinia = sidebar()
const sideBar = ref(null)
// const sidebarClass = computed(() => {
//   if (sidebarPinia.state.sideBarStatus) {
//     if (sidebarPinia.state.appWidth < 800) {
//       return 'sidebar-width absolute'
//     } else {
//       return 'sidebar-width '
//     }
//   } else {
//     return ''
//   }
// })
watch(
  () => sidebarPinia.state.sideBarStatus,
  (status) => {
    if (status) {
      if (sidebarPinia.state.appWidth < 800) {
        sideBar.value.classList.add('sidebar-width', 'absolute')
      } else {
        sideBar.value.classList.add('sidebar-width')
      }
    } else {
      sideBar.value.classList.remove('sidebar-width')
    }
  }
)
</script>
<template>
  <div ref="sideBar" class="parent-sidebar sidebar-width">
    <div class="logo">
      <XyzTransition appear xyz="duration-20   ease-in-out-back flip-up-100% iterate-infinite">
        <img src="@/assets/images/logo/logo.png" />
      </XyzTransition>
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
  @apply flex  justify-center items-center;
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
