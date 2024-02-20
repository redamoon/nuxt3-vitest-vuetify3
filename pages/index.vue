<script setup lang="ts">
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
</script>

<template>
  <div>
    <v-btn>
     Button
    </v-btn>
    <div class="d-flex justify-space-around">
      <v-menu
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-list-item class="bg-light-green-accent-1">
            <v-list-item-title v-bind="props" class="cursor-pointer">イベント</v-list-item-title>
          </v-list-item>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title><a href="/aaa">{{ item.title }}</a></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<style scoped>

</style>