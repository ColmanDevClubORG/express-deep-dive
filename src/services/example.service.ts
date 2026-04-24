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

const create = (data: { name: string; description: string }): Example => {
  const newExample: Example = {
    id: examples.length + 1,
    ...data,
    timestamp: new Date().toISOString(),
  };
  examples.push(newExample);
  return newExample;
};

export const exampleService = {
  getAll,
  getById,
  create,
};
