# 🌄 Web Image Gallery with Vue 3 + TypeScript + TailwindCSS

Este proyecto es una mini galería web desarrollada con **Vue 3**, **TypeScript**, y **TailwindCSS**, como parte de una evaluación técnica. Permite a los usuarios subir imágenes mediante URL y verlas en un grid responsivo tipo "tarjetas". Además, se integrará con una API pública para obtener imágenes por categoría y se incluirá un backend sencillo para almacenar los datos en JSON.

---

## 🚀 Funcionalidades principales

- ✅ Subida de imágenes mediante URL.
- ✅ Visualización de imágenes en una cuadrícula responsiva.
- ✅ Aplicación de estilos inspirados en el diseño proporcionado.
- 🔄 Descarga de imágenes desde una API pública (en desarrollo).
- 📂 Clasificación y filtrado por categoría (en desarrollo).
- 💾 Almacenamiento local de imágenes o mediante backend simple (en desarrollo).

---

## 🛠️ Tecnologías utilizadas

| Herramienta         | Propósito                              |
|---------------------|----------------------------------------|
| Vue 3 + Vite        | Framework principal                     |
| TypeScript          | Tipado estático                        |
| TailwindCSS         | Estilos rápidos y personalizables      |
| Axios               | Llamadas HTTP para APIs                |
| Node.js (opcional)  | Backend simple con almacenamiento JSON |

---

## 📁 Estructura del proyecto

```bash
web-gallery/
├── public/                    # Recursos estáticos
├── src/
│   ├── features/
│   │   ├── gallery/           # Módulo de galería de imágenes
│   │   │   ├── components/    # Componentes como ImageCard.vue
│   │   │   ├── views/         # Vistas como GalleryPage.vue
│   │   │   ├── services/      # Lógica de negocio/API
│   │   │   └── types.ts       # Tipado del módulo
│   ├── shared/                # Utilidades y estilos comunes
│   ├── assets/                # Archivos como main.css
│   └── main.ts                # Punto de entrada
├── backend/                   # Backend para manejo de imágenes (opcional)
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md

🚀 Instrucciones

1. Clonar el repositorio
git clone https://github.com/Alvin891/WebAsses.git
cd WebAsses

2. Instalar dependencias del frontend
cd web-gallery
npm install
npm run dev

Accede a http://localhost:5173 para ver la galería.

3. Iniciar el backend (opcional pero recomendado)
cd ../backend
npm install
npm run serve

El backend expone las rutas en http://localhost:3000/api/images.

