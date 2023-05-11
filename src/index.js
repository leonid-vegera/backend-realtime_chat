import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import axios from 'axios';

const PORT = process.env.PORT || 5050;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
  res.send('Hello guys how are you!')
})

app.post('/authenticate', async (req, res) => {
  const {name, password} = req.body;

  try {
    const result = await axios.put('https://api.chatengine.io/users/',
      {
        username: name,
        secret: password
      }, {
        headers: {'private-key': '9366f525-13cb-410d-93eb-5bd1ec7f99b5'}
      }
    )

    return res.status(result.status).json(result.data)
  } catch (error) {
    return res.status(error.status).json(error.data)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on: http://127.0.0.1:${PORT}`);
})