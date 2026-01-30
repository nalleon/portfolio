<script setup>
</script>

<template>
    <div class="rounded-xl border border-white/10 p-6 mt-5">
        <form class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
                <label class="block text-xs uppercase tracking-wide text-white/50 mb-1">
                    Nombre
                </label>
                <input type="text" placeholder="Tu nombre" class="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2
                    text-white placeholder-white/30 focus:outline-none
                    focus:border-white/30 transition" />
            </div>

            <div>
                <label class="block text-xs uppercase tracking-wide text-white/50 mb-1">
                    Email
                </label>
                <input type="email" placeholder="tucorreo@email.com" class="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2
                    text-white placeholder-white/30 focus:outline-none
                    focus:border-white/30 transition" />
            </div>

            <div class="sm:col-span-2">
                <label class="block text-xs uppercase tracking-wide text-white/50 mb-1">
                    Mensaje
                </label>
                <textarea rows="4" placeholder="Escribe tu mensaje..." class="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2
                    text-white placeholder-white/30 focus:outline-none
                    focus:border-white/30 resize-none transition" />
            </div>

            <div class="sm:col-span-2 flex justify-center pt-2">
                <button type="button" class="rounded-full not-first:px-6 py-2 text-sm font-medium
                        hover:bg-white/90 transition">
                    Enviar
                </button>
            </div>

        </form>
    </div>
</template>
