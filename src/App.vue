<template>
  <LayoutFactory />
  <JLoader :loading="utilsStore.loading" />
  <JModal
    :visible="utilsStore.modal.visible"
    :title="utilsStore.modal.title"
    :description="utilsStore.modal.description"
  />
</template>

<script lang="ts" setup>
import LayoutFactory from '@/layouts/LayoutFactory.vue'
import JLoader from '@/components/JLoader.vue'
import JModal from '@/components/JModal.vue'
import { useUtilsStore } from '@/store/utils'

const utilsStore = useUtilsStore()
</script>
