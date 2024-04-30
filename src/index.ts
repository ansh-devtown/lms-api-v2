import express, { Request, Response } from 'express';
import ConnectDB from '@/config/connection';
import User from '@/models/user';

const app = express();
const port = 3000;

ConnectDB();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  await User.create({ name: "ansh jamwal", email: "ansh.jamwal@devtown.in" });
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
