<script setup>
  import ProjectCard from './components/ProjectCard.vue'
  import Navbar from './components/Navbar.vue'


  const projects = [
    {
      id: 1,
      title:"Pokedex",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto super coqueto.",
      demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/'
    },
    {
      id: 2,
      title:"JSpotify",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto super chulo.",
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/'
    },
    {
      id: 3,
      title:"Decorar mi casa",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto super estresante.",
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/'
    },
    {
      id: 4,
      title:"Aprender bash",
      tags: ['Vue', 'Tailwind', 'Vite'],
      description:"Un proyecto que me no es de front asi que no me gusta tanto.",
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/'
    }
  ]
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <Navbar />
    <!-- CONTENEDOR CENTRAL -->
    <div class="max-w-4xl mx-auto px-6 py-10"> 
      <!-- CABECERA -->
      <header class="mb-16 flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-bold">Sara</h1>
          <p class="mt-2 text-white/70">
            Frontend developer · Vue · Tailwind
          </p>
        </div>

        <div class="text-sm text-white/70">
          sperrodj@gobiernodecanarias.org
        </div>
      </header>


      <!-- SECCIÓN SOBRE MÍ -->
      <section id="sobre-mi" class="mb-16">
        <h2 class="text-2xl font-semibold">Sobre mí</h2>
        <p class="mt-4 text-white/70">
         Profe de informática y diseño web 💻✨ Amante del código, el buen diseño y las ideas creativas. Gamer 🎮, lectora 📚 y fan del anime 🍥. 
         Siempre aprendiendo y experimentando para crear experiencias digitales con personalidad.
        </p>
      </section>

      <!-- SECCIÓN PROYECTOS -->
      <section id="proyectos" class="mb-16">
        <h2 class="text-2xl font-semibold">Proyectos</h2>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProjectCard 
            v-for="project in projects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :demo-url="project.demoUrl"
            :code-url="project.codeUrl"
          />
        </div>
      </section>

      <!-- CONTACT -->
       <section id="contacto" class="mb-16">
          <h2 class="text-2xl font-semibold">Contacto</h2>

          <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <p class="text-white/70 max-w-prose">
              ¿Te interesa trabajar conmigo o tienes alguna pregunta?
              Escríbeme y te respondo lo antes posible.
            </p>

            <div class="mt-6 flex flex-col sm:flex-row gap-4">
              <!-- EMAIL -->
              <a
                href="mailto:sperrdj@gobiernodecanarias.org"
                class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Enviar email
              </a>

              <!-- LINKEDIN -->
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/25"
              >
                LinkedIn
              </a>

              <!-- GITHUB -->
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/25"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

      <!-- FOOTER -->
      <footer class="text-sm text-white/50">
        © 2026 — Sara
      </footer>

    </div>
  </div>
</template>



