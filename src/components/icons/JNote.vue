<template>
  <LottieAnimation
    :animationData="trash"
    :auto-play="false"
    @mouseenter="openTrashcanAnim"
    @mouseleave="closeTrashcanAnim"
    :loop="false"
    :height="32"
    :width="32"
    @onComplete="reset"
    ref="trashcan"
    :speed="3"
    :pauseAnimation="true"
    class="cursor-pointer fill-slate-600"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import trash from '../../50-file-solid-edited.json'

const trashcan = ref()

const reset = () => {
  console.log('reset')
}

const openTrashcanAnim = () => {
  console.log('start')
  trashcan.value.setDirection('forward')
  trashcan.value.play()
}

const closeTrashcanAnim = () => {
  console.log('stop')
  trashcan.value.setDirection('reverse')
  trashcan.value.play()
}
</script>
