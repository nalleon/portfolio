<template>
  <article
    class="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
  >
    <h3 class="text-lg font-semibold">{{ title }}</h3>

    <p class="mt-2 text-sm text-white/70">
      {{ description }}
    </p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-5 flex gap-3 text-sm">
      <a
        :href="demoUrl"
        target="_blank"
        rel="noreferrer"
        class="rounded-lg bg-white px-3 py-1.5 font-medium text-black hover:opacity-90"
      >
        Demo
      </a>

      <a
        :href="codeUrl"
        target="_blank"
        rel="noreferrer"
        class="rounded-lg border border-white/15 px-3 py-1.5 text-white/80 hover:text-white hover:border-white/25"
      >
        Código
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: {
    type: Array,
    default: () => []
  },
  demoUrl: String,
  codeUrl: String
})
</script>
