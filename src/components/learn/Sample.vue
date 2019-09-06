<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'sample',
  props: {
    message: String,
    source_code: String
  }
}
</script>

<style scoped>
</style>
