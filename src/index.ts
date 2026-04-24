import express, { Request, Response } from 'express';
import exampleRoutes from './routes/example.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Refactored Express TypeScript API!',
    architecture: 'MVP (Model-Controller-Routes)',
  });
});

app.use('/api/examples', exampleRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
