<template>
  <header class="border-b-1 flex h-20 w-screen items-center justify-center bg-yellow-50 p-4">
    <nav class="flex items-center justify-center gap-4 font-black">
      <router-link to="/">Home</router-link>
      <router-link to="/notes">Notes</router-link>
    </nav>
  </header>
  <main class="my-8 flex grow flex-col overflow-auto">
    <router-view />
  </main>
  <footer class="border-t-1 mt-auto flex h-20 w-screen self-end bg-yellow-50"></footer>
</template>
