<template>
  <DefaultLayout>
    <template v-slot:content v-if="noteToUpdate">
      <NoteForm
          :content="noteToUpdate.content"
          :title="noteToUpdate.title"
          form-header-text="Edit Note"
          save-button-label="Save"
          :save="saveNote" />
    </template>
  </DefaultLayout>

</template>

<script setup>
import DefaultLayout from '../layout/Default'
import NoteForm from '../forms/NoteForm'
import { onMounted, computed } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()
const noteToUpdate = computed(() => store.getters.noteToUpdate)
const { noteId } = route.params

onMounted(async () => {
  await store.dispatch('getNoteToUpdate', {noteId})
})

const saveNote = async ({title, content}) => {
  await store.dispatch('updateNote', {noteId, title, content})
  router.push({path: '/'})
}

</script>