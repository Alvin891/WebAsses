import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const filePath = path.join(__dirname, '..', 'images.json');

router.get('/', (req, res) =>{
    const data = fs.readFileSync(filePath, 'utf-8');
    const images = JSON.parse(data);
    res.json(images);
})

router.post('/', (req, res) =>{
    const newImage = req.body;
    if (!newImage.url || !newImage.category) {
        res.status(400).json({message: 'Datos incompletos'})
        return
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const images = JSON.parse(data);

    images.push(newImage);

    fs.writeFileSync(filePath, JSON.stringify(images, null, 2), 'utf-8')

    res.status(200).json({ message: 'Imagen creada correctamente'})
    console.log('Nueva imagen recibida:', newImage)
})

router.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);

    if (isNaN(index)) {
        res.status(400).json({ message: 'Índice inválido' });
        return
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const images = JSON.parse(data);

    if (index < 0 || index >= images.length) {
        res.status(404).json({ message: 'Imagen no encontrada' });
        return
    }

    images.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(images, null, 2), 'utf-8');

    res.status(200).json({ message: 'Imagen eliminada correctamente' });
});

export default router;