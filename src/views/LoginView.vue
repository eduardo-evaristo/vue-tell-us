<script setup lang="ts">
import { login } from '@/services/auth.service'
import { ref } from 'vue'

const email = ref<string>('')
const password = ref<string>('')

function handleLogin() {
  login(email.value, password.value)
}
</script>

<template>
  <div class="h-dvh bg-black flex justify-center items-center">
    <form class="bg-gray-900 p-2 flex flex-col gap-3.5" @submit.prevent="handleLogin">
      <label for="email" class="text-white">Email</label>
      <input type="text" placeholder="Enter your email" id="email" v-model="email" />
      <label for="password" class="text-white">Password</label>
      <input type="password" placeholder="Enter your password" id="password" v-model="password" />
      <button type="submit" class="text-black bg-white">Sign in</button>
    </form>
  </div>
</template>
