import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();

app.use(cors);
app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('Hello!')
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://127.0.0.1:${PORT}`);
})