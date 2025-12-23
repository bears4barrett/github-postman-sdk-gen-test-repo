# FindByTagsService

A list of all methods in the `FindByTagsService` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                                                   |
| :---------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [finds_pets_by_tags](#finds_pets_by_tags) | Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. |

## finds_pets_by_tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

- HTTP Method: `GET`
- Endpoint: `/pet/findByTags`

**Parameters**

| Name   | Type | Required | Description                  |
| :----- | :--- | :------- | :--------------------------- |
| accept | str  | ✅       |                              |
| tags   | str  | ❌       | (Required) Tags to filter by |

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

result = sdk.find_by_tags.finds_pets_by_tags(
    accept="application/json",
    tags="nulla"
)

print(result)
```
