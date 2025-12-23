# FindByStatusService

A list of all methods in the `FindByStatusService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                          |
| :-------------------------------------------- | :------------------------------------------------------------------- |
| [finds_pets_by_status](#finds_pets_by_status) | Multiple status values can be provided with comma separated strings. |

## finds_pets_by_status

Multiple status values can be provided with comma separated strings.

- HTTP Method: `GET`
- Endpoint: `/pet/findByStatus`

**Parameters**

| Name   | Type | Required | Description                                                    |
| :----- | :--- | :------- | :------------------------------------------------------------- |
| accept | str  | ✅       |                                                                |
| status | str  | ❌       | (Required) Status values that need to be considered for filter |

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

result = sdk.find_by_status.finds_pets_by_status(
    accept="application/json",
    status="available"
)

print(result)
```
