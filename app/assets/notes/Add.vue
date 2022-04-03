<template>
  <DefaultLayout>
    <template v-slot:content>
      <NoteForm content="" title="" form-header-text="Add New Note" save-button-label="Save" :save="createNote" />
    </template>
  </DefaultLayout>

</template>

<script setup>
import DefaultLayout from '../layout/Default'
import NoteForm from '../forms/NoteForm'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const createNote = async ({title, content}) => {
  await store.dispatch('createNote', {title, content})
  router.push({path: '/'})
}

</script>