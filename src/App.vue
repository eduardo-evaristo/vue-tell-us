<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

import SelectVideo from './views/SelectVideo.vue'
import VideoDetails from './views/VideoDetails.vue'
import { ChevronLeft } from 'lucide-vue-next'

type Steps = 'sendLink' | 'comment'
const step = ref<Steps>('sendLink')

function changeStep() {
  step.value = step.value === 'sendLink' ? 'comment' : 'sendLink'
}
</script>

<template>
  <div class="grid grid-rows-[1fr_auto] h-dvh">
    <div class="absolute flex items-center h-full" v-if="step === 'comment'">
      <span class="hover:opacity-50"
        ><ChevronLeft color="white" :size="100" @click="changeStep"
      /></span>
    </div>
    <SelectVideo v-if="step === 'sendLink'" @changeStep="changeStep" />
    <VideoDetails v-else />
    <NavBar />
  </div>
</template>
