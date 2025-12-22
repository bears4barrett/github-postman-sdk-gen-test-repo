import { z } from 'zod';
import {
  AddANewPetToTheStoreRequestCategory,
  addANewPetToTheStoreRequestCategory,
  addANewPetToTheStoreRequestCategoryRequest,
  addANewPetToTheStoreRequestCategoryResponse,
} from './add-a-new-pet-to-the-store-request-category';
import {
  AddANewPetToTheStoreRequestTags,
  addANewPetToTheStoreRequestTags,
  addANewPetToTheStoreRequestTagsRequest,
  addANewPetToTheStoreRequestTagsResponse,
} from './add-a-new-pet-to-the-store-request-tags';

/**
 * Zod schema for the AddANewPetToTheStoreRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addANewPetToTheStoreRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    photoUrls: z.array(z.string()).optional().nullable(),
    id: z.number().optional().nullable(),
    category: addANewPetToTheStoreRequestCategory.optional().nullable(),
    tags: z.array(addANewPetToTheStoreRequestTags).optional().nullable(),
    status: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddANewPetToTheStoreRequest} addANewPetToTheStoreRequest
 * @property {string}
 * @property {string[]}
 * @property {number}
 * @property {AddANewPetToTheStoreRequestCategory}
 * @property {AddANewPetToTheStoreRequestTags[]}
 * @property {string}
 */
export type AddANewPetToTheStoreRequest = z.infer<typeof addANewPetToTheStoreRequest>;

/**
 * Zod schema for mapping API responses to the AddANewPetToTheStoreRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      photoUrls: z.array(z.string()).optional().nullable(),
      id: z.number().optional().nullable(),
      category: addANewPetToTheStoreRequestCategoryResponse.optional().nullable(),
      tags: z.array(addANewPetToTheStoreRequestTagsResponse).optional().nullable(),
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
 * Zod schema for mapping the AddANewPetToTheStoreRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addANewPetToTheStoreRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      photoUrls: z.array(z.string()).optional().nullable(),
      id: z.number().optional().nullable(),
      category: addANewPetToTheStoreRequestCategoryRequest.optional().nullable(),
      tags: z.array(addANewPetToTheStoreRequestTagsRequest).optional().nullable(),
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
