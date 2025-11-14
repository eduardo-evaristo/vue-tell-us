<script setup lang="ts">
import { Send } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-black h-full flex flex-col justify-center items-center gap-12">
    <h1 class="text-white text-4xl font-semibold tracking-wide">
      <label for="send-video">What do you like about it?</label>
    </h1>

    <div class="bg-white w-100 rounded-md flex justify-between p-4 gap-2">
      <input
        type="text"
        placeholder="Paste your link..."
        class="outline-none w-full text-ellipsis"
        id="send-video"
      />
      <button class="hover:opacity-50">
        <span><Send /></span>
      </button>
    </div>
  </div>
</template>
