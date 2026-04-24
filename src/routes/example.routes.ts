import { Router } from 'express';
import { getExamples, getExampleById } from '../controllers/example.controller';

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
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   timestamp:
 *                     type: string
 */
router.get('/', getExamples);

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
 *         description: The example ID
 *     responses:
 *       200:
 *         description: A single example.
 *       404:
 *         description: Example not found.
 */
router.get('/:id', getExampleById);

export default router;
