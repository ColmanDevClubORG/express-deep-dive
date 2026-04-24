import { Request, Response } from 'express';
import { examples } from '../models/example.model';

export const getExamples = (req: Request, res: Response) => {
  res.json(examples);
};

export const getExampleById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const example = examples.find((ex) => ex.id === id);

  if (example) {
    res.json(example);
  } else {
    res.status(404).json({ message: 'Example not found' });
  }
};
