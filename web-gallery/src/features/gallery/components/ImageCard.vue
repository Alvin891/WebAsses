<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
        <img :src="url" alt="Imagen" class="w-full h-48 object-cover" />
        <div class="p-4 flex justify-between items-center">
            <p class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {{ category }}
            </p>
        <button
        class="text-sm text-red-600 hover:underline"
        @click="$emit('remove')"
        >
        Eliminar
        </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        url: string
        category: string
    }>()

    defineEmits<{
        (e: 'remove'): void
    }>()
</script>
