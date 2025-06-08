<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="card-skill p-3">
    <div class="d-flex justify-content-center my-3" style="height:70px;">
        <img :src="icon" class="w-75" />
    </div>
    <p class="m-0 text-center">{{ skill }}</p>
  </div>
</template>

<style scoped>
.card-skill {
  width: 95%;
}
</style>
