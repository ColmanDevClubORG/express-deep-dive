import { examples, Example } from '../models/example.model';
import { AppError } from '../utils/AppError';

const getAll = (): Example[] => {
  return examples;
};

const getById = (id: number): Example => {
  const example = examples.find((ex) => ex.id === id);
  if (!example) {
    throw new AppError('Example not found', 404);
  }
  return example;
};

export const exampleService = {
  getAll,
  getById,
};
