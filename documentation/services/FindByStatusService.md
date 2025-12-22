# FindByStatusService

A list of all methods in the `FindByStatusService` service. Click on the method name to view detailed information about that method.

| Methods                                    | Description                                                          |
| :----------------------------------------- | :------------------------------------------------------------------- |
| [findsPetsByStatus\_](#findspetsbystatus_) | Multiple status values can be provided with comma separated strings. |

## findsPetsByStatus\_

Multiple status values can be provided with comma separated strings.

- HTTP Method: `GET`
- Endpoint: `/pet/findByStatus`

**Parameters**

| Name   | Type   | Required | Description                                                    |
| :----- | :----- | :------- | :------------------------------------------------------------- |
| accept | string | ✅       |                                                                |
| status | string | ❌       | (Required) Status values that need to be considered for filter |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.findByStatus.findsPetsByStatus_({
    status: 'available',
    accept: 'application/json',
  });

  console.log(data);
})();
```
