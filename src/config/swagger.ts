import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express TypeScript API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Example: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            id: {
              type: 'integer',
              description: 'The auto-generated id of the example',
            },
            name: {
              type: 'string',
              description: 'The name of the example',
            },
            description: {
              type: 'string',
              description: 'Detailed description',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              description: 'The time the record was created',
            },
          },
        },
        CreateExampleInput: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            name: {
              type: 'string',
              minLength: 3,
            },
            description: {
              type: 'string',
              minLength: 10,
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'error',
            },
            message: {
              type: 'string',
              example: 'Detailed error message here',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

export const specs = swaggerJsdoc(options);
