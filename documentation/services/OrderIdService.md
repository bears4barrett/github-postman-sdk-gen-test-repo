# OrderIdService

A list of all methods in the `OrderIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                                     | Description                                                                                                          |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [find_purchase_order_by_id](#find_purchase_order_by_id)                     | For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.                 |
| [delete_purchase_order_by_identifier](#delete_purchase_order_by_identifier) | For valid response try integer IDs with value \< 1000. Anything above 1000 or non-integers will generate API errors. |

## find_purchase_order_by_id

For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.

- HTTP Method: `GET`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name     | Type | Required | Description |
| :------- | :--- | :------- | :---------- |
| order_id | str  | ✅       |             |
| accept   | str  | ✅       |             |

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

result = sdk.order_id.find_purchase_order_by_id(
    order_id="orderId",
    accept="application/json"
)

print(result)
```

## delete_purchase_order_by_identifier

For valid response try integer IDs with value \< 1000. Anything above 1000 or non-integers will generate API errors.

- HTTP Method: `DELETE`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name     | Type | Required | Description |
| :------- | :--- | :------- | :---------- |
| order_id | str  | ✅       |             |

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

result = sdk.order_id.delete_purchase_order_by_identifier(order_id="orderId")

print(result)
```
