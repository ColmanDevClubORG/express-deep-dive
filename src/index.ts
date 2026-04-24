import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger';
import exampleRoutes from './routes/example.routes';

import { loggerMiddleware } from './middlewares/logger.middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Refactored Express TypeScript API!',
    architecture: 'MVP (Model-Controller-Routes)',
    docs: 'http://localhost:3000/api-docs',
  });
});

app.use('/api/examples', exampleRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(
    `[server]: Swagger docs available at http://localhost:${port}/api-docs`,
  );
});
