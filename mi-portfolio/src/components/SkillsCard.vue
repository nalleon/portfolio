<template>
    <div class="border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition">
        <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-md bg-slate-700 flex items-center justify-center">
                <img :src="icon" :alt="title" class="h-6 w-6 object-contain" />
            </div>

            <h3 class="font-medium text-lg">
                {{ title }}
            </h3>
        </div>

        <p class="mt-3 text-sm text-white/70">
            {{ description }}
        </p>

        <div class="mt-4">
            <div class="flex items-center gap-1">
                <span v-for="i in 5" :key="i" class="h-2 w-6 rounded-full transition"
                    :class="i <= level ? 'bg-white' : 'bg-white/20'"></span>
            </div>
            <p class="mt-1 text-xs text-white/50">
                Nivel: {{ level }}/5
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SkillCard } from '../models/SkillCard'

defineProps<SkillCard>()



</script>

