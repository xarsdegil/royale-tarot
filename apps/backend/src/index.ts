import express from 'express';
import cors from 'cors';
import cr from './routes/cr.js';

const app = express();
app.use(cors());
app.use('/cr', cr);

app.listen(3001, () => {
  console.log('API server running on 3001');
});
