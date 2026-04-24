import { Request, Response, NextFunction } from 'express';
import { examples } from '../models/example.model';
import { AppError } from '../utils/AppError';

export const getExamples = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(examples);
  } catch (error) {
    next(error);
  }
};

export const getExampleById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id as string);
    const example = examples.find((ex) => ex.id === id);

    if (!example) {
      throw new AppError('Example not found', 404);
    }

    res.json(example);
  } catch (error) {
    next(error);
  }
};
