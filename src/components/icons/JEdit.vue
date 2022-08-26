<template>
  <LottieAnimation
    :animationData="trash"
    :auto-play="false"
    @mouseenter="startPencilAnim"
    @mouseleave="reversePencilAnim"
    :loop="false"
    :height="32"
    :width="32"
    @onComplete="reset"
    ref="pencil"
    :speed="3"
    :pauseAnimation="true"
    class="cursor-pointer"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import trash from '../../edit.json'

const emit = defineEmits(['play', 'pause', 'reset'])

const pencil = ref()

// Needs externalized
const play = () => {
  pencil.value.play()
}

const reset = () => {
  console.log('reset')
}

const startPencilAnim = () => {
  console.log('start')
  pencil.value.setDirection('forward')
  play()
  emit('play', true)
}

const reversePencilAnim = () => {
  console.log('stop')
  pencil.value.setDirection('reverse')
  play()
  emit('pause', true)
}
</script>
