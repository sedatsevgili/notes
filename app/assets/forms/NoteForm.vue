<template>
  <div class="p-5">
    <div>
      <h1 class="h4 text-gray-900 mb-4">{{formHeaderText}}</h1>
    </div>
    <form>
      <div class="form-group mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="title">
      </div>
      <div class="form-group mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control"
               id="content"
                  rows="10"
                  v-model="content">
        </textarea>
      </div>
      <a @click="save({title: titleInForm, content: contentInForm})" class="btn btn-primary btn-user btn-block">
        {{saveButtonLabel}}
      </a>
    </form>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps({
  formHeaderText: String,
  saveButtonLabel: String,
  save: Function,
  title: String,
  content: String
})

const { title: titleInForm, content: contentInForm } = toRefs(props)

</script>