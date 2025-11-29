<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { useGetAllRecommendations } from '@/hooks/useRecommendations'
const { recommendations, isLoading, isError } = useGetAllRecommendations()
import { YoutubeVue3 } from 'youtube-vue3'
</script>

<template>
  <div class="grid grid-rows-[1fr_auto] h-dvh">
    <div>
      <div v-if="isError">tHIS SHIT ERRORED OUT!</div>
      <div v-else-if="isLoading">LOADING...</div>
      <div v-else v-for="video in recommendations" :key="video.id">
        <!-- <YoutubePlayer :src="video.id" /> -->
        <YoutubeVue3 :videoid="video.id" :width="500" :height="500"></YoutubeVue3>
      </div>
    </div>
    <NavBar />
  </div>
</template>
