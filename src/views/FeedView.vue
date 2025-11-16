<script setup lang="ts">
import YoutubePlayer from '@/components/YoutubePlayer.vue'
import type { Recommendation } from '@/models/models'
import { getAllRecommendations } from '@/services/recommendations.service'
import { onMounted, ref } from 'vue'

const recommendations = ref<Recommendation[]>([])

onMounted(async () => {
  const res = await getAllRecommendations()
  const data = res.data
  recommendations.value = data
})
</script>

<template>
  <div>
    <div v-if="!recommendations.length">LOADING...</div>
    <div v-else v-for="video in recommendations" :key="video.id">
      <YoutubePlayer :src="video.id" />
    </div>
  </div>
</template>
