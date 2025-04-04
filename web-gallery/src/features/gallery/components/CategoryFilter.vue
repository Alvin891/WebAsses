<template>
    <div class="p-6">
        <label class="block text-sm font-medium text-gray-700 mb-1">Filter by category</label>
        <select v-model="selected" @change="emitCategory" class="w-full p-2 border border-gray-300 rounded">
            <option value="">All</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Environment">Environment</option>
            <option value="Technology">Technology</option>
        </select>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const selected = ref('')

    const emit = defineEmits<{
    (e: 'filter-category', value: string): void
    }>()

    function emitCategory() {
        emit('filter-category', selected.value)
    }
</script>
