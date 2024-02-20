<script setup lang="ts">
const items = [
  {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
  },
  {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
  },
  {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
  }
]
</script>

<template>
  <v-data-table :items="items" items-per-page="5"></v-data-table>
</template>

<style scoped>

</style>