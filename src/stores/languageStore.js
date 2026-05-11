import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const locale = ref(null)

  const setLocale = (lang) => {
    locale.value = lang
  }

  return {
    locale,
    setLocale
  }
})