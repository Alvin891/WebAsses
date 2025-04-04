import express from "express";
import cors from 'cors';
import imagesRoutes from './routes/images.routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/images', imagesRoutes)

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`)
})
