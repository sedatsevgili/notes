<template>
  <div class="modal fade show" tabindex="-1" role="dialog" style="display:block;">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="onClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{body}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" :class="actionButtonClass" @click="action">{{actionButtonText}}</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onClose">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  body: String,
  actionButtonClass: String,
  actionButtonText: String,
  action: Function,
  onClose: Function
})
</script>