<script setup lang="ts">
import YoutubePlayer from '@/components/YoutubePlayer.vue'
import { getAllRecommendations } from '@/services/recommendations.service'
import { useQuery } from '@tanstack/vue-query'

const { data: recommendations, isLoading } = useQuery({
  queryKey: ['recommendations'],
  queryFn: getAllRecommendations,
})
</script>

<template>
  <div>
    <div v-if="isLoading">LOADING...</div>
    <div v-else v-for="video in recommendations" :key="video.id">
      <YoutubePlayer :src="video.id" />
    </div>
  </div>
</template>
