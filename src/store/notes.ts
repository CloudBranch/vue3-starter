import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import type { TNote } from '@/types/note/note'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<TNote[]>([])
  const note = ref<TNote>({
    id: '',
    title: '',
    body: '',
    editing: false,
    color: '',
    meta: {
      created: '',
      updated: '',
      deleted: '',
      status: ''
    }
  })
  const getNote = (id: string) => notes.value.filter((note: TNote) => note.id === id).shift()
  const createNote = (note: TNote) => {
    const id = uuidv4()
    notes.value.push({
      id,
      ...note
    })
  }
  const setNoteField = (id: string, field: string, value: unknown) => {
    const index = notes.value.findIndex((note: TNote) => note.id === id)

    notes.value[index][field] = value
  }
  const deleteNote = (id: string | undefined) => {
    notes.value = notes.value.filter((note: TNote) => note.id !== id)
  }

  return {
    note,
    notes,
    getNote,
    createNote,
    setNoteField,
    deleteNote
  }
})
