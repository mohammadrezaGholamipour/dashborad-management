import { defineStore } from 'pinia'
import { reactive } from 'vue'
// /////////////////////////////////
export const sidebar = defineStore('pinia', () => {
  const state = reactive({
    sideBarStatus: false,
    appWidth: 0
  })
  const changeSideBarStatus = () => (state.sideBarStatus = !state.sideBarStatus)
  return { state, changeSideBarStatus }
})
