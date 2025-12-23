import { z } from 'zod';
import {
  UpdateAnExistingPetRequestCategory,
  updateAnExistingPetRequestCategory,
  updateAnExistingPetRequestCategoryRequest,
  updateAnExistingPetRequestCategoryResponse,
} from './update-an-existing-pet-request-category';
import {
  UpdateAnExistingPetRequestTags,
  updateAnExistingPetRequestTags,
  updateAnExistingPetRequestTagsRequest,
  updateAnExistingPetRequestTagsResponse,
} from './update-an-existing-pet-request-tags';

/**
 * Zod schema for the UpdateAnExistingPetRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateAnExistingPetRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    photoUrls: z.array(z.string()).optional().nullable(),
    id: z.number().optional().nullable(),
    category: updateAnExistingPetRequestCategory.optional().nullable(),
    tags: z.array(updateAnExistingPetRequestTags).optional().nullable(),
    status: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateAnExistingPetRequest} updateAnExistingPetRequest
 * @property {string}
 * @property {string[]}
 * @property {number}
 * @property {UpdateAnExistingPetRequestCategory}
 * @property {UpdateAnExistingPetRequestTags[]}
 * @property {string}
 */
export type UpdateAnExistingPetRequest = z.infer<typeof updateAnExistingPetRequest>;

/**
 * Zod schema for mapping API responses to the UpdateAnExistingPetRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAnExistingPetRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      photoUrls: z.array(z.string()).optional().nullable(),
      id: z.number().optional().nullable(),
      category: updateAnExistingPetRequestCategoryResponse.optional().nullable(),
      tags: z.array(updateAnExistingPetRequestTagsResponse).optional().nullable(),
      status: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      photoUrls: data['photoUrls'],
      id: data['id'],
      category: data['category'],
      tags: data['tags'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the UpdateAnExistingPetRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateAnExistingPetRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      photoUrls: z.array(z.string()).optional().nullable(),
      id: z.number().optional().nullable(),
      category: updateAnExistingPetRequestCategoryRequest.optional().nullable(),
      tags: z.array(updateAnExistingPetRequestTagsRequest).optional().nullable(),
      status: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      photoUrls: data['photoUrls'],
      id: data['id'],
      category: data['category'],
      tags: data['tags'],
      status: data['status'],
    }));
});
