<template>
    <div class="relative min-h-screen bg-gray-100">
        <!-- Botones fijos en la parte superior izquierda -->
        <div class="pt-6 px-6 flex gap-4">
            <button
            @click="toggleForm('url')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
            >
            Agregar imagen vía URL
            </button>
            <button
            @click="toggleForm('random')"
            class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
            >
            Imagen random por categoría
            </button>
        </div>
    
        <!-- Formulario para agregar imagen vía URL -->
        <div
            v-if="showForm === 'url'"
            class="absolute top-20 left-4 right-4 md:left-20 md:right-20 z-10"
        >
            <UploadForm @add-image="addImage" />
        </div>
    
        <!-- Formulario para imagen aleatoria por categoría -->
        <div
            v-if="showForm === 'random'"
            class="absolute top-20 left-4 right-4 md:left-20 md:right-20 z-10 bg-white p-4 rounded-lg shadow-md"
        >
            <form @submit.prevent="fetchRandomImage">
            <label class="block text-sm font-medium text-gray-700 mb-1">Selecciona categoría</label>
            <select v-model="selectedCategory" class="w-full p-2 border border-gray-300 rounded mb-4">
                <option disabled value="">Selecciona una categoría</option>
                <option value="education">Educación</option>
                <option value="health">Salud</option>
                <option value="nature">Ambiente</option>
                <option value="technology">Tecnología</option>
            </select>
            <button
                type="submit"
                class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
            >
                Descargar imagen
            </button>
            </form>
        </div>
    
        <!-- Grid de imágenes -->
        <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ImageCard
            v-for="(img, index) in images"
            :key="index"
            :url="img.url"
            :category="img.category"
            @remove="removeImage(index)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

    import ImageCard from "../components/ImageCard.vue";
    import UploadForm from '../../upload/components/UploadForm.vue';
    import { PEXELS_API_KEY } from '../../../config/apiKey';
    
    import { ref, onMounted } from 'vue'
    const showForm = ref<null | 'url' | 'random'>(null)
    const images = ref<{ url: string; category: string }[]>([])
    const selectedCategory = ref('')

    function toggleForm(form: 'url' | 'random') {
    showForm.value = showForm.value === form ? null : form
    }

    async function fetchRandomImage() {
        if (!selectedCategory.value) return

        const apiKey = PEXELS_API_KEY
        const query = selectedCategory.value
        const perPage = 10
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: apiKey
                }
            })
            const data = await response.json()
            if (data.photos && data.photos.length > 0) {
                const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)]
                await addImage({
                    url: randomPhoto.src.medium,
                    category: selectedCategory.value.charAt(0).toUpperCase() + selectedCategory.value.slice(1),
                })
                
            } else {
                console.warn('No se encontraron imágenes para esta categoría.')
            }
        } catch (error) {
            console.error('Error al obtener imagen de Pexels:', error)
        }

        selectedCategory.value = ''
        showForm.value = null
    }

    async function addImage(newImage: { url: string; category: string }) {
        try {
            const res = await fetch('http://localhost:3000/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newImage)
            })

            if (!res.ok) throw new Error('No se pudo guardar la imagen')

            images.value.push(newImage)
        } catch (err) {
            console.error('Error guardando imagen:', err)
        }
    }

    async function removeImage(index: number) {
        try {
            const res = await fetch(`http://localhost:3000/api/images/${index}`, {
                method: 'DELETE',
            })

            if (!res.ok) throw new Error('No se pudo eliminar la imagen del backend')

            images.value.splice(index, 1)
        } catch (err) {
            console.error('Error eliminando imagen:', err)
        }
    }

    onMounted(async () => {
        try {
            const res = await fetch('http://localhost:3000/api/images')
            if (!res.ok) throw new Error('No se pudieron obtener las imágenes del backend')
            const data = await res.json()
            images.value = data
        } catch (err) {
            console.error('Error al cargar imágenes del backend:', err)
        }
    })
</script>