<template>
  <div v-if="props.visible" class="h-12 w-full bg-slate-500">
    <p>{{ props.title }}</p>
    <p>{{ props.message }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  visible: Boolean,
  title: String,
  message: String
})
</script>
