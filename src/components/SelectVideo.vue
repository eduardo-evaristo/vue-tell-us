<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue'
import { Forward } from 'lucide-vue-next'

// This is a useRef()
const inputElement = useTemplateRef<HTMLInputElement>('inputElement')

// This is equivalent to a useEffect with []
onMounted(() => {
  inputElement.value?.focus()
})
</script>

<template>
  <div class="bg-black h-full flex flex-col justify-center items-center gap-12">
    <h1 class="text-white text-4xl font-semibold tracking-wide">
      <label for="send-video">Recommend the world something to listen!</label>
    </h1>

    <div class="bg-white w-100 rounded-md flex justify-between p-4 gap-2">
      <input
        type="text"
        placeholder="Paste your link..."
        class="outline-none w-full text-ellipsis"
        id="send-video"
        ref="inputElement"
      />
      <button class="hover:opacity-50" @click="$emit('changeStep')">
        <span><Forward /></span>
      </button>
    </div>
  </div>
</template>
