<route>
{
  name: "Landing",
  meta: {
    layout: "LayoutDefault"
  }
}
</route>

<template>
  <section class="body-font text-gray-600">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-8 flex w-full flex-col flex-wrap items-center text-center">
        <h1 class="title-font mb-2 flex text-2xl font-medium text-gray-900 sm:text-3xl">
          <span>Welcome to Note</span>
          <j-edit />
        </h1>
        <p class="w-full leading-relaxed text-gray-500 lg:w-1/2">
          A Vite, Vue3, Typescript, Pinia, Tailwindcss starter template.
        </p>
      </div>
      <div class="flex justify-center">
        <router-link
          to="/notes"
          class="mx-auto mt-4 flex rounded border-0 bg-yellow-100 py-2 px-8 text-lg font-semibold text-black hover:bg-yellow-300 focus:outline-none"
        >
          Take notes
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import JEdit from '@/components/icons/JEdit.vue'
</script>
