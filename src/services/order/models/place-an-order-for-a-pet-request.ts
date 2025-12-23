import { z } from 'zod';

/**
 * Zod schema for the PlaceAnOrderForAPetRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const placeAnOrderForAPetRequest = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    petId: z.number().optional().nullable(),
    quantity: z.number().optional().nullable(),
    shipDate: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    complete: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {PlaceAnOrderForAPetRequest} placeAnOrderForAPetRequest
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {boolean}
 */
export type PlaceAnOrderForAPetRequest = z.infer<typeof placeAnOrderForAPetRequest>;

/**
 * Zod schema for mapping API responses to the PlaceAnOrderForAPetRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const placeAnOrderForAPetRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      petId: z.number().optional().nullable(),
      quantity: z.number().optional().nullable(),
      shipDate: z.string().optional().nullable(),
      status: z.string().optional().nullable(),
      complete: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      petId: data['petId'],
      quantity: data['quantity'],
      shipDate: data['shipDate'],
      status: data['status'],
      complete: data['complete'],
    }));
});

/**
 * Zod schema for mapping the PlaceAnOrderForAPetRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const placeAnOrderForAPetRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      petId: z.number().optional().nullable(),
      quantity: z.number().optional().nullable(),
      shipDate: z.string().optional().nullable(),
      status: z.string().optional().nullable(),
      complete: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      petId: data['petId'],
      quantity: data['quantity'],
      shipDate: data['shipDate'],
      status: data['status'],
      complete: data['complete'],
    }));
});
