# FindByTagsService

A list of all methods in the `FindByTagsService` service. Click on the method name to view detailed information about that method.

| Methods                                | Description                                                                                   |
| :------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [findsPetsByTags\_](#findspetsbytags_) | Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. |

## findsPetsByTags\_

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

- HTTP Method: `GET`
- Endpoint: `/pet/findByTags`

**Parameters**

| Name   | Type   | Required | Description                  |
| :----- | :----- | :------- | :--------------------------- |
| accept | string | ✅       |                              |
| tags   | string | ❌       | (Required) Tags to filter by |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.findByTags.findsPetsByTags_({
    tags: 'nulla',
    accept: 'application/json',
  });

  console.log(data);
})();
```
