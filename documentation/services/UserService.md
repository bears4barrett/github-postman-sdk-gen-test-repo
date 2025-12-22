# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                      | Description                                  |
| :--------------------------- | :------------------------------------------- |
| [createUser\_](#createuser_) | This can only be done by the logged in user. |

## createUser\_

This can only be done by the logged in user.

- HTTP Method: `POST`
- Endpoint: `/user`

**Parameters**

| Name   | Type                                                | Required | Description       |
| :----- | :-------------------------------------------------- | :------- | :---------------- |
| body   | [CreateUserRequest](../models/CreateUserRequest.md) | ✅       | The request body. |
| accept | string                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateUserRequest, SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const createUserRequest: CreateUserRequest = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };

  const { data } = await swaggerPetstore.user.createUser_(createUserRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
