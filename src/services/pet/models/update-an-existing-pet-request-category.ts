import { z } from 'zod';

/**
 * Zod schema for the UpdateAnExistingPetRequestCategory model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateAnExistingPetRequestCategory = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateAnExistingPetRequestCategory} updateAnExistingPetRequestCategory
 * @property {number}
 * @property {string}
 */
export type UpdateAnExistingPetRequestCategory = z.infer<typeof updateAnExistingPetRequestCategory>;

/**
 * Zod schema for mapping API responses to the UpdateAnExistingPetRequestCategory application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAnExistingPetRequestCategoryResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the UpdateAnExistingPetRequestCategory application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAnExistingPetRequestCategoryRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
