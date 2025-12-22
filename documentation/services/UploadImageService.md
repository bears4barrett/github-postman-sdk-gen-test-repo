# UploadImageService

A list of all methods in the `UploadImageService` service. Click on the method name to view detailed information about that method.

| Methods                              | Description              |
| :----------------------------------- | :----------------------- |
| [uploadsAnImage\_](#uploadsanimage_) | Upload image of the pet. |

## uploadsAnImage\_

Upload image of the pet.

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}/uploadImage`

**Parameters**

| Name               | Type        | Required | Description         |
| :----------------- | :---------- | :------- | :------------------ |
| body               | ArrayBuffer | ✅       | The request body.   |
| petId              | string      | ✅       |                     |
| accept             | string      | ✅       |                     |
| additionalMetadata | string      | ❌       | Additional Metadata |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.uploadImage.uploadsAnImage_('petId', new ArrayBuffer(0), {
    additionalMetadata: 'ea in enim',
    accept: 'application/json',
  });

  console.log(data);
})();
```
