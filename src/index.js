import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import axios from 'axios';

const PORT = process.env.PORT || 5050;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/authenticate', async (req, res) => {
  const {name} = req.body;

  try {
    const result = await axios.put('https://api.chatengine.io/users/',
      {
        username: name,
        secret: name
      }, {
        headers: {'private-key': '55cd714e-93d5-4032-89bb-53bb79fdb20a'}
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