# OrderService

A list of all methods in the `OrderService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                     |
| :---------------------------------------------------- | :------------------------------ |
| [place_an_order_for_a_pet](#place_an_order_for_a_pet) | Place a new order in the store. |

## place_an_order_for_a_pet

Place a new order in the store.

- HTTP Method: `POST`
- Endpoint: `/store/order`

**Parameters**

| Name         | Type                                                                  | Required | Description       |
| :----------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| request_body | [PlaceAnOrderForAPetRequest](../models/PlaceAnOrderForAPetRequest.md) | ✅       | The request body. |
| accept       | str                                                                   | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment
from swagger_petstore.models import PlaceAnOrderForAPetRequest

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = PlaceAnOrderForAPetRequest(
    id_=10,
    pet_id=198772,
    quantity=7,
    ship_date="1946-11-30T04:39:04.949Z",
    status="approved",
    complete=True
)

result = sdk.order.place_an_order_for_a_pet(
    request_body=request_body,
    accept="application/json"
)

print(result)
```
