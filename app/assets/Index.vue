<template>
  <DefaultLayout>
    <template v-slot:content>

      <Modal
        v-if="isDeleteModalOpen"
        title="Confirm to delete"
        body="Are you sure to delete the note?"
        action-button-class="btn btn-danger"
        action-button-text="Delete"
        :action="deleteNote"
        :onClose="closeDialog"
        />

      <h1 class="h3 mb-2 text-gray-800">Notes</h1>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">
            <router-link to="/notes/add">Add New Note</router-link>
          </h6>
        </div>
        <div class="card-body" v-if="notes">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="note in notes">
                <td>{{note.title}}</td>
                <td>{{note.content}}</td>
                <td>
                  <router-link :to="{name: 'EditNote', params: {noteId: note.id}}">
                    <i class="fas fa-fw fa-edit"></i>
                  </router-link>
                  <a href="#" class="link-danger" @click="askToDelete(note.id)">
                    <i class="fas fa-fw fa-trash"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import DefaultLayout from './layout/Default'
import Modal from './components/Modal'

const store = useStore()

const notes = computed(() => store.getters.notes)

// lifecycle hooks
onMounted(() => {
  store.dispatch('getNotes')
})

const isDeleteModalOpen = ref(false)
const idOfNoteToDelete = ref(null)

const askToDelete = (noteId) => {
  idOfNoteToDelete.value = noteId
  isDeleteModalOpen.value = true
}

const deleteNote = async () => {
  await store.dispatch('deleteNote', {noteId: idOfNoteToDelete.value})
  closeDialog()
}

const closeDialog = () => {
  isDeleteModalOpen.value = false
  idOfNoteToDelete.value = null
}
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
