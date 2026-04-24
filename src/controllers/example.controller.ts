import { Request, Response, NextFunction } from 'express';
import { exampleService } from '../services/example.service';

export const getExamples = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const examples = exampleService.getAll();
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
    const example = exampleService.getById(id);
    res.json(example);
  } catch (error) {
    next(error);
  }
};
