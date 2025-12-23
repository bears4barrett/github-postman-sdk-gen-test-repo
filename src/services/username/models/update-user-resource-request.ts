import { z } from 'zod';

/**
 * Zod schema for the UpdateUserResourceRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateUserResourceRequest = z.lazy(() => {
  return z.object({
    id: z.number().optional().nullable(),
    username: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    userStatus: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {UpdateUserResourceRequest} updateUserResourceRequest
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type UpdateUserResourceRequest = z.infer<typeof updateUserResourceRequest>;

/**
 * Zod schema for mapping API responses to the UpdateUserResourceRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUserResourceRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      username: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      phone: z.string().optional().nullable(),
      userStatus: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      email: data['email'],
      password: data['password'],
      phone: data['phone'],
      userStatus: data['userStatus'],
    }));
});

/**
 * Zod schema for mapping the UpdateUserResourceRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUserResourceRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional().nullable(),
      username: z.string().optional().nullable(),
      firstName: z.string().optional().nullable(),
      lastName: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      phone: z.string().optional().nullable(),
      userStatus: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      username: data['username'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      email: data['email'],
      password: data['password'],
      phone: data['phone'],
      userStatus: data['userStatus'],
    }));
});
