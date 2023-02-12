import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import swaggerDocs from './utils/swagger';
import authRoutes from './routes/authRoutes';

config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', authRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello Zondos'
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
    swaggerDocs(app, process.env.PORT || 5000)
});