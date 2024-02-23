import { defineStore } from 'pinia'
import { reactive } from 'vue'
// /////////////////////////////////
export const sidebar = defineStore('pinia', () => {
  const state = reactive({
    sideBarStatus: false
  })
  const changeSideBarStatus = () => (state.sideBarStatus = !state.sideBarStatus)
  return { state, changeSideBarStatus }
})
