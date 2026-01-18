<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="block border border-white/10 rounded-lg p-4 hover:bg-white/5 transition cursor-pointer"
  >
    <h3 class="font-medium">{{ title }}</h3>
    <p class="mt-2 text-sm text-white/70">{{ description }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>
