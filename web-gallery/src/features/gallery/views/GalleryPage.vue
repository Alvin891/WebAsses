<template>
        <div class="min-h-screen bg-gray-100">
            <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ImageCard
                    v-for="(img, index) in images"
                    :key="index"
                    :url="img.url"
                    :category="img.category"
                />
            </div>
        </div>
</template>

<script setup lang="ts">
    import ImageCard from "../components/ImageCard.vue";
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=300&q=80',
            category: 'Educación'
        },
        {
            url: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&h=300&q=80',
            category: 'Salud'
        },
        {
            url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&h=300&q=80',
            category: 'Ambiente'
        },
        {
            url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300&q=80',
            category: 'Tecnología'
        },
        
    ]
</script>