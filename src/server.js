import express from 'express';
import morgan from 'morgan';
import globalRouter from './router/globalRouter';
import videoRouter from './router/videoRouter';
import userRouter from './router/userRouter';

const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', `${process.cwd()}/src/views`);

app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use('/video', videoRouter);
app.use('/user', userRouter);
app.use('/', globalRouter);

export default app;
