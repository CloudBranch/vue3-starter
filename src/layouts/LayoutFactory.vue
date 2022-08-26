<template>
  <div class="flex h-screen w-screen flex-col">
    <template v-if="layout === 'LayoutDefault'">
      <layout-default>
        <router-view />
      </layout-default>
    </template>
    <template v-else>
      <layout-blank>
        <router-view />
      </layout-blank>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutBlank from '@/layouts/LayoutBlank.vue'

const route = useRoute()
const layout = ref('LayoutDefault')

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      metaLayout ? (layout.value = metaLayout) : (layout.value = 'LayoutDefault')
    } catch (e) {
      layout.value = 'LayoutBlank'
    }
  },
  { immediate: true }
)
</script>
