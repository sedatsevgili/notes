<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
