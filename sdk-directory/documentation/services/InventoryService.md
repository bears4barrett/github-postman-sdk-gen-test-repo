# InventoryService

A list of all methods in the `InventoryService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                                  |
| :---------------------------------------------------------------------- | :------------------------------------------- |
| [returns_pet_inventories_by_status](#returns_pet_inventories_by_status) | Returns a map of status codes to quantities. |

## returns_pet_inventories_by_status

Returns a map of status codes to quantities.

- HTTP Method: `GET`
- Endpoint: `/store/inventory`

**Parameters**

| Name   | Type | Required | Description |
| :----- | :--- | :------- | :---------- |
| accept | str  | ✅       |             |

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

result = sdk.inventory.returns_pet_inventories_by_status(accept="application/json")

print(result)
```
