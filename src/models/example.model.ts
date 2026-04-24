export interface Example {
  id: number;
  name: string;
  description: string;
  timestamp: string;
}

export const examples: Example[] = [
  {
    id: 1,
    name: 'Example Item',
    description: 'This is a mock model object',
    timestamp: new Date().toISOString(),
  },
];
