<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
        <img :src="url" alt="Imagen" class="w-full h-48 object-cover" />
        <div class="p-4">
            <p class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {{ category }}
            </p>
        </div>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    url: string
    category: string
}>()
</script>
