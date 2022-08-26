<route>
{
  name: "Error404",
  meta: {
    layout: "LayoutBlank"
  }
}
</route>

<template>
  <section class="flex h-96 w-full flex-col items-center bg-white pt-24">
    <h1 class="font-bold">404</h1>

    <p class="mb-4 font-normal">Page not found</p>

    <p class="cursor-pointer text-sm font-bold text-blue-500 md:text-base">
      <router-link to="/">Go Home</router-link>
    </p>
  </section>
</template>
