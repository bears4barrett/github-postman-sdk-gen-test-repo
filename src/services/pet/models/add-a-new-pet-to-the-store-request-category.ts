import { z } from 'zod';

/**
 * Zod schema for the AddANewPetToTheStoreRequestCategory model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addANewPetToTheStoreRequestCategory = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddANewPetToTheStoreRequestCategory} addANewPetToTheStoreRequestCategory
 * @property {number}
 * @property {string}
 */
export type AddANewPetToTheStoreRequestCategory = z.infer<
  typeof addANewPetToTheStoreRequestCategory
>;

/**
 * Zod schema for mapping API responses to the AddANewPetToTheStoreRequestCategory application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestCategoryResponse = z.lazy(() => {
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
 * Zod schema for mapping the AddANewPetToTheStoreRequestCategory application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestCategoryRequest = z.lazy(() => {
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
