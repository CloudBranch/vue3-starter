<route>
{
  name: "Notes",
  meta: {
    layout: "LayoutDefault"
  }
}
</route>

<template>
  <!-- <section>
    <button @click="createNote" class="flex mx-auto m-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add note</button>
  </section> -->
  <section class="m-4 mx-auto flex h-60 flex-wrap justify-evenly gap-2 lg:max-w-6xl">
    <template v-for="note in notesStore.notes">
      <div class="flex grow basis-1/4 flex-col rounded" :class="note.color">
        <div class="flex items-center bg-yellow-400 py-3 px-4">
          <h1 class="font-bold">
            {{ note.title }}
          </h1>
          <div class="ml-auto flex">
            <j-trashcan @click="notesStore.deleteNote(note.id)" />
          </div>
        </div>
        <div class="flex flex-col px-2">
          <p class="p-6 font-semibold">
            {{ note.body }}
          </p>
          <div class="mt-4 mr-1 mb-2 ml-auto flex">
            <router-link :to="'/note/' + note.id">
              <j-edit />
            </router-link>
          </div>
        </div>
        <!-- <div>
          <h1>{{ note.title }}</h1>
          <p>{{ note.body }}</p>
        </div> -->
        <!-- <div class="flex">
          <router-link :to="'/note/' + note.id" class="grow border-2 m-2">View</router-link>
          <button @click="notesStore.deleteNote(note.id)" class="grow border-2 m-2">Delete</button>
        </div> -->
      </div>
    </template>
    <div
      @click="createNote"
      class="flex grow basis-3/4 flex-col justify-center rounded border-2 border-dashed border-slate-300 text-center"
      :class="{ 'w-64': notesStore.notes.length < 1 }"
    >
      <j-note class="fill-sky-500" />
      <p class="text-sky-500">New Note</p>
      <!-- <div class="bg-yellow-500 py-3 px-4 flex">
        <h1>
          New note
        </h1>
      </div>
      <div class="flex flex-col py-3 px-2 h-full bg-yellow-400">
        <p class="p-6">
          tsrthh
        </p>
        <div class="flex mt-4 ml-auto bg-yellow-400">
          dsfgdsg
        </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useNotesStore } from '@/store/notes'
import JEdit from '@/components/icons/JEdit.vue'
import JNote from '@/components/icons/JNote.vue'
import JTrashcan from '@/components/icons/JTrashcan.vue'

const notesStore = useNotesStore()

const createNote = async () => {
  notesStore.createNote({
    title: 'New note',
    body: 'This is a new note',
    color: 'bg-yellow-300'
  })
}
</script>
