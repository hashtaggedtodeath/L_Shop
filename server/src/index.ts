import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); 


// Настройка CORS 
app.use(cors({
    origin: 'http://localhost:5173', // Адрес нашего Vite фронтенда
    credentials: true // Разрешаем куки
}));




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});