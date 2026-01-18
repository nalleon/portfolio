<script setup>
import ProjectCard from './ProjectCard.vue'
import SkillCard from './SkillsCard.vue'
import FrameworkCard from './FrameworksCard.vue'
import Navbar from './Navbar.vue'
import ContactForm from './ContactForm.vue'
import frameworkCards from '@/data/frameworks.json'
import skills from '@/data/skills.json'
import projects from '@/data/projects.json'

</script>


<style scoped></style>

<template>
    <Navbar />
    <div id="top" class="min-h-screen bg-slate text-white">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
            <header class="mb-8 text-center">
                <h1 class="text-4xl sm:text-5xl font-bold">
                    Nabil L. A.
                </h1>

                <p class="mt-2 text-white/70 text-lg">
                    Desarrollador
                </p>

                <div class="mt-8 flex justify-center">
                    <img src="../assets/other/home-img.jpg" alt="Avatar" class="w-50 h-50 rounded-full object-cover
                    border border-white/10 shadow-lg" />
                </div>

                <p class="mt-3 text-xs text-white/40">
                    “
                    <a href="https://www.flickr.com/photos/50253654@N06/5241869762" target="_blank"
                        rel="noopener noreferrer" class="underline hover:text-white">
                        Snow!
                    </a>
                    ” by
                    <a href="https://www.flickr.com/photos/50253654@N06" target="_blank" rel="noopener noreferrer"
                        class="underline hover:text-white">
                        neil-5110
                    </a>
                    — CC BY-SA 2.0
                </p>
            </header>


            <section id="sobre-mi" class="scroll-mt-8 mb-16">
                <h2 class="text-2xl font-semibold">Sobre mí</h2>
                <p class="mt-4 text-white/70">
                    Técnico superior en DAM formándose en DAW y apasionado de la tecnología.
                </p>
            </section>
            <section id="habilidades" class="scroll-mt-8 mb-16">
                <h2 class="text-2xl font-semibold">Habilidades</h2>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SkillCard v-for="skill in skills" :key="skill.title" v-bind="skill" />
                </div>
                <div class="my-12 h-px w-full bg-white/10"></div>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <FrameworkCard v-for="card in frameworkCards" :key="card.title" v-bind="card" />
                </div>
            </section>

            <section id="proyectos" class="scroll-mt-8 mb-16">
                <h2 class="text-2xl font-semibold">Proyectos</h2>
                <div class="mt-6 space-y-12">
                    <div v-for="group in projects" :key="group.period">
                        <h3 class="mb-6 text-lg font-semibold text-white/80">
                            {{ group.period }}
                        </h3>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ProjectCard v-for="project in group.projects" :key="project.title" :title="project.title"
                                :description="project.description" :link="project.link" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="experiencia" class="section mb-16">
                <h2 class="text-2xl font-semibold">Experiencia</h2>
                <div class="mt-6 space-y-6">
                    <div class="rounded-xl border border-white/10 bg-white/5 p-6">
                        <h3 class="text-lg font-semibold">
                            FCT
                        </h3>
                        <p class="text-sm text-white/60">
                            Febrero – Mayo (2025)
                        </p>
                        <p class="mt-3 text-white/70">
                            Prácticas en empresa participando en el desarrollo de una aplicación web,
                            implementando tanto la lógica del servidor como la interfaz de usuario.
                        </p>
                    </div>

                    <div class="mt-10 flex justify-center">
                        <a href="/src/assets/cv/cv.pdf" download class="inline-flex items-center gap-3 rounded-full
                                                                            border border-white/10 bg-white/10
                                                                            px-6 py-3 text-sm font-medium
                                                                            hover:bg-white/20 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3v12m0 0l3-3m-3 3l-3-3m9 6H6" />
                            </svg>

                            Descargar CV (PDF)
                        </a>
                    </div>
                </div>
            </section>

            <section id="contacto" class="scroll-mt-8 mb-16">
                <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
                    <p class="text-white/70">¿Te interesa contactar conmigo?</p>
                    <ContactForm />
                    <div class="mt-6 flex flex-col justify-center sm:flex-row gap-4">
                        <a href="mailto:nabil14716@gmail.com" class="bg-slate-700 text-black px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <a href="https://github.com/nalleon" class="bg-slate-700 text-black px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75
                                    0 4.306 2.793 7.955 6.667 9.243
                                    .487.09.666-.211.666-.47
                                    0-.232-.009-.848-.013-1.665
                                    -2.71.589-3.282-1.306-3.282-1.306
                                    -.443-1.125-1.082-1.425-1.082-1.425
                                    -.885-.606.067-.594.067-.594
                                    .979.069 1.494 1.005 1.494 1.005
                                    .87 1.49 2.285 1.06 2.842.811
                                    .088-.63.34-1.06.618-1.304
                                    -2.165-.246-4.44-1.082-4.44-4.814
                                    0-1.063.38-1.933 1.003-2.615
                                    -.101-.247-.435-1.24.096-2.585
                                    0 0 .817-.262 2.675 1
                                    .776-.216 1.608-.324 2.437-.328
                                    .828.004 1.66.112 2.437.328
                                    1.857-1.262 2.673-1 2.673-1
                                    .533 1.345.199 2.338.098 2.585
                                    .625.682 1.002 1.552 1.002 2.615
                                    0 3.741-2.279 4.565-4.45 4.807
                                    .35.302.66.897.66 1.808
                                    0 1.304-.012 2.354-.012 2.674
                                    0 .261.177.565.672.469
                                    3.87-1.29 6.658-4.936 6.658-9.241
                                    0-5.385-4.365-9.75-9.75-9.75z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <footer class="text-sm text-white/50">© 2026 — Nabil L. A.</footer>
        </div>
    </div>
</template>