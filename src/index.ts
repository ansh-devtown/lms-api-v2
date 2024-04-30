import express, { Request, Response } from 'express';
import ConnectDB from '@/config/connection';

const app = express();
const port = 3000;

ConnectDB();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
