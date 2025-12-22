import { z } from 'zod';

/**
 * Zod schema for the AddANewPetToTheStoreRequestTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addANewPetToTheStoreRequestTags = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddANewPetToTheStoreRequestTags} addANewPetToTheStoreRequestTags
 * @property {number}
 * @property {string}
 */
export type AddANewPetToTheStoreRequestTags = z.infer<typeof addANewPetToTheStoreRequestTags>;

/**
 * Zod schema for mapping API responses to the AddANewPetToTheStoreRequestTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestTagsResponse = z.lazy(() => {
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
 * Zod schema for mapping the AddANewPetToTheStoreRequestTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestTagsRequest = z.lazy(() => {
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
