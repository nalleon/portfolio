<template>
  <header class="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
    <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- IZQUIERDA -->
      <a href="#top" class="font-semibold">Sarispe</a>

      <!-- DERECHA (ESCRITORIO) -->
      <nav class="hidden sm:flex gap-6 text-sm text-white/70">
        <a href="#sobre-mi" class="hover:text-white">Sobre mí</a>
        <a href="#proyectos" class="hover:text-white">Proyectos</a>
        <a href="#contacto" class="hover:text-white">Contacto</a>
      </nav>

      <!-- BOTÓN (MÓVIL) -->
      <button
        class="sm:hidden rounded-lg border border-white/15 px-3 py-2 text-sm text-white/80 hover:text-white hover:border-white/25"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-label="Abrir menú"
      >
        ☰
      </button>
    </div>

    <!-- MENÚ DESPLEGABLE (MÓVIL) -->
    <div v-if="isOpen" class="sm:hidden border-t border-white/10">
      <nav class="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm text-white/70">
        <a href="#sobre-mi" class="hover:text-white" @click="closeMenu">Sobre mí</a>
        <a href="#proyectos" class="hover:text-white" @click="closeMenu">Proyectos</a>
        <a href="#contacto" class="hover:text-white" @click="closeMenu">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

