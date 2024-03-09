import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
// /////////////////////////////////
export const sidebar = defineStore('pinia', () => {
  const state = reactive({
    sideBarStatus: false
  })
  const appWidth = computed(() => {
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      return width
    })
    observer.observe(document.getElementById('app'))
  })
  const changeSideBarStatus = () => (state.sideBarStatus = !state.sideBarStatus)
  return { state, changeSideBarStatus,appWidth }
})
