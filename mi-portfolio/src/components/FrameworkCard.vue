<template>
    <div class="border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition">
        
        
        <div class="mt-3 flex items-center gap-3">
            <img v-for="icon in icons" :key="icon.alt" :src="icon.src" :alt="icon.alt" class="h-8 w-8 object-contain" />
        </div>
        <h3 class="font-medium text-lg text-left m-2">
            {{ title }}
        </h3>
        
        <p class="mt-4 text-sm text-white/70">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { FrameworkCard } from '../models/FrameworkCard'

defineProps<FrameworkCard>()
</script>
