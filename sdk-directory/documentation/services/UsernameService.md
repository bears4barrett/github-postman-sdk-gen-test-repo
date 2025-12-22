# UsernameService

A list of all methods in the `UsernameService` service. Click on the method name to view detailed information about that method.

| Methods                                      | Description                                  |
| :------------------------------------------- | :------------------------------------------- |
| [getUserByUserName\_](#getuserbyusername_)   | Get user detail based on username.           |
| [updateUserResource\_](#updateuserresource_) | This can only be done by the logged in user. |
| [deleteUserResource\_](#deleteuserresource_) | This can only be done by the logged in user. |

## getUserByUserName\_

Get user detail based on username.

- HTTP Method: `GET`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| username | string | ✅       |             |
| accept   | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.username.getUserByUserName_('username', {
    accept: 'application/json',
  });

  console.log(data);
})();
```

## updateUserResource\_

This can only be done by the logged in user.

- HTTP Method: `PUT`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type                                                                | Required | Description       |
| :------- | :------------------------------------------------------------------ | :------- | :---------------- |
| body     | [UpdateUserResourceRequest](../models/UpdateUserResourceRequest.md) | ✅       | The request body. |
| username | string                                                              | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore, UpdateUserResourceRequest } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const updateUserResourceRequest: UpdateUserResourceRequest = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };

  const { data } = await swaggerPetstore.username.updateUserResource_(
    'username',
    updateUserResourceRequest,
  );

  console.log(data);
})();
```

## deleteUserResource\_

This can only be done by the logged in user.

- HTTP Method: `DELETE`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| username | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.username.deleteUserResource_('username');

  console.log(data);
})();
```
