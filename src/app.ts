import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import swaggerDocs from './utils/swagger';
import authRoutes from './routes/authRoutes';
import errorMiddleware from './middleware/errorMiddleware';
import { logger } from './utils/logger';
import merchantRoutes from './routes/merchantRoutes';
import contactRoutes from './routes/contactRoutes';
import contactGroupRoutes from './routes/contactGroupRoutes';
import smsRoutes from './routes/smsRoutes';
import emailRoutes from './routes/emailRoutes';

config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', authRoutes);
app.use('/api/v1', merchantRoutes);
app.use('/api/v1', contactRoutes);
app.use('/api/v1', contactGroupRoutes);
app.use('/api/v1', smsRoutes);
app.use('/api/v1', emailRoutes);
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello Zondos'
    });
});


app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () => {
    logger.info(`🚀 Server started on http://localhost:${process.env.PORT}`);
    swaggerDocs(app, process.env.PORT || 5000)
});