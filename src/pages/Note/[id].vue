<route>
{
  name: "Note",
  meta: {
    layout: "LayoutDefault"
  }
}
</route>

<template>
  <section class="m-4 flex flex-col flex-wrap gap-2">
    <h3 class="font-semibold">Title</h3>
    <input
      type="text"
      placeholder="Title"
      v-model="note.title"
      @keyup="notesStore.setNoteField(props.id!, 'title', note.title)"
      class="border-2 border-dashed px-8 py-4"
    />
    <h3 class="font-semibold">Color</h3>
    <h3 class="font-semibold">Body</h3>
    <textarea
      placeholder="Body"
      v-model="note.body"
      @keyup="notesStore.setNoteField(props.id!, 'body', note.body)"
      class="h-60 border-2 border-dashed px-8 py-4"
    ></textarea>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useNotesStore } from '@/store/notes'

const props = defineProps({
  id: String
})

const notesStore = useNotesStore()

const note = ref({
  title: '',
  body: ''
})

const setNote = () => {
  const currentNote = notesStore.getNote(props.id!)

  note.value = {
    title: currentNote?.title || '',
    body: currentNote?.body || ''
  }
}

onMounted(() => {
  setNote()
})
</script>
