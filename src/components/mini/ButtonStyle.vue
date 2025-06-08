<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  isi: {
    type: String,
    required: true
  },
  fsz: {
    type: String,
    required: true
  },
  py: {
    type: String,
    required: true
  },
  px: {
    type: String,
    required: true
  },
  bgclr: {
    type: String,
    required: true
  },
  clr: {
    type: String,
    required: true
  },
})

const fszClass = computed(() => `fsz-${props.fsz}`)
const pxClass = computed(() => `px-${props.px}`)
const pyClass = computed(() => `py-${props.py}`)
</script>

<template>
  <a
    :href="url"
    class="td-none rounded hover"
    :class="[fszClass, pxClass, pyClass]"
    :style="
      'background-color: ' + bgclr + ';' +
      'color: ' + clr + ';'
      "
  >
    <span v-html="isi"></span>
  </a>
</template>

<style scoped>
</style>
