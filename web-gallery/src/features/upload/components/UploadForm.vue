<template>
    <form @submit.prevent="handleSubmit" class="bg-white p-4 rounded-lg shadow-md mb-6">
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">URL de la imagen</label>
            <input
            v-model="url"
            type="text"
            placeholder="https://..."
            class="w-full p-2 border border-gray-300 rounded"
            required
            />
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
            <select
            v-model="category"
            class="w-full p-2 border border-gray-300 rounded"
            required
            >
                <option value="" disabled selected>Selecciona una categoría</option>
                <option value="Education">Educación</option>
                <option value="Health">Salud</option>
                <option value="Environment">Environment</option>
                <option value="Technology">Technology</option>
            </select>
        </div>
        <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
        Agregar imagen
        </button>
    </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    
    const emit = defineEmits<{
        (e: 'add-image', payload: { url: string; category: string }): void
    }>()
    
    const url = ref('')
    const category = ref('')
    
    function handleSubmit() {
        if (!url.value || !category.value) return
        emit('add-image', {
            url: url.value,
            category: category.value.charAt(0).toUpperCase() + category.value.slice(1).toLowerCase()
        })
        url.value = ''
        category.value = ''
    }
</script>