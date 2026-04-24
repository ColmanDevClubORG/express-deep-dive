import { Router } from 'express';
import {
  getExamples,
  getExampleById,
  createExample,
} from '../controllers/example.controller';
import { validate } from '../middlewares/validate.middleware';
import {
  getExampleSchema,
  createExampleSchema,
} from '../validations/example.validation';

const router = Router();

/**
 * @swagger
 * /api/examples:
 *   get:
 *     summary: Retrieve a list of examples
 *     responses:
 *       200:
 *         description: A list of examples.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Example'
 *   post:
 *     summary: Create a new example
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateExampleInput'
 *     responses:
 *       201:
 *         description: Created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', getExamples);
router.post('/', validate(createExampleSchema), createExample);

/**
 * @swagger
 * /api/examples/{id}:
 *   get:
 *     summary: Retrieve a single example by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single example.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: Example not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:id', validate(getExampleSchema), getExampleById);

export default router;
