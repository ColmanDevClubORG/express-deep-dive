import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Express TypeScript API!',
    status: 'success',
  });
});

app.get('/api/example', (req: Request, res: Response) => {
  res.json({
    id: 1,
    name: 'Example Route',
    description: 'This is a simple route using TypeScript',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
