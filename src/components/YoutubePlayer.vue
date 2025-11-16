<script setup lang="ts">
const props = defineProps({
  width: {
    default: 560,
    type: Number,
  },
  height: {
    default: 315,
    type: Number,
  },
  src: {
    required: true,
    type: String,
  },
})
</script>

<!-- <template>
  <iframe
    :width="props.width"
    :height="props.height"
    :src="`https://www.youtube.com/embed/${props.src}?si=d0uUfSsn9AN6LEAS&amp;controls=0&autoplay=1`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template> -->

<template>
  <div>
    <h1>This is for testing only</h1>
  </div>
</template>
