<script setup>
import ProjectCard from './ProjectCard.vue'
import SkillCard from './SkillsCard.vue'
import FrameworkCard from './FrameworksCard.vue'
import Navbar from './Navbar.vue'

import vueIcon from '@/assets/frameworks/vue.svg'
import reactIcon from '@/assets/frameworks/react.svg'
import springIcon from '@/assets/frameworks/spring.svg'
import laravelIcon from '@/assets/frameworks/laravel.svg'

import tailwindIcon from '@/assets/frameworks/tailwind.svg'
import djangoIcon from '@/assets/frameworks/django.svg'
import bootstrapIcon from '@/assets/frameworks/bootstrap.svg'

import javaIcon from '@/assets/langs/java.svg'
import phpIcon from '@/assets/langs/php.svg'
import jsIcon from '@/assets/langs/js.svg'
import tsIcon from '@/assets/langs/ts.svg'
import pythonIcon from '@/assets/langs/python.svg'

import dockerIcon from '@/assets/other/docker.svg'
import mavenIcon from '@/assets/other/maven.svg'
import nginxIcon from '@/assets/other/nginx.svg'

const frameworkCards = [
    {
        title: 'React+ReactNative, Vue, Tailwind CSS & Bootstrap',
        description: 'Desarrollo de SPAs modernas y aplicaciones frontend.',
        icons: [
            { src: reactIcon, alt: 'React' },
            { src: vueIcon, alt: 'Vue' },
            { src: tailwindIcon, alt: 'Tailwind' },
            { src: bootstrapIcon, alt: 'Bootstrap' }
        ]
    },
    {
        title: 'Spring Boot, Laravel & Django',
        description: 'APIs REST, arquitectura backend y lógica de negocio.',
        icons: [
            { src: springIcon, alt: 'Spring Boot' },
            { src: laravelIcon, alt: 'Laravel' },
            { src: djangoIcon, alt: 'Django' }
        ]
    }
]

const skills = [
    {
        title: 'Java',
        description: 'Desarrollo en entorno de servidor.',
        icon: javaIcon,
        level: 5
    },
    {
        title: 'PHP',
        description: 'Desarrollo en entorno de servidor.',
        icon: phpIcon,
        level: 4
    },
    {
        title: 'JavaScript',
        description: 'Desarrollo en entorno de cliente.',
        icon: jsIcon,
        level: 5
    },
    {
        title: 'TypeScript',
        description: 'Desarrollo en entorno de cliente.',
        icon: tsIcon,
        level: 5
    },
    {
        title: 'Python',
        description: 'Desarrollo en entorno de servidor.',
        icon: pythonIcon,
        level: 4
    },
    {
        title: 'Nginx',
        description: 'Despliegue de aplicaciones.',
        icon: nginxIcon,
        level: 4
    },
    {
        title: 'Docker',
        description: 'Despliegue de aplicaciones.',
        icon: dockerIcon,
        level: 4
    },
    {
        title: 'Maven',
        description: 'Creación y gestión de proyectos Java.',
        icon: mavenIcon,
        level: 5
    }
]


const projects = [
    {
        period: '2024–2025',
        projects: [
            { title: 'MGS - Wiki', description: 'Java + Spring', link: 'https://github.com/nalleon/mgs-project' },
            { title: 'Adivina el personaje de FE8', description: 'TypeScript + Vue, CSS + Tailwind', link: 'https://github.com/mackstm/fire-emblem-project' },
            { title: 'Buscaminas', description: 'TypeScript + React, CSS + Bootstrap', link: 'https://github.com/nalleon/minesweeper' }
        ]
    },
    {
        period: '2025–2026',
        projects: [
            { title: 'JSpotify', description: 'CSS, HTML y JS', link: 'https://github.com/nalleon/jspotify' },
            { title: 'Tribu', description: 'Python + Django, CSS', link: 'https://github.com/nalleon/tribu' },
            { title: 'Lumino', description: 'Python + Django, CSS + Bootstrap, Zensical', link: 'https://github.com/nalleon/lumino' }
        ]
    }
]

</script>


<style scoped>
</style>

<template>
    <Navbar />
    <RouterView />
    <div id="top" class="min-h-screen bg-slate text-white">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
            <header class="mb-16">
                <h1 class="text-4xl font-bold">Nabil L. A. </h1>
                <p class="mt-2 text-white/70">Desarrollador</p>
            </header>
            <section id="sobre-mi" class="scroll-mt-24 mb-16">
                <h2 class="text-2xl font-semibold">Sobre mí</h2>
                <p class="mt-4 text-white/70">
                    Técnico superior en DAM formándose en DAW y apasionado de la tecnología.
                </p>
            </section>
            <section id="habilidades" class="scroll-mt-24 mb-16">
                <h2 class="text-2xl font-semibold">Habilidades</h2>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SkillCard v-for="skill in skills" :key="skill.title" v-bind="skill" />
                </div>
                <div class="my-12 h-px w-full bg-white/10"></div>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <FrameworkCard v-for="card in frameworkCards" :key="card.title" v-bind="card" />
                </div>
            </section>

            <section id="proyectos" class="scroll-mt-24 mb-16">
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
            <section id="contacto" class="scroll-mt-24 mb-16">
                <h2 class="text-2xl font-semibold">Contacto</h2>
                <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
                    <p class="text-white/70">¿Te interesa contactar conmigo?</p>
                    <div class="mt-6 flex flex-col justify-center sm:flex-row gap-4">
                        <a href="mailto:nabil14716@gmail.com" class="bg-white text-black px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <a href="https://github.com/nalleon" class="bg-white text-black px-2 py-2 rounded-full">
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
            <footer class="text-sm text-white/50">© 2026 — Nabil L. A.</footer>
        </div>
    </div>
</template>