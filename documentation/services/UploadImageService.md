# UploadImageService

A list of all methods in the `UploadImageService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description              |
| :------------------------------------ | :----------------------- |
| [uploads_an_image](#uploads_an_image) | Upload image of the pet. |

## uploads_an_image

Upload image of the pet.

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}/uploadImage`

**Parameters**

| Name                | Type  | Required | Description         |
| :------------------ | :---- | :------- | :------------------ |
| request_body        | bytes | ✅       | The request body.   |
| pet_id              | str   | ✅       |                     |
| accept              | str   | ✅       |                     |
| additional_metadata | str   | ❌       | Additional Metadata |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

with open("file.ext", "rb") as f:
    request_body = f.read()

result = sdk.upload_image.uploads_an_image(
    request_body=request_body,
    pet_id="petId",
    accept="application/json",
    additional_metadata="ea in enim"
)

print(result)
```
