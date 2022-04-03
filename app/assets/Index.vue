<template>
  <DefaultLayout>
    <template v-slot:content>

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
                <td></td>
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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import DefaultLayout from './layout/Default'

const store = useStore()

const notes = computed(() => store.getters.notes)

// lifecycle hooks
onMounted(() => {
  store.dispatch('getNotes')
})
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
