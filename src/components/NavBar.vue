<script setup lang="ts">
import { House, ListVideo } from 'lucide-vue-next'
</script>

<template>
  <nav class="bg-black flex justify-around p-4">
    <div class="px-10 py-5 hover:opacity-50 w-full flex justify-center">
      <House color="white" />
    </div>
    <div class="px-10 py-5 w-full flex justify-center hover:opacity-50">
      <ListVideo color="white" />
    </div>
  </nav>
</template>
