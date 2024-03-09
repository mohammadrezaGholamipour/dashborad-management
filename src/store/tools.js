import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// /////////////////////////////////
export const tools = defineStore('pinia', () => {
  const state = reactive({
    appWidth: 0
  })

  const observer = new ResizeObserver((entries) => {
    const { width } = entries[0].contentRect
    state.appWidth = width
  })
  observer.observe(document.getElementById('app'))

  return { state }
})
/////////////////////////////////
