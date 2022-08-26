import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { TModal } from '@/types/utils/modal'

export const useUtilsStore = defineStore('utils', () => {
  const loading = ref(false)
  const modal = ref({
    visible: false,
    title: 'hello',
    description: ''
  })
  /* const error = ref({
    visible: null,
    message: ''
  }); */

  const setLoading = () => {
    loading.value = !loading.value
  }

  const setModal = (modal: TModal) => {
    modal.value = {
      visible: modal.visible,
      title: modal.title,
      description: modal.description
    }
  }

  return { loading, modal, setLoading, setModal }
})
