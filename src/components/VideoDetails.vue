<script setup lang="ts">
import { Send } from 'lucide-vue-next'

const model = defineModel<string>()
defineEmits(['submitRecommendation'])
</script>

<template>
  <div class="bg-black h-full flex flex-col justify-center items-center gap-12">
    <h1 class="text-white text-4xl font-semibold tracking-wide">
      <label for="send-video">What do you like about it?</label>
    </h1>

    <div class="bg-white w-100 rounded-md flex justify-between p-4 gap-2">
      <input
        v-model="model"
        type="text"
        placeholder="Tell us about it..."
        class="outline-none w-full text-ellipsis"
        id="reason"
      />

      <button class="hover:opacity-50" @click="$emit('submitRecommendation')">
        <span><Send /></span>
      </button>
    </div>
  </div>
</template>
