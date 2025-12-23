# CreateWithListService

A list of all methods in the `CreateWithListService` service. Click on the method name to view detailed information about that method.

| Methods                                                                            | Description                                   |
| :--------------------------------------------------------------------------------- | :-------------------------------------------- |
| [createsListOfUsersWithGivenInputArray\_](#createslistofuserswithgiveninputarray_) | Creates list of users with given input array. |

## createsListOfUsersWithGivenInputArray\_

Creates list of users with given input array.

- HTTP Method: `POST`
- Endpoint: `/user/createWithList`

**Parameters**

| Name   | Type                                                                                                        | Required | Description       |
| :----- | :---------------------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body   | [CreatesListOfUsersWithGivenInputArrayRequest[]](../models/CreatesListOfUsersWithGivenInputArrayRequest.md) | ✅       | The request body. |
| accept | string                                                                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.createWithList.createsListOfUsersWithGivenInputArray_([], {
    accept: 'application/json',
  });

  console.log(data);
})();
```
